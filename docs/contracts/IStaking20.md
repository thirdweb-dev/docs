---
slug: /IStaking20
title: IStaking20
hide_title: true
displayed_sidebar: contracts
---

# IStaking20

## Methods

### claimRewards

```solidity
function claimRewards() external nonpayable
```

Claim accumulated rewards.

### getStakeInfo

```solidity
function getStakeInfo(address staker) external view returns (uint256 _tokensStaked, uint256 _rewards)
```

View amount staked and total rewards for a user.

#### Parameters

| Name   | Type    | Description                              |
| ------ | ------- | ---------------------------------------- |
| staker | address | Address for which to calculated rewards. |

#### Returns

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| \_tokensStaked | uint256 | undefined   |
| \_rewards      | uint256 | undefined   |

### stake

```solidity
function stake(uint256 amount) external nonpayable
```

Stake ERC721 Tokens.

#### Parameters

| Name   | Type    | Description      |
| ------ | ------- | ---------------- |
| amount | uint256 | Amount to stake. |

### withdraw

```solidity
function withdraw(uint256 amount) external nonpayable
```

Withdraw staked tokens.

#### Parameters

| Name   | Type    | Description         |
| ------ | ------- | ------------------- |
| amount | uint256 | Amount to withdraw. |

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
event TokensStaked(address indexed staker, uint256 amount)
```

_Emitted when tokens are staked._

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| staker `indexed` | address | undefined   |
| amount           | uint256 | undefined   |

### TokensWithdrawn

```solidity
event TokensWithdrawn(address indexed staker, uint256 amount)
```

_Emitted when a tokens are withdrawn._

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| staker `indexed` | address | undefined   |
| amount           | uint256 | undefined   |

### UpdatedMinStakeAmount

```solidity
event UpdatedMinStakeAmount(uint256 oldAmount, uint256 newAmount)
```

_Emitted when contract admin updates minimum staking amount._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| oldAmount | uint256 | undefined   |
| newAmount | uint256 | undefined   |

### UpdatedRewardRatio

```solidity
event UpdatedRewardRatio(uint256 oldNumerator, uint256 newNumerator, uint256 oldDenominator, uint256 newDenominator)
```

_Emitted when contract admin updates rewardsPerUnitTime._

#### Parameters

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| oldNumerator   | uint256 | undefined   |
| newNumerator   | uint256 | undefined   |
| oldDenominator | uint256 | undefined   |
| newDenominator | uint256 | undefined   |

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
