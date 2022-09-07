---
slug: /ForwarderChainlessDomain
title: ForwarderChainlessDomain
hide_title: true
displayed_sidebar: contracts
---

# ForwarderChainlessDomain

_Simple minimal forwarder to be used together with an ERC2771 compatible contract. See {ERC2771Context}._

## Methods

### execute

```solidity
function execute(ForwarderChainlessDomain.ForwardRequest req, bytes signature) external payable returns (bool, bytes)
```

#### Parameters

| Name      | Type                                    | Description |
| --------- | --------------------------------------- | ----------- |
| req       | ForwarderChainlessDomain.ForwardRequest | undefined   |
| signature | bytes                                   | undefined   |

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | bool  | undefined   |
| \_1  | bytes | undefined   |

### getNonce

```solidity
function getNonce(address from) external view returns (uint256)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| from | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### verify

```solidity
function verify(ForwarderChainlessDomain.ForwardRequest req, bytes signature) external view returns (bool)
```

#### Parameters

| Name      | Type                                    | Description |
| --------- | --------------------------------------- | ----------- |
| req       | ForwarderChainlessDomain.ForwardRequest | undefined   |
| signature | bytes                                   | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |
