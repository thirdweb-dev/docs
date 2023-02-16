---
slug: /ERC1155Signature
title: ERC1155Signature
hide_title: true
displayed_sidebar: unity
---

# class `ERC1155Signature` {#class_thirdweb_1_1_e_r_c1155_signature}

```
class ERC1155Signature
  : public Thirdweb.Routable
```

Generate, verify and mint signed mintable payloads

# Summary

| Members             | Type     | Descriptions                                                     |
| ------------------- | -------- | ---------------------------------------------------------------- |
| ERC1155Signature    | function | Generate, verify and mint signed mintable payloads               |
| Generate            | function | Generate a signed mintable payload. Requires minting permission. |
| GenerateFromTokenId | function |                                                                  |
| Verify              | function | Verify that a signed mintable payload is valid                   |
| Mint                | function | Mint a signed mintable payload                                   |

### Members

**`public inline `[`ERC1155Signature`](#class_thirdweb_1_1_e_r_c1155_signature_1a4096b9488c1a50363c78fee5d3835d90)`(string parentRoute)`**

Generate, verify and mint signed mintable payloads

---

**`public inline async Task< `[`ERC1155SignedPayload`](docs/unity/ERC1155SignedPayload.md#struct_thirdweb_1_1_e_r_c1155_signed_payload)`>`[`Generate`](#class_thirdweb_1_1_e_r_c1155_signature_1a7a19d9f81e0f69243a28a37ad3f7aa3d)`(`[`ERC1155MintPayload`](docs/unity/ERC1155MintPayload.md#class_thirdweb_1_1_e_r_c1155_mint_payload)` payloadToSign)`**

Generate a signed mintable payload. Requires minting permission.

---

**`public inline async Task< `[`ERC1155SignedPayload`](docs/unity/ERC1155SignedPayload.md#struct_thirdweb_1_1_e_r_c1155_signed_payload)`>`[`GenerateFromTokenId`](#class_thirdweb_1_1_e_r_c1155_signature_1adae7a92cab92a99f68fb0e3adb8d485b)`(`[`ERC1155MintAdditionalPayload`](docs/unity/ERC1155MintAdditionalPayload.md#class_thirdweb_1_1_e_r_c1155_mint_additional_payload)` payloadToSign)`**

---

**`public inline async Task< bool > `[`Verify`](#class_thirdweb_1_1_e_r_c1155_signature_1aa8883eef959cfe7c12b55738d4994aae)`(`[`ERC1155SignedPayload`](docs/unity/ERC1155SignedPayload.md#struct_thirdweb_1_1_e_r_c1155_signed_payload)` signedPayload)`**

Verify that a signed mintable payload is valid

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`Mint`](#class_thirdweb_1_1_e_r_c1155_signature_1a80df859d6f1137dcdf892d2e1cbfb292)`(`[`ERC1155SignedPayload`](docs/unity/ERC1155SignedPayload.md#struct_thirdweb_1_1_e_r_c1155_signed_payload)` signedPayload)`**

Mint a signed mintable payload

---
