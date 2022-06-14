---
slug: /DropSinglePhase
title: DropSinglePhase
hide_title: true
displayed_sidebar: contracts
---

# DropSinglePhase

## Methods

### claim

```solidity
function claim(address _receiver, uint256 _quantity, address _currency, uint256 _pricePerToken, IDrop.AllowlistProof _allowlistProof, bytes _data) external payable
```

_Lets an account claim tokens._

#### Parameters

| Name             | Type                 | Description |
| ---------------- | -------------------- | ----------- |
| \_receiver       | address              | undefined   |
| \_quantity       | uint256              | undefined   |
| \_currency       | address              | undefined   |
| \_pricePerToken  | uint256              | undefined   |
| \_allowlistProof | IDrop.AllowlistProof | undefined   |
| \_data           | bytes                | undefined   |

### claimCondition

```solidity
function claimCondition() external view returns (uint256 startTimestamp, uint256 maxClaimableSupply, uint256 supplyClaimed, uint256 quantityLimitPerTransaction, uint256 waitTimeInSecondsBetweenClaims, bytes32 merkleRoot, uint256 pricePerToken, address currency)
```

_The active conditions for claiming tokens._

#### Returns

| Name                           | Type    | Description |
| ------------------------------ | ------- | ----------- |
| startTimestamp                 | uint256 | undefined   |
| maxClaimableSupply             | uint256 | undefined   |
| supplyClaimed                  | uint256 | undefined   |
| quantityLimitPerTransaction    | uint256 | undefined   |
| waitTimeInSecondsBetweenClaims | uint256 | undefined   |
| merkleRoot                     | bytes32 | undefined   |
| pricePerToken                  | uint256 | undefined   |
| currency                       | address | undefined   |

### getBaseURICount

```solidity
function getBaseURICount() external view returns (uint256)
```

_Returns the number of batches of tokens having the same baseURI._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getBatchIdAtIndex

```solidity
function getBatchIdAtIndex(uint256 _index) external view returns (uint256)
```

_Returns the id for the batch of tokens the given tokenId belongs to._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| \_index | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getClaimTimestamp

```solidity
function getClaimTimestamp(address _claimer) external view returns (uint256 lastClaimedAt, uint256 nextValidClaimTimestamp)
```

_Returns the timestamp for when a claimer is eligible for claiming NFTs again._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_claimer | address | undefined   |

#### Returns

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| lastClaimedAt           | uint256 | undefined   |
| nextValidClaimTimestamp | uint256 | undefined   |

### lazyMint

```solidity
function lazyMint(uint256 amount, string baseURIForTokens, bytes extraData) external nonpayable returns (uint256 batchId)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| amount           | uint256 | undefined   |
| baseURIForTokens | string  | undefined   |
| extraData        | bytes   | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| batchId | uint256 | undefined   |

### set

```solidity
function set(IClaimCondition.ClaimCondition _condition, bool _resetClaimEligibility) external nonpayable
```

_Lets a contract admin set a claim condition._

#### Parameters

| Name                    | Type                           | Description |
| ----------------------- | ------------------------------ | ----------- |
| \_condition             | IClaimCondition.ClaimCondition | undefined   |
| \_resetClaimEligibility | bool                           | undefined   |

### verifyClaim

```solidity
function verifyClaim(address _claimer, uint256 _quantity, address _currency, uint256 _pricePerToken, bool verifyMaxQuantityPerTransaction) external view
```

_Checks a request to claim NFTs against the active claim condition&#39;s criteria._

#### Parameters

| Name                            | Type    | Description |
| ------------------------------- | ------- | ----------- |
| \_claimer                       | address | undefined   |
| \_quantity                      | uint256 | undefined   |
| \_currency                      | address | undefined   |
| \_pricePerToken                 | uint256 | undefined   |
| verifyMaxQuantityPerTransaction | bool    | undefined   |

### verifyClaimMerkleProof

```solidity
function verifyClaimMerkleProof(address _claimer, uint256 _quantity, IDrop.AllowlistProof _allowlistProof) external view returns (bool validMerkleProof, uint256 merkleProofIndex)
```

_Checks whether a claimer meets the claim condition&#39;s allowlist criteria._

#### Parameters

| Name             | Type                 | Description |
| ---------------- | -------------------- | ----------- |
| \_claimer        | address              | undefined   |
| \_quantity       | uint256              | undefined   |
| \_allowlistProof | IDrop.AllowlistProof | undefined   |

#### Returns

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| validMerkleProof | bool    | undefined   |
| merkleProofIndex | uint256 | undefined   |

## Events

### ClaimConditionUpdated

```solidity
event ClaimConditionUpdated(IClaimCondition.ClaimCondition claimConditions, bool resetClaimEligibility)
```

#### Parameters

| Name                  | Type                           | Description |
| --------------------- | ------------------------------ | ----------- |
| claimConditions       | IClaimCondition.ClaimCondition | undefined   |
| resetClaimEligibility | bool                           | undefined   |

### TokensClaimed

```solidity
event TokensClaimed(uint256 indexed claimConditionIndex, address indexed claimer, address indexed receiver, uint256 startTokenId, uint256 quantityClaimed)
```

#### Parameters

| Name                          | Type    | Description |
| ----------------------------- | ------- | ----------- |
| claimConditionIndex `indexed` | uint256 | undefined   |
| claimer `indexed`             | address | undefined   |
| receiver `indexed`            | address | undefined   |
| startTokenId                  | uint256 | undefined   |
| quantityClaimed               | uint256 | undefined   |
