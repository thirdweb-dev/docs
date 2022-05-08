---
slug: /IThirdwebContract
title: IThirdwebContract
hide_title: true
---

# IThirdwebContract

## Methods

### contractType

```solidity
function contractType() external pure returns (bytes32)
```

_Returns the module type of the contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### contractURI

```solidity
function contractURI() external view returns (string)
```

_Returns the metadata URI of the contract._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### contractVersion

```solidity
function contractVersion() external pure returns (uint8)
```

_Returns the version of the contract._

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | uint8 | undefined   |

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```

_Sets contract URI for the storefront-level metadata of the contract. Only module admin can call this function._

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| \_uri | string | undefined   |
