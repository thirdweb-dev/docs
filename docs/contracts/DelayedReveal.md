---
slug: /DelayedReveal
title: DelayedReveal
hide_title: true
displayed_sidebar: contracts
---

# DelayedReveal

Thirdweb&#39;s `DelayedReveal` is a contract extension for base NFT contracts. It lets you create batches of &#39;delayed-reveal&#39; NFTs. You can learn more about the usage of delayed reveal NFTs here - https://blog.thirdweb.com/delayed-reveal-nfts

## Methods

### encryptDecrypt

```solidity
function encryptDecrypt(bytes data, bytes key) external pure returns (bytes result)
```

_See: https://ethereum.stackexchange.com/questions/69825/decrypt-message-on-chain_

#### Parameters

| Name | Type  | Description |
| ---- | ----- | ----------- |
| data | bytes | undefined   |
| key  | bytes | undefined   |

#### Returns

| Name   | Type  | Description |
| ------ | ----- | ----------- |
| result | bytes | undefined   |

### encryptedBaseURI

```solidity
function encryptedBaseURI(uint256) external view returns (bytes)
```

_Mapping from id of a batch of tokens =&gt; to encrypted base URI for the respective batch of tokens._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | bytes | undefined   |

### getRevealURI

```solidity
function getRevealURI(uint256 _batchId, bytes _key) external view returns (string revealedURI)
```

_Returns the decrypted i.e. revealed URI for a batch of tokens._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_batchId | uint256 | undefined   |
| \_key     | bytes   | undefined   |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| revealedURI | string | undefined   |

### isEncryptedBatch

```solidity
function isEncryptedBatch(uint256 _batchId) external view returns (bool)
```

_Returns whether the relvant batch of NFTs is subject to a delayed reveal._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_batchId | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### reveal

```solidity
function reveal(uint256 identifier, bytes key) external nonpayable returns (string revealedURI)
```

Reveals a batch of delayed reveal NFTs.

#### Parameters

| Name       | Type    | Description                                                                   |
| ---------- | ------- | ----------------------------------------------------------------------------- |
| identifier | uint256 | The ID for the batch of delayed-reveal NFTs to reveal.                        |
| key        | bytes   | The key with which the base URI for the relevant batch of NFTs was encrypted. |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| revealedURI | string | undefined   |

## Events

### TokenURIRevealed

```solidity
event TokenURIRevealed(uint256 indexed index, string revealedURI)
```

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| index `indexed` | uint256 | undefined   |
| revealedURI     | string  | undefined   |
