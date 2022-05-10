---
slug: /PrimarySale
title: PrimarySale
hide_title: true
displayed_sidebar: contracts
---

# PrimarySale

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

_Lets a contract admin set the recipient for all primary sales._

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| \_saleRecipient | address | undefined   |

## Events

### PrimarySaleRecipientUpdated

```solidity
event PrimarySaleRecipientUpdated(address indexed recipient)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| recipient `indexed` | address | undefined   |
