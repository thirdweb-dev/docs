---
slug: /TokenStore
title: TokenStore
hide_title: true
displayed_sidebar: contracts
---

# TokenStore

> Token Store

`TokenStore` contract extension allows bundling-up of ERC20/ERC721/ERC1155 and native-tokan assets and provides logic for storing, releasing, and transferring them from the extending contract.

_See {CurrencyTransferLib}_

## Methods

### getTokenCountOfBundle

```solidity
function getTokenCountOfBundle(uint256 _bundleId) external view returns (uint256)
```

_Returns the total number of assets in a particular bundle._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_bundleId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getTokenOfBundle

```solidity
function getTokenOfBundle(uint256 _bundleId, uint256 index) external view returns (struct ITokenBundle.Token)
```

_Returns an asset contained in a particular bundle, at a particular index._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_bundleId | uint256 | undefined   |
| index      | uint256 | undefined   |

#### Returns

| Name | Type               | Description |
| ---- | ------------------ | ----------- |
| \_0  | ITokenBundle.Token | undefined   |

### getUriOfBundle

```solidity
function getUriOfBundle(uint256 _bundleId) external view returns (string)
```

_Returns the uri of a particular bundle._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_bundleId | uint256 | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external nonpayable returns (bytes4)
```

#### Parameters

| Name | Type      | Description |
| ---- | --------- | ----------- |
| \_0  | address   | undefined   |
| \_1  | address   | undefined   |
| \_2  | uint256[] | undefined   |
| \_3  | uint256[] | undefined   |
| \_4  | bytes     | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | bytes4 | undefined   |

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external nonpayable returns (bytes4)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | address | undefined   |
| \_2  | uint256 | undefined   |
| \_3  | uint256 | undefined   |
| \_4  | bytes   | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | bytes4 | undefined   |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) external nonpayable returns (bytes4)
```

_See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | address | undefined   |
| \_2  | uint256 | undefined   |
| \_3  | bytes   | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | bytes4 | undefined   |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_See {IERC165-supportsInterface}._

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| interfaceId | bytes4 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |
