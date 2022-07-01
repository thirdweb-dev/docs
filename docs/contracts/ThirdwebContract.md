---
slug: /ThirdwebContract
title: ThirdwebContract
hide_title: true
displayed_sidebar: contracts
---

# ThirdwebContract

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

_Lets a contract admin set a new owner for the contract. The new owner must be a contract admin._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_newOwner | address | undefined   |

### tw_initializeOwner

```solidity
function tw_initializeOwner(address deployer) external nonpayable
```

_Initializes the owner of the contract._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| deployer | address | undefined   |

## Events

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed prevOwner, address indexed newOwner)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| prevOwner `indexed` | address | undefined   |
| newOwner `indexed`  | address | undefined   |

## Errors

### Ownable\_\_NotAuthorized

```solidity
error Ownable__NotAuthorized()
```

_Emitted when an unauthorized caller tries to set the owner._
