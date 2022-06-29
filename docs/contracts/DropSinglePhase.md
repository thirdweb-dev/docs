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
function claim(address _receiver, uint256 _quantity, address _currency, uint256 _pricePerToken, IDropSinglePhase.AllowlistProof _allowlistProof, bytes _data) external payable
```

_Lets an account claim tokens._

#### Parameters

| Name             | Type                            | Description |
| ---------------- | ------------------------------- | ----------- |
| \_receiver       | address                         | undefined   |
| \_quantity       | uint256                         | undefined   |
| \_currency       | address                         | undefined   |
| \_pricePerToken  | uint256                         | undefined   |
| \_allowlistProof | IDropSinglePhase.AllowlistProof | undefined   |
| \_data           | bytes                           | undefined   |

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

### setClaimConditions

```solidity
function setClaimConditions(IClaimCondition.ClaimCondition _condition, bool _resetClaimEligibility) external nonpayable
```

_Lets a contract admin set claim conditions._

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
function verifyClaimMerkleProof(address _claimer, uint256 _quantity, IDropSinglePhase.AllowlistProof _allowlistProof) external view returns (bool validMerkleProof, uint256 merkleProofIndex)
```

_Checks whether a claimer meets the claim condition&#39;s allowlist criteria._

#### Parameters

| Name             | Type                            | Description |
| ---------------- | ------------------------------- | ----------- |
| \_claimer        | address                         | undefined   |
| \_quantity       | uint256                         | undefined   |
| \_allowlistProof | IDropSinglePhase.AllowlistProof | undefined   |

#### Returns

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| validMerkleProof | bool    | undefined   |
| merkleProofIndex | uint256 | undefined   |

## Events

### ClaimConditionUpdated

```solidity
event ClaimConditionUpdated(IClaimCondition.ClaimCondition condition, bool resetEligibility)
```

#### Parameters

| Name             | Type                           | Description |
| ---------------- | ------------------------------ | ----------- |
| condition        | IClaimCondition.ClaimCondition | undefined   |
| resetEligibility | bool                           | undefined   |

### TokensClaimed

```solidity
event TokensClaimed(address indexed claimer, address indexed receiver, uint256 indexed startTokenId, uint256 quantityClaimed)
```

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| claimer `indexed`      | address | undefined   |
| receiver `indexed`     | address | undefined   |
| startTokenId `indexed` | uint256 | undefined   |
| quantityClaimed        | uint256 | undefined   |

## Errors

### DropSinglePhase\_\_CannotClaimYet

```solidity
error DropSinglePhase__CannotClaimYet(uint256 blockTimestamp, uint256 startTimestamp, uint256 lastClaimedAt, uint256 nextValidClaimTimestamp)
```

Emitted when the current timestamp is invalid for claim.

#### Parameters

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| blockTimestamp          | uint256 | undefined   |
| startTimestamp          | uint256 | undefined   |
| lastClaimedAt           | uint256 | undefined   |
| nextValidClaimTimestamp | uint256 | undefined   |

### DropSinglePhase\_\_ExceedMaxClaimableSupply

```solidity
error DropSinglePhase__ExceedMaxClaimableSupply(uint256 supplyClaimed, uint256 maxClaimableSupply)
```

Emitted when claiming given quantity will exceed max claimable supply.

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| supplyClaimed      | uint256 | undefined   |
| maxClaimableSupply | uint256 | undefined   |

### DropSinglePhase\_\_InvalidCurrencyOrPrice

```solidity
error DropSinglePhase__InvalidCurrencyOrPrice(address givenCurrency, address requiredCurrency, uint256 givenPricePerToken, uint256 requiredPricePerToken)
```

Emitted when given currency or price is invalid.

#### Parameters

| Name                  | Type    | Description |
| --------------------- | ------- | ----------- |
| givenCurrency         | address | undefined   |
| requiredCurrency      | address | undefined   |
| givenPricePerToken    | uint256 | undefined   |
| requiredPricePerToken | uint256 | undefined   |

### DropSinglePhase\_\_InvalidQuantity

```solidity
error DropSinglePhase__InvalidQuantity()
```

Emitted when claiming invalid quantity of tokens.

### DropSinglePhase\_\_InvalidQuantityProof

```solidity
error DropSinglePhase__InvalidQuantityProof(uint256 maxQuantityInAllowlist)
```

Emitted when claiming more than allowed quantity in allowlist.

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| maxQuantityInAllowlist | uint256 | undefined   |

### DropSinglePhase\_\_MaxSupplyClaimedAlready

```solidity
error DropSinglePhase__MaxSupplyClaimedAlready(uint256 supplyClaimedAlready)
```

Emitted when max claimable supply in given condition is less than supply claimed already.

#### Parameters

| Name                 | Type    | Description |
| -------------------- | ------- | ----------- |
| supplyClaimedAlready | uint256 | undefined   |

### DropSinglePhase\_\_NotAuthorized

```solidity
error DropSinglePhase__NotAuthorized()
```

_Emitted when an unauthorized caller tries to set claim conditions._

### DropSinglePhase\_\_NotInWhitelist

```solidity
error DropSinglePhase__NotInWhitelist()
```

Emitted when given allowlist proof is invalid.

### DropSinglePhase\_\_ProofClaimed

```solidity
error DropSinglePhase__ProofClaimed()
```

Emitted when allowlist spot is already used.
