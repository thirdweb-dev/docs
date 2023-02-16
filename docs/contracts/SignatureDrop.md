---
slug: /SignatureDrop
title: SignatureDrop
hide_title: true
displayed_sidebar: contracts
---

# SignatureDrop

## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```

_See {IERC721-approve}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```

_See {IERC721-balanceOf}._

#### Parameters

| Name  | Type    | Description |
| ----- | ------- | ----------- |
| owner | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### burn

```solidity
function burn(uint256 tokenId) external nonpayable
```

_Burns `tokenId`. See {ERC721-\_burn}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| tokenId | uint256 | undefined   |

### claim

```solidity
function claim(address _receiver, uint256 _quantity, address _currency, uint256 _pricePerToken, IDropSinglePhase.AllowlistProof _allowlistProof, bytes _data) external payable
```

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
function claimCondition() external view returns (uint256 startTimestamp, uint256 maxClaimableSupply, uint256 supplyClaimed, uint256 quantityLimitPerWallet, bytes32 merkleRoot, uint256 pricePerToken, address currency, string metadata)
```

#### Returns

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| startTimestamp         | uint256 | undefined   |
| maxClaimableSupply     | uint256 | undefined   |
| supplyClaimed          | uint256 | undefined   |
| quantityLimitPerWallet | uint256 | undefined   |
| merkleRoot             | bytes32 | undefined   |
| pricePerToken          | uint256 | undefined   |
| currency               | address | undefined   |
| metadata               | string  | undefined   |

### contractType

```solidity
function contractType() external pure returns (bytes32)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### contractURI

```solidity
function contractURI() external view returns (string)
```

Returns the contract metadata URI.

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### contractVersion

```solidity
function contractVersion() external pure returns (uint8)
```

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | uint8 | undefined   |

### encryptDecrypt

```solidity
function encryptDecrypt(bytes data, bytes key) external pure returns (bytes result)
```

Encrypt/decrypt data on chain.

_Encrypt/decrypt given `data` with `key`. Uses inline assembly. See: https://ethereum.stackexchange.com/questions/69825/decrypt-message-on-chain_

#### Parameters

| Name | Type  | Description                                          |
| ---- | ----- | ---------------------------------------------------- |
| data | bytes | Bytes of data to encrypt/decrypt.                    |
| key  | bytes | Secure key used by caller for encryption/decryption. |

#### Returns

| Name   | Type  | Description                                       |
| ------ | ----- | ------------------------------------------------- |
| result | bytes | Output after encryption/decryption of given data. |

### encryptedData

```solidity
function encryptedData(uint256) external view returns (bytes)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type  | Description |
| ---- | ----- | ----------- |
| \_0  | bytes | undefined   |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```

_See {IERC721-getApproved}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| tokenId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### getBaseURICount

```solidity
function getBaseURICount() external view returns (uint256)
```

Returns the count of batches of NFTs.

_Each batch of tokens has an in ID and an associated `baseURI`. See {batchIds}._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getBatchIdAtIndex

```solidity
function getBatchIdAtIndex(uint256 _index) external view returns (uint256)
```

Returns the ID for the batch of tokens the given tokenId belongs to.

_See {getBaseURICount}._

#### Parameters

| Name    | Type    | Description    |
| ------- | ------- | -------------- |
| \_index | uint256 | ID of a token. |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getDefaultRoyaltyInfo

```solidity
function getDefaultRoyaltyInfo() external view returns (address, uint16)
```

Returns the defualt royalty recipient and BPS for this contract&#39;s NFTs.

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

### getPlatformFeeInfo

```solidity
function getPlatformFeeInfo() external view returns (address, uint16)
```

_Returns the platform fee recipient and bps._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

### getRevealURI

```solidity
function getRevealURI(uint256 _batchId, bytes _key) external view returns (string revealedURI)
```

Returns revealed URI for a batch of NFTs.

_Reveal encrypted base URI for `_batchId` with caller/admin&#39;s `_key` used for encryption. Reverts if there&#39;s no encrypted URI for `_batchId`. See {encryptDecrypt}._

#### Parameters

| Name      | Type    | Description                                                |
| --------- | ------- | ---------------------------------------------------------- |
| \_batchId | uint256 | ID of the batch for which URI is being revealed.           |
| \_key     | bytes   | Secure key used by caller/admin for encryption of baseURI. |

#### Returns

| Name        | Type   | Description         |
| ----------- | ------ | ------------------- |
| revealedURI | string | Decrypted base URI. |

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```

