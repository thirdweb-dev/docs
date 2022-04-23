---
slug: /ITokenERC721
title: ITokenERC721
hide_title: true
---
# ITokenERC721





`SignatureMint` is an ERC 721 contract. It lets anyone mint NFTs by producing a mint request  and a signature (produced by an account with MINTER_ROLE, signing the mint request).



## Methods

### approve

```solidity
function approve(address _approved, uint256 _tokenId) external payable
```

Change or reaffirm the approved address for an NFT

*The zero address indicates there is no approved address.  Throws unless `msg.sender` is the current NFT owner, or an authorized  operator of the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _approved | address | The new approved NFT controller
| _tokenId | uint256 | The NFT to approve

### balanceOf

```solidity
function balanceOf(address _owner) external view returns (uint256)
```

Count all NFTs assigned to an owner

*NFTs assigned to the zero address are considered invalid, and this  function throws for queries about the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | An address for whom to query the balance

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The number of NFTs owned by `_owner`, possibly zero

### getApproved

```solidity
function getApproved(uint256 _tokenId) external view returns (address)
```

Get the approved address for a single NFT

*Throws if `_tokenId` is not a valid NFT.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | The NFT to find the approved address for

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The approved address for this NFT, or the zero address if there is none

### isApprovedForAll

```solidity
function isApprovedForAll(address _owner, address _operator) external view returns (bool)
```

Query if an address is an authorized operator for another address



#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | The address that owns the NFTs
| _operator | address | The address that acts on behalf of the owner

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | True if `_operator` is an approved operator for `_owner`, false otherwise

### name

```solidity
function name() external view returns (string)
```

A descriptive name for a collection of NFTs in this contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### ownerOf

```solidity
function ownerOf(uint256 _tokenId) external view returns (address)
```

Find the owner of an NFT

*NFTs assigned to zero address are considered invalid, and queries  about them do throw.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | The identifier for an NFT

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | The address of the owner of the NFT

### safeTransferFrom

```solidity
function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable
```

Transfers the ownership of an NFT from one address to another address

*Throws unless `msg.sender` is the current owner, an authorized  operator, or the approved address for this NFT. Throws if `_from` is  not the current owner. Throws if `_to` is the zero address. Throws if  `_tokenId` is not a valid NFT. When transfer is complete, this function  checks if `_to` is a smart contract (code size &gt; 0). If so, it calls  `onERC721Received` on `_to` and throws if the return value is not  `bytes4(keccak256(&quot;onERC721Received(address,address,uint256,bytes)&quot;))`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | The current owner of the NFT
| _to | address | The new owner
| _tokenId | uint256 | The NFT to transfer
| data | bytes | Additional data with no specified format, sent in call to `_to`

### setApprovalForAll

```solidity
function setApprovalForAll(address _operator, bool _approved) external nonpayable
```

Enable or disable approval for a third party (&quot;operator&quot;) to manage  all of `msg.sender`&#39;s assets

*Emits the ApprovalForAll event. The contract MUST allow  multiple operators per owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _operator | address | Address to add to the set of authorized operators
| _approved | bool | True if the operator is approved, false to revoke approval

### symbol

```solidity
function symbol() external view returns (string)
```

An abbreviated name for NFTs in this contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### tokenByIndex

```solidity
function tokenByIndex(uint256 _index) external view returns (uint256)
```

Enumerate valid NFTs

*Throws if `_index` &gt;= `totalSupply()`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _index | uint256 | A counter less than `totalSupply()`

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The token identifier for the `_index`th NFT,  (sort order not specified)

### tokenOfOwnerByIndex

```solidity
function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256)
```

Enumerate NFTs assigned to an owner

*Throws if `_index` &gt;= `balanceOf(_owner)` or if  `_owner` is the zero address, representing invalid NFTs.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner | address | An address where we are interested in NFTs owned by them
| _index | uint256 | A counter less than `balanceOf(_owner)`

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The token identifier for the `_index`th NFT assigned to `_owner`,   (sort order not specified)

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

A distinct Uniform Resource Identifier (URI) for a given asset.

*Throws if `_tokenId` is not a valid NFT. URIs are defined in RFC  3986. The URI may point to a JSON file that conforms to the &quot;ERC721  Metadata JSON Schema&quot;.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

Count NFTs tracked by this contract




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | A count of valid NFTs tracked by this contract, where each one of  them has an assigned and queryable owner not equal to the zero address

### transferFrom

```solidity
function transferFrom(address _from, address _to, uint256 _tokenId) external payable
```

Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE  THEY MAY BE PERMANENTLY LOST

*Throws unless `msg.sender` is the current owner, an authorized  operator, or the approved address for this NFT. Throws if `_from` is  not the current owner. Throws if `_to` is the zero address. Throws if  `_tokenId` is not a valid NFT.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _from | address | The current owner of the NFT
| _to | address | The new owner
| _tokenId | uint256 | The NFT to transfer



## Events

### Approval

```solidity
event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _approved `indexed` | address | undefined |
| _tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _owner `indexed` | address | undefined |
| _operator `indexed` | address | undefined |
| _approved  | bool | undefined |

### Transfer

```solidity
event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _from `indexed` | address | undefined |
| _to `indexed` | address | undefined |
| _tokenId `indexed` | uint256 | undefined |


