---
slug: /getting-started/your-first-app
---

# Your First App

## Installation

Install the latest version of the SDK, the React SDK-wrapper, as well as the `ethers` peer-dependency.

```bash npm2yarn
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

## Initializing The thirdweb SDK

The thirdweb SDK can be initialized in two different ways:

1. Read-only connection
2. Signer Connection

As a general rule of thumb, if you only need to view and display data from the blockchain, a **read-only connection** will suffice for your application.

For most applications though, you’ll need to connect your user's' wallets and prompt them to accept transactions so they can write data to the blockchain. In this case, you’ll need to pass a **Signer** to the SDK.

:::info

The React.JS SDK wrapper we will be using in this guide handles the Signer vs read-only connection logic for you entirely. As soon as the users of your app connect their wallet the SDK will automatically switch to _Signer_ mode.

:::

## Setting Up The thirdweb Provider

In order to use all of thirdweb’s helpful hooks and detect connected wallets, you need to add the `ThirdwebProvider` at the top level of your application as follows:

```jsx title="App.jsx"
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

// the chainId our app wants to be running on
// for our example we're going to be using the Polygon Mumbai Testnet
const desiredChainId = ChainId.Mumbai;

export const MyApp = () => {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      {/*
          Your App Goes Here
      */}
    </ThirdwebProvider>
  );
};
```

:::info

There are additional SDK options for advanced use-cases, you can learn more about them [here](/typescript/sdk.sdkoptions#sdkoptions-type).

:::

## Connecting Wallets

thirdweb has custom hooks for the most popular wallets, including:

- [MetaMask](/react/react.usemetamask)
- [Wallet Connect](/react/react.usewalletconnect)
- [Coinbase Wallet](/react/react.usecoinbasewallet)
- [Magic.Link](/react/react.usemagic)
- [Gnosis Safe](/react/react.usegnosis)

Let’s start with one of the most popular ones: **MetaMask**.
This is what the code could look like to let your users connect (and disconnect) their MetaMask wallet in your application:

```jsx title="ConnectMetamask.jsx"
import { useAddress, useMetamask } from "@thirdweb-dev/react";

export const ConnectMetamask = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div>
      {address ? (
        <p>Connected as {address}</p>
      ) : (
        <button onClick={connectWithMetamask}>Connect Metamask Wallet</button>
      )}
    </div>
  );
};
```

---

**Next Up: Deploying your contract**

In the next step you'll learn how to deploy your first smart contract with thirdweb.