Returns the admin role that controls the specified role.

_See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {\_setRoleAdmin}._

#### Parameters

| Name | Type    | Description                                                           |
| ---- | ------- | --------------------------------------------------------------------- |
| role | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | bytes32 | undefined   |

### getRoleMember

```solidity
function getRoleMember(bytes32 role, uint256 index) external view returns (address member)
```

Returns the role-member from a list of members for a role, at a given index.

_Returns `member` who has `role`, at `index` of role-members list. See struct {RoleMembers}, and mapping {roleMembers}_

#### Parameters

| Name  | Type    | Description                                                           |
| ----- | ------- | --------------------------------------------------------------------- |
| role  | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |
| index | uint256 | Index in list of current members for the role.                        |

#### Returns

| Name   | Type    | Description                        |
| ------ | ------- | ---------------------------------- |
| member | address | Address of account that has `role` |

### getRoleMemberCount

```solidity
function getRoleMemberCount(bytes32 role) external view returns (uint256 count)
```

Returns total number of accounts that have a role.

_Returns `count` of accounts that have `role`. See struct {RoleMembers}, and mapping {roleMembers}_

#### Parameters

| Name | Type    | Description                                                           |
| ---- | ------- | --------------------------------------------------------------------- |
| role | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |

#### Returns

| Name  | Type    | Description                               |
| ----- | ------- | ----------------------------------------- |
| count | uint256 | Total number of accounts that have `role` |

### getRoyaltyInfoForToken

```solidity
function getRoyaltyInfoForToken(uint256 _tokenId) external view returns (address, uint16)
```

View royalty info for a given token.

_Returns royalty recipient and bps for `_tokenId`._

#### Parameters

| Name      | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| \_tokenId | uint256 | The tokenID of the NFT for which to query royalty info. |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | uint16  | undefined   |

### getSupplyClaimedByWallet

```solidity
function getSupplyClaimedByWallet(address _claimer) external view returns (uint256)
```

_Returns the supply claimed by claimer for active conditionId._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_claimer | address | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```

Grants a role to an account, if not previously granted.

_Caller must have admin role for the `role`. Emits {RoleGranted Event}._

#### Parameters

| Name    | Type    | Description                                                           |
| ------- | ------- | --------------------------------------------------------------------- |
| role    | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |
| account | address | Address of the account to which the role is being granted.            |

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```

Checks whether an account has a particular role.

_Returns `true` if `account` has been granted `role`._

#### Parameters

| Name    | Type    | Description                                                           |
| ------- | ------- | --------------------------------------------------------------------- |
| role    | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |
| account | address | Address of the account for which the role is being checked.           |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### hasRoleWithSwitch

```solidity
function hasRoleWithSwitch(bytes32 role, address account) external view returns (bool)
```

Checks whether an account has a particular role; role restrictions can be swtiched on and off.

_Returns `true` if `account` has been granted `role`. Role restrictions can be swtiched on and off: - If address(0) has ROLE, then the ROLE restrictions don&#39;t apply. - If address(0) does not have ROLE, then the ROLE restrictions will apply._

#### Parameters

| Name    | Type    | Description                                                           |
| ------- | ------- | --------------------------------------------------------------------- |
| role    | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |
| account | address | Address of the account for which the role is being checked.           |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### initialize

```solidity
function initialize(address _defaultAdmin, string _name, string _symbol, string _contractURI, address[] _trustedForwarders, address _saleRecipient, address _royaltyRecipient, uint128 _royaltyBps, uint128 _platformFeeBps, address _platformFeeRecipient) external nonpayable
```

_Initiliazes the contract, like a constructor._

#### Parameters

