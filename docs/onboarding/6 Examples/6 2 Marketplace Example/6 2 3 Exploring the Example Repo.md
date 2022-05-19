---
slug: /examples/marketplace/exploring-the-example-repo
---

# Exploring the Example Repo

In this section, we'll explain the key elements of the example repository.

We'll explore how thirdweb:

- Fetches all active listings from the smart contract
- Allows users to create their own listings on the `create` page
- How users can make offers, bids and buyout listings.

## Fetching Active Listings

On the `index.tsx` page, we are using the [useActiveListings](https://portal.thirdweb.com/react/react.useactivelistings) hook to fetch all active listings from the smart contract.

:::info

"**Active**" is defined as any listing which has not been sold, cancelled, or has finished (i.e. current date is after the end date of the listing.)

:::

You can see we are initializing the **marketplace contract** using the [useMarketplace](https://portal.thirdweb.com/react/react.usemarketplace) hook, and passing the contract as a parameter to the `useActiveListings`.

```jsx
// Connect your marketplace smart contract here (replace this address)
const marketplace = useMarketplace(
  "0x277C0FB19FeD09c785448B8d3a80a78e7A9B8952", // Your marketplace contract address here
);

// data is the active listings, isLoading is a loading flag while we load the listings.
const { data: listings, isLoading: loadingListings } =
  useActiveListings(marketplace);
```

Behind the scenes, the thirdweb React SDK is **caching** these results, so we don't have to perform these lengthy requests every time we want to fetch the active listings.

In the UI, we `map` over the `listings` array, and transform each listing into `div`, containing
the listings price and the NFT that is listed's metadata; such as name and image.

## Creating a Listing

On the `create.tsx` page, we have created a form for the user to input the `contractAddress` and
`tokenId` of the NFT they wish to list, as well as the price they wish to list it for.

When the form is submitted, we run a function called `handleCreateListing` which
runs either `createAuctionListing` or `createDirectListing`, depending on the values submitted in the form.

There are only slight differences between the two functions.

In **Auction Listings**, the `reservePricePerToken` parameter is required, which refers to what
the **minimum** bid price is for the listing. Whereas in **Direct Listings**, this paramter is
not required, since users can _offer_ any price they wish.

### Creating Auction Listings

```jsx
await marketplace?.auction.createListing({
  assetContractAddress: contractAddress, // Contract Address of the NFT
  buyoutPricePerToken: price, // Maximum price, the auction will end immediately if a user pays this price.
  currencyContractAddress: NATIVE_TOKEN_ADDRESS, // NATIVE_TOKEN_ADDRESS is the crpyto curency that is native to the network. i.e. Rinkeby ETH.
  listingDurationInSeconds: 60 * 60 * 24 * 7, // When the auction will be closed and no longer accept bids (1 Week)
  quantity: 1, // How many of the NFTs are being listed (useful for ERC 1155 tokens)
  reservePricePerToken: 0, // Minimum price, users cannot bid below this amount
  startTimestamp: new Date(), // When the listing will start
  tokenId: tokenId, // Token ID of the NFT.
});
```

### Creating Direct Listings

```jsx
await marketplace?.direct.createListing({
  assetContractAddress: contractAddress, // Contract Address of the NFT
  buyoutPricePerToken: price, // Maximum price, the auction will end immediately if a user pays this price.
  currencyContractAddress: NATIVE_TOKEN_ADDRESS, // NATIVE_TOKEN_ADDRESS is the crpyto curency that is native to the network. i.e. Rinkeby ETH.
  listingDurationInSeconds: 60 * 60 * 24 * 7, // When the auction will be closed and no longer accept bids (1 Week)
  quantity: 1, // How many of the NFTs are being listed (useful for ERC 1155 tokens)
  startTimestamp: new Date(0), // When the listing will start
  tokenId: tokenId, // Token ID of the NFT.
});
```

## Offers, Bids, and Buyouts

Making offers/bids on marketplace listings are also slightly different from eachother.

Buyouts occur when the user pays the `buyoutPricePerToken` on a listing; at this point, the listing is closed, the funds are transferred to the seller, and the NFT(s) are transferred to the buyer.

### Bids

**Bids** are placed on **Auction listings**, and are "high-commitment".

Attributes of a bid:

- Bids cannot be cancelled once they are placed.
- Bids are held by the smart contract in escrow.
- The bid must be a certain amount higher than the current highest bid if there is one. There is either zero or one bids on an auction listing at any given time. Bids that get out-bid are automatically refunded.

To create a bid on a listing:

```jsx
await marketplace?.auction.makeBid(listingId, bidAmount);
```

### Offers

**Offers** are placed on **Direct Listings**, and are "low-commitment".

Attributes of an offer:

- Offers can be cancelled at any time.
- The offeror grants the marketplace smart contract **permission** to transfer the certain amount of funds from their wallet, the funds are not held in escrow.
- They can be higher or lower than other offers on the listing, and in different currencies.

To create an offer on a listing:

```jsx
await marketplace?.direct.makeOffer(
  listingId, // The listingId of the listing we want to make an offer for
  1, // Quantity = 1
  NATIVE_TOKENS[ChainId.Rinkeby].wrapped.address, // Wrapped Ether address on Rinkeby
  bidAmount, // The offer amount the user entered
);
```

### Buyouts

Buyouts act the same on both **Auction listings** and **Direct Listings**.

When a buyer pays the `buyoutPricePerToken` on a listing, the listing is closed, the funds are transferred to the seller, and the NFT(s) are transferred to the buyer.

To buy a listing:

```jsx
await marketplace?.buyoutListing(listingId, 1); // here, 1 is the quantity to buy
```
