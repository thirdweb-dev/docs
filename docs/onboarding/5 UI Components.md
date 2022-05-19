---
slug: /ui-kit
title: UI Kit
---

# UI Kit

The thirdweb [React SDK](/react) provides straight forward ways to let users connect wallets, render NFT media, etc.

## Installation

_The React SDK has a peer dependency on the `@thirdweb-dev/sdk` and `ethers`._

```bash npm2yarn
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

You have to wrap your application root in the `ThirdwebProvider` to get started.

```jsx title="App.jsx"
import { ThirdwebProvider } from "@thirdweb-dev/react";
const App = () => {
  return (
    <ThirdwebProvider>{/* <Your App Code Goes Here /> */}</ThirdwebProvider>
  );
};
```

## Code Snippets

### Connect Wallet Button

```jsx title="ConnectWallet.jsx"
import { useMetamask } from "@thirdweb-dev/react";

const ConnectWallet = () => {
  const connectWithMetamask = useMetamask();

  return <button onClick={() => connectWithMetamask()}>Connect Wallet</button>;
};
```

:::tip Other Wallet Connection Methods

- [useWalletConnect](/react/react.usewalletconnect)
- [useCoinbaseWallet](/react/react.usecoinbasewallet)
- [useMagic](/react/react.usemagic)
- [useGnosis](/react/react.usegnosis)

:::

### Disconnect Wallet

```jsx title="DisconnectWallet.jsx"
import { useDisconnect } from "@thirdweb-dev/react";

const DisconnectWallet = () => {
  const disconnect = useDisconnect();

  return <button onClick={() => disconnect()}>Disconnect Wallet</button>;
};
```

### Get the wallet address of a connected user

```jsx title="ConnectedWallet.jsx"
import { useAddress } from "@thirdweb-dev/react";

const ConnectedWallet = () => {
  const connectedWalletAddress = useAddress();

  return <div>{connectedWalletAddress || "No Wallet Connected"}</div>;
};
```
