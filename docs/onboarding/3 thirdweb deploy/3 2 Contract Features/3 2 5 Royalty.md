---
slug: /thirdweb-deploy/contract-features/royalties
title: Royalties
---

import FeatureCodeSnippets from "../../../../src/components/FeatureCodeSnippets";

# Contract Royalties

Using the Contract Royalties features on your contract allows you to control the royalty settings for your contract, which are used to calculate royalties on any secondary sales of assets.

You can add this interface to your contract by implementing all of the functions in the [IRoyalty](https://portal.thirdweb.com/contracts/IRoyalty) interface as shown below:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/IRoyalty.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, IRoyalty {

    // Implement the permissions functions below

}
```

Alternatively, you can use our [Royalty](https://github.com/thirdweb-dev/contracts/feature/permissions/Royalty.sol) implementation of the IRoyalty interface to get royalty functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/Royalty.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, Royalty {

    // Now this contract will have royalties out of the box

}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="Royalty" />
