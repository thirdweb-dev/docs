const mapping = {
  ThirdwebSDK: {
    fromPrivateKey:
      "Unity does not support instantiating the SDK from a private key. Instantiate the SDK in read-only mode and then connect the user's Wallet.",
    fromSigner:
      "Unity does not support instantiating the SDK from a signer. Instantiate the SDK in read-only mode and then connect the user's Wallet.",
    fromWallet:
      "Unity does not support instantiating the SDK from a Wallet. Instantiate the SDK in read-only mode and then connect the user's Wallet.",
    getBalance: "CurrencyValue balance = await sdk.Wallet.GetBalance();",
    getContract: `// Ensure your sdk is initialized to the same network as the contract
Contract contract = sdk.GetContract("<your-smart-contract-address>");
    
// For marketplaces and packs:
Marketplace marketplace = contract.marketplace;
Pack pack = contract.pack;`,
    getContractFromAbi: `Contract contract = sdk.GetContract("<your-smart-contract-address>", "<your-contract-abi>");`,
  },
  NFTCollection: {
    burn: "var result = await contract.BurnToken(tokenId);",
    mintBatchTo:
      '// Address of the Wallet you want to mint the NFT to\nvar WalletAddress = "{{Wallet_address}}";\n\n// Custom metadata of the NFTs you want to mint.\nvar metadatas = [{\n  name: "Cool NFT #1",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT #2",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/other/image.png"),\n}];\n\nvar tx = await contract.mintBatchTo(WalletAddress, metadatas);\nvar receipt = tx[0].receipt; // same transaction receipt for all minted NFTs\nvar firstTokenId = tx[0].id; // token id of the first minted NFT\nvar firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT',
    mintTo:
      '// Address of the Wallet you want to mint the NFT to\nvar WalletAddress = "{{Wallet_address}}";\n\n// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.\nvar metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n};\n\nvar tx = await contract.MintTo(WalletAddress, metadata);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
    balanceOf:
      'var WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.BalanceOf(WalletAddress);\nDebug.Log(balance);',
    get: "var tokenId = 0;\nvar nft = await contract.Get(tokenId);",
    getAll: "var nfts = await contract.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.GetOwned(address);\nDebug.Log(nfts);',
    transfer:
      'var WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0;\nawait contract.Transfer(WalletAddress, tokenId);',
  },
  Edition: {
    burn: "var result = await contract.BurnTokens(tokenId, amount);",
    getAll: "var nfts = await contract.GetAll();",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.GetOwned(address);',
    mintBatchTo:
      '// Address of the Wallet you want to mint the NFT to\nvar toAddress = "{{Wallet_address}}"\n\n// Custom metadata and supplies of your NFTs\nvar metadataWithSupply = [{\n  supply: 50, // The number of this NFT you want to mint\n  metadata: {\n    name: "Cool NFT #1",\n    description: "This is a cool NFT",\n    image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}, {\n  supply: 100,\n  metadata: {\n    name: "Cool NFT #2",\n    description: "This is a cool NFT",\n    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}];\n\nvar tx = await contract.mintBatchTo(toAddress, metadataWithSupply);\nvar receipt = tx[0].receipt; // same transaction receipt for all minted NFTs\nvar firstTokenId = tx[0].id; // token id of the first minted NFT\nvar firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT',
    mintTo:
      '// Address of the Wallet you want to mint the NFT to\nvar toAddress = "{{Wallet_address}}"\n\n// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.\nvar metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}\n\nvar metadataWithSupply = {\n  metadata,\n  supply: 1000, // The number of this NFT you want to mint\n}\n\nvar tx = await contract.MintTo(toAddress, metadataWithSupply);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
    airdrop:
      '// The token ID of the NFT you want to airdrop\nvar tokenId = "0";\n// Array of objects of addresses and quantities to airdrop NFTs to\nvar addresses = [\n {\n   address: "0x...",\n   quantity: 2,\n },\n {\n  address: "0x...",\n   quantity: 3,\n },\n];\nawait contract.Airdrop(tokenId, addresses);\n\n// You can also pass an array of addresses, it will airdrop 1 NFT per address\nvar tokenId = "0";\nvar addresses = [\n "0x...", "0x...", "0x...",\n]\nawait contract.airdrop(tokenId, addresses);',
    balanceOf:
      '// Address of the Wallet to check NFT balance\nvar WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0; // Id of the NFT to check\nvar balance = await contract.BalanceOf(WalletAddress, tokenId);',
    get: 'var nft = await contract.Get("0");',
    transfer:
      '// Address of the Wallet you want to send the NFT to\nvar toAddress = "{{Wallet_address}}";\nvar tokenId = "0"; // The token ID of the NFT you want to send\nvar amount = 3; // How many copies of the NFTs to transfer\nawait contract.Transfer(toAddress, tokenId, amount);',
  },
  TokenDrop: {
    burnFrom:
      '// Address of the Wallet sending the tokens\nvar holderAddress = "{{Wallet_address}}";\n\n// The amount of this token you want to burn\nvar amount = 1.2;\n\nawait contract.BurnFrom(holderAddress, amount);',
    burnTokens:
      "// The amount of this token you want to burn\nvar amount = 1.2;\n\nawait contract.BurnTokens(amount);",
    claimTo:
      'var address = "{{Wallet_address}}"; // address of the Wallet you want to claim the NFTs\nvar quantity = 42.69; // how many tokens you want to claim\n\nvar tx = await contract.ClaimTo(address, quantity);\nvar receipt = tx.receipt; // the transaction receipt',
    allowance:
      '// Address of the Wallet to check token allowance\nvar spenderAddress = "0x...";\nvar allowance = await contract.Allowance(spenderAddress);',
    allowanceOf:
      '// Address of the Wallet who owns the funds\nvar owner = "{{Wallet_address}}";\n// Address of the Wallet to check token allowance\nvar spender = "0x...";\nvar allowance = await contract.AllowanceOf(owner, spender);',
    balance: "var balance = await contract.Balance();",
    balanceOf:
      '// Address of the Wallet to check token balance\nvar WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.BalanceOf(WalletAddress);',
    get: "var token = await contract.Get();",
    setAllowance:
      '// Address of the Wallet to allow transfers from\nvar spenderAddress = "0x...";\n// The number of tokens to give as allowance\nvar amount = 100;\nawait contract.SetAllowance(spenderAddress, amount);',
    totalSupply: "var balance = await contract.TotalSupply();",
    transfer:
      '// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The amount of tokens you want to send\nvar amount = "0.1";\nawait contract.Transfer(toAddress, amount);',
    transferBatch:
      '// Data of the tokens you want to mint\nvar data = [\n  {\n    toAddress: "{{Wallet_address}}", // Address to mint tokens to\n    amount: 100, // How many tokens to mint to specified address\n  },\n {\n   toAddress: "0x...",\n   amount: 100,\n }\n]\n\nawait contract.TransferBatch(data);',
    transferFrom:
      '// Address of the Wallet sending the tokens\nvar fromAddress = "{{Wallet_address}}";\n// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The number of tokens you want to send\nvar amount = 1.2\n// Note that the connected Wallet must have approval to transfer the tokens of the fromAddress\nawait contract.TransferFrom(fromAddress, toAddress, amount);',
  },
  Token: {
    burn: "// The amount of this token you want to burn\nvar amount = 1.2;\n\nawait contract.BurnTokens(amount);",
    burnFrom:
      '// Address of the Wallet sending the tokens\nvar holderAddress = "{{Wallet_address}}";\n\n// The amount of this token you want to burn\nvar amount = 1.2;\n\nawait contract.BurnFrom(holderAddress, amount);',
    mintBatchTo:
      '// Data of the tokens you want to mint\nvar data = [\n  {\n    toAddress: "{{Wallet_address}}", // Address to mint tokens to\n    amount: 0.2, // How many tokens to mint to specified address\n  },\n {\n   toAddress: "0x...",\n   amount: 1.4,\n }\n]\n\nawait contract.MintBatchTo(data);',
    mintTo:
      'var toAddress = "{{Wallet_address}}"; // Address of the Wallet you want to mint the tokens to\nvar amount = "1.5"; // The amount of this token you want to mint\n\nawait contract.MintTo(toAddress, amount);',
    allowance:
      '// Address of the Wallet to check token allowance\nvar spenderAddress = "0x...";\nvar allowance = await contract.Allowance(spenderAddress);',
    allowanceOf:
      '// Address of the Wallet who owns the funds\nvar owner = "{{Wallet_address}}";\n// Address of the Wallet to check token allowance\nvar spender = "0x...";\nvar allowance = await contract.AllowanceOf(owner, spender);',
    balance: "var balance = await contract.Balance();",
    balanceOf:
      '// Address of the Wallet to check token balance\nvar WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.BalanceOf(WalletAddress);',
    get: "var token = await contract.Get();",
    setAllowance:
      '// Address of the Wallet to allow transfers from\nvar spenderAddress = "0x...";\n// The number of tokens to give as allowance\nvar amount = 100;\nawait contract.SetAllowance(spenderAddress, amount);',
    totalSupply: "var balance = await contract.TotalSupply();",
    transfer:
      '// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The amount of tokens you want to send\nvar amount = "0.1";\nawait contract.Transfer(toAddress, amount);',
    transferBatch:
      '// Data of the tokens you want to mint\nvar data = [\n  {\n    toAddress: "{{Wallet_address}}", // Address to mint tokens to\n    amount: 100, // How many tokens to mint to specified address\n  },\n {\n   toAddress: "0x...",\n   amount: 100,\n }\n]\n\nawait contract.TransferBatch(data);',
    transferFrom:
      '// Address of the Wallet sending the tokens\nvar fromAddress = "{{Wallet_address}}";\n// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The number of tokens you want to send\nvar amount = 1.2\n// Note that the connected Wallet must have approval to transfer the tokens of the fromAddress\nawait contract.TransferFrom(fromAddress, toAddress, amount);',
  },
  NFTDrop: {
    balanceOf:
      'var WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.BalanceOf(WalletAddress);\nDebug.Log(balance);',
    burn: "var result = await contract.BurnToken(tokenId);",
    claimTo:
      'var address = "{{Wallet_address}}"; // address of the Wallet you want to claim the NFTs\nvar quantity = 1; // how many unique NFTs you want to claim\n\nvar tx = await contract.ClaimTo(address, quantity);\nvar receipt = tx[0].receipt; // the transaction receipt\nvar claimedTokenId = tx[0].id; // the id of the NFT claimed\nvar claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata',
    createBatch:
      '// Custom metadata of the NFTs to create\nvar metadatas = [{\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n\nvar results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain\nvar firstTokenId = results[0].id; // token id of the first created NFT\nvar firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT',
    get: "var tokenId = 0;\nvar nft = await contract.Get(tokenId);",
    getAllClaimed:
      "var claimedNFTs = await contract.GetAllClaimed();\nvar firstOwner = claimedNFTs[0].owner;",
    getAllUnclaimed:
      "var unclaimedNFTs = await contract.GetAllUnclaimed();\nvar firstUnclaimedNFT = unclaimedNFTs[0].name;",
    totalClaimedSupply:
      "var claimedNFTCount = await contract.TotalClaimedSupply();\nDebug.Log(`NFTs claimed so far: ${claimedNFTCount}`);",
    totalUnclaimedSupply:
      "var unclaimedNFTCount = await contract.TotalUnclaimedSupply();\nDebug.Log(`NFTs left to claim: ${unclaimedNFTCount}`);",
    transfer:
      'var WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0;\nawait contract.Transfer(WalletAddress, tokenId);',
    getAll: "var nfts = await contract.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.GetOwned(address);\nDebug.Log(nfts);',
  },
  EditionDrop: {
    burnTokens: "var result = await contract.BurnTokens(tokenId, amount);",
    claimTo:
      'var address = "{{Wallet_address}}"; // address of the Wallet you want to claim the NFTs\nvar tokenId = 0; // the id of the NFT you want to claim\nvar quantity = 1; // how many NFTs you want to claim\n\nvar tx = await contract.ClaimTo(address, tokenId, quantity);\nvar receipt = tx.receipt; // the transaction receipt',
    createBatch:
      '// Custom metadata of the NFTs to create\nvar metadatas = [{\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n\nvar results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain\nvar firstTokenId = results[0].id; // token id of the first created NFT\nvar firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT',
    getAll: "var nfts = await contract.GetAll();",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.GetOwned(address);',
    airdrop:
      '// The token ID of the NFT you want to airdrop\nvar tokenId = "0";\n// Array of objects of addresses and quantities to airdrop NFTs to\nvar addresses = [\n {\n   address: "0x...",\n   quantity: 2,\n },\n {\n  address: "0x...",\n   quantity: 3,\n },\n];\nawait contract.Airdrop(tokenId, addresses);\n\n// You can also pass an array of addresses, it will airdrop 1 NFT per address\nvar tokenId = "0";\nvar addresses = [\n "0x...", "0x...", "0x...",\n]\nawait contract.airdrop(tokenId, addresses);',
    balanceOf:
      '// Address of the Wallet to check NFT balance\nvar WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0; // Id of the NFT to check\nvar balance = await contract.BalanceOf(WalletAddress, tokenId);',
    get: 'var nft = await contract.Get("0");',
    transfer:
      '// Address of the Wallet you want to send the NFT to\nvar toAddress = "{{Wallet_address}}";\nvar tokenId = "0"; // The token ID of the NFT you want to send\nvar amount = 3; // How many copies of the NFTs to transfer\nawait contract.Transfer(toAddress, tokenId, amount);',
  },
  Marketplace: {
    buyoutListing:
      "// The listing ID of the asset you want to buy\nvar listingId = 0;\n// Quantity of the asset you want to buy\nvar quantityDesired = 1;\n\nawait contract.BuyoutListing(listingId, quantityDesired);",
    getActiveListings:
      "var listings = await contract.GetActiveListings();\nvar priceOfFirstActiveListing = listings[0].price;",
    getAllListings:
      "var listings = await contract.GetAllListings();\nvar priceOfFirstListing = listings[0].price;",
    getListing:
      "var listingId = 0;\nvar listing = await contract.GetListing(listingId);",
    getOffers:
      "var offers = await marketplaceContract.GetOffers(listingId);\nvar firstOffer = offers[0];",
    makeOffer:
      "// The listing ID of the asset you want to offer on\nvar listingId = 0;\n// The price you are willing to offer per token\nvar pricePerToken = 0.5;\n// The quantity of tokens you want to receive for this offer\nvar quantity = 1;\n\nawait contract.MakeOffer(\n  listingId,\n  pricePerToken,\n  quantity,\n);",
    setBidBufferBps:
      "// the bid buffer in basis points\nvar bufferBps = 5_00; // 5%\nawait contract.SetBidBufferBps(bufferBps);",
    setTimeBufferInSeconds:
      "// the time buffer in seconds\nvar bufferInSeconds = 60;\nawait contract.SetTimeBufferInSeconds(bufferInSeconds);",
  },
  MarketplaceDirect: {
    acceptOffer:
      '// The listing ID of the asset you want to bid on\nvar listingId = 0;\n// The price you are willing to bid for a single token of the listing\nvar offeror = "0x...";\n\nawait contract.direct.AcceptOffer(listingId, offeror);',
    buyoutListing:
      "// The listing ID of the asset you want to buy\nvar listingId = 0;\n// Quantity of the asset you want to buy\nvar quantityDesired = 1;\n\nawait contract.direct.BuyoutListing(listingId, quantityDesired);",
    cancelListing:
      '// The listing ID of the direct listing you want to cancel\nvar listingId = "0";\n\nawait contract.direct.CancelListing(listingId);',
    createListing:
      '// Data of the listing you want to create\nvar listing = {\n  // address of the contract the asset you want to list is on\n  assetContractAddress: "0x...",\n  // token ID of the asset you want to list\n  tokenId: "0",\n  // when should the listing open up for offers\n  startTimestamp: new Date(),\n  // how long the listing will be open for\n  listingDurationInSeconds: 86400,\n  // how many of the asset you want to list\n  quantity: 1,\n  // address of the currency contract that will be used to pay for the listing\n  currencyContractAddress: NATIVE_TOKEN_ADDRESS,\n  // how much the asset will be sold for\n  buyoutPricePerToken: "1.5",\n}\n\nvar tx = await contract.direct.createListing(listing);\nvar receipt = tx.receipt; // the transaction receipt\nvar id = tx.id; // the id of the newly created listing',
    makeOffer:
      'import { ChainId, NATIVE_TOKENS } from "@thirdweb-dev/sdk";\n\n// The listing ID of the asset you want to offer on\nvar listingId = 0;\n// The price you are willing to offer per token\nvar pricePerToken = 1;\n// The quantity of tokens you want to receive for this offer\nvar quantity = 1;\n// The address of the currency you are making the offer in (must be ERC-20)\nvar currencyContractAddress = NATIVE_TOKENS[ChainId.Rinkeby].wrapped.address\n\nawait contract.direct.MakeOffer(\n  listingId,\n  quantity,\n  currencyContractAddress,\n  pricePerToken\n);',
  },
  MarketplaceAuction: {
    buyoutListing:
      "// The listing ID of the asset you want to buy\nvar listingId = 0;\n\nawait contract.auction.BuyoutListing(listingId);",
    cancelListing:
      '// The listing ID of the auction listing you want to cancel\nvar listingId = "0";\n\nawait contract.auction.CancelListing(listingId);',
    closeListing:
      '// The listing ID of the auction listing you want to close\nvar listingId = "0";\nawait contract.auction.CloseListing(listingId);',
    createListing:
      '// Data of the auction you want to create\nvar auction = {\n  // address of the contract the asset you want to list is on\n  assetContractAddress: "0x...",\n  // token ID of the asset you want to list\n  tokenId: "0",\n // when should the listing open up for offers\n  startTimestamp: new Date(),\n  // how long the listing will be open for\n  listingDurationInSeconds: 86400,\n  // how many of the asset you want to list\n  quantity: 1,\n  // address of the currency contract that will be used to pay for the listing\n  currencyContractAddress: NATIVE_TOKEN_ADDRESS,\n  // how much people would have to bid to instantly buy the asset\n  buyoutPricePerToken: "10",\n  // the minimum bid that will be accepted for the token\n  reservePricePerToken: "1.5",\n}\n\nvar tx = await contract.auction.createListing(auction);\nvar receipt = tx.receipt; // the transaction receipt\nvar id = tx.id; // the id of the newly created listing',
    executeSale:
      '// The listing ID of the auction listing you want to close\nvar listingId = "0";\nawait contract.auction.ExecuteSale(listingId);',
    getWinner:
      "// The listing ID of the auction that closed\nvar listingId = 0;\n\ncontract.auction.\n  .GetWinner(listingId)\n  .then((auctionWinner) => Debug.Log(auctionWinner))\n  .catch((err) => console.error(err));",
    getWinningBid:
      "// The listing ID of the auction that closed\nvar listingId = 0;\n\ncontract.auction.\n  .GetWinningBid(listingId)\n  .then((offer) => Debug.Log(offer))\n  .catch((err) => console.error(err));",
    makeBid:
      "// The listing ID of the asset you want to bid on\nvar listingId = 0;\n// The price you are willing to bid for a single token of the listing\nvar pricePerToken = 1;\n\nawait contract.auction.MakeBid(listingId, pricePerToken);",
  },
  Split: {
    balanceOf:
      '// The address to check the funds of\nvar address = "{{Wallet_address}}";\nvar funds = await contract.BalanceOf(address);\nDebug.Log(funds);',
    balanceOfToken:
      '// The address to check the funds of\nvar address = "{{Wallet_address}}";\n// The address of the currency to check the contracts funds of\nvar tokenAddress = "0x..."\nvar funds = await contract.BalanceOfToken(address, tokenAddress);\nDebug.Log(funds);',
    distribute: "await contract.Distribute();",
    distributeToken:
      '// The address of the currency to distribute funds\nvar tokenAddress = "0x..."\nawait contract.DistributeToken(tokenAddress);',
    getAllRecipients:
      "var recipients = await contract.GetAllRecipients();\nDebug.Log(recipients);",
    withdraw:
      '// the Wallet address that wants to withdraw their funds\nvar WalletAddress = "{{Wallet_address}}"\nawait contract.Withdraw(WalletAddress);',
  },
  Pack: {
    addPackContents:
      'var packContents = {\n  // ERC20 rewards to be included in the pack\n  erc20Rewards: [\n    {\n      assetContract: "0x...",\n      quantityPerReward: 5,\n      quantity: 100,\n      totalRewards: 20,\n    }\n  ],\n  // ERC721 rewards to be included in the pack\n  erc721Rewards: [\n    {\n      assetContract: "0x...",\n      tokenId: 0,\n    }\n  ],\n  // ERC1155 rewards to be included in the pack\n  erc1155Rewards: [\n    {\n      assetContract: "0x...",\n      tokenId: 0,\n      quantityPerReward: 1,\n      totalRewards: 100,\n    }\n  ],\n}\n\nvar tx = await contract.AddPackContents(packId, packContents);',
    create:
      'var pack = {\n  // The metadata for the pack NFT itself\n  packMetadata: {\n    name: "My Pack",\n    description: "This is a new pack",\n    image: "ipfs://...",\n  },\n  // ERC20 rewards to be included in the pack\n  erc20Rewards: [\n    {\n      assetContract: "0x...",\n      quantityPerReward: 5,\n      quantity: 100,\n      totalRewards: 20,\n    }\n  ],\n  // ERC721 rewards to be included in the pack\n  erc721Rewards: [\n    {\n      assetContract: "0x...",\n      tokenId: 0,\n    }\n  ],\n  // ERC1155 rewards to be included in the pack\n  erc1155Rewards: [\n    {\n      assetContract: "0x...",\n      tokenId: 0,\n      quantityPerReward: 1,\n      totalRewards: 100,\n    }\n  ],\n  openStartTime: new Date(), // the date that packs can start to be opened, defaults to now\n  rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1\n}\n\nvar tx = await contract.create(pack);',
    createTo:
      'var pack = {\n  // The metadata for the pack NFT itself\n  packMetadata: {\n    name: "My Pack",\n    description: "This is a new pack",\n    image: "ipfs://...",\n  },\n  // ERC20 rewards to be included in the pack\n  erc20Rewards: [\n    {\n      assetContract: "0x...",\n      quantityPerReward: 5,\n      quantity: 100,\n      totalRewards: 20,\n    }\n  ],\n  // ERC721 rewards to be included in the pack\n  erc721Rewards: [\n    {\n      assetContract: "0x...",\n      tokenId: 0,\n    }\n  ],\n  // ERC1155 rewards to be included in the pack\n  erc1155Rewards: [\n    {\n      assetContract: "0x...",\n      tokenId: 0,\n      quantityPerReward: 1,\n      totalRewards: 100,\n    }\n  ],\n  openStartTime: new Date(), // the date that packs can start to be opened, defaults to now\n  rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1\n}\n\nvar tx = await contract.createTo("0x...", pack);',
    get: "var pack = await contract.Get(0);\nDebug.Log(packs;",
    getAll: "var packs = await contract.GetAll();\nDebug.Log(packs;",
    getOwned:
      '// Address of the Wallet to get the packs of\nvar address = "{{Wallet_address}}";\nvar packss = await contract.GetOwned(address);',
    getPackContents:
      "var packId = 0;\nvar contents = await contract.GetPackContents(packId);\nDebug.Log(contents.erc20Rewards);\nDebug.Log(contents.erc721Rewards);\nDebug.Log(contents.erc1155Rewards);",
    open: "var tokenId = 0\nvar amount = 1\nvar tx = await contract.Open(tokenId, amount);",
    airdrop:
      '// The token ID of the NFT you want to airdrop\nvar tokenId = "0";\n// Array of objects of addresses and quantities to airdrop NFTs to\nvar addresses = [\n {\n   address: "0x...",\n   quantity: 2,\n },\n {\n  address: "0x...",\n   quantity: 3,\n },\n];\nawait contract.Airdrop(tokenId, addresses);\n\n// You can also pass an array of addresses, it will airdrop 1 NFT per address\nvar tokenId = "0";\nvar addresses = [\n "0x...", "0x...", "0x...",\n]\nawait contract.airdrop(tokenId, addresses);',
    balanceOf:
      '// Address of the Wallet to check NFT balance\nvar WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0; // Id of the NFT to check\nvar balance = await contract.BalanceOf(WalletAddress, tokenId);',
    transfer:
      '// Address of the Wallet you want to send the NFT to\nvar toAddress = "{{Wallet_address}}";\nvar tokenId = "0"; // The token ID of the NFT you want to send\nvar amount = 3; // How many copies of the NFTs to transfer\nawait contract.Transfer(toAddress, tokenId, amount);',
  },
  Vote: {
    canExecute:
      '// The proposal ID of the proposal you want to check\nvar proposalId = "0";\nvar canExecute = await contract.CanExecute(proposalId);\nDebug.Log(canExecute);',
    execute:
      '// The proposal ID ofthe proposal you want to execute\nvar proposalId = "0"\nawait contract.Execute(proposalId);',
    getAll: "var proposals = await contract.GetAll();\nDebug.Log(proposals);",
    hasVoted:
      '// The proposal ID of the proposal you want to check\nvar proposalId = "0";\n// The address of the Wallet you want to check to see if they voted\nvar address = "{{Wallet_address}}";\n\nawait contract.HasVoted(proposalId, address);',
    propose:
      '// The description of the proposal you want to pass\nvar description = "This is a great proposal - vote for it!"\n// You can (optionally) pass in contract calls that will get executed when the proposal is executed.\nvar executions = [\n  {\n    // The contract you want to make a call to\n    toAddress: "0x...",\n    // The amount of the native currency to send in this transaction\n    nativeTokenValue: 0,\n    // Transaction data that will be executed when the proposal is executed\n    // This is an example transfer transaction with a token contract (which you would need to setup in code)\n    transactionData: tokenContract.encoder.Encode(\n      "transfer", [\n        fromAddress,\n        amount,\n      ]\n    ),\n  }\n]\n\nvar proposal = await contract.propose(description, executions);',
    vote: '// The proposal ID of the proposal you want to vote on\nvar proposalId = "0";\n// The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain\nvar voteType = VoteType.For;\n// The (optional) reason for the vote\nvar reason = "I like this proposal!";\n\nawait contract.Vote(proposalId, voteType, reason);',
  },
  Multiwrap: {
    getWrappedContents:
      "var contents = await contract.GetWrappedContents(wrappedTokenId);\nDebug.Log(contents.erc20Tokens);\nDebug.Log(contents.erc721Tokens);\nDebug.Log(contents.erc1155Tokens);",
    unwrap: "await contract.Unwrap(wrappedTokenId);",
    wrap: 'var tx = await contract.Wrap({\n  erc20Tokens: [{\n    contractAddress: "0x...",\n    quantity: "0.8"\n  }],\n  erc721Tokens: [{\n    contractAddress: "0x...",\n    tokenId: "0"\n  }],\n  erc1155Tokens: [{\n    contractAddress: "0x...",\n    tokenId: "1",\n    quantity: "2"\n  }]\n}, {\n    name: "Wrapped bundle",\n    description: "This is a wrapped bundle of tokens and NFTs",\n    image: "ipfs://...",\n});\nvar receipt = tx.receipt(); // the transaction receipt\nvar wrappedTokenId = tx.id; // the id of the wrapped token bundle',
    balanceOf:
      'var WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.BalanceOf(WalletAddress);\nDebug.Log(balance);',
    get: "var tokenId = 0;\nvar nft = await contract.Get(tokenId);",
    getAll: "var nfts = await contract.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.GetOwned(address);\nDebug.Log(nfts);',
    transfer:
      'var WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0;\nawait contract.Transfer(WalletAddress, tokenId);',
  },
  ContractDeployer: {
    deployEdition:
      'var contractAddress = await sdk.deployer.DeployEdition({\n  name: "My Edition",\n  primary_sale_recipient: "your-address",\n});',
    deployEditionDrop:
      'var contractAddress = await sdk.deployer.DeployEditionDrop({\n  name: "My Edition Drop",\n  primary_sale_recipient: "your-address",\n});',
    deployMarketplace:
      'var contractAddress = await sdk.deployer.DeployMarketplace({\n  name: "My Marketplace",\n  primary_sale_recipient: "your-address",\n});',
    deployMultiwrap:
      'var contractAddress = await sdk.deployer.DeployMultiwrap({\n  name: "My Multiwrap",\n});',
    deployNFTCollection:
      'var contractAddress = await sdk.deployer.DeployNFTCollection({\n  name: "My Collection",\n  primary_sale_recipient: "your-address",\n});',
    deployNFTDrop:
      'var contractAddress = await sdk.deployer.DeployNFTDrop({\n  name: "My Drop",\n  primary_sale_recipient: "your-address",\n});',
    deployPack:
      'var contractAddress = await sdk.deployer.DeployPack({\n  name: "My Pack",\n  primary_sale_recipient: "your-address",\n});',
    deploySignatureDrop:
      'var contractAddress = await sdk.deployer.DeploySignatureDrop({\n  name: "My Signature Drop",\n  primary_sale_recipient: "your-address",\n});',
    deploySplit:
      'var contractAddress = await sdk.deployer.DeploySplit({\n  name: "My Split",\n  primary_sale_recipient: "your-address",\n  recipients: [\n   {\n     address: "your-address",\n     sharesBps: 80 * 100, // 80%\n   },\n   {\n     address: "another-address",\n     sharesBps: 20 * 100, // 20%\n   },\n  ],\n});',
    deployToken:
      'var contractAddress = await sdk.deployer.DeployToken({\n  name: "My Token",\n  primary_sale_recipient: "your-address",\n});',
    deployTokenDrop:
      'var contractAddress = await sdk.deployer.DeployTokenDrop({\n  name: "My Token Drop",\n  primary_sale_recipient: "your-address",\n});',
    deployVote:
      'var contractAddress = await sdk.deployer.DeployVote({\n  name: "My Vote",\n  primary_sale_recipient: "your-address",\n  voting_token_address: "your-token-contract-address",\n});',
  },
  ContractEvents: {
    addEventListener:
      'contract.events.AddEventListener("TokensMinted", (event) => {\n  Debug.Log(event);\n});',
    addTransactionListener:
      "contract.events.AddTransactionListener((event) => {\n  Debug.Log(event);\n}",
    getAllEvents:
      "// Optionally pass in filters to limit the blocks from which events are retrieved\nvar filters = {\n  fromBlock: 0,\n  toBlock: 1000000,\n}\nvar events = await contract.events.GetAllEvents(filters);\nDebug.Log(events[0].eventName);\nDebug.Log(events[0].data);",
    getEvents:
      '// The name of the event to get logs for\nvar eventName = "Transfer";\n\n// Optionally pass in options to limit the blocks from which events are retrieved\nvar options = {\n  fromBlock: 0,\n  toBlock: 1000000, // can also pass "latest"\n  order: "desc",\n  // Configure event filters (filter on indexed event parameters)\n  filters: {\n    from: "0x...",\n    to: "0x..."\n  }\n};\n\nvar events = await contract.events.GetEvents(eventName, options);\nDebug.Log(events[0].eventName);\nDebug.Log(events[0].data);',
    listenToAllEvents:
      "contract.events.ListenToAllEvents((event) => {\n  Debug.Log(event.eventName) // the name of the emitted event\n  Debug.Log(event.data) // event payload\n}",
    removeAllListeners: "contract.events.RemoveAllListeners();",
    removeEventListener:
      'contract.events.RemoveEventListener("TokensMinted", (event) => {\n  Debug.Log(event);\n});',
    removeTransactionListener:
      "contract.events.RemoveTransactionListener((event) => {\n Debug.Log(event);\n}",
  },
  DelayedReveal: {
    createDelayedRevealBatch:
      '// the real NFTs, these will be encrypted until your reveal them!\nvar realNFTs = [{\n  name: "Common NFT #1",\n  description: "Common NFT, one of many.",\n  image: fs.ReadFileSync("path/to/image.png"),\n}, {\n  name: "Super Rare NFT #2",\n  description: "You got a Super Rare NFT!",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n// A placeholder NFT that people will get immediately in their Wallet, until the reveal happens!\nvar placeholderNFT = {\n  name: "Hidden NFT",\n  description: "Will be revealed next week!"\n};\n// Create and encrypt the NFTs\nawait contract.Revealer.CreateDelayedRevealBatch(\n  placeholderNFT,\n  realNFTs,\n  "my secret password",\n);',
    getBatchesToReveal:
      "var batches = await contract.revealer.GetBatchesToReveal();",
    reveal:
      '// the batch to reveal\nvar batchId = 0;\n// reveal the batch\nawait contract.Revealer.Reveal(batchId, "my secret password");',
  },
  GasCostEstimator: {
    currentGasPriceInGwei:
      "var gasCostInGwei = await contract.estimator.CurrentGasPriceInGwei();",
    gasCostOf:
      'var costOfClaim = await nftDrop?.estimator.GasCostOf("claim", [\n  "0x...", // receiver\n  1, // quantity\n  "0x...", // currency\n  1, // price per token\n  [], // proofs\n  1, // proof max quantity per transaction\n]);',
    gasLimitOf:
      'var gasLimitOfClaim = await nftDrop?.estimator.GasLimitOf("claim", [\n  "0x...", // receiver\n  1, // quantity\n  "0x...", // currency\n  1, // price per token\n  [], // proofs\n  1, // proof max quantity per transaction\n]);',
  },
  ContractInterceptor: {
    overrideNextTransaction:
      "contract.interceptor.OverrideNextTransaction(() ({\n  gasLimit: 3000000,\n}));",
  },
  ContractMetadata: {
    get: "var metadata = await contract.metadata.Get();",
    set: 'await contract.metadata.Set({\n name: "My Contract",\n description: "My contract description"\n})',
    update:
      'await contract.metadata.Update({\n  name: "My Contract",\n  description: "My contract description"\n})',
  },
  ContractRoles: {
    get: 'var minterAddresses = await contract.roles.Get("minter");',
    getAll: "var rolesAndMembers = await contract.roles.GetAll();",
    grant:
      'await contract.roles.Grant("minter", "0x1234567890123456789012345678901234567890");',
    revoke:
      'await contract.roles.Revoke("minter", "0x1234567890123456789012345678901234567890");',
    setAll:
      'var minterAddresses = await contract.roles.Get("minter");\nawait contract.roles.setAll({\n minter: []\n});\nDebug.Log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []',
  },
  SignatureDrop: {
    burn: "var result = await contract.BurnToken(tokenId);",
    claimTo:
      'var address = "{{Wallet_address}}"; // address of the Wallet you want to claim the NFTs\nvar quantity = 1; // how many unique NFTs you want to claim\n\nvar tx = await contract.ClaimTo(address, quantity);\nvar receipt = tx.receipt; // the transaction receipt\nvar claimedTokenId = tx.id; // the id of the NFT claimed\nvar claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata',
    createBatch:
      '// Custom metadata of the NFTs to create\nvar metadatas = [{\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n\nvar results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain\nvar firstTokenId = results[0].id; // token id of the first created NFT\nvar firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT',
    getAllClaimed:
      "var claimedNFTs = await contract.GetAllClaimed();\nvar firstOwner = claimedNFTs[0].owner;",
    getAllUnclaimed:
      "var unclaimedNFTs = await contract.GetAllUnclaimed();\nvar firstUnclaimedNFT = unclaimedNFTs[0].name;",
    totalClaimedSupply:
      "var claimedNFTCount = await contract.TotalClaimedSupply();\nDebug.Log(`NFTs claimed so far: ${claimedNFTCount}`);",
    totalUnclaimedSupply:
      "var unclaimedNFTCount = await contract.TotalUnclaimedSupply();\nDebug.Log(`NFTs left to claim: ${unclaimedNFTCount}`);",
    balanceOf:
      'var WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.BalanceOf(WalletAddress);\nDebug.Log(balance);',
    get: "var tokenId = 0;\nvar nft = await contract.Get(tokenId);",
    getAll: "var nfts = await contract.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.GetOwned(address);\nDebug.Log(nfts);',
    transfer:
      'var WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0;\nawait contract.Transfer(WalletAddress, tokenId);',
  },
  SmartContract: {
    call: '// read public voids will return the data from the contract\nvar myValue = await contract.Call("myReadFunction");\nDebug.Log(myValue);\n\n// write public voids will return the transaction receipt\nvar tx = await contract.call("myWriteFunction", arg1, arg2);\nvar receipt = tx.receipt;\n\n// Optionally override transaction options\nawait contract.call("myWriteFunction", arg1, arg2, {\n gasLimit: 1000000, // override default gas limit\n value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call\n};',
  },
  WalletAuthenticator: {
    Authenticate:
      'var domain = "example.com";\nvar loginPayload = await sdk.Auth.Login(domain);\nvar token = await sdk.Auth.GenerateAuthToken(domain, loginPayload);\n\n// Authenticate the token and get the address of Authenticating users Wallet\nvar address = sdk.Auth.Authenticate(domain, token);',
    GenerateAuthToken:
      'var domain = "example.com";\nvar loginPayload = await sdk.Auth.Login(domain);\n\n// Generate a JWT token that can be sent to the client-side Wallet and used for Authentication\nvar token = await sdk.Auth.GenerateAuthToken(domain, loginPayload);',
    login:
      '// Add the domain of the application users will login to, this will be used throughout the login process\nvar domain = "example.com";\n// Generate a signed login payload for the connected Wallet to Authenticate with\nvar loginPayload = await sdk.Auth.Login(domain);',
    verify:
      'var domain = "example.com";\nvar loginPayload = await sdk.Auth.Login(domain);\n\n// Verify the login request\nvar address = sdk.Auth.verify(domain, loginPayload);',
  },
  UserWallet: {
    balance:
      "// native currency balance\nvar balance = await sdk.Wallet.Balance();\n// ERC20 token balance\nvar erc20balance = await sdk.Wallet.balance(tokenContractAddress);\n",
    getAddress: "var address = await sdk.Wallet.GetAddress();",
    recoverAddress:
      'var message = "Sign this message...";\nvar signature = await sdk.Wallet.Sign(message);\n\n// Now we can recover the signing address\nvar address = sdk.Wallet.recoverAddress(message, signature);',
    sign: '// This is the message to be signed\nvar message = "Sign this message...";\n\n// Now we can sign the message with the connected Wallet\nvar signature = await sdk.Wallet.Sign(message);',
    transfer:
      ' // transfer 0.8 ETH\nawait sdk.Wallet.Transfer("0x...", 0.8);\n // transfer 0.8 tokens of `tokenContractAddress`\nawait sdk.Wallet.transfer("0x...", 0.8, tokenContractAddress);',
  },
  ContractMetadata: {
    get: "var Metadata = await contract.Metadata.Get();",
    set: 'await contract.Metadata.Set({\n name: "My Contract",\n description: "My contract description"\n})',
    update:
      'await contract.Metadata.Update({\n  name: "My Contract",\n  description: "My contract description"\n})',
  },
  PlatformFee: {
    get: "var feeInfo = await contract.platformFee.Get();",
  },
  PrimarySale: {
    getRecipient: "var salesRecipient = await contract.sales.GetRecipient();",
    setRecipient: "await contract.sales.SetRecipient(recipientWalletAddress);",
  },
  Permissions: {
    get: 'var minterAddresses = await contract.Roles.Get("minter");',
    getAll: "var RolesAndMembers = await contract.Roles.GetAll();",
    grant:
      'await contract.Roles.Grant("minter", "0x1234567890123456789012345678901234567890");',
    revoke:
      'await contract.Roles.Revoke("minter", "0x1234567890123456789012345678901234567890");',
    setAll:
      'var minterAddresses = await contract.Roles.Get("minter");\nawait contract.Roles.setAll({\n minter: []\n});\nDebug.Log(await contract.Roles.get("minter")); // No matter what members had the role before, the new list will be set to []',
  },
  Royalty: {
    getDefaultRoyaltyInfo:
      "var royaltyInfo = await contract.Royalties.GetDefaultRoyaltyInfo();",
    getTokenRoyaltyInfo:
      "var royaltyInfo = await contract.Royalties.GetDefaultRoyaltyInfo();",
    setDefaultRoyaltyInfo:
      'await contract.Roles.SetDefaultRoyaltyInfo({\n  seller_fee_basis_points: 100, // 1% royalty fee\n  fee_recipient: "0x...", // the fee recipient\n});',
    setTokenRoyaltyInfo:
      'await contract.Roles.SetTokenRoyaltyInfo(tokenId, {\n  seller_fee_basis_points: 100, // 1% royalty fee\n  fee_recipient: "0x...", // the fee recipient\n});',
  },
  ERC1155ClaimableWithConditions: {
    claimConditions:
      "var presaleStartTime = new Date();\nvar publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);\nvar claimConditions = [\n  {\n    startTime: presaleStartTime, // start the presale now\n    maxQuantity: 2, // limit how many mints for this presale\n    price: 0.01, // presale price\n    snapshot: ['0x...', '0x...'], // limit minting to only certain addresses\n  },\n  {\n    startTime: publicSaleStartTime, // 24h after presale, start public sale\n    price: 0.08, // public sale price\n  }\n]);\nawait contract.ERC1155.ClaimConditions.Set(tokenId, claimConditions);",
  },
  ERC1155Revealable: {
    revealer:
      '// the real NFTs, these will be encrypted until you reveal them\nvar realNFTs = [{\n  name: "Common NFT #1",\n  description: "Common NFT, one of many.",\n  image: fs.ReadFileSync("path/to/image.png"),\n}, {\n  name: "Super Rare NFT #2",\n  description: "You got a Super Rare NFT!",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n// A placeholder NFT that people will get immediately in their Wallet, and will be converted to the real NFT at reveal time\nvar placeholderNFT = {\n  name: "Hidden NFT",\n  description: "Will be revealed next week!"\n};\n// Create and encrypt the NFTs\nawait contract.ERC1155.drop.Revealer.CreateDelayedRevealBatch(\n  placeholderNFT,\n  realNFTs,\n  "my secret password",\n);\n// Whenever you\'re ready, reveal your NFTs at any time\nvar batchId = 0; // the batch to reveal\nawait contract.ERC1155.Revealer.Reveal(batchId, "my secret password");',
  },
  ERC1155SignatureMintable: {
    signature:
      "// see how to craft a payload to sign in the `contract.signature.Generate()` documentation\nvar signedPayload = contract.signature().generate(payload);\n\n// now anyone can mint the NFT\nvar tx = contract.signature.mint(signedPayload);\nvar receipt = tx.receipt; // the mint transaction receipt\nvar mintedId = tx.id; // the id of the NFT minted",
  },
  ERC1155: {
    balanceOf:
      '// Address of the Wallet to check NFT balance\nvar WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0; // Id of the NFT to check\nvar balance = await contract.ERC1155.BalanceOf(WalletAddress, tokenId);',
    get: 'var tokenId = "0";\nvar nft = await contract.ERC1155.Get(tokenId);',
    transfer:
      '// Address of the Wallet you want to send the NFT to\nvar toAddress = "{{Wallet_address}}";\nvar tokenId = "0"; // The token ID of the NFT you want to send\nvar amount = 3; // How many copies of the NFTs to transfer\nawait contract.ERC1155.Transfer(toAddress, tokenId, amount);',
  },
  ERC1155Burnable: {
    burn: "// The token ID to burn NFTs of\nvar tokenId = 0;\n// The amount of the NFT you want to burn\nvar amount = 2;\n\nvar result = await contract.ERC1155.Burn(tokenId, amount);",
    burnBatch:
      "// The token IDs to burn NFTs of\nvar tokenIds = [0, 1];\n// The amounts of each NFT you want to burn\nvar amounts = [2, 2];\n\nvar result = await contract.ERC1155.BurnBatch(tokenIds, amounts);",
    burnBatchFrom:
      '// The address of the Wallet to burn NFTS from\nvar account = "0x...";\n// The token IDs to burn NFTs of\nvar tokenIds = [0, 1];\n// The amounts of each NFT you want to burn\nvar amounts = [2, 2];\n\nvar result = await contract.ERC1155.BurnBatchFrom(account, tokenIds, amounts);',
    burnFrom:
      '// The address of the Wallet to burn NFTS from\nvar account = "0x...";\n// The token ID to burn NFTs of\nvar tokenId = 0;\n// The amount of this NFT you want to burn\nvar amount = 2;\n\nvar result = await contract.ERC1155.BurnFrom(account, tokenId, amount);',
  },
  ERC1155Claimable: {
    claim:
      "var tokenId = 0; // the id of the NFT you want to claim\nvar quantity = 1; // how many NFTs you want to claim\n\nvar tx = await contract.ERC1155.Claim(tokenId, quantity);\nvar receipt = tx.receipt; // the transaction receipt",
    claimTo:
      'var address = "{{Wallet_address}}"; // address of the Wallet you want to claim the NFTs\nvar tokenId = 0; // the id of the NFT you want to claim\nvar quantity = 1; // how many NFTs you want to claim\n\nvar tx = await contract.ERC1155.ClaimTo(address, tokenId, quantity);\nvar receipt = tx.receipt; // the transaction receipt',
  },
  ERC1155Enumerable: {
    getAll: "var nfts = await contract.ERC1155.GetAll();",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.ERC1155.GetOwned(address);',
  },
  ERC1155LazyMintable: {
    lazyMint:
      '// Custom Metadata of the NFTs to create\nvar Metadatas = [{\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n\nvar results = await contract.ERC1155.LazyMint(Metadatas); // uploads and creates the NFTs on chain\nvar firstTokenId = results[0].id; // token id of the first created NFT\nvar firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT',
  },
  ERC1155Mintable: {
    mint: '// Address of the Wallet you want to mint the NFT to\nvar toAddress = "{{Wallet_address}}"\n\n// Custom Metadata of the NFT, note that you can fully customize this Metadata with other properties.\nvar metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}\n\nvar MetadataWithSupply = {\n  Metadata,\n  supply: 1000, // The number of this NFT you want to mint\n}\n\nvar tx = await contract.ERC1155.Mint(toAddress, MetadataWithSupply);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
    mintAdditionalSupply:
      "var tokenId = 0;\nvar additionalSupply = 1000;\nawait contract.ERC1155.MintAdditionalSupply(tokenId, additionalSupply);",
    mintTo:
      '// Address of the Wallet you want to mint the NFT to\nvar toAddress = "{{Wallet_address}}"\n\n// Custom Metadata of the NFT, note that you can fully customize this Metadata with other properties.\nvar metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}\n\nvar MetadataWithSupply = {\n  Metadata,\n  supply: 1000, // The number of this NFT you want to mint\n}\n\nvar tx = await contract.ERC1155.MintTo(toAddress, MetadataWithSupply);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
  },
  ERC1155BatchMintable: {
    mintBatch:
      '// Custom Metadata and supplies of your NFTs\nvar MetadataWithSupply = [{\n  supply: 50, // The number of this NFT you want to mint\n  Metadata: {\n    name: "Cool NFT #1",\n    description: "This is a cool NFT",\n    image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}, {\n  supply: 100,\n  Metadata: {\n    name: "Cool NFT #2",\n    description: "This is a cool NFT",\n    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}];\n\nvar tx = await contract.ERC1155.MintBatch(MetadataWithSupply);\nvar receipt = tx[0].receipt; // same transaction receipt for all minted NFTs\nvar firstTokenId = tx[0].id; // token id of the first minted NFT\nvar firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT',
    mintBatchTo:
      '// Address of the Wallet you want to mint the NFT to\nvar toAddress = "{{Wallet_address}}"\n\n// Custom Metadata and supplies of your NFTs\nvar MetadataWithSupply = [{\n  supply: 50, // The number of this NFT you want to mint\n  Metadata: {\n    name: "Cool NFT #1",\n    description: "This is a cool NFT",\n    image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}, {\n  supply: 100,\n  Metadata: {\n    name: "Cool NFT #2",\n    description: "This is a cool NFT",\n    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}];\n\nvar tx = await contract.ERC1155.MintBatchTo(toAddress, MetadataWithSupply);\nvar receipt = tx[0].receipt; // same transaction receipt for all minted NFTs\nvar firstTokenId = tx[0].id; // token id of the first minted NFT\nvar firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT',
  },
  ERC20ClaimableWithConditions: {
    claimConditions:
      "var presaleStartTime = new Date();\nvar publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);\nvar claimConditions = [\n  {\n    startTime: presaleStartTime, // start the presale now\n    maxQuantity: 2, // limit how many mints for this presale\n    price: 0.01, // presale price\n    snapshot: ['0x...', '0x...'], // limit minting to only certain addresses\n  },\n  {\n    startTime: publicSaleStartTime, // 24h after presale, start public sale\n    price: 0.08, // public sale price\n  }\n]);\nawait contract.ERC20.ClaimConditions.Set(claimConditions);",
    claim:
      "var quantity = 1; // how many tokens you want to claim\r\nvar tx = await contract.ERC20.Claim(quantity);\r\nvar receipt = tx.receipt; // the transaction receipt",
    claimTo:
      'var address = "{{Wallet_address}}"; // address of the Wallet you want to claim the NFTs\nvar quantity = 1; // how many tokens you want to claim\n\nvar tx = await contract.ERC20.ClaimTo(address, quantity);\nvar receipt = tx.receipt; // the transaction receipt',
  },
  ERC20SignatureMintable: {
    signature:
      "// see how to craft a payload to sign in the `contract.signature.Generate()` documentation\nvar signedPayload = contract.signature().generate(payload);\n\n// now anyone can mint the NFT\nvar tx = contract.ERC20.signature.mint(signedPayload);\nvar receipt = tx.receipt; // the mint transaction receipt\nvar mintedId = tx.id; // the id of the NFT minted",
  },
  ERC20: {
    allowance:
      '// Address of the Wallet to check token allowance\nvar spenderAddress = "0x...";\nvar allowance = await contract.ERC20.Allowance(spenderAddress);',
    allowanceOf:
      '// Address of the Wallet who owns the funds\nvar owner = "{{Wallet_address}}";\n// Address of the Wallet to check token allowance\nvar spender = "0x...";\nvar allowance = await contract.ERC20.AllowanceOf(owner, spender);',
    balance: "var balance = await contract.ERC20.Balance();",
    balanceOf:
      '// Address of the Wallet to check token balance\nvar WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.ERC20.BalanceOf(WalletAddress);',
    get: "var token = await contract.ERC20.Get();",
    setAllowance:
      '// Address of the Wallet to allow transfers from\nvar spenderAddress = "0x...";\n// The number of tokens to give as allowance\nvar amount = "100";\nawait contract.ERC20.SetAllowance(spenderAddress, amount);',
    totalSupply: "var balance = await contract.ERC20.TotalSupply();",
    transfer:
      '// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The amount of tokens you want to send\nvar amount = "0.1";\nawait contract.ERC20.Transfer(toAddress, amount);',
    transferFrom:
      '// Address of the Wallet sending the tokens\nvar fromAddress = "{{Wallet_address}}";\n// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The number of tokens you want to send\nvar amount = 1.2\n// Note that the connected Wallet must have approval to transfer the tokens of the fromAddress\nawait contract.ERC20.TransferFrom(fromAddress, toAddress, amount);',
  },
  ERC20Burnable: {
    burn: "// The amount of this token you want to burn\nvar amount = 1.2;\n\nawait contract.ERC20.Burn(amount);",
    burnFrom:
      '// Address of the Wallet sending the tokens\nvar holderAddress = "{{Wallet_address}}";\n\n// The amount of this token you want to burn\nvar amount = 1.2;\n\nawait contract.ERC20.BurnFrom(holderAddress, amount);',
  },
  ERC20Mintable: {
    mint: 'var amount = "1.5"; // The amount of this token you want to mint\nawait contract.ERC20.Mint(amount);',
    mintTo:
      'var toAddress = "{{Wallet_address}}"; // Address of the Wallet you want to mint the tokens to\nvar amount = "1.5"; // The amount of this token you want to mint\nawait contract.ERC20.MintTo(toAddress, amount);',
  },
  ERC20BatchMintable: {
    mintBatchTo:
      '// Data of the tokens you want to mint\nvar data = [\n  {\n    toAddress: "{{Wallet_address}}", // Address to mint tokens to\n    amount: 0.2, // How many tokens to mint to specified address\n  },\n {\n   toAddress: "0x...",\n   amount: 1.4,\n }\n]\n\nawait contract.MintBatchTo(data);',
  },
  ERC721ClaimableWithConditions: {
    claimConditions:
      "var presaleStartTime = new Date();\nvar publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);\nvar claimConditions = [\n  {\n    startTime: presaleStartTime, // start the presale now\n    maxQuantity: 2, // limit how many mints for this presale\n    price: 0.01, // presale price\n    snapshot: ['0x...', '0x...'], // limit minting to only certain addresses\n  },\n  {\n    startTime: publicSaleStartTime, // 24h after presale, start public sale\n    price: 0.08, // public sale price\n  }\n]);\nawait contract.ERC721.ClaimConditions.Set(claimConditions);",
  },
  ERC721Revealable: {
    revealer:
      '// the real NFTs, these will be encrypted until you reveal them\nvar realNFTs = [{\n  name: "Common NFT #1",\n  description: "Common NFT, one of many.",\n  image: fs.ReadFileSync("path/to/image.png"),\n}, {\n  name: "Super Rare NFT #2",\n  description: "You got a Super Rare NFT!",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n// A placeholder NFT that people will get immediately in their Wallet, and will be converted to the real NFT at reveal time\nvar placeholderNFT = {\n  name: "Hidden NFT",\n  description: "Will be revealed next week!"\n};\n// Create and encrypt the NFTs\nawait contract.ERC721.Revealer.CreateDelayedRevealBatch(\n  placeholderNFT,\n  realNFTs,\n  "my secret password",\n);\n// Whenever you\'re ready, reveal your NFTs at any time\nvar batchId = 0; // the batch to reveal\nawait contract.ERC721.Revealer.Reveal(batchId, "my secret password");',
  },
  ERC721SignatureMint: {
    signature:
      "// see how to craft a payload to sign in the `contract.signature.Generate()` documentation\nvar signedPayload = contract.signature().generate(payload);\n\n// now anyone can mint the NFT\nvar tx = contract.signature.mint(signedPayload);\nvar receipt = tx.receipt; // the mint transaction receipt\nvar mintedId = tx.id; // the id of the NFT minted",
  },
  ERC721: {
    balanceOf:
      'var WalletAddress = "{{Wallet_address}}";\nvar balance = await contract.ERC721.BalanceOf(WalletAddress);\nDebug.Log(balance);',
    get: "var tokenId = 0;\nvar nft = await contract.ERC721.Get(tokenId);",
    transfer:
      'var WalletAddress = "{{Wallet_address}}";\nvar tokenId = 0;\nawait contract.ERC721.Transfer(WalletAddress, tokenId);',
  },
  ERC721Burnable: {
    burn: "var result = await contract.ERC721.Burn(tokenId);",
  },
  ERC721Claimable: {
    claim:
      "var quantity = 1; // how many unique NFTs you want to claim\n\nvar tx = await contract.ERC721.Claim(quantity);\nvar receipt = tx.receipt; // the transaction receipt\nvar claimedTokenId = tx.id; // the id of the NFT claimed\nvar claimedNFT = await tx.data(); // (optional) get the claimed NFT Metadata",
    claimTo:
      'var address = "{{Wallet_address}}"; // address of the Wallet you want to claim the NFTs\nvar quantity = 1; // how many unique NFTs you want to claim\n\nvar tx = await contract.ERC721.ClaimTo(address, quantity);\nvar receipt = tx.receipt; // the transaction receipt\nvar claimedTokenId = tx.id; // the id of the NFT claimed\nvar claimedNFT = await tx.data(); // (optional) get the claimed NFT Metadata',
  },
  ERC721Supply: {
    getAll: "var nfts = await contract.ERC721.GetAll();\nDebug.Log(nfts);",
  },
  ERC721Enumerable: {
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{Wallet_address}}";\nvar nfts = await contract.ERC721.GetOwned(address);\nDebug.Log(nfts);',
  },
  ERC721LazyMintable: {
    lazyMint:
      '// Custom Metadata of the NFTs to create\nvar Metadatas = [{\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/image.png"),\n}];\n\nvar results = await contract.ERC721.LazyMint(Metadatas); // uploads and creates the NFTs on chain\nvar firstTokenId = results[0].id; // token id of the first created NFT\nvar firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT',
  },
  ERC721Mintable: {
    mint: '// Custom Metadata of the NFT, note that you can fully customize this Metadata with other properties.\nvar Metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n};\n\nvar tx = await contract.ERC721.mint(Metadata);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
    mintTo:
      '// Address of the Wallet you want to mint the NFT to\nvar WalletAddress = "{{Wallet_address}}";\n\n// Custom Metadata of the NFT, note that you can fully customize this Metadata with other properties.\nvar metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n};\n\nvar tx = await contract.ERC721.MintTo(WalletAddress, Metadata);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
  },
  ERC721BatchMintable: {
    mintBatchTo:
      '// Address of the Wallet you want to mint the NFT to\nvar WalletAddress = "{{Wallet_address}}";\n\n// Custom Metadata of the NFTs you want to mint.\nvar Metadatas = [{\n  name: "Cool NFT #1",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT #2",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/other/image.png"),\n}];\n\nvar tx = await contract.ERC721.mintBatchTo(WalletAddress, Metadatas);\nvar receipt = tx[0].receipt; // same transaction receipt for all minted NFTs\nvar firstTokenId = tx[0].id; // token id of the first minted NFT\nvar firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT',
  },
};

/**
 * Take in a TypeScript SDK class name and method name and return a C# snippet
 * @param {string} className
 * @param {string} methodName
 */
export default function createCSharpSnippet(className, methodName) {
  return mapping?.[className]?.[methodName];
}
