---
authors: jarrod
tags: [edition, react, signature, mint, next.js]
image: "./thumbnail.png"
date: "2022-07-22"
---

import QuickstartCard from "../../src/components/QuickstartCard";

# Create A Discord Bot That Gives NFT Holders A Role

In this guide, we'll set up a Discord bot that checks if a wallet has an NFT from a collection, and grants them a special role on our Discord server if they do!

<!-- truncate -->

Similar to [Collab.Land](https://collab.land/), we'll ask the user to sign in with their wallet as well as their Discord account on our web application, and ask a bot we create to grant them a role on our server using the Discord API running on a Next.js API route.

Before we begin, below are some helpful resources for you to learn more about the parts of the SDK we'll be using.

<div className="row" style={{marginBottom:24}}>

<div className="col col--6" style={{ marginTop: 8 }}>
  <QuickstartCard
    name="View Project Source Code"
    link="https://github.com/thirdweb-example/discord-role-granter"
    image="/assets/icons/general.png"
  />
</div>

<div className="col col--6" style={{ marginTop: 8 }}>
  <QuickstartCard
    name="Authentication Docs"
    link="/building-web3-apps/authenticating-users"
    image="/assets/icons/general.png"
  />
</div>

</div>

Let's do it!

## Creating a thirdweb app

To get started, we can use the [thirdweb CLI](https://portal.thirdweb.com/cli)

```bash
npx thirdweb create
```

We'll be using TypeScript and Next.js for this guide; so give your app a name and select **Next.js** for the framework, and **TypeScript** for the language.

For this guide, we'll assume you already have a Discord server created and a role set up in the server. If you don't have one, go ahead and create one now and come back to this guide, because next up, we'll create a bot and invite it to our server!

## Creating A Discord Bot

To create a Discord bot, head to the [Discord Developer Portal](https://discord.com/developers/applications) and click on `New Application`, give it a name and click `create`!

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378066493/uTAi0N7I-.png)

Once it's created, head to the `Bot` tab, and click `Add Bot`.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378135064/eGNkkLpf3.png)

Give your bot a username, and I'm unchecking the `Public Bot` field so that only we can invite our bot.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378382494/i5srin_Du.png)

Scroll down to `Bot Permissions` and give our bot the `Manage Roles` permission:

:::warning Bot Permissions

It's important to note that you should only give your bot the roles it requires. If your bot token is compromised, other users can perform any actions you have permitted it to do.

:::

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378279649/0SCOzdku8.png)

Once you're ready, click `Save Changes`!

Now we're ready to invite our bot to our server!

Click `OAuth2` > `URL Generator` on the sidebar:

Select `bot` and `Manage Roles` scopes.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378764505/Q6hmuH8Ml.png)

Copy the Generated URL and open it in your browser.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378817253/bzEMllDkE.png)

Make sure it is the bot you expect, select the server you want to add your bot to and click `Continue`. It will ask you to approve this bot's permissions, you should see a prompt to authorize the bot for `Manage Roles` permissions:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378873543/clVZw5YdI.png)

Click `Authorise`, once successful, you'll see an `Authorised` window

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378937976/yuvDcAWEG.png)

And your bot will be added to your server - say hi!

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658378948085/jchIC5F1o.png)

## Authenticating Users

To authenticate users with Discord, we'll be using the library `[NextAuth](https://next-auth.js.org/)

Create a new folder inside of `pages` called `api`, and within that, create another folder called `auth`, and within this `auth` folder, create a file called `[...nextauth].ts`!

```bash
yarn add next-auth
```

This is where we'll configure our NextAuth setup and allow people to sign in to our application using Discord.

Back in your Discord Developer Portal, copy across your `Client ID` and `Client Secret` into environment variables in your project, by creating a `.env.local` file at the root of the directory.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658380648801/1rp4zc2-a.png)

```text
CLIENT_ID=xxxxx
CLIENT_SECRET=xxxxx
```

We also need to add a Redirect URL into our Application while we're here:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658443956419/84fGElQk0.png)

Now let's make our `[...nextauth]` API route look like this:

```ts
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],

  // When the user signs in, get their token
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.userId = account.providerAccountId;
      }
      return token;
    },

    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.userId = token.userId;
      return session;
    },
  },
});
```

