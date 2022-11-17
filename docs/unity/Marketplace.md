---
slug: /Marketplace
title: Marketplace
hide_title: true
displayed_sidebar: unity
---

## class `Marketplace` {#class_thirdweb_1_1_marketplace}

Interact with a [Marketplace](#class_thirdweb_1_1_marketplace) contract.

### Summary

| Members           | Type     | Descriptions                                                             |
| ----------------- | -------- | ------------------------------------------------------------------------ |
| chain             | variable |                                                                          |
| address           | variable |                                                                          |
| direct            | variable | Handle direct listings                                                   |
| auction           | variable | Handle auctions                                                          |
| Marketplace       | function | Interact with a [Marketplace](#class_thirdweb_1_1_marketplace) contract. |
| GetListing        | function | READ FUNCTIONS.                                                          |
| GetAllListings    | function | Get all listings in this marketplace (including non-buyable ones)        |
| GetActiveListings | function | Get active listings in this marketplace (only ones that can be bought)   |
| GetOffers         | function | Get all offers on a listing                                              |
| BuyListing        | function | WRITE FUNCTIONS.                                                         |
| MakeOffer         | function | Make an offer on a listing                                               |

### Members

**`public string `[`chain`](#class_thirdweb_1_1_marketplace_1a29198058e94889f280093d44b4ee55d2)**

---

**`public string `[`address`](#class_thirdweb_1_1_marketplace_1af4d8e43c01a267c50a7104b88ed26eab)**

---

**`public `[`MarketplaceDirect`](docs/unity/MarketplaceDirect.md#class_thirdweb_1_1_marketplace_direct)` `[`direct`](#class_thirdweb_1_1_marketplace_1a122030796b9dd39b5515e2b1ebdf203f)**

Handle direct listings

---

**`public `[`MarketplaceAuction`](docs/unity/MarketplaceAuction.md#class_thirdweb_1_1_marketplace_auction)` `[`auction`](#class_thirdweb_1_1_marketplace_1a4b3b6a5c3cd7d949d0d5daa1db870e54)**

Handle auctions

---

**`public inline `[`Marketplace`](#class_thirdweb_1_1_marketplace_1ae9f5fee7e78e1db8e1e2de8e8e763ce3)`(string chain,string address)`**

Interact with a [Marketplace](#class_thirdweb_1_1_marketplace) contract.

---

**`public inline async Task< `[`Listing`](docs/unity/Listing.md#class_thirdweb_1_1_listing)`>`[`GetListing`](#class_thirdweb_1_1_marketplace_1aa2506d499cf41c394b901d90cf1afecf)`(string listingId)`**

READ FUNCTIONS.

Get a listing information

---

**`public inline async Task< List< `[`Listing`](docs/unity/Listing.md#class_thirdweb_1_1_listing)`> >`[`GetAllListings`](#class_thirdweb_1_1_marketplace_1a258a8094a882113a15514d298a46fb74)`(`[`MarketplaceFilter`](docs/unity/MarketplaceFilter.md#class_thirdweb_1_1_marketplace_filter)` filter)`**

Get all listings in this marketplace (including non-buyable ones)

---

**`public inline async Task< List< `[`Listing`](docs/unity/Listing.md#class_thirdweb_1_1_listing)`> >`[`GetActiveListings`](#class_thirdweb_1_1_marketplace_1abd3205f14d2e2d4f28db17b800d485ac)`(`[`MarketplaceFilter`](docs/unity/MarketplaceFilter.md#class_thirdweb_1_1_marketplace_filter)` filter)`**

Get active listings in this marketplace (only ones that can be bought)

---

**`public inline async Task< List< `[`Offer`](docs/unity/Offer.md#struct_thirdweb_1_1_offer)`> >`[`GetOffers`](#class_thirdweb_1_1_marketplace_1af0ba39e692b262fae3871c2d6874318c)`(string listingId)`**

Get all offers on a listing

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`BuyListing`](#class_thirdweb_1_1_marketplace_1a7490b25b2f4d8cfb91cd9dfe378f7597)`(string listingId,int quantityDesired,string receiverAddress)`**

WRITE FUNCTIONS.

Buy a listing

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`MakeOffer`](#class_thirdweb_1_1_marketplace_1abbbca7e3bb6f03ef1449f875c1e38e6d)`(string listingId,string pricePerToken,int? quantity)`**

Make an offer on a listing

---
