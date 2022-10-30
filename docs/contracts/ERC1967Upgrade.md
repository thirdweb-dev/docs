---
slug: /ERC1967Upgrade
title: ERC1967Upgrade
hide_title: true
displayed_sidebar: contracts
---

# ERC1967Upgrade

_This abstract contract provides getters and event emitting update functions for https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots. *Available since v4.1.*_

## Events

### AdminChanged

```solidity
event AdminChanged(address previousAdmin, address newAdmin)
```

_Emitted when the admin account has changed._

#### Parameters

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| previousAdmin | address | undefined   |
| newAdmin      | address | undefined   |

### BeaconUpgraded

```solidity
event BeaconUpgraded(address indexed beacon)
```

_Emitted when the beacon is upgraded._

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| beacon `indexed` | address | undefined   |

### Upgraded

```solidity
event Upgraded(address indexed implementation)
```

_Emitted when the implementation is upgraded._

#### Parameters

| Name                     | Type    | Description |
| ------------------------ | ------- | ----------- |
| implementation `indexed` | address | undefined   |
