---
title: Wallets
hide_title: true
displayed_sidebar: react-native
---

# Wallets

We have added support for a the following wallets in React Native:

- MetaMask
- Rainbow
- Trust
- Coinbase

Below we'll show how to use them with our `ThirdwebProvider`.

## Adding the wallets to the `ThirdwebProvider`

```tsx title="App.tsx"
import { metamaskWallet, trustWallet } from "@thirdweb-dev/react-native";

const App = () => {
  return (
    <ThirdwebProvider 
      dAppMeta={{
        name: "Example App",
        description: "This is an example app",
        logoUrl: "https://example.com/logo.png",
        url: "https://example.com",
      }}
      supportedWallets={[metamaskWallet(), trustWallet()]}>
      <AppInner />
    </ThirdwebProvider>
  );
};
```

By default, `supportedWallets` will have `rainbowWallet` and `metamaskWallet` since these two are the easiest to configure.

## Configuring wallets

### MetaMask, Rainbow and Trust wallets

These wallets are implementations of Wallet Connect V1 and V2. The `dAppMeta` prop passed in the `ThirdwebProvider` above will be used when connecting to the wallets to show your app's information. 

No other configuration is needed for these.

### Coinbase Wallet

To configure the Coinbase Wallet you need to follow the steps outlined in their [Setup Guide](https://coinbase.github.io/wallet-mobile-sdk/docs/client-sdk/rn-setup). A few caveats before going through the guide:

1. For Android, you only need to declare the `<queries>` tag in the AndroidManifest.xml **if** [your app targets Android 11 (API level 30)](https://developer.android.com/training/package-visibility/declaring)
2. For iOS, you need to setup [UniversalLinks](https://developer.apple.com/ios/universal-links/) to allow the wallet to communicate back to your app, otherwise the wallet will not redirect you back to the app. You can pass your app's UniversalLink when you create the Coinbase Wallet:

```tsx title="App.tsx"
import { coinbaseWallet } from "@thirdweb-dev/react-native";

const App = () => {
  return (
    <ThirdwebProvider 
      supportedWallets={[
        coinbaseWallet({
          callbackURL: new URL('https://youruniversal.link'),
        }),
      ]}>
      <AppInner />
    </ThirdwebProvider>
  );
};
```


