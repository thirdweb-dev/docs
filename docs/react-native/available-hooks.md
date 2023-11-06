---
title: Available Hooks
hide_title: true
displayed_sidebar: react-native
---

# Available hooks

## Main hooks

| Hook                                                           | Description                                                                |
| -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`useSDK`](/react/react.usesdk)                                | Access the instance of the thirdweb SDK created by the ThirdwebProvider.   |
| [`useContract`](/react/react.usecontract)                      | Use this resolve a contract address to a smart contract instance.          |
| [`useContractWrite`](/react/react.usecontractwrite)            | Use this to get data from a contract read-function call.                   |
| [`useContractRead`](/react/react.usecontractread)              | Use this to get a function to make a write call to your contract.          |
| [`useContractEvents`](/react/react.usecontractevents)          | Use this to get the contract metadata for a (built-in or custom) contract. |
| [`useContractMetadata`](/solidity/extensions/contractmetadata) | Use this to get the contract metadata for a (built-in or custom) contract. |

## Wallet connection

| Hook                                                  | Description                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------- |
| [`useAddress`](/react/react.useaddress)               | Hook for accessing the address of the connected wallet.     |
| [`useConnect`](/react/react.useconnect)               | Hook for connecting to a mobile wallet with Wallet Connect. |
| [`useDisconnect`](/react/react.usedisconnect)         | Hook for disconnecting the currently connected wallet.      |
| [`useEmbeddedWallet`](/react/react.useembeddedwallet) | Hook for connecting to Embedded Wallets                     |
| [`useSmartWallet`](/react/react.usesmartwallet)       | Hook for connecting to Smart Wallets.                       |

## Network connection

| Hook                                                    | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`useChainId`](/react/react.usechainid)                 | Hook for accessing the chain ID of the network the current wallet is connected to                                                            |
| [`useNetwork`](/react/react.usenetwork)                 | Hook for getting metadata about the network the current wallet is connected to and switching networks.                                       |
| [`useNetworkMismatch`](/react/react.usenetworkmismatch) | Hook for checking whether the connected wallet is on the correct network specified by the desiredChainId passed to the <ThirdwebProvider />. |

## NFT

| Hook                                                                  | Description                                                                         |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`useNFT`](/react/react.usenft)                                       | Use this to get an individual NFT token of your NFTContract.                        |
| [`useNFTs`](/react/react.usenfts)                                     | Use this to get a list of NFT tokens of your NFTContract.                           |
| [`useTotalCirculatingSupply`](/react/react.usetotalcirculatingsupply) | Use this to get a the total (minted) supply of your NFTContract.                    |
| [`useOwnedNFTs`](/react/react.useownednfts)                           | Use this to get a the owned NFTs for a specific Erc721OrErc1155 and wallet address. |
| [`useNFTBalance`](/react/react.usenftbalance)                         | Use this to get a the total balance of a NFTContract and wallet address.            |
| [`useTotalCount`](/react/react.usetotalcount)                         | Use this to get the total count of NFT tokens of your NFTContract.                  |
| [`useMintNFT`](/react/react.usemintnft)                               | Use this to mint a new NFT on your Erc721OrErc1155.                                 |
| [`useMintNFTSupply`](/react/react.usemintnftsupply)                   | Use this mint extra supply on your Erc1155.                                         |
| [`useTransferNFT`](/react/react.usetransfernft)                       | Use this to transfer tokens on your NFTContract.                                    |
| [`useAirdropNFT`](/react/react.useairdropnft)                         | Use this to airdrop tokens on your Erc1155.                                         |
| [`useBurnNFT`](/react/react.useburnnft)                               | Use this to burn an NFT on your Erc721OrErc1155.                                    |

## Token

| Hook                                                          | Description                                                        |
| ------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`useTokenSupply`](/react/react.usetokensupply)               | Use this to get a the total supply of your contract.               |
| [`useTokenBalance`](/react/react.usetokenbalance)             | Use this to get the balance of your contract for a given address.  |
| [`useTokenDecimals`](/react/react.usetokendecimals)           | Use this to get the decimals of your contract for a given address. |
| [`useMintToken`](/react/react.useminttoken)                   | Use this to mint new tokens on your contract.                      |
| [`useClaimToken`](/react/react.useclaimtoken)                 | Use this to claim tokens from your contract.                       |
| [`useTransferToken`](/react/react.usetransfertoken)           | Use this to transfer tokens on your contract.                      |
| [`useTransferBatchToken`](/react/react.usetransferbatchtoken) | Use this to transfer batch tokens on your contract.                |
| [`useBurnToken`](/react/react.useburntoken)                   | Use this to burn tokens on your contract.                          |

