---
slug: /TWFee
title: TWFee
hide_title: true
displayed_sidebar: contracts
---

# TWFee

## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### MAX_FEE_BPS

```solidity
function MAX_FEE_BPS() external view returns (uint256)
```

_The maximum threshold for fees. 1%_

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### factory

```solidity
function factory() external view returns (contract TWFactory)
```

_The factory for deploying contracts._

#### Returns

| Name | Type               | Description |
| ---- | ------------------ | ----------- |
| \_0  | contract TWFactory | undefined   |

### feeInfo

```solidity
function feeInfo(uint256, uint256) external view returns (uint256 bps, address recipient)
```

_Mapping from pricing tier id =&gt; Fee Type (lib/FeeType.sol) =&gt; FeeInfo_

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |
| \_1  | uint256 | undefined   |

#### Returns

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| bps       | uint256 | undefined   |
| recipient | address | undefined   |

### getFeeInfo

```solidity
function getFeeInfo(address _proxy, uint256 _feeType) external view returns (address recipient, uint256 bps)
```

_Returns the fee info for a given module and fee type._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_proxy   | address | undefined   |
| \_feeType | uint256 | undefined   |

#### Returns

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| recipient | address | undefined   |
| bps       | uint256 | undefined   |

### getFeeTier

```solidity
function getFeeTier(address _deployer, address _proxy) external view returns (uint128 tierId, uint128 validUntilTimestamp)
```

_Returns the fee tier for a proxy deployer wallet or contract address._

#### Parameters

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_deployer | address | undefined   |
| \_proxy    | address | undefined   |

#### Returns

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| tierId              | uint128 | undefined   |
| validUntilTimestamp | uint128 | undefined   |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```

_Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {\_setRoleAdmin}._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| role | bytes32 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### getRoleMember

```solidity
function getRoleMember(bytes32 role, uint256 index) external view returns (address)
```

_Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296 for more information._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| role  | bytes32 | undefined   |
| index | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getRoleMemberCount

```solidity
function getRoleMemberCount(bytes32 role) external view returns (uint256)
```

_Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| role | bytes32 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```

_Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have `role`&#39;s admin role. May emit a {RoleGranted} event._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```

_Returns `true` if `account` has been granted `role`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### isTrustedForwarder

```solidity
function isTrustedForwarder(address forwarder) external view returns (bool)
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| forwarder | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### multicall

```solidity
function multicall(bytes[] data) external nonpayable returns (bytes[] results)
```

_Receives and executes a batch of function calls on this contract._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| data | bytes[] | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| results | bytes[] | undefined   |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```

_Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```

_Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have `role`&#39;s admin role. May emit a {RoleRevoked} event._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| role    | bytes32 | undefined   |
| account | address | undefined   |

### setFeeInfoForTier

```solidity
function setFeeInfoForTier(uint256 _tierId, uint256 _feeBps, address _feeRecipient, uint256 _feeType) external nonpayable
```

_Lets the admin set fee bps and recipient for the given pricing tier and fee type._

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| \_tierId       | uint256 | undefined   |
| \_feeBps       | uint256 | undefined   |
| \_feeRecipient | address | undefined   |
| \_feeType      | uint256 | undefined   |

### setFeeTierPlacementExtension

```solidity
function setFeeTierPlacementExtension(address _extension) external nonpayable
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| \_extension | address | undefined   |

### setTier

```solidity
function setTier(address _proxyOrDeployer, uint128 _tierId, uint128 _validUntilTimestamp) external nonpayable
```

_Lets a TIER_CONTROLLER_ROLE holder assign a tier to a proxy deployer._

#### Parameters

| Name                  | Type    | Description |
| --------------------- | ------- | ----------- |
| \_proxyOrDeployer     | address | undefined   |
| \_tierId              | uint128 | undefined   |
| \_validUntilTimestamp | uint128 | undefined   |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_See {IERC165-supportsInterface}._

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| interfaceId | bytes4 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### tierPlacementExtension

```solidity
function tierPlacementExtension() external view returns (contract IFeeTierPlacementExtension)
```

_If we want to extend the logic for fee tier placement, we could easily points it to a different extension implementation._

#### Returns

| Name | Type                                | Description |
| ---- | ----------------------------------- | ----------- |
| \_0  | contract IFeeTierPlacementExtension | undefined   |

## Events

### FeeTierUpdated

```solidity
event FeeTierUpdated(uint256 indexed tierId, uint256 indexed feeType, address recipient, uint256 bps)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| tierId `indexed`  | uint256 | undefined   |
| feeType `indexed` | uint256 | undefined   |
| recipient         | address | undefined   |
| bps               | uint256 | undefined   |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```

#### Parameters

| Name                        | Type    | Description |
| --------------------------- | ------- | ----------- |
| role `indexed`              | bytes32 | undefined   |
| previousAdminRole `indexed` | bytes32 | undefined   |
| newAdminRole `indexed`      | bytes32 | undefined   |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| role `indexed`    | bytes32 | undefined   |
| account `indexed` | address | undefined   |
| sender `indexed`  | address | undefined   |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| role `indexed`    | bytes32 | undefined   |
| account `indexed` | address | undefined   |
| sender `indexed`  | address | undefined   |

### TierUpdated

```solidity
event TierUpdated(address indexed proxyOrDeployer, uint256 tierId, uint256 validUntilTimestamp)
```

_Events_

#### Parameters

| Name                      | Type    | Description |
| ------------------------- | ------- | ----------- |
| proxyOrDeployer `indexed` | address | undefined   |
| tierId                    | uint256 | undefined   |
| validUntilTimestamp       | uint256 | undefined   |
