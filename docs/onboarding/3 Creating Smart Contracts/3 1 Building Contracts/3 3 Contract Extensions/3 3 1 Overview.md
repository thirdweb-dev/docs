---
slug: /thirdweb-deploy/contract-extensions
title: Overview
---

import QuickstartCard from "../../../../../src/components/QuickstartCard";

# Solidity SDK

The Solidity SDK allows you to build your own smart contracts by providing:

- Base contracts that you can build upon, such as [ERC721Base](/solidity-sdk/base-contracts/erc-721/erc721base).
- Contract extensions you can implement, such as [Permission Controls](/solidity-sdk/contract-extensions/permissions) and [Royalty Fees](/solidity-sdk/contract-extensions/royalty).

To get started, install the SDK into your Solidity project:

```bash
npm install @thirdweb-dev/contracts
```

## Why use the SDK?

By building with our Solidity SDK, you:

- Gain access to powerful, [audited](https://gateway.thirdweb.dev/ipfs/QmWfueeKQrggrVQNjWkF4sYJECp56vNnuAXCPVecFFKz2j) contract extensions you can import and implement in your smart contracts.
- Unlock the features of [Dashboard](https://thirdweb.com/dashboard) and [SDK](/building-web3-apps/setting-up-the-sdk) on your own smart contracts.

Each feature you implement in your smart contracts unlocks functionality in both the dashboard and SDK to help you build applications on top of them.
For example, if you implement the [ERC721Base](/solidity-sdk/base-contracts/erc-721/erc721base), you'll unlock the `mint` button in the dashboard and
can use the [mint](/pre-built-contracts/nft-collection#using-the-thirdweb-sdk-1) function in the SDK; which automatically uploads and pins your metadata to IPFS!

<div className="row" style={{marginBottom:24}}>

<div className="col col--12" style={{ marginTop: 8 }}>
  <QuickstartCard
    name="Quick Start - Solidity SDK & thirdweb CLI"
    link="/thirdweb-deploy/contract-extensions/quickstart"
    image="/assets/icons/drop.png"
  />
</div>

</div>

## How It Works

Using the Solidity SDK requires knowledge of how to [define a contract](https://docs.soliditylang.org/en/v0.6.0/contracts.html#creating-contracts) in Solidity and an understanding of [Inheritance](https://docs.soliditylang.org/en/v0.6.0/contracts.html#inheritance).

You can think of the thirdweb Solidity SDK as building blocks that help you enrich your smart contracts with features.

Some blocks come packaged together as **Base Contracts**, which come with a full set of features out of the box that you can modify and extend.
Other (smaller) blocks are **Contract Extensions**, which provide a way for you to pick and choose which individual pieces you want to put into your contract;
with full customization of how those features work.

With both Base Contracts and Contract Extensions, you add and customize functionality by creating a contract that inherits the logic of the contract extension(s) you want to use and combining them along with your custom logic.
