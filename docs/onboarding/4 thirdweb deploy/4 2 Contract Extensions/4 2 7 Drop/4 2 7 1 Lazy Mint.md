---
slug: /thirdweb-deploy/contract-extensions/drop/lazymint
title: Lazy Mint
---

import FeatureCodeSnippets from "../../../../../src/components/FeatureCodeSnippets";

# Lazy Mint

Lazy minting means we prepare the metadata for other people to mint the NFTs into their wallets.

You can use our [LazyMint](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/LazyMint.sol) implementation to get permissions functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/feature/LazyMint.sol";

// We add the interface to the contract
contract MyCustomContract is LazyMint {

    // Now this contract will have delayed reveal functionality out of the box
}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="LazyMint" />
