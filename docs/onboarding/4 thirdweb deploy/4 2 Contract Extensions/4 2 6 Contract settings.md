---
slug: /thirdweb-deploy/contract-extensions/other-settings
title: Contract settings
---

import FeatureCodeSnippets from "../../../../src/components/FeatureCodeSnippets";

# Contract Settings

Additionally, you can add the following settings interfaces to your contracts as shown below.

## Contract Metadata

Using the Contract Metadata extension on your contract allows you to add information about your contract (image, description, etc). This information is stored in IPFS and linked to your contract using the standard `contractURI` accessor. This is compatible with marketplaces like Opensea.

You can use our [ContractMetadata](https://portal.thirdweb.com/contracts/ContractMetadata) implementation as shown below:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/feature/ContractMetadata.sol";

// We add the interface to the contract
contract MyCustomContract is ContractMetadata {

    // you now have contract metadata functionality in your contract

    // Remember to implement the access control function
    function _canSetContractURI() internal view override returns (bool) {
        // example implementation:
        return msg.sender == owner;
    }
}
```

## Contract Primary Sale

Using the Contract Primary Sale features on your contract allows you to control the primary sales recipients for your contract.

You can use our [PrimarySale](https://portal.thirdweb.com/contracts/PrimarySale) implementation as shown below:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/feature/PrimarySale.sol";

// We add the interface to the contract
contract MyCustomContract is PrimarySale {

    // you now have primary sale recipients getters and setters in your contract

    // Remember to implement the access control function
    function _canSetPrimarySaleRecipient() internal view override returns (bool) {
        // example implementation:
        return msg.sender == owner;
    }

}
```


If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="PrimarySale" />

## Contract Platform Fee

Using the Contract Platform Fee features on your contract allows you to control the platform fees for your contract.

You can use our [PlatformFee](https://portal.thirdweb.com/contracts/PlatformFee) implementation as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/feature/PlatformFee.sol";

// We add the interface to the contract
contract MyCustomContract is PlatformFee {

    // you now have platform fee getters and setters in your contract

    // Remember to implement the access control function
    function _canSetPlatformFeeInfo() internal view override returns (bool) {
        // example implementation:
        return msg.sender == owner;
    }

}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="PlatformFee" />
