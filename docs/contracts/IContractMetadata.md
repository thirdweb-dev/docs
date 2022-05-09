---
slug: /IContractMetadata
title: IContractMetadata
hide_title: true
---

# IContractMetadata

## Methods

### contractURI

```solidity
function contractURI() external view returns (string)
```

_Returns the metadata URI of the contract._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```

_Sets contract URI for the storefront-level metadata of the contract. Only module admin can call this function._

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| \_uri | string | undefined   |
