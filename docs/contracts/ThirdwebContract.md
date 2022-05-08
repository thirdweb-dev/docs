---
slug: /ThirdwebContract
title: ThirdwebContract
hide_title: true
---

# ThirdwebContract

## Methods

### contractURI

```solidity
function contractURI() external view returns (string)
```

_The metadata for this contract._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### getPublishMetadataUri

```solidity
function getPublishMetadataUri() external view returns (string)
```

_Returns the publish metadata for this contract._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### setThirdwebInfo

```solidity
function setThirdwebInfo(ThirdwebContract.ThirdwebInfo _thirdwebInfo) external nonpayable
```

_Initializes the publish metadata and contract metadata at deploy time._

#### Parameters

| Name           | Type                          | Description |
| -------------- | ----------------------------- | ----------- |
| \_thirdwebInfo | ThirdwebContract.ThirdwebInfo | undefined   |
