---
slug: /react.usetotalcirculatingsupplyparams
title: useTotalCirculatingSupplyParams type
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useTotalCirculatingSupplyParams type

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

The params to pass to `useTotalCirculatingSupply`.

**Signature:**

```typescript
export declare type useTotalCirculatingSupplyParams<TContract> =
  TContract extends Erc1155
    ? [contract: RequiredParam<TContract>, tokenId: BigNumberish]
    : [contract: RequiredParam<TContract>];
```

**References:** [RequiredParam](./react.requiredparam.md)
