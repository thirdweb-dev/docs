---
title: Wallets
hide_title: true
displayed_sidebar: react-native
---

# Wallets

We have added support for several wallets from the [@thirdweb-dev/wallets](https://www.npmjs.com/package/@thirdweb-dev/wallets) package.

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
      activeChain="mumbai"
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

This is the storage used for storing the private key, mnemonic or encrypted JSON. On React Native we need this storage to be encrypted since we store the private key to be able to recover your wallet for reconnections.

You can use any implementation of encrypted storage you want, as long as it conforms to the `AsyncStorage` interface:

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
import { createSecureStorage, LocalWallet } from "@thirdweb-dev/react-native";

const walletWithOptions = new LocalWallet(
  // highlight-start
  {
    storage: createSecureStorage("my-wallet"),
  },
  // highlight-end
);
```

  </div>
</details>

### Smart Wallet

See our [Smart Wallet documentation](https://portal.thirdweb.com/wallet/smart-wallet) for a more comprehensive description of the mandatory fields of this wallet. Here we'll just describe what's needed to connect your wallet to any dApp.

#### Connect to a dApp

We have added extra configuration parameters to be able to connect to any dApp. Before you can use this feature of Smart Wallet you need to configure your
app to support the camera usage to be able to scan WalletConnect QR codes:

```
yarn add react-native-camera && cd ios && pod install
```

Add the following code to your `android/app/build.gradle` file:

```
missingDimensionStrategy 'react-native-camera', 'general'
```

```groovy
defaultConfig {
     applicationId "app.id"
     minSdkVersion rootProject.ext.minSdkVersion
     targetSdkVersion rootProject.ext.targetSdkVersion
     missingDimensionStrategy 'react-native-camera', 'general'
 }
```

Add the `NSCameraUsageDescription` in your `Info.plist` file to explain why your app needs to use the Camera. Example:

```xml
<key>NSCameraUsageDescription</key>
<string>The app uses the camera to scan QR codes</string>
```

After adding the camera package, you are ready to use the feature!

#### Configuration

The following configuration enables Connect to App behavior in React Native:

<details>
  <summary>enableConnectApp</summary>
  <div>

Adds a UI component to the SmartWallet connected dialog to be able to scan a WalletConnect QR code or input a WalletConnect (`wc://`) uri.

Defaults to `false`.

```javascript
import { Mumbai } from '@thirdweb-dev/chains';
import { ThirdwebProvider, metamaskWallet, smartWallet } from '@thirdweb-dev/react-native';

...

<ThirdwebProvider
    activeChain={Mumbai}
    supportedWallets={[
        smartWallet({
            factoryAddress: "..."
            thirdwebApiKey: "apiKey"
            gasless: true,
            personalWallets: [localWallet()],
            enableConnectApp: true,
        }),
        metamaskWallet(),
]}>
```

</div>
</details>

<details>
  <summary>wcVersion</summary>
  <div>

You can choose the WalletConnect version to support. Either `'v1'` or `'v2'`.

Defaults to `'v2'`.

**Note** that WalletConnect v1 is no longer maintained and will be [shutdown on June 28th, 2023](https://medium.com/walletconnect/walletconnect-v1-0-sunset-notice-and-migration-schedule-8af9d3720d2e)

</div>
</details>

<details>
  <summary>walletConenctV2ProjectId</summary>
  <div>

The WalletConnect V2 `projectId`. You can get one in the [WalletConnect docs](https://docs.walletconnect.com/2.0/web/sign/installation#1-obtain-project-id).

Defaults to a common `projectId` set by thirdweb. This should be ok for testing but note that if you want to deploy your mobile app it may make sense to create your own as WalletConnect may throttle traffic comming from the same `projectId`.

</div>
</details>

<details>
  <summary>walletConnectV2RelayUrl</summary>
  <div>

Define a custom Relay Server URL. Defaults to "wss://relay.walletconnect.com"

</div>
</details>

<details>
  <summary>walletConnectWalletMetadata</summary>
  <div>

Metadata that will be displayed in the dApp once your SmartWallet is connected to it.

```json
{
  name: string; // defaults to: "Thirdweb Smart Wallet",
  description: string; // defaults to: "Thirdweb Smart Wallet",
  url: string: // defaults to: "https://thirdweb.com",
  icons: string[]; // defaults to: ["https://thirdweb.com/favicon.ico"],
};
```

</div>
</details>

<details>
  <summary>wcStorage</summary>
  <div>

Synchronous storage needed by WalletConnect V2.

Defaults to synchronous storage implemented with MMKV.

</div>
</details>

### Email/Phone Number Wallet

We implemented this feature using the Magic SDK.

#### Add Magic's dependencies

The `@magic-sdk` has a few dependencies you need to add to your app before using the SDK in React Native. For convenience you can run:

```json
yarn add react-native-safe-area-context react-native-webview react-native-device-info && cd ios && pod install
```

which will install the following dependencies:

- [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context?ref=blog.thirdweb.com)
- [react-native-webview](https://www.npmjs.com/package/react-native-webview?ref=blog.thirdweb.com)
- [react-native-device-info](https://www.npmjs.com/package/react-native-device-info?ref=blog.thirdweb.com)

You also need a [Magic api-key](https://dashboard.magic.link/signup?ref=blog.thirdweb.com) to pass it as part of the wallet config.

#### Using the new wallet

We suggest you add `magicWallet` as the first wallet in your `supportedWallets` list since the UI for it is a TextInput field:

```javascript
import { Goerli } from '@thirdweb-dev/chains';
import { ThirdwebProvider, magicWallet, metamaskWallet } from '@thirdweb-dev/react-native';

...

<ThirdwebProvider
    activeChain={Goerli}
    supportedWallets={[
    magicWallet({
        apiKey: 'magic_api_key',
    }),
    metamaskWallet(),
]}>
```

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
