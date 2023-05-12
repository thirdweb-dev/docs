---
slug: /reference/sdk.marketplace.setbidbufferbps
title: Marketplace.setBidBufferBps property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Marketplace.setBidBufferBps property

Set the Auction bid buffer

## Example

```javascript
// the bid buffer in basis points
const bufferBps = 5_00; // 5%
await contract.setBidBufferBps(bufferBps);
```

**Signature:**

```typescript
setBidBufferBps: {
        (bufferBps: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (bufferBps: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
```

## Remarks

A percentage (e.g. 5%) in basis points (5% = 500, 100% = 10000). A new bid is considered to be a winning bid only if its bid amount is at least the bid buffer (e.g. 5%) greater than the previous winning bid. This prevents buyers from making very slightly higher bids to win the auctioned items.