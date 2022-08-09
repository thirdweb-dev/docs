---
slug: /templates/token-gated-membership/exploring-the-example-repo
---

# Exploring the Example Repo

In this section, we'll explain the key elements of the example repository.

We'll explore how we use the SDK to:

- Connect the user's wallet to the site using [MetaMask](/react/react.usemetamask)
- Verify the user owns the wallet by asking them to sign a message using [Auth](/building-web3-apps/authenticating-users)
- Check if the user [has an NFT](https://portal.thirdweb.com/pre-built-contracts/edition-drop#amount-of-tokens-owned-by-a-specific-wallet) from our smart contract
- Allow them to [claim](/react/react.useclaimnft) a new NFT from our smart contract

## Restricting Access to the Homepage

When the user tries to visit the homepage `/`, we check on the server-side to see if they have an authenticated token:

```jsx title="index.js"
// This gets called on every request
export async function getServerSideProps(context) {
  // Check to see if they have an authentication cookie
  const parsedCookies = cookie?.parse(context?.req?.headers?.cookie || "");
  const authToken = parsedCookies?.["access_token"];

  // if there is no auth token, redirect them to the login page
  if (!authToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // ...
}
```

If they don't, we redirect them to the login page.
However, if they are authenticated, we then also check to see if they hold an NFT from our collection, and redirect them
to the login page if they don't.

```jsx title="index.js"
// Ensure we are able to generate an auth token using our private key instantiated SDK
const PRIVATE_KEY = process.env.PRIVATE_KEY;
if (!PRIVATE_KEY) {
  throw new Error("You need to add an PRIVATE_KEY environment variable.");
}

// Instantiate our SDK
const sdk = ThirdwebSDK.fromPrivateKey(PRIVATE_KEY, "mumbai");

// Authenticate token with the SDK
const domain = domainName;
const address = await sdk.auth.authenticate(domain, authToken);

// If the auth token is invalid, redirect them to the login page
if (!address) {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}

const hasNft = await checkBalance(sdk, address);

// If they don't have an NFT, redirect them to the login page
if (!hasNft) {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}

// Finally, return the props
return {
  props: {},
};
```

Here, the `checkBalance` function is a helper function that we use to check if the user has an NFT from our collection.

```jsx title="checkBalance.js"
import { contractAddress } from "../const/yourDetails";

export default async function checkBalance(sdk, address) {
  const editionDrop = sdk.getEditionDrop(
    contractAddress, // replace this with your contract address
  );

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
```

## The Login Page

On the `/login` route, we have a button that users can press to call the `signIn` function:

```jsx title="login.js"
// Function to make a request to our /api/login route to check if we own an NFT.
async function signIn() {
  // Add the domain of the application users will login to, this will be used throughout the login process
  const domain = domainName;
  // Generate a signed login payload for the connected wallet to authenticate with
  const payload = await sdk.auth.login(domain);

  // Make api request to server with the login payload as a query param
  window.location = `/api/login?payload=${JSON.stringify(payload)}`;
}
```

This function takes them to our API route, where we:

- Verify the login payload they sent us from the `sdk.auth.login` function is valid:

```jsx title="api/login.js"
const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

// Get signed login payload from the frontend
const payload = JSON.parse(req.query.payload);

const domain = "example.org";
// Verify the token and get the address, so we can check their NFT balance
const address = sdk.auth.verify(domain, payload);
```

- Check their balance using the `checkBalance` helper function we made

```jsx title="api/login.js"
const hasNft = await checkBalance(sdk, address);
```

- If they do have an NFT, generate an **auth token** for them and set it as a cookie

```jsx title="api/login.js"
const hasNft = await checkBalance(sdk, address);

if (!hasNft) {
  return res.status(401).json({
    error: "You don't own an NFT and cannot access this page.",
  });
}

// At this point, the user has authenticated and owns at least 1 NFT.
// Generate an auth token for them
const token = await sdk.auth.generateAuthToken(domain, payload);

// Securely set httpOnly cookie on request to prevent XSS on frontend
// And set path to / to enable access_token usage on all endpoints
res.setHeader(
  "Set-Cookie",
  serialize("access_token", token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  }),
);
```

- Redirect them to the homepage (or show them an error screen if they don't have an NFT)

```jsx
return res.redirect("/", 302);
```