| Name                   | Type      | Description |
| ---------------------- | --------- | ----------- |
| \_defaultAdmin         | address   | undefined   |
| \_name                 | string    | undefined   |
| \_symbol               | string    | undefined   |
| \_contractURI          | string    | undefined   |
| \_trustedForwarders    | address[] | undefined   |
| \_saleRecipient        | address   | undefined   |
| \_royaltyRecipient     | address   | undefined   |
| \_royaltyBps           | uint128   | undefined   |
| \_platformFeeBps       | uint128   | undefined   |
| \_platformFeeRecipient | address   | undefined   |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```

_See {IERC721-isApprovedForAll}._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| owner    | address | undefined   |
| operator | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### isEncryptedBatch

```solidity
function isEncryptedBatch(uint256 _batchId) external view returns (bool)
```

Returns whether the relvant batch of NFTs is subject to a delayed reveal.

_Returns `true` if `_batchId`&#39;s base URI is encrypted._

#### Parameters

| Name      | Type    | Description            |
| --------- | ------- | ---------------------- |
| \_batchId | uint256 | ID of a batch of NFTs. |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### isTrustedForwarder

```solidity
function isTrustedForwarder(address forwarder) external view returns (bool)
```

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| forwarder | address | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### lazyMint

```solidity
function lazyMint(uint256 _amount, string _baseURIForTokens, bytes _data) external nonpayable returns (uint256 batchId)
```

_Lets an account with `MINTER_ROLE` lazy mint &#39;n&#39; NFTs. The URIs for each token is the provided `_baseURIForTokens` + `{tokenId}`._

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| \_amount           | uint256 | undefined   |
| \_baseURIForTokens | string  | undefined   |
| \_data             | bytes   | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| batchId | uint256 | undefined   |

### mintWithSignature

```solidity
function mintWithSignature(ISignatureMintERC721.MintRequest _req, bytes _signature) external payable returns (address signer)
```

#### Parameters

| Name        | Type                             | Description |
| ----------- | -------------------------------- | ----------- |
| \_req       | ISignatureMintERC721.MintRequest | undefined   |
| \_signature | bytes                            | undefined   |

#### Returns

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| signer | address | undefined   |

### multicall

```solidity
function multicall(bytes[] data) external nonpayable returns (bytes[] results)
```

_Receives and executes a batch of function calls on this contract._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| data | bytes[] | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| results | bytes[] | undefined   |

### name

```solidity
function name() external view returns (string)
```

_See {IERC721Metadata-name}._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### nextTokenIdToMint

```solidity
function nextTokenIdToMint() external view returns (uint256)
```

_The tokenId of the next NFT that will be minted / lazy minted._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

Returns the owner of the contract.

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```

_See {IERC721-ownerOf}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| tokenId | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### primarySaleRecipient

```solidity
function primarySaleRecipient() external view returns (address)
```

_Returns primary sale recipient address._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```

Revokes role from the account.

_Caller must have the `role`, with caller being the same as `account`. Emits {RoleRevoked Event}._

#### Parameters

| Name    | Type    | Description                                                           |
| ------- | ------- | --------------------------------------------------------------------- |
| role    | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |
| account | address | Address of the account from which the role is being revoked.          |

### reveal

```solidity
function reveal(uint256 _index, bytes _key) external nonpayable returns (string revealedURI)
```

_Lets an account with `MINTER_ROLE` reveal the URI for a batch of &#39;delayed-reveal&#39; NFTs._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| \_index | uint256 | undefined   |
| \_key   | bytes   | undefined   |

#### Returns

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| revealedURI | string | undefined   |

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```

Revokes role from an account.

_Caller must have admin role for the `role`. Emits {RoleRevoked Event}._

#### Parameters

| Name    | Type    | Description                                                           |
| ------- | ------- | --------------------------------------------------------------------- |
| role    | bytes32 | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |
| account | address | Address of the account from which the role is being revoked.          |

### royaltyInfo

```solidity
function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount)
```

View royalty info for a given token and sale price.

_Returns royalty amount and recipient for `tokenId` and `salePrice`._

#### Parameters

| Name      | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| tokenId   | uint256 | The tokenID of the NFT for which to query royalty info. |
| salePrice | uint256 | Sale price of the token.                                |

#### Returns

| Name          | Type    | Description                                            |
| ------------- | ------- | ------------------------------------------------------ |
| receiver      | address | Address of royalty recipient account.                  |
| royaltyAmount | uint256 | Royalty amount calculated at current royaltyBps value. |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```

_See {IERC721-safeTransferFrom}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| from    | address | undefined   |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) external nonpayable
```

