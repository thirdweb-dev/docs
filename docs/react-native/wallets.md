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
- Local Wallet
- Smart Wallet

Below we'll show how to use them with our `ThirdwebProvider`.

## Adding the wallets to the `ThirdwebProvider`

```tsx title="App.tsx"
import {
  metamaskWallet,
  trustWallet,
  localWallet,
} from "@thirdweb-dev/react-native";

const App = () => {
  return (
    <ThirdwebProvider
      dAppMeta={{
        name: "Example App",
        description: "This is an example app",
        logoUrl: "https://example.com/logo.png",
        url: "https://example.com",
      }}
      supportedWallets={[metamaskWallet(), trustWallet(), localWallet()]}
    >
      <AppInner />
    </ThirdwebProvider>
  );
};
```

By default, `supportedWallets` will have `rainbowWallet` and `metamaskWallet` since these two are the easiest to configure.

## Configuring wallets

### MetaMask, Rainbow and Trust wallets

These wallets are implementations of Wallet Connect V1 and V2. The `dAppMeta` prop passed in the `ThirdwebProvider` above will be used when connecting to the wallets to show your app's information.

For more information on these wallets config, please see their base WalletConnectV1 and WalletConnectV2 specific info:

- [Wallet Connect V1](https://portal.thirdweb.com/wallet/wallet-connect-v1)
- [Wallet Connect V2](https://portal.thirdweb.com/wallet/wallet-connect-v2)

MetaMask and Rainbow are extensions of WalletConnectV1 since they have not added support for WC V2 and Trust is an extension of WalletConnectV2, this means that you can call:

```tsx
metamaskWallet(config); // this config is the same as the one for wallet connect v1
rainbowWallet(config); // this config is the same as the one for wallet connect v1

trustWallet(config); // this config is the same as the one for wallet connect v2
```

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
          callbackURL: new URL("https://youruniversal.link"),
        }),
      ]}
    >
      <AppInner />
    </ThirdwebProvider>
  );
};
```

### Local Wallet

The local wallet works mostly the same as [the web version](https://portal.thirdweb.com/wallet/local-wallet), below we outline the key differences:

#### Configuration

<details>
  <summary>storage (optional)</summary>
  <div>

This is the default storage for storing the private key, mnemonic or encrypted JSON. This can be implemented in any way you want, as long as it conforms to the `AsyncStorage` interface:

```typescript
export interface AsyncStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
}
```

If omitted, it defaults to [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/), which stores the private key in your device in encrypted storage. We expose the `createSecureStorage(name: string)` utility function which creates a SecureStore instance that conforms to our `AsyncStorage` interface ([see it in our GitHub](https://github.com/thirdweb-dev/js/blob/main/packages/react-native/src/core/SecureStorage.ts#L37))

Example:

```javascript
import { LocalWallet } from "@thirdweb-dev/wallets";

const walletWithOptions = new LocalWallet(
  // highlight-start
  {
    storage: {
      getItem: (key) => {
        // Implement your own storage logic here
      },
      removeItem: (key) => {
        // Implement your own storage logic here
      },
      setItem: (key, value) => {
        // Implement your own storage logic here
      },
    },
  },
  // highlight-end
);
```

  </div>
</details>

### Smart Wallet

See our [Smart Wallet documentation](https://portal.thirdweb.com/wallet/smart-wallet)

## Building your own wallet

With our `@thirdweb-dev/wallets` sdk you can build your own wallets and integrate it into our [ConnectWallet button](https://portal.thirdweb.com/react-native/react-native.connectwallet). You can see how to build one in the [Building a Wallet](https://portal.thirdweb.com/wallet/build-a-wallet) section of our wallets documentation.

### Built-in wallets

You can look at how the built-in wallets in the `@thirdweb-dev/react-native` package are implemented for reference:

- [MetaMask](https://github.com/thirdweb-dev/js/blob/main/packages/react-native/src/evm/wallets/wallets/metamask-wallet.ts)
- [Coinbase](https://github.com/thirdweb-dev/js/blob/main/packages/react-native/src/evm/wallets/wallets/coinbase-wallet.ts)
- [Rainbow](https://github.com/thirdweb-dev/js/blob/main/packages/react-native/src/evm/wallets/wallets/rainbow-wallet.ts)
- [Trust](https://github.com/thirdweb-dev/js/blob/main/packages/react-native/src/evm/wallets/wallets/trust-wallet.ts)
- [Local Wallet](https://github.com/thirdweb-dev/js/blob/main/packages/react-native/src/evm/wallets/wallets/local-wallet.tsx)
- [Smart Wallet](https://github.com/thirdweb-dev/js/blob/main/packages/react-native/src/evm/wallets/wallets/smart-wallet.ts)
