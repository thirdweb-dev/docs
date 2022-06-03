---
slug: /examples/token-gated-membership/exploring-the-example-repo
---

# Exploring the Example Repo

In this section, we'll explain the key elements of the example repository.

We'll explore how we use the thirdweb SDKs to:

- Connect the user's wallet to the site using [MetaMask](/react/react.usemetamask)
- Check if the user [has an NFT](/pre-built-contracts/edition-drop#nfts-owned-by-a-specific-wallet) from our smart contract
- Allow them to [claim](/pre-built-contracts/edition-drop#minting--claiming-nfts) a new NFT from our smart contract

## Connecting the user's wallet

Inside [`index.js`](https://github.com/thirdweb-example/NFT-Gated-Website/blob/main/src/index.js)
we are wrapping our application in the `ThirdwebProvider` so that we can use all of the React SDKs hooks anywhere in our application.

This allows us to easily use hooks such as [`useMetamask`](https://portal.thirdweb.com/react/react.usemetamask) on the [`App.js`](https://github.com/thirdweb-example/NFT-Gated-Website/blob/main/src/App.js) page to connect the user's wallet. Once the user is connected, we can access their wallet address with the [`useAddress`](https://portal.thirdweb.com/react/react.useaddress) hook.

```jsx
// allow user to connect to app with metamask, and obtain address
const address = useAddress();
const connectWithMetamask = useMetamask();
```

We first return a page for users to connect their wallets if they haven't already.

```jsx
//if there isn't a wallet connected, display our connect MetaMask button
if (!address) {
  return (
    <div className="container">
      <h1>Welcome to the Shape Club</h1>
      <button className="btn" onClick={connectWithMetamask}>
        Connect MetaMask
      </button>
    </div>
  );
}
```

## Checking if the user has an NFT

On the [`App.js`](https://github.com/thirdweb-example/NFT-Gated-Website/blob/main/src/App.js) page, we are running a function called `checkBalance` inside a `useEffect` function, to check if the user has any NFTs from our smart contract.

```jsx
const checkBalance = async () => {
  try {
    const nfts = await nftDrop?.getOwned(address);
    setHasClaimedNFT(nfts?.length > 0);
    setChecking(false);
    setIsClaiming(false);
  } catch (error) {
    setHasClaimedNFT(false);
    setChecking(false);
    alert(error);
    console.error("Failed to get NFTs", error);
  }
};
```

This calls the [`getOwned`](https://portal.thirdweb.com/pre-built-contracts/edition-drop#nfts-owned-by-a-specific-wallet) on the Edition Drop
and passes the currently connected wallet's address as a parameter.

If the user does own the NFT, we show them the restricted content.

however, if they don't own the NFT, we show them a page that allows them to claim an NFT.

## Claiming an NFT

If the user has not already claimed an NFT, we show them a page that allows them to claim an NFT.

```jsx
await nftDrop.claim(0 1); // Here, 0 is the tokenId and 1 is the quantity to claim.
```
