---
slug: /PlatformFee
title: PlatformFee
hide_title: true
displayed_sidebar: contracts
---

# PlatformFee

## Methods

### getPlatformFeeInfo

```solidity
function getPlatformFeeInfo() external view returns (address, uint16)
```

_Returns the platform fee recipient and bps._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

### setPlatformFeeInfo

```solidity
function setPlatformFeeInfo(address _platformFeeRecipient, uint256 _platformFeeBps) external nonpayable
```

_Lets a contract admin update the platform fee recipient and bps_

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| \_platformFeeRecipient | address | undefined   |
| \_platformFeeBps       | uint256 | undefined   |

## Events

### PlatformFeeInfoUpdated

```solidity
event PlatformFeeInfoUpdated(address platformFeeRecipient, uint256 platformFeeBps)
```

#### Parameters

| Name                 | Type    | Description |
| -------------------- | ------- | ----------- |
| platformFeeRecipient | address | undefined   |
| platformFeeBps       | uint256 | undefined   |
