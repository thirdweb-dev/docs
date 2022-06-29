---
slug: /PlatformFee
title: PlatformFee
hide_title: true
displayed_sidebar: contracts
---

# PlatformFee

Thirdweb&#39;s `PlatformFee` is a contract extension to be used with any base contract. It exposes functions for setting and reading the recipient of platform fee and the platform fee basis points, and lets the inheriting contract perform conditional logic that uses information about platform fees, if desired.

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
event PlatformFeeInfoUpdated(address indexed platformFeeRecipient, uint256 platformFeeBps)
```

#### Parameters

| Name                           | Type    | Description |
| ------------------------------ | ------- | ----------- |
| platformFeeRecipient `indexed` | address | undefined   |
| platformFeeBps                 | uint256 | undefined   |

## Errors

### PlatformFee\_\_ExceedsMaxBps

```solidity
error PlatformFee__ExceedsMaxBps(uint256 platformFeeBps)
```

Emitted when given platform-fee bps exceeds max bps.

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| platformFeeBps | uint256 | undefined   |

### PlatformFee\_\_NotAuthorized

```solidity
error PlatformFee__NotAuthorized()
```

_Emitted when an unauthorized caller tries to set platform fee details._
