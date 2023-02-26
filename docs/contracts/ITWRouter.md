---
slug: /ITWRouter
title: ITWRouter
hide_title: true
displayed_sidebar: contracts
---

# ITWRouter

## Methods

### addExtension

```solidity
function addExtension(string extensionName) external nonpayable
```

_Adds a new extension to the router._

#### Parameters

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| extensionName | string | undefined   |

### getAllExtensions

```solidity
function getAllExtensions() external view returns (struct IExtension.Extension[])
```

_Returns all extensions stored._

#### Returns

| Name | Type                   | Description |
| ---- | ---------------------- | ----------- |
| \_0  | IExtension.Extension[] | undefined   |

### getAllFunctionsOfExtension

```solidity
function getAllFunctionsOfExtension(string extensionName) external view returns (struct IExtension.ExtensionFunction[])
```

_Returns all functions that belong to the given extension contract._

#### Parameters

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| extensionName | string | undefined   |

#### Returns

| Name | Type                           | Description |
| ---- | ------------------------------ | ----------- |
| \_0  | IExtension.ExtensionFunction[] | undefined   |

### getExtension

```solidity
function getExtension(string extensionName) external view returns (struct IExtension.Extension)
```

_Returns the extension metadata and functions for a given extension._

#### Parameters

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| extensionName | string | undefined   |

#### Returns

| Name | Type                 | Description |
| ---- | -------------------- | ----------- |
| \_0  | IExtension.Extension | undefined   |

### getExtensionForFunction

```solidity
function getExtensionForFunction(bytes4 functionSelector) external view returns (struct IExtension.ExtensionMetadata)
```

_Returns the extension metadata for a given function._

#### Parameters

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| functionSelector | bytes4 | undefined   |

#### Returns

| Name | Type                         | Description |
| ---- | ---------------------------- | ----------- |
| \_0  | IExtension.ExtensionMetadata | undefined   |

### getExtensionImplementation

```solidity
function getExtensionImplementation(string extensionName) external view returns (address)
```

_Returns the extension&#39;s implementation smart contract address._

#### Parameters

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| extensionName | string | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### removeExtension

```solidity
function removeExtension(string extensionName) external nonpayable
```

_Removes an existing extension from the router._

#### Parameters

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| extensionName | string | undefined   |

### updateExtension

```solidity
function updateExtension(string extensionName) external nonpayable
```

_Updates an existing extension in the router, or overrides a default extension._

#### Parameters

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| extensionName | string | undefined   |

## Events

### ExtensionAdded

```solidity
event ExtensionAdded(address indexed extensionAddress, bytes4 indexed functionSelector, string functionSignature)
```

#### Parameters

| Name                       | Type    | Description |
| -------------------------- | ------- | ----------- |
| extensionAddress `indexed` | address | undefined   |
| functionSelector `indexed` | bytes4  | undefined   |
| functionSignature          | string  | undefined   |

### ExtensionRemoved

```solidity
event ExtensionRemoved(address indexed extensionAddress, bytes4 indexed functionSelector, string functionSignature)
```

#### Parameters

| Name                       | Type    | Description |
| -------------------------- | ------- | ----------- |
| extensionAddress `indexed` | address | undefined   |
| functionSelector `indexed` | bytes4  | undefined   |
| functionSignature          | string  | undefined   |

### ExtensionUpdated

```solidity
event ExtensionUpdated(address indexed oldExtensionAddress, address indexed newExtensionAddress, bytes4 indexed functionSelector, string functionSignature)
```

#### Parameters

| Name                          | Type    | Description |
| ----------------------------- | ------- | ----------- |
| oldExtensionAddress `indexed` | address | undefined   |
| newExtensionAddress `indexed` | address | undefined   |
| functionSelector `indexed`    | bytes4  | undefined   |
| functionSignature             | string  | undefined   |
