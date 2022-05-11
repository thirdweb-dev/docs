---
slug: /thirdweb-deploy/contract-features/permissions
title: Permissions
---

import FeatureCodeSnippets from "../../../../src/components/FeatureCodeSnippets";

# Permissions and Roles

Using the Permissions and Roles features on your contract allows you to add a fine-tuned permission control system to control who is allowed to interact with different parts of your contract functionality.

You can add this interface to your contract by implementing all of the functions in the [IPermissionsEnumerable](https://portal.thirdweb.com/contracts/IPermissionsEnumerable) interface as shown below:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/IPermissionsEnumerable.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, IPermissionsEnumerable {

    // Implement the permissions functions below

}
```

Alternatively, you can use our [PermissionsEnumerable](https://github.com/thirdweb-dev/contracts/feature/permissions/PermissionsEnumerable.sol) implementation of the IPermissionsEnumerable interface to get permissions functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/PermissionsEnumerable.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, PermissionsEnumerable {

    // Now this contract will have permissions out of the box

}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="Permissions" />