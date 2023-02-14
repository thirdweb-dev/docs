---
slug: /IERC1155Enumerable
title: IERC1155Enumerable
hide_title: true
displayed_sidebar: contracts
---

# IERC1155Enumerable

> ERC1155 Non-Fungible Token Standard, optional enumeration extension

_See https://eips.ethereum.org/EIPS/eip-1155_

## Methods

### nextTokenIdToMint

```solidity
function nextTokenIdToMint() external view returns (uint256)
```

Returns the next token ID available for minting

#### Returns

| Name | Type    | Description                                                             |
| ---- | ------- | ----------------------------------------------------------------------- |
| \_0  | uint256 | The token identifier for the `_index`th NFT, (sort order not specified) |