You might notice we have some modifications to the data that gets returned inside these callbacks. We're doing this to add the user's ID into the token that gets returned by NextAuth, because we want to access that value when we try and grant this user the role (we'll need their ID).

To access NextAuth's hooks such as `signIn`, we need to wrap our application in the `SessionProvider`:

```jsx
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
```

Now we're ready for users to authenticate to our application using Discord!

Let's create a folder called `components` and create a `SignIn.tsx` component within that folder. This component will ask the user to both:

1. Sign In With Their Wallet
2. Authenticate With Discord

In this component, three states can occur:

1. The user is connected to both `wallet` and `Discord` => We show them the main page.
2. The user is not connected to `wallet` => We ask them to connect their wallet.
3. The user is not connected to `Discord`=> We ask them to authenticate with Discord.

Once the user is in state `1`, (has both wallet connected and Discord connected), we can show them a button that will run some code on our server to check if they own an NFT. If they do own the NFT, our Discord bot will assign them a role in our Discord server!

Let's write the code for these three states:

**Imports and hook definitions**

```jsx
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import styles from "../styles/Home.module.css";

export default function SignIn() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const { data: session } = useSession();

  // rest of the code here
}
```

**State 1 - Both Wallet + Discord Connected**

```jsx
// 1. The user is signed into discord and connected to wallet.
if (session && address) {
  return (
    <div className={styles.bigSpacerTop}>
      <a onClick={() => signOut()} className={styles.secondaryButton}>
        Sign out of Discord
      </a>
      |<a onClick={() => disconnectWallet()} className={styles.secondaryButton}>
        Disconnect wallet
      </a>
    </div>
  );
}
```

**State 2 - Connect Wallet**

```jsx
// 2. Connect Wallet
if (!address) {
  return (
    <div className={styles.main}>
      <h2 className={styles.noGapBottom}>Connect Your Wallet</h2>
      <p>Connect your wallet to check eligibility.</p>
      <button
        onClick={connectWithMetamask}
        className={`${styles.mainButton} ${styles.spacerTop}`}
      >
        Connect Wallet
      </button>
    </div>
  );
}
```

**State 3 - Connect Discord**

```jsx
// 3. Connect with Discord (OAuth)
if (!session) {
  return (
    <div className={`${styles.main}`}>
      <h2 className={styles.noGapBottom}>Sign In with Discord</h2>
      <p>Sign In with Discord to check your eligibility for the NFT!</p>

      <button
        onClick={() => signIn("discord")}
        className={`${styles.mainButton} ${styles.spacerTop}`}
      >
        Connect Discord
      </button>
    </div>
  );
}

// default return nothing
return null;
```

Back on our home page, let's change the logic to show the user the `SignIn` component when we can't find both an `address` and `session`:

```jsx
// index.tsx
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import SignIn from "../components/SignIn";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const { data: session } = useSession();
  const sdk = useSDK();

  return (
    <div>
      <div className={styles.container} style={{ marginTop: 0 }}>
        <SignIn />

        {address && session && (
          <div className={styles.collectionContainer}>
            <button className={styles.mainButton}>Give me the role!</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
```

We now have a page that prompts the user to connect their wallet, and then Sign In With Discord:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658444991246/-4ul2aaax.png)

When you click the `Connect Discord` button, NextAuth handles the OAuth flow for us:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658445042195/hunL0jqm8.png)

Once the user has connected both their wallet and Discord, we show them a button that says `Give me the role!`, we'll add some functionality to this button next!

## Granting Discord Roles

To grant a role to the connected user, we are going to use the Discord API on behalf of the bot that we created. Specifically, we'll be hitting the `Add Guild Member Role` API endpoint:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658455468735/Pe6SJyvls.png)

To make requests from our bot, we'll need a token to act on its behalf. To generate a token, head to the `Bot` tab from your Discord Developer portal, and click `Reset Token` on your bot:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658455558002/Y1ZUud12k.png)

We then need to store this inside our environment variables as well securely:

```text
BOT_TOKEN=xxxx
```

Next, let's make another API route in our `api` folder called `grant-role.ts`.

Within this API route, we're going to grant a user the discord role _if_ they own an NFT from our collection. This involves a few steps:

1. Authenticate the login payload of the user (ensure the user owns the wallet)
2. Check that wallet's NFT balance
3. Make a request to the Discord API to grant a role

Firstly, let's set up the barebones of our API route:

```ts
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function grantRole(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Get the login payload out of the request
  const { loginPayload } = JSON.parse(req.body);

  // Get the NextAuth session so we can use the user ID as part of the discord API request
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: "Not logged in" });
    return;
  }
}
```