_See {IERC721-safeTransferFrom}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| from    | address | undefined   |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |
| \_data  | bytes   | undefined   |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```

_See {IERC721-setApprovalForAll}._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| operator | address | undefined   |
| approved | bool    | undefined   |

### setClaimConditions

```solidity
function setClaimConditions(IClaimCondition.ClaimCondition _condition, bool _resetClaimEligibility) external nonpayable
```

#### Parameters

| Name                    | Type                           | Description |
| ----------------------- | ------------------------------ | ----------- |
| \_condition             | IClaimCondition.ClaimCondition | undefined   |
| \_resetClaimEligibility | bool                           | undefined   |

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```

Lets a contract admin set the URI for contract-level metadata.

_Caller should be authorized to setup contractURI, e.g. contract admin. See {\_canSetContractURI}. Emits {ContractURIUpdated Event}._

#### Parameters

| Name  | Type   | Description                                                           |
| ----- | ------ | --------------------------------------------------------------------- |
| \_uri | string | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |

### setDefaultRoyaltyInfo

```solidity
function setDefaultRoyaltyInfo(address _royaltyRecipient, uint256 _royaltyBps) external nonpayable
```

Updates default royalty recipient and bps.

_Caller should be authorized to set royalty info. See {\_canSetRoyaltyInfo}. Emits {DefaultRoyalty Event}; See {\_setupDefaultRoyaltyInfo}._

#### Parameters

| Name               | Type    | Description                                     |
| ------------------ | ------- | ----------------------------------------------- |
| \_royaltyRecipient | address | Address to be set as default royalty recipient. |
| \_royaltyBps       | uint256 | Updated royalty bps.                            |

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```

Lets an authorized wallet set a new owner for the contract.

#### Parameters

| Name       | Type    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| \_newOwner | address | The address to set as the new owner of the contract. |

### setPlatformFeeInfo

```solidity
function setPlatformFeeInfo(address _platformFeeRecipient, uint256 _platformFeeBps) external nonpayable
```

Updates the platform fee recipient and bps.

_Caller should be authorized to set platform fee info. See {\_canSetPlatformFeeInfo}. Emits {PlatformFeeInfoUpdated Event}; See {\_setupPlatformFeeInfo}._

#### Parameters

| Name                   | Type    | Description                                    |
| ---------------------- | ------- | ---------------------------------------------- |
| \_platformFeeRecipient | address | Address to be set as new platformFeeRecipient. |
| \_platformFeeBps       | uint256 | Updated platformFeeBps.                        |

### setPrimarySaleRecipient

```solidity
function setPrimarySaleRecipient(address _saleRecipient) external nonpayable
```

Updates primary sale recipient.

_Caller should be authorized to set primary sales info. See {\_canSetPrimarySaleRecipient}. Emits {PrimarySaleRecipientUpdated Event}; See {\_setupPrimarySaleRecipient}._

#### Parameters

| Name            | Type    | Description                                          |
| --------------- | ------- | ---------------------------------------------------- |
| \_saleRecipient | address | Address to be set as new recipient of primary sales. |

### setRoyaltyInfoForToken

```solidity
function setRoyaltyInfoForToken(uint256 _tokenId, address _recipient, uint256 _bps) external nonpayable
```

Updates default royalty recipient and bps for a particular token.

_Sets royalty info for `_tokenId`. Caller should be authorized to set royalty info. See {\_canSetRoyaltyInfo}. Emits {RoyaltyForToken Event}; See {\_setupRoyaltyInfoForToken}._

#### Parameters

| Name        | Type    | Description                                                |
| ----------- | ------- | ---------------------------------------------------------- |
| \_tokenId   | uint256 | undefined                                                  |
| \_recipient | address | Address to be set as royalty recipient for given token Id. |
| \_bps       | uint256 | Updated royalty bps for the token Id.                      |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_See ERC 165_

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| interfaceId | bytes4 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### symbol

```solidity
function symbol() external view returns (string)
```

_See {IERC721Metadata-symbol}._

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) external view returns (string)
```

_Returns the URI for a given tokenId._

#### Parameters

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| \_tokenId | uint256 | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### totalMinted

