---
slug: /ContractMetadata
title: ContractMetadata
hide_title: true
displayed_sidebar: contracts
---

# ContractMetadata

Thirdweb&#39;s `ContractMetadata` is a contract extension for any base contracts. It lets you set a metadata URI for you contract. Additionally, `ContractMetadata` is necessary for NFT contracts that want royalties to get distributed on OpenSea.

## Methods

### contractURI

```solidity
function contractURI() external view returns (string)
```

_Contract level metadata._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```

_Lets a contract admin set the URI for contract-level metadata._

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| \_uri | string | undefined   |

## Events

### ContractURIUpdated

```solidity
event ContractURIUpdated(string prevURI, string newURI)
```

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| prevURI | string | undefined   |
| newURI  | string | undefined   |