### Authenticate the login payload

On the client, we're going to ask the user to sign in using the [Authentication SDK](https://thirdweb.com/authentication). This requires the user to sign a message which generates a login payload; we'll be sending this in the body of the request.

```jsx
// Authenticate login payload
const sdk = new ThirdwebSDK("mumbai");
const domain = "thirdweb.com"; // This should be the domain name of your own website
// Verify the login payload is real and valid
const verifiedWalletAddress = sdk.auth.verify(domain, loginPayload);

// If the login payload is not valid, return an error
if (!verifiedWalletAddress) {
  res.status(401).json({ error: "Invalid login payload" });
  return;
}
```

This step ensures that the user owns the wallet that we are going to check. It prevents users from sending a wallet address that is not theirs to this API endpoint, and falsely granting them the role.

### Check the wallet's NFT balance

We use the SDK to view the balance of the wallet address for token ID `0` of our ERC1155 NFT collection.

```ts
// Check if this user owns an NFT
const editionDrop = sdk.getEditionDrop(
  "0x1fCbA150F05Bbe1C9D21d3ab08E35D682a4c41bF",
);

// Get addresses' balance of token ID 0
const balance = await editionDrop.balanceOf(verifiedWalletAddress, 0);
```

### Granting Users the role

Here, we make the request to the discord API to grant the user a role by using our bot token as the authorization header.

In order to do this, you'll need to create a role in your server, and copy both your `server` and `role` ID into the variables. You can learn how to do that from [this guide](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

```ts
if (balance.toNumber() > 0) {
  // If the user is verified and has an NFT, return the content

  // Make a request to the Discord API to get the servers this user is a part of
  const discordServerId = "999533680663998485";
  const { userId } = session;
  const roleId = "999851736028172298";
  const response = await fetch(
    // Discord Developer Docs for this API Request: https://discord.com/developers/docs/resources/guild#add-guild-member-role
    `https://discordapp.com/api/guilds/${discordServerId}/members/${userId}/roles/${roleId}`,
    {
      headers: {
        // Use the bot token to grant the role
        Authorization: `Bot ${process.env.BOT_TOKEN}`,
      },
      method: "PUT",
    },
  );

  // If the role was granted, return the content
  if (response.ok) {
    res.status(200).json({ message: "Role granted" });
  }

  // Something went wrong granting the role, but they do have an NFT
  else {
    res
      .status(500)
      .json({ error: "Error granting role, are you in the server?" });
  }
}
// If the user is verified but doesn't have an NFT, return an error
else {
  res.status(401).json({ error: "User does not have an NFT" });
}
```

That's it for our API route, now we need to call this from our client!

Back on the `index.tsx` page, let's create a function called `requestGrantRole` _inside_ the component and make a fetch request to this API endpoint.

```tsx
const sdk = useSDK();

async function requestGrantRole() {
  // First, login and sign a message
  const domain = "thirdweb.com"; // This should be the domain name of your own website
  const loginPayload = await sdk?.auth.login(domain);

  // Then make a request to our API endpoint.
  try {
    const response = await fetch("/api/grant-role", {
      method: "POST",
      body: JSON.stringify({
        loginPayload,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
```

And attach this function to our button:

```tsx
<button className={styles.mainButton} onClick={requestGrantRole}>
  Give me the role!
</button>
```

That's it! We're ready to test it out!

### Demo

Connect our wallet, authenticate with Discord, and sign in with Ethereum:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658461183495/yD-KJYnN6.png)

The `grant-role` API endpoint runs, granting the connected Discord user the role if they have an NFT from the collection:

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658461223440/Un7WxowZ4.png)

We now have the role in our server!

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1658461232901/LcwdvJccS.png)

## Going to production

In a production environment, you need to have an environment variable called `NEXTAUTH_SECRET` for the Discord Oauth to work.

You can learn more about it here:
https://next-auth.js.org/configuration/options

You can quickly create a good value on the command line via this `openssl` command.

```bash
openssl rand -base64 32
```

And add it as an environment variable in your `.env.local` file:

```
NEXTAUTH_SECRET=<your-value-here>
```

## Conclusion

We've made our very own Discord role granting application using thirdweb, the Discord API, and NextAuth!

You can check out the full code for this project on our GitHub:

https://github.com/thirdweb-example/discord-role-granter

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
