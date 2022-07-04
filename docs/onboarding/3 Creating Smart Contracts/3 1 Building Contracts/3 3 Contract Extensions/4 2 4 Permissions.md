---
slug: /thirdweb-deploy/contract-extensions/permissions
title: Permissions
---

import FeatureCodeSnippets from "../../../../../src/components/FeatureCodeSnippets";

# Permissions and Roles

Using the Permissions and Roles features on your contract allows you to add a fine-tuned permission control system to control who is allowed to interact with different parts of your contract functionality.

You can use our [PermissionsEnumerable](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/PermissionsEnumerable.sol) implementation to get permissions functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/feature/PermissionsEnumerable.sol";

// We add the interface to the contract
contract MyCustomContract is PermissionsEnumerable {

    constructor() {
      _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
      // you can setup any other roles here
    }

    // Now this contract will have permissions out of the box
    // you can add the modifier `onlyRole(DEFAULT_ADMIN_ROLE)` (or any other role) to your functions to control access

}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="Permissions" />
