---
slug: /IDropSinglePhase
title: IDropSinglePhase
hide_title: true
displayed_sidebar: contracts
---

# IDropSinglePhase

## Methods

### claim

```solidity
function claim(address receiver, uint256 quantity, address currency, uint256 pricePerToken, IDropSinglePhase.AllowlistProof allowlistProof, bytes data) external payable
```

#### Parameters

| Name           | Type                            | Description |
| -------------- | ------------------------------- | ----------- |
| receiver       | address                         | undefined   |
| quantity       | uint256                         | undefined   |
| currency       | address                         | undefined   |
| pricePerToken  | uint256                         | undefined   |
| allowlistProof | IDropSinglePhase.AllowlistProof | undefined   |
| data           | bytes                           | undefined   |

### setClaimConditions

```solidity
function setClaimConditions(IClaimCondition.ClaimCondition phase, bool resetClaimEligibility) external nonpayable
```

#### Parameters

| Name                  | Type                           | Description |
| --------------------- | ------------------------------ | ----------- |
| phase                 | IClaimCondition.ClaimCondition | undefined   |
| resetClaimEligibility | bool                           | undefined   |

## Events

### ClaimConditionUpdated

```solidity
event ClaimConditionUpdated(IClaimCondition.ClaimCondition condition, bool resetEligibility)
```

_Emitted when the contract&#39;s claim conditions are updated._

#### Parameters

| Name             | Type                           | Description |
| ---------------- | ------------------------------ | ----------- |
| condition        | IClaimCondition.ClaimCondition | undefined   |
| resetEligibility | bool                           | undefined   |

### TokensClaimed

```solidity
event TokensClaimed(address indexed claimer, address indexed receiver, uint256 indexed startTokenId, uint256 quantityClaimed)
```

_Emitted when tokens are claimed via `claim`._

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| claimer `indexed`      | address | undefined   |
| receiver `indexed`     | address | undefined   |
| startTokenId `indexed` | uint256 | undefined   |
| quantityClaimed        | uint256 | undefined   |
