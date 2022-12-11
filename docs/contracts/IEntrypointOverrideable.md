---
slug: /IEntrypointOverrideable
title: IEntrypointOverrideable
hide_title: true
displayed_sidebar: contracts
---

# IEntrypointOverrideable

## Methods

### getAllOverriden

```solidity
function getAllOverriden() external view returns (struct IEntrypointOverrideable.ExtensionMap[] functionExtensionPairs)
```

#### Returns

| Name                   | Type                                   | Description |
| ---------------------- | -------------------------------------- | ----------- |
| functionExtensionPairs | IEntrypointOverrideable.ExtensionMap[] | undefined   |

### overrideExtensionForFunction

```solidity
function overrideExtensionForFunction(bytes4 _selector, address _extension) external nonpayable
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| \_selector  | bytes4  | undefined   |
| \_extension | address | undefined   |
