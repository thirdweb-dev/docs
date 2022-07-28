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

## Connecting the user's wallet

Inside the [homepage](https://github.com/thirdweb-example/nft-gated-website/blob/main/pages/index.js)
we are wrapping our application in the `ThirdwebProvider` so that we can use all of the React SDKs hooks anywhere in our application.

This allows us to easily use hooks such as [`useMetamask`](https://portal.thirdweb.com/react/react.usemetamask) on the [`index.js`](https://github.com/thirdweb-example/nft-gated-website/blob/main/pages/index.js) page to connect the user's wallet. Once the user is connected, we can access their wallet address with the [`useAddress`](https://portal.thirdweb.com/react/react.useaddress) hook.

```jsx title="index.js"
// allow user to connect to app with metamask, and obtain address
const address = useAddress();
const connectWithMetamask = useMetamask();
```

We first return a page for users to connect their wallets if they haven't already.

```jsx title="index.js"
<button onClick={connectWithMetamask}>Connect Wallet</button>
```

## Requesting Restricted Content

Once the user has connected their MetaMask wallet, we show them a different button:

```jsx title="index.js"
<button onClick={() => requestAuthenticatedContent()}>Request Content</button>
```

When the user clicks the `Request Access` button, they are prompted to sign a message on the client-side, which uses the SDK to generate a login payload.

```jsx title="index.js"
// Generate a signed login payload for the connected wallet to authenticate with
const loginPayload = await sdk.auth.login(domain);
```

### Request Restricted Content

This payload is sent in the `body` of a `fetch` request for restricted data on our API route on the server-side.

```jsx title="index.js"
// Make api request to server and send the login payload in the body
const response = await fetch(`/api/get-restricted-content`, {
  method: "POST",
  body: JSON.stringify({
    loginPayload,
  }),
});
```

### Verify User On the Server

On the server-side, we verify that the user is who they claim to be, and exit if this login payload is not valid. This proves that the user making this request owns the wallet.

This logic runs on an API route called [get-restricted-content](https://github.com/thirdweb-example/nft-gated-website/blob/main/pages/api/get-restricted-content.js).

```jsx title="api/get-restricted-content.js"
// Get the login payload that we sent with the request
const { loginPayload } = JSON.parse(req.body);

const sdk = new ThirdwebSDK("mumbai");
const domain = "thirdweb.com";

// Use that login payload to verify the user
const verified = sdk.auth.verify(domain, loginPayload);

if (!verified) {
  res.status(401).json({ error: "Unauthorized" });
}
```

Now we can check if that wallet that made this request has at least one NFT from our collection:

```jsx title="api/get-restricted-content.js"
// Now check if the user meets the criteria to see this content
// (e.g. they own an NFT from the collection)
const editionDrop = sdk.getEditionDrop(
  "0x1fCbA150F05Bbe1C9D21d3ab08E35D682a4c41bF", // replace this with your contract address
);

// Get addresses' balance of token ID 0
const balance = await editionDrop.balanceOf(loginPayload.payload.address, 0);
```

And return the content if the user has an NFT:

```jsx title="api/get-restricted-content.js"
if (balance > 0) {
  // If the user is verified and has an NFT, return the content
  res.status(200).json({
    message: "This is the restricted content",
  });
} else {
  // If the user is verified but doesn't have an NFT, return a message
  res.status(200).json({
    message: "You don't have an NFT",
  });
}
```

## Claiming an NFT

If the user has not already claimed an NFT, they can click a button to claim one!

```jsx title="index.js"
// Hook to claim NFTs from the NFT drop (to allow users to claim and *then* view the restricted content)
const { mutate: claimNft, isLoading: isClaiming } =
  useClaimNFT(editionDropContract);

// ...

<button
  className={styles.secondaryButton}
  onClick={() => {
    if (networkMismatch) {
      switchNetwork(ChainId.Mumbai);
      return;
    }
    claimNft({
      quantity: 1,
      tokenId: 0,
      to: address,
    });
  }}
>
  {!isClaiming ? " Claim An NFT" : "Claiming..."}
</button>;
```
