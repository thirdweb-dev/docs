---
slug: /IRouter
title: IRouter
hide_title: true
displayed_sidebar: contracts
---

# IRouter

## Methods

### addPlugin

```solidity
function addPlugin(IPluginMap.Plugin plugin) external nonpayable
```

#### Parameters

| Name   | Type              | Description |
| ------ | ----------------- | ----------- |
| plugin | IPluginMap.Plugin | undefined   |

### getAllFunctionsOfPlugin

```solidity
function getAllFunctionsOfPlugin(address pluginAddress) external view returns (bytes4[])
```

_Returns all functions that are mapped to the given plug-in contract._

#### Parameters

| Name          | Type    | Description |
| ------------- | ------- | ----------- |
| pluginAddress | address | undefined   |

#### Returns

| Name | Type     | Description |
| ---- | -------- | ----------- |
| \_0  | bytes4[] | undefined   |

### getAllPlugins

```solidity
function getAllPlugins() external view returns (struct IPluginMap.Plugin[])
```

_Returns all plug-ins known by Map._

#### Returns

| Name | Type                | Description |
| ---- | ------------------- | ----------- |
| \_0  | IPluginMap.Plugin[] | undefined   |

### getPluginForFunction

```solidity
function getPluginForFunction(bytes4 functionSelector) external view returns (address)
```

_Returns the plug-in contract for a given function._

#### Parameters

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| functionSelector | bytes4 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### removePlugin

```solidity
function removePlugin(bytes4 functionSelector) external nonpayable
```

_Remove an existing plugin from the contract._

#### Parameters

| Name             | Type   | Description |
| ---------------- | ------ | ----------- |
| functionSelector | bytes4 | undefined   |

### updatePlugin

```solidity
function updatePlugin(IPluginMap.Plugin plugin) external nonpayable
```

#### Parameters

| Name   | Type              | Description |
| ------ | ----------------- | ----------- |
| plugin | IPluginMap.Plugin | undefined   |

## Events

### PluginAdded

```solidity
event PluginAdded(bytes4 indexed functionSelector, address indexed pluginAddress)
```

_Emitted when a functionality is added, or plugged-in._

#### Parameters

| Name                       | Type    | Description |
| -------------------------- | ------- | ----------- |
| functionSelector `indexed` | bytes4  | undefined   |
| pluginAddress `indexed`    | address | undefined   |

### PluginRemoved

```solidity
event PluginRemoved(bytes4 indexed functionSelector, address indexed pluginAddress)
```

_Emitted when a functionality is removed._

#### Parameters

| Name                       | Type    | Description |
| -------------------------- | ------- | ----------- |
| functionSelector `indexed` | bytes4  | undefined   |
| pluginAddress `indexed`    | address | undefined   |

### PluginSet

```solidity
event PluginSet(bytes4 indexed functionSelector, string indexed functionSignature, address indexed pluginAddress)
```

#### Parameters

| Name                        | Type    | Description |
| --------------------------- | ------- | ----------- |
| functionSelector `indexed`  | bytes4  | undefined   |
| functionSignature `indexed` | string  | undefined   |
| pluginAddress `indexed`     | address | undefined   |

### PluginUpdated

```solidity
event PluginUpdated(bytes4 indexed functionSelector, address indexed oldPluginAddress, address indexed newPluginAddress)
```

_Emitted when a functionality is updated or overridden._

#### Parameters

| Name                       | Type    | Description |
| -------------------------- | ------- | ----------- |
| functionSelector `indexed` | bytes4  | undefined   |
| oldPluginAddress `indexed` | address | undefined   |
| newPluginAddress `indexed` | address | undefined   |
