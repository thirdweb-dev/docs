---
title: thirdweb chains
hide_title: true
displayed_sidebar: chains
---

# thirdweb chains

We support all EVM-compatible chains in our SDKs and the dashboard. To deploy to your desired EVM chain through the dashboard, simply configure the network on the deploy page and hit the **Deploy Now** button.

For the SDK, we have introduced a special package that contains configuration for all EVM chains. To install the package, run the following command in your project:

```bash
# npm
npm install @thirdweb-dev/chains

# yarn
yarn add @thirdweb-dev/chains
```

Then, you can import and build your app on the desired EVM chain. For example, to import Ethereum from the chains package, you can use the following code:

```js
import { Ethereum } from "@thirdweb-dev/chains";
```

You can find a list of all the chains in the chains package on our [chainlist page](https://thirdweb.com/chains).
