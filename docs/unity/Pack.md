---
slug: /Pack
title: Pack
hide_title: true
displayed_sidebar: unity
---

# class `Pack` {#class_thirdweb_1_1_pack}

```
class Pack
  : public Thirdweb.Routable
```

Interact with a [Pack](#class_thirdweb_1_1_pack) contract.

# Summary

| Members           | Type     | Descriptions                                                                                                                                                                 |
| ----------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chain             | variable |                                                                                                                                                                              |
| address           | variable |                                                                                                                                                                              |
| Pack              | function | Interact with a [Marketplace](docs/unity/Marketplace.md#class_thirdweb_1_1_marketplace) contract.                                                                            |
| Get               | function | READ FUNCTIONS.                                                                                                                                                              |
| GetAll            | function | Get a all NFTs in this contract                                                                                                                                              |
| GetOwned          | function | Get a all NFTs owned by the connected wallet                                                                                                                                 |
| Balance           | function | Get the balance of the given [NFT](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t) for the connected wallet                                                                     |
| BalanceOf         | function | Get the balance of the given [NFT](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t) for the given wallet address                                                                 |
| IsApprovedForAll  | function | Check whether the given contract address has been approved to transfer NFTs on behalf of the given wallet address                                                            |
| TotalCount        | function |                                                                                                                                                                              |
| TotalSupply       | function | Get the total suppply in circulation for thge given [NFT](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t)                                                                       |
| GetPackContents   | function | Get all the possible contents of a given pack                                                                                                                                |
| SetApprovalForAll | function | WRITE FUNCTIONS.                                                                                                                                                             |
| Transfer          | function | Transfer NFTs to the given address                                                                                                                                           |
| Create            | function | Create a new [Pack](#class_thirdweb_1_1_pack) with all the possible rewards (requires approval to transfer tokens/NFTs defined as rewards)                                   |
| CreateTo          | function | Create a new [Pack](#class_thirdweb_1_1_pack) with all the possible rewards and mints it to the given address (requires approval to transfer tokens/NFTs defined as rewards) |
| AddPackContents   | function | Add new contents to an existing pack                                                                                                                                         |
| Open              | function | Open a pack and transfer the rewards to the connected wallet                                                                                                                 |

## Members

**`public string `[`chain`](#class_thirdweb_1_1_pack_1ae65c4c6bbb9e1fc75686d4fb25274ed4)**

---

**`public string `[`address`](#class_thirdweb_1_1_pack_1a2e01eadb1290eba35178ac00df897abc)**

---

**`public inline `[`Pack`](#class_thirdweb_1_1_pack_1a4a0bbffb978806b89364ee73ff0c6c65)`(string chain,string address)`**

Interact with a [Marketplace](docs/unity/Marketplace.md#class_thirdweb_1_1_marketplace) contract.

---

**`public inline async Task< `[`NFT`](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t)`>`[`Get`](#class_thirdweb_1_1_pack_1a2a863624446e14f14a2f66c523d0ebd2)`(string tokenId)`**

READ FUNCTIONS.

Get a [NFT](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t) in this contract by its ID

---

**`public inline async Task< List< `[`NFT`](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t)`> >`[`GetAll`](#class_thirdweb_1_1_pack_1ad1534fccc43f658e5f072b433e5eb983)`(`[`QueryAllParams`](docs/unity/QueryAllParams.md#class_thirdweb_1_1_query_all_params)` queryParams)`**

Get a all NFTs in this contract

---

**`public inline async Task< List< `[`NFT`](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t)`> >`[`GetOwned`](#class_thirdweb_1_1_pack_1af286b08b76146749d539ce5720f40d1a)`(string address)`**

Get a all NFTs owned by the connected wallet

#### Parameters

- `address` Optional wallet address to query NFTs of

---

**`public inline async Task< string > `[`Balance`](#class_thirdweb_1_1_pack_1a8cbfb89ac9894be20a2eb5722756fa60)`(string tokenId)`**

Get the balance of the given [NFT](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t) for the connected wallet

---

**`public inline async Task< string > `[`BalanceOf`](#class_thirdweb_1_1_pack_1a29cd4f967beb3aa1a65dbddb356c0227)`(string address,string tokenId)`**

Get the balance of the given [NFT](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t) for the given wallet address

---

**`public inline async Task< string > `[`IsApprovedForAll`](#class_thirdweb_1_1_pack_1a7a5468373f88b07236ecd2b82867ce8d)`(string address,string approvedContract)`**

Check whether the given contract address has been approved to transfer NFTs on behalf of the given wallet address

#### Parameters

- `address` The wallet address

- `contractAddress` The contract address to check approval for

---

**`public inline async Task< int > `[`TotalCount`](#class_thirdweb_1_1_pack_1ae92159a38fe0f63ec6fcb6668677fe19)`()`**

---

**`public inline async Task< int > `[`TotalSupply`](#class_thirdweb_1_1_pack_1af97fd8f9326d0e41356fd07d11f84dda)`(string tokenId)`**

Get the total suppply in circulation for thge given [NFT](docs/unity/NFT.md#struct_thirdweb_1_1_n_f_t)

---

**`public inline async Task< `[`PackContents`](docs/unity/PackContents.md#class_thirdweb_1_1_pack_contents)`>`[`GetPackContents`](#class_thirdweb_1_1_pack_1a346c554a0538f2d8587fd3dbda554dc0)`(string packId)`**

Get all the possible contents of a given pack

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`SetApprovalForAll`](#class_thirdweb_1_1_pack_1a36127ffffba6c6f21597d1cc862474fa)`(string contractToApprove,bool approved)`**

WRITE FUNCTIONS.

Set approval to the given contract to transfer NFTs on behalf of the connected wallet

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`Transfer`](#class_thirdweb_1_1_pack_1a6a7004baa5054dc91b80c518d4b34bed)`(string to,string tokenId,int amount)`**

Transfer NFTs to the given address

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`Create`](#class_thirdweb_1_1_pack_1a150dc435526a37047ed7323567abe2a3)`(`[`NewPackInput`](docs/unity/NewPackInput.md#class_thirdweb_1_1_new_pack_input)` pack)`**

Create a new [Pack](#class_thirdweb_1_1_pack) with all the possible rewards (requires approval to transfer tokens/NFTs defined as rewards)

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`CreateTo`](#class_thirdweb_1_1_pack_1a0455215677631c886070379209ead081)`(string receiverAddress,`[`NewPackInput`](docs/unity/NewPackInput.md#class_thirdweb_1_1_new_pack_input)` pack)`**

Create a new [Pack](#class_thirdweb_1_1_pack) with all the possible rewards and mints it to the given address (requires approval to transfer tokens/NFTs defined as rewards)

---

**`public inline async Task< `[`TransactionResult`](docs/unity/TransactionResult.md#class_thirdweb_1_1_transaction_result)`>`[`AddPackContents`](#class_thirdweb_1_1_pack_1acb611c382e7ce79a92826c2404b68d7e)`(string packId,`[`PackRewards`](docs/unity/PackRewards.md#struct_thirdweb_1_1_pack_rewards)` newContents)`**

Add new contents to an existing pack

---

**`public inline async Task< `[`PackRewards`](docs/unity/PackRewards.md#struct_thirdweb_1_1_pack_rewards)`>`[`Open`](#class_thirdweb_1_1_pack_1a3217e8f071a06e897744421b48e0c710)`(string packId,string amount)`**

Open a pack and transfer the rewards to the connected wallet

---
