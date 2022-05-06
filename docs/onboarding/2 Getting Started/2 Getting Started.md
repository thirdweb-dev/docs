---
title: 🏃‍♂️ Getting Started
slug: /getting-started
---

# Getting Started

Before we begin, it’s important to note that we’re going to be making some assumptions of your prior knowledge. We’ll assume you already know:

- Basics of what the blockchain is and what “web3” means
- Terms like smart contracts, Ethereum, gas, and dApps
- What wallets such as MetaMask are, and ideally have a wallet yourself

If you’re not sure what some of those things are, we recommend you start at our [learn web3](https://portal.thirdweb.com/learn-web3) page and come back whenever you feel comfortable.

If you have any questions about anything related to thirdweb, you’re always welcome to come ask our community in our [Discord](https://discord.com/invite/thirdweb).

## thirdweb Overview

thirdweb has tools that will help your web3 development journey no matter what you’re building.

At a high level, thirdweb consists of **three** distinct parts.

1. Smart contracts
2. SDKs
3. The Dashboard

![Thirdweb App Framework](../assets/app-framework.png)

All of thirdweb’s tools are [open source](https://github.com/orgs/thirdweb-dev/) and completely server-less. This means we’re not using databases behind the scenes, or any centralization that relies solely on thirdweb for your applications to work.

We truly believe in empowering you to own everything you create using thirdweb.

## thirdweb Contracts

There are two kinds of thirdweb smart contracts.

1. Pre-built contracts
2. Thirdweb deploy custom contracts

It’s important to note that **you** are the owner of any smart contract that you create using thirdweb. This means that any smart contract that you deploy either via the dashboard or SDK is 100% owned by you, and is completely functional without thirdweb.

### Pre-built contracts

thirdweb offers a range of pre-built contracts for the most common web3 use cases.

Our pre-built contracts are fully audited, 100% open source, and come fully gas-optimized so your users have the best possible experience interacting with them.

Currently, thirdweb has pre-built smart contracts for the following use cases:

- **NFT Drops** - Claimable drop of one-of-one NFTs
- **NFT Collection** - A collection of one-of-one NFTs
- **Edition Drop** - Claimable drop of N-of-one NFTs
- **Edition** - A collection of N-of-one NFTs
- **Token Drop** - Claimable drop of ERC20 tokens
- **Token** - Your own ERC20 token
- **Vote** - ERC20 based voting
- **Split** - Fee splitting for your revenue
- **Marketplace** - Your very own NFT marketplace
- **Pack** - Randomized rewards (loot boxes)

### thirdweb Deploy & Custom Contracts

thirdweb Deploy enables you to declare your contracts written in Solidity as Thirdweb contracts, and upload them to the dashboard using the thirdweb CLI.

thirdweb Deploy enables you to access all of thirdweb features without using one of our pre-built contracts. By using thirdweb deploy, you gain the benefits of:

- Accessing your contract through the thirdweb dashboard
- Gaining a fully generated SDK to use all the functions of your smart contract
- Easily deploying multiple copies of your contract to testnet and mainnet networks
- Not needing to expose your private key at any point
- _Coming soon: contract permissions, usage insights, config, and more!_

## thirdweb SDKs

thirdweb SDKs are the middle layer between your application and your smart contracts. They enable you to interact with the functions in your smart contract using languages and tools that you’re already familiar with.

Currently, we have SDKs for these languages:

- [JavaScript (TypeScript)](/typescript)
- React
- Python
- Go

Let’s see how you can create and deploy your first smart contract via the thirdweb dashboard, and connect to it using the language of your choice