```solidity
function totalMinted() external view returns (uint256)
```

Returns the total amount of tokens minted in the contract.

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_Burned tokens are calculated here, use \_totalMinted() if you want to count just minted tokens._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```

_See {IERC721-transferFrom}._

#### Parameters

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| from    | address | undefined   |
| to      | address | undefined   |
| tokenId | uint256 | undefined   |

### verify

```solidity
function verify(ISignatureMintERC721.MintRequest _req, bytes _signature) external view returns (bool success, address signer)
```

#### Parameters

| Name        | Type                             | Description |
| ----------- | -------------------------------- | ----------- |
| \_req       | ISignatureMintERC721.MintRequest | undefined   |
| \_signature | bytes                            | undefined   |

#### Returns

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| success | bool    | undefined   |
| signer  | address | undefined   |

### verifyClaim

```solidity
function verifyClaim(address _claimer, uint256 _quantity, address _currency, uint256 _pricePerToken, IDropSinglePhase.AllowlistProof _allowlistProof) external view returns (bool isOverride)
```

#### Parameters

| Name             | Type                            | Description |
| ---------------- | ------------------------------- | ----------- |
| \_claimer        | address                         | undefined   |
| \_quantity       | uint256                         | undefined   |
| \_currency       | address                         | undefined   |
| \_pricePerToken  | uint256                         | undefined   |
| \_allowlistProof | IDropSinglePhase.AllowlistProof | undefined   |

#### Returns

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| isOverride | bool | undefined   |

## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| owner `indexed`    | address | undefined   |
| approved `indexed` | address | undefined   |
| tokenId `indexed`  | uint256 | undefined   |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```

#### Parameters

| Name               | Type    | Description |
| ------------------ | ------- | ----------- |
| owner `indexed`    | address | undefined   |
| operator `indexed` | address | undefined   |
| approved           | bool    | undefined   |

### ClaimConditionUpdated

```solidity
event ClaimConditionUpdated(IClaimCondition.ClaimCondition condition, bool resetEligibility)
```

Emitted when the contract&#39;s claim conditions are updated.

#### Parameters

| Name             | Type                           | Description |
| ---------------- | ------------------------------ | ----------- |
| condition        | IClaimCondition.ClaimCondition | undefined   |
| resetEligibility | bool                           | undefined   |

### ContractURIUpdated

```solidity
event ContractURIUpdated(string prevURI, string newURI)
```

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| prevURI | string | undefined   |
| newURI  | string | undefined   |

### DefaultRoyalty

```solidity
event DefaultRoyalty(address indexed newRoyaltyRecipient, uint256 newRoyaltyBps)
```

#### Parameters

| Name                          | Type    | Description |
| ----------------------------- | ------- | ----------- |
| newRoyaltyRecipient `indexed` | address | undefined   |
| newRoyaltyBps                 | uint256 | undefined   |

### Initialized

```solidity
event Initialized(uint8 version)
```

#### Parameters

| Name    | Type  | Description |
| ------- | ----- | ----------- |
| version | uint8 | undefined   |

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed prevOwner, address indexed newOwner)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| prevOwner `indexed` | address | undefined   |
| newOwner `indexed`  | address | undefined   |

### PlatformFeeInfoUpdated

```solidity
event PlatformFeeInfoUpdated(address indexed platformFeeRecipient, uint256 platformFeeBps)
```

#### Parameters

| Name                           | Type    | Description |
| ------------------------------ | ------- | ----------- |
| platformFeeRecipient `indexed` | address | undefined   |
| platformFeeBps                 | uint256 | undefined   |

### PrimarySaleRecipientUpdated

```solidity
event PrimarySaleRecipientUpdated(address indexed recipient)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| recipient `indexed` | address | undefined   |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```

#### Parameters

| Name                        | Type    | Description |
| --------------------------- | ------- | ----------- |
| role `indexed`              | bytes32 | undefined   |
| previousAdminRole `indexed` | bytes32 | undefined   |
| newAdminRole `indexed`      | bytes32 | undefined   |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| role `indexed`    | bytes32 | undefined   |
| account `indexed` | address | undefined   |
| sender `indexed`  | address | undefined   |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| role `indexed`    | bytes32 | undefined   |
| account `indexed` | address | undefined   |
| sender `indexed`  | address | undefined   |

