---
title: thirdweb React Native SDK
hide_title: true
displayed_sidebar: react-native
---

<p align="center">
<br />
<a href="https://thirdweb.com"><img src="/assets/icons/thirdweb.svg" width="200" alt="thirdweb logo"/></a>
<br />
</p>
<h1 align="center">thirdweb React Native SDK </h1>
<p align="center">
<a href="https://www.npmjs.com/package/@thirdweb-dev/react-native"><img src="https://img.shields.io/npm/v/@thirdweb-dev/react-native?color=red&label=npm&logo=npm" alt="npm version"/></a>
<a href="https://discord.gg/thirdweb"><img alt="Join our Discord!" src="https://img.shields.io/discord/834227967404146718.svg?color=7289da&label=discord&logo=discord&style=flat"/></a>

</p>
<p align="center"><strong>Ultimate collection of React Native hooks for your web3 apps (👷🚧 Alpha 🚧👷)</strong></p>

The React Native SDK provides convenient hooks for connecting to wallets and communicating with blockchains.

**Note**: The SDK can connect to wallets that support WalletConnect V2. To find a list of such wallets please search in the [Wallet Connect Explorer](https://explorer.walletconnect.com/?type=wallet&version=2). Please note that some of these wallets haven't added support for test chains yet. One wallet that worked great for us during development was the Trust Wallet on Ethereum mainnet.

## Creating a new React Native app

If you already have a React Native app you can jump to the _[Installation](#installation)_ section in this guide; otherwise follow the development environment setup steps for React Native [in this guide](https://reactnative.dev/docs/environment-setup). Once your environment is setup, read along.

### Thirdweb React Native App Template

The easiest way to get started with the React Native SDK is to use the CLI to generate a sample app which will have all the setup needed to connect a wallet and begin interacting with your favorite chain:

```sh
npx thirdweb create --template react-native-typescript-starter
```

### React Native CLI

Alternatively create you can use the React Native CLI:

```sh
npx react-native init MyRNApp --template react-native-template-typescript
```

### Expo CLI

```sh
npx create-expo-app --template
```

## Installation

First, move into your app's folder:

```
cd your-react-native-app
```

Install the following packages using your favorite package manager:

```sh
npm install 'ethers@^5.0.0' @react-native-async-storage/async-storage node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values @thirdweb-dev/react-native @thirdweb-dev/react-native-compat
```

```sh
yarn add 'ethers@^5.0.0' @react-native-async-storage/async-storage node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values @thirdweb-dev/react-native @thirdweb-dev/react-native-compat
```

Move into your `/ios` folder and run the following command to install ios' pods:

```sh
cd ios/ && pod install
```

### Android (React Native CLI)

If you are targeting Android 11 (API level 30) or higher [you need to specify the app schemes you are going to call from your application](https://developer.android.com/training/package-visibility). Since we are using wallet connect and their scheme is wc: then you need to define the following in your AndroidManifest.xml

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  ...
	<queries>
	  <intent>
	    <action android:name="android.intent.action.VIEW" />
	    <data android:scheme="wc"/>
	  </intent>
	</queries>

  <application>
  ...
  </application>
</manifest>
```

### Adding shims for nodejs' libraries

React Native is based on [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore?language=objc) (part of WebKit) and does not use Node.js or the common Web and DOM APIs. As such, there are many operations missing that a normal web environment or Node.js instance would provide. [[1]](https://docs.ethers.org/v5/cookbook/react-native/#cookbook-reactnative-security).

For this reason we need to add shims for some of the operations not available in closed out environments like React Native:

In your `metro.config.js` (please, create one if you don’t have it) add the following to shim the nodejs modules needed:

```javascript
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const extraNodeModules = require("node-libs-browser");

module.exports = {
  resolver: {
    extraNodeModules,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
```

We provide a package that imports all the necessary polyfills for you, please, import this package into your `index.js` file. Make sure it is at the top of your imports.

```javascript
// Import polyfills
import "@thirdweb-dev/react-native-compat";
```

### Why are all these packages needed?

As explained in the intro of this doc, we need to shim some of the packages available in Node and web environments. Find below who’s using these packages:

**WalletConnect**

- WalletConnect has a dependency on `@react-native-async-storage/async-storage` . They use it to store sessions on devices.
- WalletConnect uses Node’s `crypto` package when signing transactions. Since this package is not available in React Native we need an alternative implementation for it and its dependencies, the following packages accomplishes this:
  - `node-libs-browser`
  - `react-native-crypto`
  - `react-native-randombytes`
  - `react-native-get-random-values`
