---
slug: /thirdweb-deploy/contract-extensions/drop/delayed-reveal
title: Delayed Reveal
---

import FeatureCodeSnippets from "../../../../../src/components/FeatureCodeSnippets";

# Delayed Reveal

Delayed reveals enable you to reveal the contents of the NFT to the user later at a specific date and show a placeholder asset in the meantime.

You can use our [DelayedReveal](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/DelayedReveal.sol) implementation to get delayed reveal functionality for your contract out-of-the-box as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/feature/DelayedReveal.sol";

// We add the interface to the contract
contract MyCustomContract is DelayedReveal {

    // Now this contract will have delayed reveal functionality out of the box
}
```

If your contract implements all the functions in this standard, you will get support for the following SDK interface.

<FeatureCodeSnippets featureName="DelayedReveal" />
