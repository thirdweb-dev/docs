---
slug: /IStaking721
title: IStaking721
hide_title: true
displayed_sidebar: contracts
---

# IStaking721

## Methods

### claimRewards

```solidity
function claimRewards() external nonpayable
```

Claim accumulated rewards.

### getStakeInfo

```solidity
function getStakeInfo(address staker) external view returns (uint256[] _tokensStaked, uint256 _rewards)
```

View amount staked and total rewards for a user.

#### Parameters

| Name   | Type    | Description                              |
| ------ | ------- | ---------------------------------------- |
| staker | address | Address for which to calculated rewards. |

#### Returns

| Name           | Type      | Description |
| -------------- | --------- | ----------- |
| \_tokensStaked | uint256[] | undefined   |
| \_rewards      | uint256   | undefined   |

### stake

```solidity
function stake(uint256[] tokenIds) external nonpayable
```

Stake ERC721 Tokens.

#### Parameters

| Name     | Type      | Description              |
| -------- | --------- | ------------------------ |
| tokenIds | uint256[] | List of tokens to stake. |

### withdraw

```solidity
function withdraw(uint256[] tokenIds) external nonpayable
```

Withdraw staked tokens.

#### Parameters

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| tokenIds | uint256[] | List of tokens to withdraw. |

## Events

### RewardsClaimed

```solidity
event RewardsClaimed(address indexed staker, uint256 rewardAmount)
```

_Emitted when a staker claims staking rewards._

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| staker `indexed` | address | undefined   |
| rewardAmount     | uint256 | undefined   |

### TokensStaked

```solidity
event TokensStaked(address indexed staker, uint256[] indexed tokenIds)
```

_Emitted when a set of token-ids are staked._

#### Parameters

| Name               | Type      | Description |
| ------------------ | --------- | ----------- |
| staker `indexed`   | address   | undefined   |
| tokenIds `indexed` | uint256[] | undefined   |

### TokensWithdrawn

```solidity
event TokensWithdrawn(address indexed staker, uint256[] indexed tokenIds)
```

_Emitted when a set of staked token-ids are withdrawn._

#### Parameters

| Name               | Type      | Description |
| ------------------ | --------- | ----------- |
| staker `indexed`   | address   | undefined   |
| tokenIds `indexed` | uint256[] | undefined   |

### UpdatedRewardsPerUnitTime

```solidity
event UpdatedRewardsPerUnitTime(uint256 oldRewardsPerUnitTime, uint256 newRewardsPerUnitTime)
```

_Emitted when contract admin updates rewardsPerUnitTime._

#### Parameters

| Name                  | Type    | Description |
| --------------------- | ------- | ----------- |
| oldRewardsPerUnitTime | uint256 | undefined   |
| newRewardsPerUnitTime | uint256 | undefined   |

### UpdatedTimeUnit

```solidity
event UpdatedTimeUnit(uint256 oldTimeUnit, uint256 newTimeUnit)
```

_Emitted when contract admin updates timeUnit._

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| oldTimeUnit | uint256 | undefined   |
| newTimeUnit | uint256 | undefined   |
