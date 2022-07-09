---
slug: /LazyMintERC721
title: LazyMintERC721
hide_title: true
displayed_sidebar: contracts
---

# LazyMintERC721

## Methods

### getBaseURICount

```solidity
function getBaseURICount() external view returns (uint256)
```

_Returns the number of batches of tokens having the same baseURI._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getBatchIdAtIndex

```solidity
function getBatchIdAtIndex(uint256 _index) external view returns (uint256)
```

_Returns the id for the batch of tokens the given tokenId belongs to._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| \_index | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### lazyMint

```solidity
function lazyMint(uint256 amount, string baseURIForTokens, bytes extraData) external nonpayable returns (uint256 batchId)
```

_lazy mint a batch of tokens_

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| amount           | uint256 | undefined   |
| baseURIForTokens | string  | undefined   |
| extraData        | bytes   | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| batchId | uint256 | undefined   |

### nextTokenIdToMint

```solidity
function nextTokenIdToMint() external view returns (uint256)
```

_the next available non-minted token id_

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

_Returns the URI for a given tokenId_

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_tokenId | uint256 | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

## Events

### TokensLazyMinted

```solidity
event TokensLazyMinted(uint256 indexed startTokenId, uint256 endTokenId, string baseURI, bytes extraData)
```

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| startTokenId `indexed` | uint256 | undefined   |
| endTokenId             | uint256 | undefined   |
| baseURI                | string  | undefined   |
| extraData              | bytes   | undefined   |
