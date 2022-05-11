---
slug: /thirdweb-deploy/contract-features/other-settings
title: Other settings
---

import FeatureCodeSnippets from "../../../../src/components/FeatureCodeSnippets";

# Other Contract Settings

Additionally, you can add the following settings interfaces to your contracts as shown below.

## Contract Primary Sale

Using the Contract Primary Sale features on your contract allows you to control the primary sales for your contract.

You can add this interface to your contract by implementing all of the functions in the [IPrimarySale](https://portal.thirdweb.com/contracts/IPrimarySale) interface as shown below:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/IPrimarySale.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, IPrimarySale {

    // Implement the permissions functions below

}
```


Alternatively, you can use our [PrimarySale](https://github.com/thirdweb-dev/contracts/feature/permissions/PrimarySale.sol) implementation of the IPrimarySale interface to get primary sale functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/PrimarySale.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, PrimarySale {

    // Now this contract will have primary sales out of the box

}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="PrimarySale" />

## Contract Platform Fee

Using the Contract Platform Fee features on your contract allows you to control the platform fees for your contract.

You can add this interface to your contract by implementing all of the functions in the [IPlatformFee](https://portal.thirdweb.com/contracts/IPlatformFee) interface as shown below:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/IPlatformFee.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, IPlatformFee {

    // Implement the permissions functions below

}
```


Alternatively, you can use our [PlatformFee](https://github.com/thirdweb-dev/contracts/feature/permissions/PlatformFee.sol) implementation of the IPlatformFee interface to get platform fee functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";
import "@thirdweb-dev/contracts/feature/interface/PlatformFee.sol";

// We add the interface to the contract
contract MyCustomContract is ThirdwebContract, PlatformFee {

    // Now this contract will have platform fees out of the box

}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="PlatformFee" />
