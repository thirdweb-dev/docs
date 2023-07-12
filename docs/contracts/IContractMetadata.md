---
slug: /IContractMetadata
title: IContractMetadata
hide_title: true
displayed_sidebar: contracts
---

# IContractMetadata

Thirdweb&#39;s `ContractMetadata` is a contract extension for any base contracts. It lets you set a metadata URI for your contract. Additionally, `ContractMetadata` is necessary for NFT contracts that want royalties to get distributed on OpenSea.

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

## Events

### ContractURIUpdated

```solidity
event ContractURIUpdated(string prevURI, string newURI)
```

_Emitted when the contract URI is updated._

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| prevURI | string | undefined   |
| newURI  | string | undefined   |
