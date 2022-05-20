---
slug: /IERC721Enumerable
title: IERC721Enumerable
hide_title: true
displayed_sidebar: contracts
---

# IERC721Enumerable

> ERC-721 Non-Fungible Token Standard, optional enumeration extension

_See https://eips.ethereum.org/EIPS/eip-721 Note: the ERC-165 identifier for this interface is 0x780e9d63._

## Methods

### tokenByIndex

```solidity
function tokenByIndex(uint256 _index) external view returns (uint256)
```

Enumerate valid NFTs

_Throws if `_index` &gt;= `totalSupply()`._

#### Parameters

| Name    | Type    | Description                         |
| ------- | ------- | ----------------------------------- |
| \_index | uint256 | A counter less than `totalSupply()` |

#### Returns

| Name | Type    | Description                                                             |
| ---- | ------- | ----------------------------------------------------------------------- |
| \_0  | uint256 | The token identifier for the `_index`th NFT, (sort order not specified) |

### tokenOfOwnerByIndex

```solidity
function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256)
```

Enumerate NFTs assigned to an owner

_Throws if `_index` &gt;= `balanceOf(_owner)` or if `_owner` is the zero address, representing invalid NFTs._

#### Parameters

| Name    | Type    | Description                                              |
| ------- | ------- | -------------------------------------------------------- |
| \_owner | address | An address where we are interested in NFTs owned by them |
| \_index | uint256 | A counter less than `balanceOf(_owner)`                  |

#### Returns

| Name | Type    | Description                                                                                  |
| ---- | ------- | -------------------------------------------------------------------------------------------- |
| \_0  | uint256 | The token identifier for the `_index`th NFT assigned to `_owner`, (sort order not specified) |
