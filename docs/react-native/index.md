---
title: thirdweb React Native SDK
hide_title: true
displayed_sidebar: react-native
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import QuickstartCard from "@components/QuickstartCard";

<p align="center">
<br />
<a href="https://thirdweb.com"><img src="/assets/icons/thirdweb.svg" width="200" alt="thirdweb logo"/></a>
<br />
</p>
<h1 align="center">thirdweb React Native SDK</h1>

A collection of 100+ React hooks and React Native UI components for your web3 mobile apps, for any EVM-compatible blockchain.

Connect to user’s wallets, interact with smart contracts, sign messages, and utilize common standards such as tokens, NFTs, marketplaces; all with built-in caching, RPC URLs, IPFS gateways, and more. See more on the React section: [How It Works](https://portal.thirdweb.com/react#how-it-works)

## Installation

Requirements:

- Android minSdkVersion = 23
- iOS platform >= 13
- XCode > 14

<Tabs>
<TabItem value="existing" label="Existing Projects">

<Tabs groupId='cli-expo'>
<TabItem value="existing-rn-cli" label="React Native CLI Project">

<Tabs>
  <TabItem value="yarn" label="yarn" default>
    <CodeBlock
      language={"bash"}
    >{`yarn add 'ethers@^5' @thirdweb-dev/react-native@nightly @thirdweb-dev/react-native-compat@nightly node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values react-native-svg react-native-mmkv @react-native-async-storage/async-storage`}</CodeBlock>
  </TabItem>
  <TabItem value="npm" label="npm">
    <CodeBlock
      language={"bash"}
    >{`npm i 'ethers@^5' @thirdweb-dev/react-native@nightly @thirdweb-dev/react-native-compat@nightly node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values react-native-svg react-native-mmkv @react-native-async-storage/async-storage`}</CodeBlock>
  </TabItem>
</Tabs>

Our wallets package uses the Expo Modules API, please [configure it](https://docs.expo.dev/modules/overview/) in your app:

```sh
npx install-expo-modules@latest
```

Move into your `/ios` folder and run the following command to install the ios' pods:

```sh
cd ios/ && pod install
```

</TabItem>

<TabItem value="existing-rn-expo" label="React Native Expo Project">

Our wallets package depends on the new Coinbase Wallet Mobile SDK which [contains custom native code](https://github.com/coinbase/wallet-mobile-sdk/issues/206), which breaks support for Expo Go. We are working on turning this into an optional dependency but for now you need to prebuild the Expo project:

<CodeBlock language={"bash"}>{`npx expo prebuild`}</CodeBlock>

Now, we can add the dependencies:

<Tabs>
  <TabItem value="yarn" label="yarn" default>
    <CodeBlock
      language={"bash"}
    >{`yarn add 'ethers@^5' @thirdweb-dev/react-native@nightly @thirdweb-dev/react-native-compat@nightly node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values react-native-svg @react-native-async-storage/async-storage`}</CodeBlock>
  </TabItem>
  <TabItem value="npm" label="npm">
    <CodeBlock
      language={"bash"}
    >{`npm i 'ethers@^5' @thirdweb-dev/react-native@nightly @thirdweb-dev/react-native-compat@nightly node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values react-native-svg @react-native-async-storage/async-storage`}</CodeBlock>
  </TabItem>
</Tabs>

Our wallets package uses the Expo Modules API, please [configure it](https://docs.expo.dev/modules/overview/) in your app:

```sh
npx install-expo-modules@latest
```

The package `react-native-mmkv` is used for our storage needs:

```sh
expo install react-native-mmkv
```

</TabItem>
</Tabs>

### Add shims for the crypto nodejs' libraries

React Native is based on [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore?language=objc) (part of WebKit) and does not use Node.js or the common Web and DOM APIs. As such, there are many operations missing that a normal web environment or Node.js instance would provide. [[1]](https://docs.ethers.org/v5/cookbook/react-native/#cookbook-reactnative-security).

For this reason we need to add shims for some of the operations not available in closed out environments like React Native:

In your `metro.config.js` (please, create one if you don’t have it) add the following to shim the nodejs modules needed:

<Tabs groupId='cli-expo'>

<TabItem value="existing-rn-cli" label="React Native CLI Project">
  <CodeBlock language={"javascript"}>{`/**
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
`}</CodeBlock>
</TabItem>

<TabItem value="existing-rn-expo" label="React Native Expo Project">
<CodeBlock
language={"javascript"} >{`// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const extraNodeModules = require("node-libs-browser");
const config = getDefaultConfig(\_\_dirname);
config.resolver.extraNodeModules = extraNodeModules;
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});
module.exports = config;
`}</CodeBlock>

</TabItem>
</Tabs>

We provide a package that imports all the necessary polyfills for you, please, import this package into your `index.js` file. Make sure it is at the top of your imports.

```javascript
// Import polyfills
import "@thirdweb-dev/react-native-compat";
```

### Why are all these packages needed?

As explained in the intro of this doc, we need to shim some of the packages available in Node and web environments. Find below who’s using these packages:

**WalletConnect**

- WalletConnect uses Node’s `crypto` package when signing transactions. Since this package is not available in React Native we need an alternative implementation for it and its dependencies, the following packages accomplishes this:
  - `node-libs-browser`
  - `react-native-crypto`
  - `react-native-randombytes`
  - `react-native-get-random-values`
- Coinbase wallet connector package depends on `react-native-mmkv` and `expo-modules`.
- WalletConnect V2 connectors depend on `@react-native-async-storage/async-storage`.

</TabItem>
<TabItem value="new" label="New Projects">

Make sure to have your React Native environment setup before using the template. Please follow React Native's [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

<Tabs>
  <TabItem value="thirdweb-cli" label="Thirdweb CLI" default>
    <CodeBlock
      language={"bash"}
    >{`npx thirdweb@nightly create --template react-native-typescript-starter`}</CodeBlock>
  </TabItem>
  <TabItem value="thirdweb-cli-expo" label="Thidweb CLI Expo">
    <CodeBlock
      language={"bash"}
    >{`npx thirdweb@nightly create --template react-native-expo-starter`}</CodeBlock>
  </TabItem>
  <TabItem value="react-native-cli" label="React Native CLI">
    Alternatively you can use the React Native CLI. Note that you need to follow
    the "Existing Projects -> React Native CLI Project" steps in this guide
    after executing the following command:
    <CodeBlock
      language={"bash"}
    >{`npx react-native init MyRNApp --template react-native-template-typescript`}</CodeBlock>
  </TabItem>
  <TabItem value="react-native-expo" label="Expo CLI">
    Alternatively you can use the Expo CLI. Note that you need to
    follow the "Existing Projects -> React Native Expo Project" steps in this
    guide after executing the following command:
    <CodeBlock
      language={"bash"}
    >{`yarn create expo-app AwesomeProject`}</CodeBlock>
  </TabItem>
</Tabs>

</TabItem>
</Tabs>
