---
slug: /contract-sales
title: ContractPrimarySale Objects
hide_title: true
displayed_sidebar: python
---

<a id="core.classes.contract_sales"></a>

# core.classes.contract_sales

<a id="core.classes.contract_sales.ContractPrimarySale"></a>

## ContractPrimarySale Objects

```python
class ContractPrimarySale(Generic[TPrimarySaleABI])
```

<a id="core.classes.contract_sales.ContractPrimarySale.get_recipient"></a>

#### get_recipient

```python
def get_recipient() -> str
```

Get the primary sale recipient of this contract.

**Returns**:

the address of the primary sale recipient.

<a id="core.classes.contract_sales.ContractPrimarySale.set_recipient"></a>

#### set_recipient

```python
def set_recipient(recipient: str) -> TxReceipt
```

Set the primary sale recipient of this contract

**Arguments**:

- `recipient`: the address of the primary sale recipient.

**Returns**:

the transaction receipt.
