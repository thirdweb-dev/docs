---
slug: /IAppURI
title: IAppURI
hide_title: true
displayed_sidebar: contracts
---

# IAppURI

Thirdweb&#39;s `AppURI` is a contract extension for any base contracts. It lets you set a metadata URI for your contract.

## Methods

### appURI

```solidity
function appURI() external view returns (string)
```

_Returns the metadata URI of the contract._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### setAppURI

```solidity
function setAppURI(string _uri) external nonpayable
```

_Sets contract URI for the storefront-level metadata of the contract. Only module admin can call this function._

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| \_uri | string | undefined   |

## Events

### AppURIUpdated

```solidity
event AppURIUpdated(string prevURI, string newURI)
```

_Emitted when the contract URI is updated._

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| prevURI | string | undefined   |
| newURI  | string | undefined   |
