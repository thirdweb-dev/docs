---
slug: /IContractMetadataRegistry
title: IContractMetadataRegistry
hide_title: true
displayed_sidebar: contracts
---

# IContractMetadataRegistry

## Methods

### registerMetadata

```solidity
function registerMetadata(address contractAddress, string metadataUri) external nonpayable
```

_Records `metadataUri` as metadata for the contract at `contractAddress`._

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| contractAddress | address | undefined   |
| metadataUri     | string  | undefined   |

## Events

### MetadataRegistered

```solidity
event MetadataRegistered(address indexed contractAddress, string metadataUri)
```

_Emitted when a contract metadata is registered_

#### Parameters

| Name                      | Type    | Description |
| ------------------------- | ------- | ----------- |
| contractAddress `indexed` | address | undefined   |
| metadataUri               | string  | undefined   |