## Marketplace

| Hook                                                              | Description                                                                               |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [`useListing`](/react/react.uselisting)                           | Use this to get a specific listing from the marketplace.                                  |
| [`useListings`](/react/react.uselistings)                         | Use this to get a list all listings from your marketplace contract.                       |
| [`useListingsCount`](/react/react.uselistingscount)               | Use this to get a count of all listings on your marketplace contract.                     |
| [`useActiveListings`](/react/react.useactivelistings)             | Use this to get a list active listings from your marketplace contract.                    |
| [`useWinningBid`](/react/react.usewinningbid)                     | Use this to get a the winning bid for an auction listing from your marketplace contract.  |
| [`useAuctionWinner`](/react/react.useauctionwinner)               | Use this to get the winner of an auction listing from your marketplace contract.          |
| [`useBidBuffer`](/react/react.usebidbuffer)                       | Use this to get the buffer in basis points between offers from your marketplace contract. |
| [`useCreateDirectListing`](/react/react.usecreatedirectlisting)   | Use this to create a new Direct Listing on your marketplace contract.                     |
| [`useCreateAuctionListing`](/react/react.usecreateauctionlisting) | Use this to create a new Auction Listing on your marketplace contract.                    |
| [`useCancelListing`](/react/react.usecancellisting)               | Use this to cancel a listing on your marketplace contract.                                |
| [`useMakeBid`](/react/react.usemakebid)                           | Use this to place a bid on an auction listing from your marketplace contract.             |
| [`useBuyNow`](/react/react.usebuynow)                             | Use this to buy out an auction listing from your marketplace contract.                    |

## Permissions Controls

| Hook                                                  | Description                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------- |
| [`useAllRoleMembers`](/react/react.useallrolemembers) | Use this to get the roles of all members.                   |
| [`useRoleMembers`](/react/react.userolemembers)       | Use this to get the members of a role.                      |
| [`useIsAddressRole`](/react/react.useisaddressrole)   | Use this to check if a WalletAddress is a member of a role. |
| [`useGrantRole`](/react/react.usegrantrole)           | Use this to grant a WalletAddress a specific role.          |
| [`useRevokeRole`](/react/react.userevokerole)         | Use this to revoke a WalletAddress a specific role.         |

## Drop

| Hook                                                                | Description                                                                          |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [`useUnclaimedNFTs`](/react/react.useunclaimednfts)                 | Use this to get a list of unclaimed NFT tokens of your ERC721 Drop contract.         |
| [`useClaimedNFTs`](/react/react.useclaimednfts)                     | Use this to get a list of claimed (minted) NFT tokens of your ERC721 Drop contract.. |
| [`useUnclaimedNFTSupply`](/react/react.useunclaimednftsupply)       | Use this to get the total unclaimed NFT supply of your ERC721 Drop contract.         |
| [`useClaimedNFTSupply`](/react/react.useclaimednftsupply)           | Use this to get the total claimed (minted) NFT supply of your ERC721 Drop contract.  |
| [`useBatchesToReveal`](/react/react.usebatchestoreveal)             | Use this to get a list of batches that are ready to be revealed.                     |
| [`useClaimNFT`](/react/react.useclaimnft)                           | Use this to claim a NFT on your DropContract                                         |
| [`useLazyMint`](/react/react.uselazymint)                           | Use this to lazy mint a batch of NFTs on your DropContract.                          |
| [`useDelayedRevealLazyMint`](/react/react.usedelayedreveallazymint) | Use this to lazy mint a batch of delayed reveal NFTs on your DropContract.           |
| [`useRevealLazyMint`](/react/react.usereveallazymint)               | Use this to reveal a batch of delayed reveal NFTs on your RevealableContract.        |

## Claim Conditions

| Hook                                                                        | Description                                                                                              |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`useActiveClaimCondition`](/react/react.useactiveclaimcondition)           | Use this to get the active claim condition for ERC20, ERC721 or ERC1155 based contracts.                 |
| [`useClaimConditions`](/react/react.useclaimconditions)                     | Use this to get all claim conditions for ERC20, ERC721 or ERC1155 based contracts.                       |
| [`useClaimIneligibilityReasons`](/react/react.useclaimineligibilityreasons) | Use this to check for reasons that prevent claiming for either ERC20, ERC721 or ERC1155 based contracts. |
| [`useSetClaimConditions`](/react/react.usesetclaimconditions)               | Use this to set claim conditions on your DropContract.                                                   |
| [`useResetClaimConditions`](/react/react.useresetclaimconditions)           | Use this to reset claim conditions on your DropContract.                                                 |
