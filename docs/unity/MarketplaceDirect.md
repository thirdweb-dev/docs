---
slug: /MarketplaceDirect
title: MarketplaceDirect
hide_title: true
displayed_sidebar: unity
---

## class `MarketplaceDirect` {#class_thirdweb_1_1_marketplace_direct}

### Summary

| Members           | Type     | Descriptions |
| ----------------- | -------- | ------------ |
| chain             | variable |              |
| address           | variable |              |
| MarketplaceDirect | function |              |
| GetListing        | function |              |
| GetActiveOffer    | function |              |
| CreateListing     | function |              |
| AcceptOffer       | function |              |
| CancelListing     | function |              |

### Members

**`public string `[`chain`](#class_thirdweb_1_1_marketplace_direct_1a71fe2680819d19bb2f5a3438a40c5d80)**

---

**`public string `[`address`](#class_thirdweb_1_1_marketplace_direct_1ac53e8254f7de1d6edadaddfc2f206d31)**

---

**`public inline `[`MarketplaceDirect`](#class_thirdweb_1_1_marketplace_direct_1a0502828aef1c9e0420de0a144b30efb2)`(string chain,string address)`**

---

**`public inline async Task< `[`DirectListing`](docs/unity/DirectListing.md#class_thirdweb_1_1_direct_listing)`>`[`GetListing`](#class_thirdweb_1_1_marketplace_direct_1aa3ed91c48d7897419c7ec5fdec6e9187)`(string listingId)`**

---

**`public inline async Task< `[`Offer`](docs/unity/Offer.md#struct_thirdweb_1_1_offer)`>`[`GetActiveOffer`](#class_thirdweb_1_1_marketplace_direct_1a117471f0a9328f6e6f7c7f5923f6eae2)`(string listingId,string address)`**

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`CreateListing`](#class_thirdweb_1_1_marketplace_direct_1ade422316cef05d00f543dfa52d62597f)`(`[`NewDirectListing`](docs/unity/NewDirectListing.md#class_thirdweb_1_1_new_direct_listing)` listing)`**

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`AcceptOffer`](#class_thirdweb_1_1_marketplace_direct_1ad5df866e9fd43db1a186665113ec914c)`(`[`NewDirectListing`](docs/unity/NewDirectListing.md#class_thirdweb_1_1_new_direct_listing)` listing,string addressOfOfferor)`**

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`CancelListing`](#class_thirdweb_1_1_marketplace_direct_1a39f1335cbc61ef7ced1b2c6ce1819fac)`(string listingId)`**

---
