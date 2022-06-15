---
slug: /thirdweb-deploy/contract-extensions/drop-extensions
title: Drop Extensions
---
import ThirdwebCodeSnippet from "../../../../src/components/ThirdwebCodeSnippet";

thirdweb's drop contracts lazy mint your NFTs and make them available to be claimed by your users.

## Setting up the contract

### Smart Contract Feature Extensions

You can add the following extensions to your Drop contracts.

    * Lazy minting + Claim
    * Delayed reveal
    * Claim Conditions

This document will also cover how to mint the NFTs into your wallet or do a batch with a delayed reveal.

You will need your contract to inherit the following classes in order to get the functionalities of the mentioned Features.

[Drop](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/Drop.sol) - Also check the implementation that supports a single claim phase [DropSinglePhase](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/DropSinglePhase.sol)

[DelayReveal](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/DelayedReveal.sol)


```solidity
contract MyDropContract is Drop, DelayReveal, DropERC721 {
    // ...
}
```

Drop Contract will give you access to [Lazy Mint](https://github.com/thirdweb-dev/contracts/blob/main/contracts/feature/LazyMint.sol) + [Claim](https://portal.thirdweb.com/contracts/IClaimConditionsMultiPhase) functionalities.

DelayReveal Contract will give you access to delayed reveal functionality.



## Getting the contract in your application

To start using your NFT Drop contract inside your application, you'll need to use its contract address. You can get the contract address from the [dashboard](https://thirdweb.com/dashboard).

<ThirdwebCodeSnippet
contract={"NFTDrop"}
name={"initializing the SDK"}
isGetContractCode
/>

## Lazy Minting Your NFTs

Create a batch of unique NFTs to be claimed in the future

The Drop contract we inherit from will give lazy minting functionality. The code snippet below shows how to create a batch of NFTs to be lazy minted.

```javascript
// Custom metadata of the NFTs to create
const metadatas = [{
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"),
}];

const results = await contract.nft.lazy.mint(metadatas); // uploads and creates the NFTs on chain
const firstTokenId = results[0].id; // token id of the first created NFT
const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
```

## Claiming Your NFTs

### Claim unique NFTs to a specific Wallet

```javascript
const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
const quantity = 1; // how many unique NFTs you want to claim

const tx = await contract.claimTo(address, quantity);
const receipt = tx.receipt; // the transaction receipt
const claimedTokenId = tx.id; // the id of the NFT claimed
const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
```

### Claim NFTs to the connected wallet.

```javascript
const quantity = 1; // how many unique NFTs you want to claim

const tx = await contract.claim(quantity);
const receipt = tx.receipt; // the transaction receipt
const claimedTokenId = tx.id; // the id of the NFT claimed
const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
```

## Setting Claim Phases

A claim phase is a set of conditions that define when and how your users can mint an NFT.

You can have multiple claim phases that occur in sequence.

For each claim phase, you can define:

- When the claim phase will start
- How many NFTs do you want to drop
- How much do you want to charge per NFT
- What currency do you want to use
- Which wallet addresses are allowed to mint (allowlist)
- How many NFTs can be claimed per transaction
- How many seconds do wallets have to wait between claims

```javascript
const presaleStartTime = new Date();
const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
const claimConditions = [
  {
    startTime: presaleStartTime, // start the presale now
    maxQuantity: 2, // limit how many mints for this presale
    price: 0.01, // presale price
    snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
  },
  {
    startTime: publicSaleStartTime, // 24h after presale, start public sale
    price: 0.08, // public sale price
  }
];

await contract.nft.claimConditions.set(claimConditions);
```


## Delayed Reveals

Delayed reveals enable you to reveal the contents of the NFT to the user later at a specific date and show a placeholder asset in the meantime.

- **Reveal upon mint**: Collectors will immediately see the final NFT when they complete the minting.
- **Delayed Reveal**: Collectors will mint your placeholder image, then you reveal it at a later time.

### Create a Delayed Reveal Collection

```javascript
// the real NFTs, these will be encrypted until your reveal them!
const realNFTs = [{
  name: "Common NFT #1",
  description: "Common NFT, one of many.",
  image: fs.readFileSync("path/to/image.png"),
}, {
  name: "Super Rare NFT #2",
  description: "You got a Super Rare NFT!",
  image: fs.readFileSync("path/to/image.png"),
}];
// A placeholder NFT that people will get immediately in their wallet, until the reveal happens!
const placeholderNFT = {
  name: "Hidden NFT",
  description: "Will be revealed next week!"
};
// Create and encrypt the NFTs
await contract.nft.drop.revealer.createDelayedRevealBatch(
  placeholderNFT,
  realNFTs,
  "my secret password",
);
// Whenever you're ready, reveal your NFTs at any time!
const batchId = 0; // the batch to reveal
await contract.nft.drop.revealer.reveal(batchId, "my secret password");
```

### Reveal a batch of NFTs

```js
// Whenever you're ready, reveal your NFTs at any time!
const batchId = 0; // the batch to reveal
await contract.nft.drop.revealer.reveal(batchId, "my secret password");
```