### RoyaltyForToken

```solidity
event RoyaltyForToken(uint256 indexed tokenId, address indexed royaltyRecipient, uint256 royaltyBps)
```

#### Parameters

| Name                       | Type    | Description |
| -------------------------- | ------- | ----------- |
| tokenId `indexed`          | uint256 | undefined   |
| royaltyRecipient `indexed` | address | undefined   |
| royaltyBps                 | uint256 | undefined   |

### TokenURIRevealed

```solidity
event TokenURIRevealed(uint256 indexed index, string revealedURI)
```

#### Parameters

| Name            | Type    | Description |
| --------------- | ------- | ----------- |
| index `indexed` | uint256 | undefined   |
| revealedURI     | string  | undefined   |

### TokensClaimed

```solidity
event TokensClaimed(address indexed claimer, address indexed receiver, uint256 indexed startTokenId, uint256 quantityClaimed)
```

Emitted when tokens are claimed via `claim`.

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| claimer `indexed`      | address | undefined   |
| receiver `indexed`     | address | undefined   |
| startTokenId `indexed` | uint256 | undefined   |
| quantityClaimed        | uint256 | undefined   |

### TokensLazyMinted

```solidity
event TokensLazyMinted(uint256 indexed startTokenId, uint256 endTokenId, string baseURI, bytes encryptedBaseURI)
```

#### Parameters

| Name                   | Type    | Description |
| ---------------------- | ------- | ----------- |
| startTokenId `indexed` | uint256 | undefined   |
| endTokenId             | uint256 | undefined   |
| baseURI                | string  | undefined   |
| encryptedBaseURI       | bytes   | undefined   |

### TokensMintedWithSignature

```solidity
event TokensMintedWithSignature(address indexed signer, address indexed mintedTo, uint256 indexed tokenIdMinted, ISignatureMintERC721.MintRequest mintRequest)
```

#### Parameters

| Name                    | Type                             | Description |
| ----------------------- | -------------------------------- | ----------- |
| signer `indexed`        | address                          | undefined   |
| mintedTo `indexed`      | address                          | undefined   |
| tokenIdMinted `indexed` | uint256                          | undefined   |
| mintRequest             | ISignatureMintERC721.MintRequest | undefined   |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```

#### Parameters

| Name              | Type    | Description |
| ----------------- | ------- | ----------- |
| from `indexed`    | address | undefined   |
| to `indexed`      | address | undefined   |
| tokenId `indexed` | uint256 | undefined   |

## Errors

### ApprovalCallerNotOwnerNorApproved

```solidity
error ApprovalCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.

### ApprovalQueryForNonexistentToken

```solidity
error ApprovalQueryForNonexistentToken()
```

The token does not exist.

### ApprovalToCurrentOwner

```solidity
error ApprovalToCurrentOwner()
```

The caller cannot approve to the current owner.

### ApproveToCaller

```solidity
error ApproveToCaller()
```

The caller cannot approve to their own address.

### BalanceQueryForZeroAddress

```solidity
error BalanceQueryForZeroAddress()
```

Cannot query the balance for the zero address.

### MintToZeroAddress

```solidity
error MintToZeroAddress()
```

Cannot mint to the zero address.

### MintZeroQuantity

```solidity
error MintZeroQuantity()
```

The quantity of tokens minted must be more than zero.

### OwnerQueryForNonexistentToken

```solidity
error OwnerQueryForNonexistentToken()
```

The token does not exist.

### TransferCallerNotOwnerNorApproved

```solidity
error TransferCallerNotOwnerNorApproved()
```

The caller must own the token or be an approved operator.

### TransferFromIncorrectOwner

```solidity
error TransferFromIncorrectOwner()
```

The token must be owned by `from`.

### TransferToNonERC721ReceiverImplementer

```solidity
error TransferToNonERC721ReceiverImplementer()
```

Cannot safely transfer to a contract that does not implement the ERC721Receiver interface.

### TransferToZeroAddress

```solidity
error TransferToZeroAddress()
```

Cannot transfer to the zero address.

### URIQueryForNonexistentToken

```solidity
error URIQueryForNonexistentToken()
```

The token does not exist.
