---
slug: /reference/sdk.nftdrop.claim
title: NFTDrop.claim property
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# NFTDrop.claim property

Claim NFTs to the connected wallet.

**Signature:**

```typescript
claim: {
        (quantity: BigNumberish, checkERC20Allowance?: any): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (quantity: BigNumberish, checkERC20Allowance?: any) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
```

## Remarks

See [NFTDrop.claimTo](./sdk.nftdrop.claimto.md)