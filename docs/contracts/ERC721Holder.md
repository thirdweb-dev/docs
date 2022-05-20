---
slug: /ERC721Holder
title: ERC721Holder
hide_title: true
displayed_sidebar: contracts
---

# ERC721Holder

_Implementation of the {IERC721Receiver} interface. Accepts all token transfers. Make sure the contract is able to use its token with {IERC721-safeTransferFrom}, {IERC721-approve} or {IERC721-setApprovalForAll}._

## Methods

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) external nonpayable returns (bytes4)
```

_See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | address | undefined   |
| \_2  | uint256 | undefined   |
| \_3  | bytes   | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | bytes4 | undefined   |
