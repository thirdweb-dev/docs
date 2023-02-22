---
slug: /IBurnableERC20
title: IBurnableERC20
hide_title: true
displayed_sidebar: contracts
---

# IBurnableERC20

## Methods

### burn

```solidity
function burn(uint256 amount) external nonpayable
```

_Destroys `amount` tokens from the caller. See {ERC20-\_burn}._

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| amount | uint256 | undefined   |

### burnFrom

```solidity
function burnFrom(address account, uint256 amount) external nonpayable
```

_Destroys `amount` tokens from `account`, deducting from the caller&#39;s allowance. See {ERC20-\_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for `accounts`&#39;s tokens of at least `amount`._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| account | address | undefined   |
| amount  | uint256 | undefined   |
