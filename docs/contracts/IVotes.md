---
slug: /IVotes
title: IVotes
hide_title: true
displayed_sidebar: contracts
---

# IVotes

_Common interface for {ERC20Votes}, {ERC721Votes}, and other {Votes}-enabled contracts. *Available since v4.5.*_

## Methods

### delegate

```solidity
function delegate(address delegatee) external nonpayable
```

_Delegates votes from the sender to `delegatee`._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| delegatee | address | undefined   |

### delegateBySig

```solidity
function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s) external nonpayable
```

_Delegates votes from signer to `delegatee`._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| delegatee | address | undefined   |
| nonce     | uint256 | undefined   |
| expiry    | uint256 | undefined   |
| v         | uint8   | undefined   |
| r         | bytes32 | undefined   |
| s         | bytes32 | undefined   |

### delegates

```solidity
function delegates(address account) external view returns (address)
```

_Returns the delegate that `account` has chosen._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getPastTotalSupply

```solidity
function getPastTotalSupply(uint256 blockNumber) external view returns (uint256)
```

_Returns the total supply of votes available at the end of a past block (`blockNumber`). NOTE: This value is the sum of all available votes, which is not necessarily the sum of all delegated votes. Votes that have not been delegated are still part of total supply, even though they would not participate in a vote._

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| blockNumber | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getPastVotes

```solidity
function getPastVotes(address account, uint256 blockNumber) external view returns (uint256)
```

_Returns the amount of votes that `account` had at the end of a past block (`blockNumber`)._

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| account     | address | undefined   |
| blockNumber | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getVotes

```solidity
function getVotes(address account) external view returns (uint256)
```

_Returns the current amount of votes that `account` has._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

## Events

### DelegateChanged

```solidity
event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)
```

_Emitted when an account changes their delegate._

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| delegator `indexed`    | address | undefined   |
| fromDelegate `indexed` | address | undefined   |
| toDelegate `indexed`   | address | undefined   |

### DelegateVotesChanged

```solidity
event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance)
```

_Emitted when a token transfer or delegate change results in changes to a delegate&#39;s number of votes._

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| delegate `indexed` | address | undefined   |
| previousBalance    | uint256 | undefined   |
| newBalance         | uint256 | undefined   |
