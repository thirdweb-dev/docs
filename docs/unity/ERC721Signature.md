---
slug: /ERC721Signature
title: ERC721Signature
hide_title: true
displayed_sidebar: unity
---

# class `ERC721Signature` {#class_thirdweb_1_1_e_r_c721_signature}

```
class ERC721Signature
  : public Thirdweb.Routable
```

Generate, verify and mint signed mintable payloads

### Summary

| Members         | Type     | Descriptions                                                     |
| --------------- | -------- | ---------------------------------------------------------------- |
| ERC721Signature | function | Generate, verify and mint signed mintable payloads               |
| Generate        | function | Generate a signed mintable payload. Requires minting permission. |
| Verify          | function | Verify that a signed mintable payload is valid                   |
| Mint            | function | Mint a signed mintable payload                                   |

### Members

**`public inline `[`ERC721Signature`](#class_thirdweb_1_1_e_r_c721_signature_1a5db94bfc2ba2c2f8963ede713ac0d035)`(string parentRoute)`**

Generate, verify and mint signed mintable payloads

---

**`public inline async Task< `[`ERC721SignedPayload`](docs/unity/ERC721SignedPayload.md#struct_thirdweb_1_1_e_r_c721_signed_payload)`>`[`Generate`](#class_thirdweb_1_1_e_r_c721_signature_1acf8052d6df944e5f139d9a495bd5ba3f)`(`[`ERC721MintPayload`](docs/unity/ERC721MintPayload.md#class_thirdweb_1_1_e_r_c721_mint_payload)` payloadToSign)`**

Generate a signed mintable payload. Requires minting permission.

---

**`public inline async Task< bool > `[`Verify`](#class_thirdweb_1_1_e_r_c721_signature_1ad9a686d13d0eae2b53450e77ab9d6ed6)`(`[`ERC721SignedPayload`](docs/unity/ERC721SignedPayload.md#struct_thirdweb_1_1_e_r_c721_signed_payload)` signedPayload)`**

Verify that a signed mintable payload is valid

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`Mint`](#class_thirdweb_1_1_e_r_c721_signature_1a4f49b40bc596ef51385c3aaf69a3cae3)`(`[`ERC721SignedPayload`](docs/unity/ERC721SignedPayload.md#struct_thirdweb_1_1_e_r_c721_signed_payload)` signedPayload)`**

Mint a signed mintable payload

---