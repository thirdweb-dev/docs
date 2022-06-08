---
slug: /thirdweb-deploy/contract-extensions/royalty
title: Royalty
---

import FeatureCodeSnippets from "../../../../src/components/FeatureCodeSnippets";

# Contract Royalties

Using the Contract Royalties features on your contract allows you to control the royalty settings for your contract, which are used to calculate royalties on any secondary sales of assets.

You can use our [Royalty](https://github.com/thirdweb-dev/contracts/feature/permissions/Royalty.sol) implementation to get royalty functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/feature/Royalty.sol";

// We add the interface to the contract
contract MyCustomContract is Royalty {

    // Now this contract will have access to royalty functionality
    
    // To control who can update royalties, make sure to implement the access control method below
    function _canSetRoyaltyInfo() internal override returns (bool) {
       // example implementation:
       return msg.sender == owner;
    }
}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="Royalty" />
