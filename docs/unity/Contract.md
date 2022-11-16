---
slug: /Contract
title: Contract
hide_title: true
displayed_sidebar: unity
---

## class `Contract` {#class_thirdweb_1_1_contract}

Convenient wrapper to interact with any EVM contract

### Summary

| Members | Type | Descriptions |
| ------- | ---- | ------------ |
| chain | variable |  |
| address | variable |  |
| abi | variable |  |
| ERC20 | variable | Call any [ERC20](docs/unity/ERC20.md#class_thirdweb_1_1_e_r_c20) supported functions |
| ERC721 | variable | Call any [ERC721](docs/unity/ERC721.md#class_thirdweb_1_1_e_r_c721) supported functions |
| ERC1155 | variable | Call any [ERC1155](docs/unity/ERC1155.md#class_thirdweb_1_1_e_r_c1155) supported functions |
| marketplace | variable | Call any [Marketplace](docs/unity/Marketplace.md#class_thirdweb_1_1_marketplace) supported functions |
| Contract | function |  |
| Read< T > | function | Read data from a contract |
| Write | function | Execute a write transaction on a contract |

### Members

**`public string `[`chain`](#class_thirdweb_1_1_contract_1ab674895831e2f9aae85200f6125d0ba6)**

---

**`public string `[`address`](#class_thirdweb_1_1_contract_1a16c186e6d7438c6675c3705070ca3968)**

---

**`public string `[`abi`](#class_thirdweb_1_1_contract_1ad8dfda9a3e4820227da3509ddbcea493)**

---

**`public `[`ERC20`](docs/unity/ERC20.md#class_thirdweb_1_1_e_r_c20)` `[`ERC20`](#class_thirdweb_1_1_contract_1a574d93dc3847f67e49f8e2ead608fc38)**

Call any [ERC20](docs/unity/ERC20.md#class_thirdweb_1_1_e_r_c20) supported functions

---

**`public `[`ERC721`](docs/unity/ERC721.md#class_thirdweb_1_1_e_r_c721)` `[`ERC721`](#class_thirdweb_1_1_contract_1a9d87c284582fd14cd5a320d79c44d475)**

Call any [ERC721](docs/unity/ERC721.md#class_thirdweb_1_1_e_r_c721) supported functions

---

**`public `[`ERC1155`](docs/unity/ERC1155.md#class_thirdweb_1_1_e_r_c1155)` `[`ERC1155`](#class_thirdweb_1_1_contract_1a88b9a0017a43ef91c1e0393b9ed0612e)**

Call any [ERC1155](docs/unity/ERC1155.md#class_thirdweb_1_1_e_r_c1155) supported functions

---

**`public `[`Marketplace`](docs/unity/Marketplace.md#class_thirdweb_1_1_marketplace)` `[`marketplace`](#class_thirdweb_1_1_contract_1a4403971d3beb4116fc6cfed5062a7401)**

Call any [Marketplace](docs/unity/Marketplace.md#class_thirdweb_1_1_marketplace) supported functions

---

**`public inline  `[`Contract`](#class_thirdweb_1_1_contract_1a27550a2733b64016c83843d25fa3e5f1)`(string chain,string address,string abi)`**

---

**`public inline async Task< T > `[`Read< T >`](#class_thirdweb_1_1_contract_1a07e3a5e62fe08c44a42231f049c2d23e)`(string functionName,params object[] args)`**

Read data from a contract

#### Parameters
* `functionName` The contract function name to call

* `args` The function arguments. Structs and Lists will get serialized automatically

#### Returns
The data deserialized to the given typed

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` > `[`Write`](#class_thirdweb_1_1_contract_1a0d72328ca63f71f2eb420a05f23c480e)`(string functionName,params object[] args)`**

Execute a write transaction on a contract

#### Parameters
* `functionName` The contract function name to call

* `args` The function arguments. Structs and Lists will get serialized automatically

#### Returns
The transaction receipt

---
