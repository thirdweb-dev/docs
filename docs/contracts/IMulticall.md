---
slug: /IMulticall
title: IMulticall
hide_title: true
displayed_sidebar: contracts
---

# IMulticall

_Provides a function to batch together multiple calls in a single external call. *Available since v4.1.*_

## Methods

### multicall

```solidity
function multicall(bytes[] data) external nonpayable returns (bytes[] results)
```

_Receives and executes a batch of function calls on this contract._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| data | bytes[] | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| results | bytes[] | undefined   |
