---
slug: /ERC20Signature
title: ERC20Signature
hide_title: true
displayed_sidebar: unity
---

# class `ERC20Signature` {#class_thirdweb_1_1_e_r_c20_signature}

```
class ERC20Signature
  : public Thirdweb.Routable
```

Generate, verify and mint signed mintable payloads

# Summary

| Members        | Type     | Descriptions                                                     |
| -------------- | -------- | ---------------------------------------------------------------- |
| ERC20Signature | function | Generate, verify and mint signed mintable payloads               |
| Generate       | function | Generate a signed mintable payload. Requires minting permission. |
| Verify         | function | Verify that a signed mintable payload is valid                   |
| Mint           | function | Mint a signed mintable payload                                   |

### Members

**`public inline `[`ERC20Signature`](#class_thirdweb_1_1_e_r_c20_signature_1a24462dd79c205e7cda11618a76423550)`(string parentRoute)`**

Generate, verify and mint signed mintable payloads

---

**`public inline async Task< `[`ERC20SignedPayload`](docs/unity/ERC20SignedPayload.md#struct_thirdweb_1_1_e_r_c20_signed_payload)`>`[`Generate`](#class_thirdweb_1_1_e_r_c20_signature_1aa52e5be7ae05b4426963bd14457a7b65)`(`[`ERC20MintPayload`](docs/unity/ERC20MintPayload.md#class_thirdweb_1_1_e_r_c20_mint_payload)` payloadToSign)`**

Generate a signed mintable payload. Requires minting permission.

---

**`public inline async Task< bool > `[`Verify`](#class_thirdweb_1_1_e_r_c20_signature_1afe9d849bba0d6afb1541ca183c2017b2)`(`[`ERC20SignedPayload`](docs/unity/ERC20SignedPayload.md#struct_thirdweb_1_1_e_r_c20_signed_payload)` signedPayload)`**

Verify that a signed mintable payload is valid

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`Mint`](#class_thirdweb_1_1_e_r_c20_signature_1a63464c4c5c2cacd9d14cf82b118a2171)`(`[`ERC20SignedPayload`](docs/unity/ERC20SignedPayload.md#struct_thirdweb_1_1_e_r_c20_signed_payload)` signedPayload)`**

Mint a signed mintable payload

---
