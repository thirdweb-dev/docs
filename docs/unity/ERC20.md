---
slug: /ERC20
title: ERC20
hide_title: true
displayed_sidebar: unity
---

## class `ERC20` {#class_thirdweb_1_1_e_r_c20}

Interact with any [ERC20](#class_thirdweb_1_1_e_r_c20) compatible contract.

### Summary

| Members | Type | Descriptions |
| ------- | ---- | ------------ |
| chain | variable |  |
| address | variable |  |
| signature | variable | Handle signature minting functionality |
| claimConditions | variable | Query claim conditions |
| ERC20 | function | Interact with any [ERC20](#class_thirdweb_1_1_e_r_c20) compatible contract. |
| Get | function | Get the currency information |
| Balance | function | Get the balance of the connected wallet |
| BalanceOf | function | Get the balance of the specified wallet |
| Allowance | function | Get how much allowance the given address is allowed to spend on behalf of the connected wallet |
| AllowanceOf | function | Get how much allowance the given address is allowed to spend on behalf of the specified wallet |
| TotalSupply | function | Get the total supply in circulation |
| SetAllowance | function | Set how much allowance the given address is allowed to spend on behalf of the connected wallet |
| Transfer | function | Transfer a given amount of currency to another wallet |
| Burn | function | Burn a given amount of currency |
| Claim | function | Claim a given amount of currency for compatible drop contracts |
| ClaimTo | function | Claim a given amount of currency to a given destination wallet for compatible drop contracts |
| Mint | function | Mint a given amount of currency |
| MintTo | function | Mint a given amount of currency to a given destination wallet |

### Members

**`public string `[`chain`](#class_thirdweb_1_1_e_r_c20_1ab1e4da4e4735f9480a3b701575b2256e)**

---

**`public string `[`address`](#class_thirdweb_1_1_e_r_c20_1ad8be0dfb60f225fa4ad6fdf8f5cf5cb4)**

---

**`public `[`ERC20Signature`](docs/unity/ERC20Signature.md#class_thirdweb_1_1_e_r_c20_signature)` `[`signature`](#class_thirdweb_1_1_e_r_c20_1a898630b9be6c9c1d251f79f01d54216c)**

Handle signature minting functionality

---

**`public `[`ERC20ClaimConditions`](docs/unity/ERC20ClaimConditions.md#class_thirdweb_1_1_e_r_c20_claim_conditions)` `[`claimConditions`](#class_thirdweb_1_1_e_r_c20_1ac6d87251eef3c81004530fe5c8d78229)**

Query claim conditions

---

**`public inline  `[`ERC20`](#class_thirdweb_1_1_e_r_c20_1ac6c5f341959ff43d0dbed1190265b9a3)`(string chain,string address)`**

Interact with any [ERC20](#class_thirdweb_1_1_e_r_c20) compatible contract.

---

**`public inline async Task< `[`Currency`](docs/unity/Currency.md#struct_thirdweb_1_1_currency)` > `[`Get`](#class_thirdweb_1_1_e_r_c20_1acc3cbc07eae3300faf7b36250a71b7c3)`()`**

Get the currency information

---

**`public inline async Task< `[`CurrencyValue`](docs/unity/CurrencyValue.md#struct_thirdweb_1_1_currency_value)` > `[`Balance`](#class_thirdweb_1_1_e_r_c20_1aaca1f1963dcabbab722c095f6b9c1aea)`()`**

Get the balance of the connected wallet

---

**`public inline async Task< `[`CurrencyValue`](docs/unity/CurrencyValue.md#struct_thirdweb_1_1_currency_value)` > `[`BalanceOf`](#class_thirdweb_1_1_e_r_c20_1a13c404ac14930ee4c8de7999e66fc928)`(string address)`**

Get the balance of the specified wallet

---

**`public inline async Task< string > `[`Allowance`](#class_thirdweb_1_1_e_r_c20_1acf1b8f75626a5d8a48511c122af9f6af)`(string spender)`**

Get how much allowance the given address is allowed to spend on behalf of the connected wallet

---

**`public inline async Task< string > `[`AllowanceOf`](#class_thirdweb_1_1_e_r_c20_1aeb3c15586b777402f96fbb010166131c)`(string owner,string spender)`**

Get how much allowance the given address is allowed to spend on behalf of the specified wallet

---

**`public inline async Task< `[`CurrencyValue`](docs/unity/CurrencyValue.md#struct_thirdweb_1_1_currency_value)` > `[`TotalSupply`](#class_thirdweb_1_1_e_r_c20_1a7ad53d8b08e7392bfc203ec1bba16e82)`()`**

Get the total supply in circulation

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` > `[`SetAllowance`](#class_thirdweb_1_1_e_r_c20_1ae4b416dbeab848b1d649532b49da6759)`(string spender,bool amount)`**

Set how much allowance the given address is allowed to spend on behalf of the connected wallet

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` > `[`Transfer`](#class_thirdweb_1_1_e_r_c20_1af8407284de3fac7445509232ff0969a9)`(string to,string amount)`**

Transfer a given amount of currency to another wallet

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` > `[`Burn`](#class_thirdweb_1_1_e_r_c20_1abbb4f9703642601cbc685719816378da)`(string amount)`**

Burn a given amount of currency

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` `[`Claim`](#class_thirdweb_1_1_e_r_c20_1a30a78bb89b21a99596167b4eed0ed15e)`(string amount)`**

Claim a given amount of currency for compatible drop contracts

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` `[`ClaimTo`](#class_thirdweb_1_1_e_r_c20_1a7bac058a09d3d4907eae87e454fc398f)`(string address,int amount)`**

Claim a given amount of currency to a given destination wallet for compatible drop contracts

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` > `[`Mint`](#class_thirdweb_1_1_e_r_c20_1a3e33dd90d22dcb21aad6946ea536e3d0)`(string amount)`**

Mint a given amount of currency

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` > `[`MintTo`](#class_thirdweb_1_1_e_r_c20_1af61de11c88827d057125da0b6e01146b)`(string address,string amount)`**

Mint a given amount of currency to a given destination wallet

---
