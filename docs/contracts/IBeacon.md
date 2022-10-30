---
slug: /IBeacon
title: IBeacon
hide_title: true
displayed_sidebar: contracts
---

# IBeacon

_This is the interface that {BeaconProxy} expects of its beacon._

## Methods

### implementation

```solidity
function implementation() external view returns (address)
```

_Must return an address that can be used as a delegate call target. {BeaconProxy} will check that this address is a contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
