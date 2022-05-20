---
slug: /Royalty
title: Royalty
hide_title: true
displayed_sidebar: contracts
---

# Royalty

## Methods

### getDefaultRoyaltyInfo

```solidity
function getDefaultRoyaltyInfo() external view returns (address, uint16)
```

_Returns the default royalty recipient and bps._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

### getRoyaltyInfoForToken

```solidity
function getRoyaltyInfoForToken(uint256 _tokenId) external view returns (address, uint16)
```

_Returns the royalty recipient and bps for a particular token Id._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_tokenId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

### royaltyInfo

```solidity
function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount)
```

_Returns the royalty recipient and amount, given a tokenId and sale price._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| tokenId   | uint256 | undefined   |
| salePrice | uint256 | undefined   |

#### Returns

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| receiver      | address | undefined   |
| royaltyAmount | uint256 | undefined   |

### setDefaultRoyaltyInfo

```solidity
function setDefaultRoyaltyInfo(address _royaltyRecipient, uint256 _royaltyBps) external nonpayable
```

_Lets a contract admin update the default royalty recipient and bps._

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| \_royaltyRecipient | address | undefined   |
| \_royaltyBps       | uint256 | undefined   |

### setRoyaltyInfoForToken

```solidity
function setRoyaltyInfoForToken(uint256 _tokenId, address _recipient, uint256 _bps) external nonpayable
```

_Lets a contract admin set the royalty recipient and bps for a particular token Id._

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| \_tokenId   | uint256 | undefined   |
| \_recipient | address | undefined   |
| \_bps       | uint256 | undefined   |

## Events

### DefaultRoyalty

```solidity
event DefaultRoyalty(address newRoyaltyRecipient, uint256 newRoyaltyBps)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| newRoyaltyRecipient | address | undefined   |
| newRoyaltyBps       | uint256 | undefined   |

### RoyaltyForToken

```solidity
event RoyaltyForToken(uint256 indexed tokenId, address royaltyRecipient, uint256 royaltyBps)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| tokenId `indexed` | uint256 | undefined   |
| royaltyRecipient  | address | undefined   |
| royaltyBps        | uint256 | undefined   |
