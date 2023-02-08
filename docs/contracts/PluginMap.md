---
slug: /PluginMap
title: PluginMap
hide_title: true
displayed_sidebar: contracts
---

# PluginMap

_thirdweb.com_

## Methods

### getAllFunctionsOfPlugin

```solidity
function getAllFunctionsOfPlugin(address _pluginAddress) external view returns (bytes4[] registered)
```

_View all funtionality as list of function signatures._

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| \_pluginAddress | address | undefined   |

#### Returns

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| registered | bytes4[] | undefined   |

### getAllPlugins

```solidity
function getAllPlugins() external view returns (struct IPluginMap.Plugin[] _plugins)
```

_View all funtionality existing on the contract._

#### Returns

| Name      | Type                | Description |
| --------- | ------------------- | ----------- |
| \_plugins | IPluginMap.Plugin[] | undefined   |

### getPluginForFunction

```solidity
function getPluginForFunction(bytes4 _selector) external view returns (address)
```

_View address of the plugged-in functionality contract for a given function signature._

#### Parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| \_selector | bytes4 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

## Events

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
