---
slug: /react.mintnftparams
title: MintNFTParams type
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## MintNFTParams type

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

The params for the [useMintNFT()](./react.usemintnft.md) hook mutation.

**Signature:**

```typescript
export declare type MintNFTParams<TContract extends NFTContract> =
  TContract extends Erc1155
    ? {
        metadata: NFTMetadataOrUri;
        supply: BigNumberish;
        to: WalletAddress;
      }
    : {
        metadata: NFTMetadataOrUri;
        to: WalletAddress;
      };
```

**References:** [NFTContract](./react.nftcontract.md), [WalletAddress](./react.walletaddress.md)
