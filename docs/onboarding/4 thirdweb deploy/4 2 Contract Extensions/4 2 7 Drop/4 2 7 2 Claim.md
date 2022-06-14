---
slug: /thirdweb-deploy/contract-extensions/drop/claim
title: Claim
---

import FeatureCodeSnippets from "../../../../../src/components/FeatureCodeSnippets";

# Claim

### Singlephase

This gives you the functionality needed to create claim conditions for your NFTs.

We have [IClaimConditionsSinglePhase](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/interface/IClaimConditionsSinglePhase.sol) for contracts with a single claim phase. Any new claim phase will replace the current active one.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/contracts/feature/interface/IClaimConditionsSinglePhase.sol";

// We add the interface to the contract
contract MyCustomContract is IClaimConditionsSinglePhase{
    // Now this contract will have delayed reveal functionality out of the box
}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.


<FeatureCodeSnippets featureName="ClaimSinglePhase" />



### MultiPhase

We also have [IClaimConditionsMultiPhase](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/interface/IClaimConditionsMultiPhase.sol) for contracts that have multiple claim phases. Only one claim condition can be active at a time.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@thirdweb-dev/contracts/contracts/feature/interface/IClaimConditionsMultiPhase.sol";

// We add the interface to the contract
contract MyCustomContract is IClaimConditionsMultiPhase{

    // Now this contract will have delayed reveal functionality out of the box
}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.


<FeatureCodeSnippets featureName="ClaimMultiPhase" />

