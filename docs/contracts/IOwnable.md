---
slug: /IOwnable
title: IOwnable
hide_title: true
displayed_sidebar: contracts
---

# IOwnable

## Methods

### owner

```solidity
function owner() external view returns (address)
```

_Returns the owner of the contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```

_Lets a module admin set a new owner for the contract. The new owner must be a module admin._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_newOwner | address | undefined   |

## Events

### OwnerUpdated

```solidity
event OwnerUpdated(address prevOwner, address newOwner)
```

_Emitted when a new Owner is set._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| prevOwner | address | undefined   |
| newOwner  | address | undefined   |
