---
slug: /Ownable
title: Ownable
hide_title: true
displayed_sidebar: contracts
---

# Ownable

## Methods

### owner

```solidity
function owner() external view returns (address)
```

_Owner of the contract (purpose: OpenSea compatibility)_

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```

_Lets a contract admin set a new owner for the contract. The new owner must be a contract admin._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_newOwner | address | undefined   |

## Events

### OwnerUpdated

```solidity
event OwnerUpdated(address prevOwner, address newOwner)
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| prevOwner | address | undefined   |
| newOwner  | address | undefined   |
