---
slug: /thirdweb-deploy/contract-extensions/royalty
title: Royalty
---

import FeatureCodeSnippets from "../../../../src/components/FeatureCodeSnippets";

# Contract Royalties

Using the Contract Royalties features on your contract allows you to control the royalty settings for your contract, which are used to calculate royalties on any secondary sales of assets.

You can use our [Royalty](https://github.com/thirdweb-dev/contracts/feature/permissions/Royalty.sol) implementation to get royalty functionality for your contract out-of-the-box as follows. Note that to get full support from marketplaces like OpenSea, you also need the `ContractMetadata` and `Multicall` extensions.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/feature/ContractMetadata.sol";
import "@thirdweb-dev/contracts/feature/Royalty.sol";
import "@thirdweb-dev/contracts/feature/Multicall.sol";

// We add the interface to the contract
contract MyCustomContract is Royalty, ContractMetadata, Multicall {

    uint16 private immutable defaultRoyaltyBps = 100; // 1% royalty fee
    
    constructor() {
      // set the default royalty recipient and fee (in bps)
      _setupDefaultRoyaltyInfo(msg.sender, defaultRoyaltyBps);
      // can also be set post-deployment via `setDefaultRoyaltyInfo()`
    }

    // To control who can update royalties, make sure to implement the access control method below
    function _canSetRoyaltyInfo() internal override returns (bool) {
       // example implementation:
       return msg.sender == owner;
    }
    
    // Access control for updating the contract metadata (required for marketplaces like OpenSea)
    function _canSetContractURI() internal view override returns (bool) {
        // example implementation:
       return msg.sender == owner;
    }
}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="Royalty" />
