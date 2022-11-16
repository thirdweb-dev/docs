---
slug: /ERC721Signature
title: ERC721Signature
hide_title: true
displayed_sidebar: unity
---

## class `ERC721Signature` {#class_thirdweb_1_1_e_r_c721_signature}

### Summary

| Members | Type | Descriptions |
| ------- | ---- | ------------ |
| chain | variable |  |
| address | variable |  |
| ERC721Signature | function |  |
| Generate | function |  |
| Verify | function |  |
| Mint | function |  |

### Members

**`public string `[`chain`](#class_thirdweb_1_1_e_r_c721_signature_1ac5b5f797a7f39b712f63840968968f02)**

---

**`public string `[`address`](#class_thirdweb_1_1_e_r_c721_signature_1a12858ae675a17ddd7efffd5eb6f609c1)**

---

**`public inline  `[`ERC721Signature`](#class_thirdweb_1_1_e_r_c721_signature_1a8c80d1708ee1851f070436b3464b6640)`(string chain,string address)`**

---

**`public inline async Task< `[`ERC721SignedPayload`](docs/unity/ERC721SignedPayload.md#struct_thirdweb_1_1_e_r_c721_signed_payload)` > `[`Generate`](#class_thirdweb_1_1_e_r_c721_signature_1acf8052d6df944e5f139d9a495bd5ba3f)`(`[`ERC721MintPayload`](docs/unity/ERC721MintPayload.md#class_thirdweb_1_1_e_r_c721_mint_payload)` payloadToSign)`**

---

**`public inline async Task< bool > `[`Verify`](#class_thirdweb_1_1_e_r_c721_signature_1ad9a686d13d0eae2b53450e77ab9d6ed6)`(`[`ERC721SignedPayload`](docs/unity/ERC721SignedPayload.md#struct_thirdweb_1_1_e_r_c721_signed_payload)` signedPayload)`**

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)` > `[`Mint`](#class_thirdweb_1_1_e_r_c721_signature_1a4f49b40bc596ef51385c3aaf69a3cae3)`(`[`ERC721SignedPayload`](docs/unity/ERC721SignedPayload.md#struct_thirdweb_1_1_e_r_c721_signed_payload)` signedPayload)`**

---
