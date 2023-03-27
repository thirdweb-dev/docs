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

Get the contract primary sale recipient

```python
primary_sale_recipient = contract.sales.get_recipient()
print(primary_sale_recipient)
```

**Returns**:

the address of the primary sale recipient.

<a id="core.classes.contract_sales.ContractPrimarySale.set_recipient"></a>

#### set_recipient

```python
def set_recipient(recipient: str) -> TxReceipt
```

Set the contract primary sale recipient

```python
primary_sale_recipient = "{{wallet_address}}"

receipt = contract.sales.set_recipient(primary_sale_recipient)
```

**Arguments**:

- `recipient`: the address of the primary sale recipient.

**Returns**:

the transaction receipt.
