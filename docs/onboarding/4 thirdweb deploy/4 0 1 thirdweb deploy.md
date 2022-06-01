---
slug: /thirdweb-deploy
title: Overview
---

## 🕸️ What is thirdweb deploy?

---

Deploy your own smart contracts and get all the benefits of the thirdweb platform: SDKs, Dashboards and Analytics for **free**.

If you have a smart contract (_ERC721A, Staking, Yield Farming, your own, etc)_ and want to build apps with it, this feature is for you!

Write your solidity smart contract, deploy through thirdweb and enjoy the benefits of the platform:

- Deploy your smart contracts without dealing with private keys or scripts
- Automatic SDKs for your contracts - javascript, python, node (go/unity/ios/android soon)
- High level API for common contract extensions
- Manage contracts with an intuitive dashboard
- Publish contracts for your team or public use
- See whats happening on-chain with analytics

## 🚀 Getting started

---

**Deploy any contract - no previous setup necessary**

```bash
npx thirdweb deploy
```

This command will:

- auto-detect any deployable contract in your project
- compile your project
- Upload ABI and bytecode to IPFS
- Generate a deploy link

Follow the link to the dashboard where you can connect a wallet (or a multi-sig like gnosis) to deploy your code to blockchains from your browser connected wallet. **No copy/pasting private keys or complex scripting required!**

![Deploy your contracts from the browser](./assets/Screen_Shot_2022-04-29_at_3.19.00_PM.png)

We currently support hardhat,forge, truffle, brownie projects, and even raw solc compilation! For more information on the thirdweb CLI, head over to our [thirdweb CLI github repository](https://github.com/thirdweb-dev/thirdweb-cli).

You can deploy a specific instance of the contract directly from your dashboard, specifying basic contract metadata and parameters.

![Fill in contract metadata and parameters](./assets/Screen_Shot_2022-04-26_at_11.50.03_AM.png)

Once deployed, you can immediately **start interacting with your deployed contract using automatically thirdweb SDKs**! Your contract dashboard will show how to get started and how to call functions on your contract.

![Code snippets to interact with your contract from your app](./assets/Screen_Shot_2022-04-26_at_12.01.01_PM.png)

If your contract implements any common EIP specification - like ERC20, ERC721, ERC1155 and more - we auto detect this in the SDK and in our dashboard. This means you get the **same intuitive APIs in React, Typescript and Python** and **convenient web dashboard** that you would get with our built-in contracts.

### 💻 Javascript / Typescript SDK

---

**Installation**

```bash npm2yarn
npm install @thirdweb-dev/sdk
```

**EIP Feature detection:**

```jsx
// interact with your contract without dealing with ABIs
const contract = await sdk.getContract("0x...");

// call any contract function (see dashboard for list of function signatures)
await contract.call("someCustomFunction");

// if your contract follows the ERC721 standard, contract.nft will be present
const allNFTs = await constract.nft.query.all();

// if your contract extends IMintableERC721, contract.nft.mint will be present
const tx = await contract.nft.mint.to("0x...", {
  name: "Cool NFT",
  image: readFileSync("some_image.png"),
});
```

Find out more in our [documentation](/typescript).

### 💻 React SDK

---

**Installation**

```bash npm2yarn
npm install @thirdweb-dev/react
```

**Contract hooks**

```jsx
// Use your contract in a react project
const { contract, isLoading, error } = useContract("0x....");

// if your contract follows the ERC721 standard you use custom "NFT" hooks
const { data: nfts, isLoading, error } = useNFTList(contract);

//if your contract extends IMintableERC721, you can mint using hooks
const { mutate: mint, isLoading, error } = useNFTMint(contract);
mint({
  name: "Cool NFT",
  image: readFileSync("some_image.png"),
});
```

Find out more in our [documentation](https://docs.thirdweb.com/react).

### 💻  Python SDK

---

**Installation**

```bash
pip install thirdweb-sdk
```

**EIP Feature detection:**

```python
# interact with your contract without dealing with ABIs
contract = sdk.get_contract("0x...")

# read data from your contract
uri = contract.call("tokenURI", 0)

# send transactions
contract.call("mintTo", "0x...", "ipfs://...")

# if your contract follows the ERC721 standard, get convenience APIs
contract.nft.balance()
```

Find out more in our [documentation](https://docs.thirdweb.com/python/custom).

### 🌎 Dashboard

---

Your contract dashboard page also auto detects standard functionality like ERC721 to lists your contract tokens, and even mint functionality.

![Automatic ERC721 detection generates a UI for minting and listing NFTs](./assets/mint_contract.png)

### 📜 Contract SDK

---

We support any contract that you’ll write and you can use the SDK to call raw functions on it. But to get the full thirdweb convenience, APIs and dashboard functionality, you can extend your dashboard with our contract interfaces to enable specific features in the SDK and dashboard.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/IMintableERC721.sol";

// Adding IMintableERC721 and implementing it gives you
// SDK -> contract.nft.mint with auto upload to IPFS
// Dashboard -> Mint button on admin dashboard
contract MyCustomContract is IMintableERC721 {

	function mintTo(address to, string calldata uri) external returns (uint256) {
		// implement your mint function
	}
}
```

| Contract interface   | SDK                   | Dashboard                   |
| -------------------- | --------------------- | --------------------------- |
| ERC20                | contract.token        | Token information / balance |
| IMintableERC20       | contract.token.mint   | Mint tokens button          |
| ERC721               | contract.nft          | List of NFTs                |
| IMintableERC721      | contract.nft.mint     | Mint NFT button             |
| ERC1155              | contract.edition      | List of NFTs                |
| IMintableERC1155     | contract.edition.mint | Mint NFT button             |
| IThirdwebRoyalty     | contract.royalties    | Royalties admin UI          |
| IThirdwebPrimarySale | contrat.sales         | Sales admin UI              |
| IThirdwebPlatformFee | contract.platformFee  | Platform fees admin UI      |

Find out more in our [documentation](https://docs.thirdweb.com/contracts).

:::info Early access disclaimers

This an early preview that comes with some limitations for this alpha release

- Requires Solidity > 0.8.0
- Only supports publishing and deploying on testnets

Since this is an early preview, be prepared for your published contracts to not be accessible anymore once we launch this product fully.

:::

## 🛠️ We want to hear from you

---

Join our [Discord](http://discord.gg/thirdweb) to tell us about your experience and what you'd want us to build next!
