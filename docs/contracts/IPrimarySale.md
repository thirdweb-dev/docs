---
slug: /IPrimarySale
title: IPrimarySale
hide_title: true
displayed_sidebar: contracts
---

# IPrimarySale

## Methods

### primarySaleRecipient

```solidity
function primarySaleRecipient() external view returns (address)
```

_The adress that receives all primary sales value._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### setPrimarySaleRecipient

```solidity
function setPrimarySaleRecipient(address _saleRecipient) external nonpayable
```

_Lets a module admin set the default recipient of all primary sales._

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| \_saleRecipient | address | undefined   |

## Events

### PrimarySaleRecipientUpdated

```solidity
event PrimarySaleRecipientUpdated(address indexed recipient)
```

_Emitted when a new sale recipient is set._

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| recipient `indexed` | address | undefined   |
