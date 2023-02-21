---
slug: /MarketplaceAuction
title: MarketplaceAuction
hide_title: true
displayed_sidebar: unity
---

# class `MarketplaceAuction` {#class_thirdweb_1_1_marketplace_auction}

```
class MarketplaceAuction
  : public Thirdweb.Routable
```

# Summary

| Members            | Type     | Descriptions |
| ------------------ | -------- | ------------ |
| MarketplaceAuction | function |              |
| GetListing         | function |              |
| GetWinningBid      | function |              |
| GetMinimumNextBid  | function |              |
| GetWinner          | function |              |
| CreateListing      | function |              |
| CancelListing      | function |              |
| ExecuteSale        | function |              |

## Members

**`public inline `[`MarketplaceAuction`](#class_thirdweb_1_1_marketplace_auction_1a4e2dd160750e3621c04c6736b82614f1)`(string parentRoute)`**

---

**`public inline async Task< `[`AuctionListing`](docs/unity/AuctionListing.md#class_thirdweb_1_1_auction_listing)`>`[`GetListing`](#class_thirdweb_1_1_marketplace_auction_1ac70b56f4742cd613adf238f81c557b2e)`(string listingId)`**

---

**`public inline async Task< `[`Offer`](docs/unity/Offer.md#struct_thirdweb_1_1_offer)`>`[`GetWinningBid`](#class_thirdweb_1_1_marketplace_auction_1a8af165713003442fb31b15ea76ead6d0)`(string listingId)`**

---

**`public inline async Task< `[`CurrencyValue`](docs/unity/CurrencyValue.md#struct_thirdweb_1_1_currency_value)`>`[`GetMinimumNextBid`](#class_thirdweb_1_1_marketplace_auction_1ab8b027a4c73a40df7caea2ea37051874)`(string listingId)`**

---

**`public inline async Task< string > `[`GetWinner`](#class_thirdweb_1_1_marketplace_auction_1a2d65d7635f15b2ba0b240cea628893ea)`(string listingId)`**

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`CreateListing`](#class_thirdweb_1_1_marketplace_auction_1a5389fc7614945a9278a4cde1d867e5e2)`(`[`NewAuctionListing`](docs/unity/NewAuctionListing.md#class_thirdweb_1_1_new_auction_listing)` listing)`**

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`CancelListing`](#class_thirdweb_1_1_marketplace_auction_1a72cfddaaa9adef6aa2691af390f1bec7)`(string listingId)`**

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`ExecuteSale`](#class_thirdweb_1_1_marketplace_auction_1a6b478339202f3d93a508a11d00373843)`(string listingId)`**

---
