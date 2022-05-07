---
slug: /getting-started/your-first-app
---

# Your First App

## Installation

Install the latest version of the sdk and the react wrapper, as well as the `ethers` peer dependency.

```bash npm2yarn
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

## Initializing The thirdweb SDK

The thirdweb SDK can be initialized in two different ways:

1. Read-only connection
2. Signer Connection

As a general rule of thumb, if you only need to view and display data from the blockchain, a **read-only** **connection** will suffice for your application.

For most applications though, you’ll need to connect your users wallets and prompt them to accept transactions so they can write data to the blockchain. In this case, you’ll need the **Signer Connection.**

### Read-Only Connection

A **provider** is an easy way to create a **read-only** connection to the block chain. When you just want to **read** data from the blockchain, initializing the thirdweb SDK with a provider is the best to do so.

**Initializing a read-only Thirdweb SDK**

```tsx
// https://polygon-rpc.com/ is a free public RPC to the Polygon network
const rpcUrl = "https://polygon-rpc.com/";
// Initialize a read-only instance of the thirdweb SDK.
const thirdweb = new ThirdwebSDK(rpcUrl);
```

### Signer Connection (Using User’s Wallets)

When your app is wrapped in the `ThirdwebProvider`, thirdweb’s SDKs automatically detect and use the wallet’s **signer** behind the scenes. When a wallet is connected, we can prompt the wallet to authorize and **sign** transactions, such as minting an NFT or transferring tokens.

**Setting Up The Thirdweb Provider**

In order to use all of thirdweb’s helpful hooks and detect connected wallets, you need to add the `ThirdwebProvider` at the top level of your application as follows:

```tsx
import { useAddress, useMetamask } from "@thirdweb-dev/react";

export const ConnectMetamaskButtonComponent = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div>
      {address ? (
        <h4>Connected as {address}</h4>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
};
```

You can configure the `ThirdwebProvider` to control what networks you want users to connect to, what types of wallets can connect to your app, and configure advanced settings like gas limits.

**Connecting User’s Wallets**

thirdweb has custom hooks for a the most popular wallets, including

- MetaMask
- Wallet Connect
- Coinbase Wallet
- Magic.Link
- Gnosis Safe

We have simple hooks for all of them, but let’s learn how we can use the most popular one, **MetaMask** to enable user’s to connect their MetaMask wallet to our application.

```tsx
import { useAddress, useMetamask } from "@thirdweb-dev/react";

export const ConnectMetamask = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div>
      {address ? (
        <h4>Connected as {address}</h4>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
};
```

:::info

There are additional SDK options for advanced use-cases, you can learn more about them [here](/typescript/sdk.sdkoptions#sdkoptions-type).

:::
