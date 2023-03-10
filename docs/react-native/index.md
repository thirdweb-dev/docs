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
  <a href="https://thirdweb.com">
    <img
      src="https://github.com/thirdweb-dev/js/blob/main/packages/sdk/logo.svg?raw=true"
      width="200"
      alt=""
    />
  </a>
  <br />
</p>
<h1 align="center">thirdweb React Native SDK</h1>

A collection of 100+ React hooks and React Native UI components for your web3 mobile apps, for any EVM-compatible blockchain.

Connect to user’s wallets, interact with smart contracts, sign messages, and utilize common standards such as tokens, NFTs, marketplaces; all with built-in caching, RPC URLs, IPFS gateways, and more. See more on the React section: [How It Works](https://portal.thirdweb.com/react#how-it-works)

## Installation

Our SDK supports Android `minSdkVersion = 23` and `ios.platform = 13`

<Tabs>
<TabItem value="existing" label="Existing Projects">

<Tabs>
  <TabItem value="npm" label="npm" default>
    <CodeBlock
      language={"bash"}
    >{`npm i 'ethers@^5.0.0' node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values react-native-svg react-native-mmkv@2.5.1 @react-native-async-storage/async-storage @thirdweb-dev/react-native @thirdweb-dev/react-native-compat`}</CodeBlock>
  </TabItem>
  <TabItem value="yarn" label="yarn">
    <CodeBlock
      language={"bash"}
    >{`yarn add 'ethers@^5.0.0' node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values react-native-svg react-native-mmkv@2.5.1 @react-native-async-storage/async-storage @thirdweb-dev/react-native @thirdweb-dev/react-native-compat`}</CodeBlock>
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    <CodeBlock
      language={"bash"}
    >{`pnpm i 'ethers@^5.0.0' node-libs-browser react-native-crypto react-native-randombytes react-native-get-random-values react-native-svg react-native-mmkv@2.5.1 @thirdweb-dev/react-native @thirdweb-dev/react-native-compat`}</CodeBlock>
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

### Add shims for the crypto nodejs' libraries

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

</TabItem>
<TabItem value="new" label="New Projects">

<CodeBlock
language={"bash"} >{`npx thirdweb create --template react-native-typescript-starter`}</CodeBlock>

</TabItem>
</Tabs>

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
