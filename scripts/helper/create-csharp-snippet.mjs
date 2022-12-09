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
    burn: 'var tokenId = "0";\nvar result = await contract.ERC721.Burn(tokenId);',
    mintBatchTo:
      '// Address of the Wallet you want to mint the NFT to\nvar walletAddress = "{{wallet_address}}";\n\n// Custom metadata of the NFTs you want to mint.\nvar metadatas = [{\n  name: "Cool NFT #1",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}, {\n  name: "Cool NFT #2",\n  description: "This is a cool NFT",\n  image: fs.readFileSync("path/to/other/image.png"),\n}];\n\nvar tx = await contract.mintBatchTo(walletAddress, metadatas);\nvar receipt = tx[0].receipt; // same transaction receipt for all minted NFTs\nvar firstTokenId = tx[0].id; // token id of the first minted NFT\nvar firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT',
    mintTo:
      '// Address of the Wallet you want to mint the NFT to\nvar walletAddress = "{{wallet_address}}";\n\n// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.\nvar metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n};\n\nvar tx = await contract.MintTo(walletAddress, metadata);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
    balanceOf:
      'var walletAddress = "{{wallet_address}}";\nvar balance = await contract.BalanceOf(walletAddress);\nDebug.Log(balance);',
    get: 'var tokenId = "0";\nvar nft = await contract.ERC721.Get(tokenId);',
    getAll: "var nfts = await contract.ERC721.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{wallet_address}}";\nvar nfts = await contract.ERC721.GetOwned(address);\nDebug.Log(nfts);',
    transfer:
      'var walletAddress = "{{wallet_address}}";\nvar tokenId = "0";\nawait contract.Transfer(walletAddress, tokenId);',
  },
  Edition: {
    burn: 'var tokenId = "0";\nint amount = 1;var result = await contract.ERC1155.Burn(tokenId, amount);',
    getAll: "var nfts = await contract.ERC1155.GetAll();",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{wallet_address}}";\nvar nfts = await contract.GetOwned(address);',
    mintBatchTo:
      '// Address of the Wallet you want to mint the NFT to\nvar toAddress = "{{wallet_address}}"\n\n// Custom metadata and supplies of your NFTs\nvar metadataWithSupply = [{\n  supply: 50, // The number of this NFT you want to mint\n  metadata: {\n    name: "Cool NFT #1",\n    description: "This is a cool NFT",\n    image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}, {\n  supply: 100,\n  metadata: {\n    name: "Cool NFT #2",\n    description: "This is a cool NFT",\n    image: fs.readFileSync("path/to/image.png"), // This can be an image url or file\n  },\n}];\n\nvar tx = await contract.mintBatchTo(toAddress, metadataWithSupply);\nvar receipt = tx[0].receipt; // same transaction receipt for all minted NFTs\nvar firstTokenId = tx[0].id; // token id of the first minted NFT\nvar firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT',
    mintTo:
      '// Address of the Wallet you want to mint the NFT to\nvar toAddress = "{{wallet_address}}"\n\n// Custom metadata of the NFT, note that you can fully customize this metadata with other properties.\nvar metadata = new NFTMetadata() {\n  name: "Cool NFT",\n  description: "This is a cool NFT",\n  image: fs.ReadFileSync("path/to/image.png"), // This can be an image url or file\n}\n\nvar metadataWithSupply = {\n  metadata,\n  supply: 1000, // The number of this NFT you want to mint\n}\n\nvar tx = await contract.MintTo(toAddress, metadataWithSupply);\nvar receipt = tx.receipt; // the transaction receipt\nvar tokenId = tx.id; // the id of the NFT minted\nvar nft = await tx.data(); // (optional) fetch details of minted NFT',
    airdrop:
      '// The token ID of the NFT you want to airdrop\nvar tokenId = "0";\n// Array of objects of addresses and quantities to airdrop NFTs to\nvar addresses = [\n {\n   address: "0x...",\n   quantity: 2,\n },\n {\n  address: "0x...",\n   quantity: 3,\n },\n];\nawait contract.Airdrop(tokenId, addresses);\n\n// You can also pass an array of addresses, it will airdrop 1 NFT per address\nvar tokenId = "0";\nvar addresses = [\n "0x...", "0x...", "0x...",\n]\nawait contract.airdrop(tokenId, addresses);',
    balanceOf:
      '// Address of the Wallet to check NFT balance\nvar walletAddress = "{{wallet_address}}";\nvar tokenId = "0"; // Id of the NFT to check\nvar balance = await contract.BalanceOf(walletAddress, tokenId);',
    get: 'var nft = await contract.ERC1155.Get("0");',
    transfer:
      '// Address of the Wallet you want to send the NFT to\nvar toAddress = "{{wallet_address}}";\nvar tokenId = "0"; // The token ID of the NFT you want to send\nvar amount = 3; // How many copies of the NFTs to transfer\nawait contract.Transfer(toAddress, tokenId, amount);',
  },
  TokenDrop: {
    burnFrom: undefined,
    burnTokens:
      '// The amount of this token you want to burn\nvar amount = "1.2";\n\nawait contract.ERC20.Burn(amount);',
    claimTo:
      'var address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs\nvar quantity = 1; // how many tokens you want to claim\n\nvar tx = await contract.ERC20.ClaimTo(address, quantity);\nvar receipt = tx.receipt; // the transaction receipt',
    allowance:
      '// Address of the Wallet to check token allowance\nvar spenderAddress = "0x...";\nvar allowance = await contract.Allowance(spenderAddress);',
    allowanceOf:
      '// Address of the Wallet who owns the funds\nvar owner = "{{wallet_address}}";\n// Address of the Wallet to check token allowance\nvar spender = "0x...";\nvar allowance = await contract.AllowanceOf(owner, spender);',
    balance: "var balance = await contract.Balance();",
    balanceOf:
      '// Address of the Wallet to check token balance\nvar walletAddress = "{{wallet_address}}";\nvar balance = await contract.BalanceOf(walletAddress);',
    get: "var token = await contract.ERC20.Get();",
    setAllowance:
      '// Address of the Wallet to allow transfers from\nvar spenderAddress = "0x...";\n// The number of tokens to give as allowance\nvar amount = 100;\nawait contract.SetAllowance(spenderAddress, amount);',
    totalSupply: "var balance = await contract.TotalSupply();",
    transfer:
      '// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The amount of tokens you want to send\nvar amount = "0.1";\nawait contract.ERC20.Transfer(toAddress, amount);',
    transferBatch: undefined,
    transferFrom: undefined,
  },
  Token: {
    burn: '// The amount of this token you want to burn\nvar amount = "1.2";\n\nawait contract.ERC20.Burn(amount);',
    burnFrom: undefined,
    mintBatchTo: undefined,
    mintTo:
      'var toAddress = "{{wallet_address}}"; // Address of the Wallet you want to mint the tokens to\nvar amount = "1.5"; // The amount of this token you want to mint\n\nawait contract.MintTo(toAddress, amount);',
    allowance:
      '// Address of the Wallet to check token allowance\nvar spenderAddress = "0x...";\nvar allowance = await contract.Allowance(spenderAddress);',
    allowanceOf:
      '// Address of the Wallet who owns the funds\nvar owner = "{{wallet_address}}";\n// Address of the Wallet to check token allowance\nvar spender = "0x...";\nvar allowance = await contract.AllowanceOf(owner, spender);',
    balance: "var balance = await contract.Balance();",
    balanceOf:
      '// Address of the Wallet to check token balance\nvar walletAddress = "{{wallet_address}}";\nvar balance = await contract.BalanceOf(walletAddress);',
    get: "var token = await contract.Get();",
    setAllowance:
      '// Address of the Wallet to allow transfers from\nvar spenderAddress = "0x...";\n// The number of tokens to give as allowance\nvar amount = 100;\nawait contract.SetAllowance(spenderAddress, amount);',
    totalSupply: "var balance = await contract.TotalSupply();",
    transfer:
      '// Address of the Wallet you want to send the tokens to\nvar toAddress = "0x...";\n// The amount of tokens you want to send\nvar amount = "0.1";\nawait contract.ERC20.Transfer(toAddress, amount);',
    transferBatch:
      '// Data of the tokens you want to mint\nvar data = [\n  {\n    toAddress: "{{wallet_address}}", // Address to mint tokens to\n    amount: 100, // How many tokens to mint to specified address\n  },\n {\n   toAddress: "0x...",\n   amount: 100,\n }\n]\n\nawait contract.ERC20.TransferBatch(data);',
    transferFrom: undefined,
  },
  NFTDrop: {
    balanceOf:
      'var walletAddress = "{{wallet_address}}";\nvar balance = await contract.BalanceOf(walletAddress);\nDebug.Log(balance);',
    burn: 'var tokenId = "0";\nvar result = await contract.ERC721.Burn(tokenId);',
    claimTo:
      'var address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs\nvar quantity = 1; // how many unique NFTs you want to claim\n\nvar tx = await contract.ERC721.ClaimTo(address, quantity);',
    createBatch:
      "// Lazy minting in Unity is coming soon. Reach out to us on Discord if you need this feature!",
    get: 'var tokenId = "0";\nvar nft = await contract.ERC721.Get(tokenId);',
    getAllClaimed: undefined,
    getAllUnclaimed: undefined,
    totalClaimedSupply:
      "var claimedNFTCount = await contract.ERC721.TotalClaimedSupply();",
    totalUnclaimedSupply:
      "var unclaimedNFTCount = await contract.ERC721.TotalUnclaimedSupply();",
    transfer:
      'var walletAddress = "{{wallet_address}}";\nvar tokenId = "0";\nawait contract.ERC721.Transfer(walletAddress, tokenId);',
    getAll: "var nfts = await contract.ERC721.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{wallet_address}}";\nvar nfts = await contract.ERC721.GetOwned(address);\nDebug.Log(nfts);',
  },
  EditionDrop: {
    burnTokens:
      'var tokenId = "0";\nint amount = 1;var result = await contract.ERC1155.Burn(tokenId, amount);',
    claimTo:
      'var address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs\nvar quantity = 1; // how many unique NFTs you want to claim\n\nvar tx = await contract.ERC721.ClaimTo(address, quantity);',
    createBatch:
      "// Lazy minting in Unity is coming soon. Reach out to us on Discord if you need this feature!",
    getAll: "var nfts = await contract.ERC1155.GetAll();",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{wallet_address}}";\nvar nfts = await contract.GetOwned(address);',
    airdrop:
      '// The token ID of the NFT you want to airdrop\nvar tokenId = "0";\n// Array of objects of addresses and quantities to airdrop NFTs to\nvar addresses = [\n {\n   address: "0x...",\n   quantity: 2,\n },\n {\n  address: "0x...",\n   quantity: 3,\n },\n];\nawait contract.Airdrop(tokenId, addresses);\n\n// You can also pass an array of addresses, it will airdrop 1 NFT per address\nvar tokenId = "0";\nvar addresses = [\n "0x...", "0x...", "0x...",\n]\nawait contract.airdrop(tokenId, addresses);',
    balanceOf:
      '// Address of the Wallet to check NFT balance\nvar walletAddress = "{{wallet_address}}";\nvar tokenId = "0"; // Id of the NFT to check\nvar balance = await contract.BalanceOf(walletAddress, tokenId);',
    get: 'var nft = await contract.ERC1155.Get("0");',
    transfer:
      '// Address of the Wallet you want to send the NFT to\nvar toAddress = "{{wallet_address}}";\nvar tokenId = "0"; // The token ID of the NFT you want to send\nvar amount = 3; // How many copies of the NFTs to transfer\nawait contract.ERC1155.Transfer(toAddress, tokenId, amount);',
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
      '// The address to check the funds of\nvar address = "{{wallet_address}}";\nvar funds = await contract.BalanceOf(address);\nDebug.Log(funds);',
    balanceOfToken:
      '// The address to check the funds of\nvar address = "{{wallet_address}}";\n// The address of the currency to check the contracts funds of\nvar tokenAddress = "0x..."\nvar funds = await contract.BalanceOfToken(address, tokenAddress);\nDebug.Log(funds);',
    distribute: "await contract.Distribute();",
    distributeToken:
      '// The address of the currency to distribute funds\nvar tokenAddress = "0x..."\nawait contract.DistributeToken(tokenAddress);',
    getAllRecipients:
      "var recipients = await contract.GetAllRecipients();\nDebug.Log(recipients);",
    withdraw:
      '// the Wallet address that wants to withdraw their funds\nvar walletAddress = "{{wallet_address}}"\nawait contract.Withdraw(walletAddress);',
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
      '// Address of the Wallet to get the packs of\nvar address = "{{wallet_address}}";\nvar packss = await contract.GetOwned(address);',
    getPackContents:
      "var packId = 0;\nvar contents = await contract.GetPackContents(packId);\nDebug.Log(contents.erc20Rewards);\nDebug.Log(contents.erc721Rewards);\nDebug.Log(contents.erc1155Rewards);",
    open: 'var tokenId = "0"\nvar amount = 1\nvar tx = await contract.Open(tokenId, amount);',
    airdrop:
      '// The token ID of the NFT you want to airdrop\nvar tokenId = "0";\n// Array of objects of addresses and quantities to airdrop NFTs to\nvar addresses = [\n {\n   address: "0x...",\n   quantity: 2,\n },\n {\n  address: "0x...",\n   quantity: 3,\n },\n];\nawait contract.Airdrop(tokenId, addresses);\n\n// You can also pass an array of addresses, it will airdrop 1 NFT per address\nvar tokenId = "0";\nvar addresses = [\n "0x...", "0x...", "0x...",\n]\nawait contract.airdrop(tokenId, addresses);',
    balanceOf:
      '// Address of the Wallet to check NFT balance\nvar walletAddress = "{{wallet_address}}";\nvar tokenId = "0"; // Id of the NFT to check\nvar balance = await contract.BalanceOf(walletAddress, tokenId);',
    transfer:
      '// Address of the Wallet you want to send the NFT to\nvar toAddress = "{{wallet_address}}";\nvar tokenId = "0"; // The token ID of the NFT you want to send\nvar amount = 3; // How many copies of the NFTs to transfer\nawait contract.ERC721.Transfer(toAddress, tokenId, amount);',
  },
  Vote: {
    canExecute:
      '// The proposal ID of the proposal you want to check\nvar proposalId = "0";\nvar canExecute = await contract.CanExecute(proposalId);\nDebug.Log(canExecute);',
    execute:
      '// The proposal ID ofthe proposal you want to execute\nvar proposalId = "0"\nawait contract.Execute(proposalId);',
    getAll: "var proposals = await contract.GetAll();\nDebug.Log(proposals);",
    hasVoted:
      '// The proposal ID of the proposal you want to check\nvar proposalId = "0";\n// The address of the Wallet you want to check to see if they voted\nvar address = "{{wallet_address}}";\n\nawait contract.HasVoted(proposalId, address);',
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
      'var walletAddress = "{{wallet_address}}";\nvar balance = await contract.BalanceOf(walletAddress);\nDebug.Log(balance);',
    get: 'var tokenId = "0";\nvar nft = await contract.Get(tokenId);',
    getAll: "var nfts = await contract.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{wallet_address}}";\nvar nfts = await contract.GetOwned(address);\nDebug.Log(nfts);',
    transfer:
      'var walletAddress = "{{wallet_address}}";\nvar tokenId = "0";\nawait contract.ERC721.Transfer(walletAddress, tokenId);',
  },
  ContractDeployer: {
    deployEdition:
      'await sdk\r\n    .deployer\r\n    .DeployEdition(new NFTContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deployEditionDrop:
      'await sdk\r\n    .deployer\r\n    .DeployEditionDrop(new NFTContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deployMarketplace:
      'await sdk\r\n    .deployer\r\n    .DeployMultiwrap(new MarketplaceContractDeployMetadata()\r\n    { name = "My Collection" });',
    deployMultiwrap:
      'await sdk\r\n    .deployer\r\n    .DeployMultiwrap(new NFTContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deployNFTCollection:
      'await sdk\r\n    .deployer\r\n    .DeployNFTCollection(new NFTContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deployNFTDrop:
      'await sdk\r\n    .deployer\r\n    .DeployNFTDrop(new NFTContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deployPack:
      'await sdk\r\n    .deployer\r\n    .DeployPack(new NFTContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deploySignatureDrop:
      'await sdk\r\n    .deployer\r\n    .DeploySignatureDrop(new NFTContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deploySplit:
      "// Split contract deploys are coming to Unity soon. Reach out to us on Discord if you need this feature!",
    deployToken:
      'await sdk\r\n    .deployer\r\n    .DeployToken(new 	TokenContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deployTokenDrop:
      'await sdk\r\n    .deployer\r\n    .DeployTokenDrop(new 	TokenContractDeployMetadata()\r\n    { name = "My Collection", primary_sale_recipient = "0x..." });',
    deployVote:
      "// Vote contract deploys are coming to Unity soon. Reach out to us on Discord if you need this feature!",
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
    burn: 'var tokenId = "0";\nvar result = await contract.ERC721.Burn(tokenId);',
    claimTo:
      'var address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs\nvar quantity = 1; // how many unique NFTs you want to claim\n\nvar tx = await contract.ERC721.ClaimTo(address, quantity);',
    createBatch:
      "// Lazy minting in Unity is coming soon. Reach out to us on Discord if you need this feature!",
    getAllClaimed: undefined,
    getAllUnclaimed: undefined,
    totalClaimedSupply:
      "var claimedNFTCount = await contract.ERC721.TotalClaimedSupply();",
    totalUnclaimedSupply:
      "var unclaimedNFTCount = await contract.ERC721.TotalUnclaimedSupply();",
    balanceOf:
      'var walletAddress = "{{wallet_address}}";\nvar balance = await contract.BalanceOf(walletAddress);\nDebug.Log(balance);',
    get: 'var tokenId = "0";\nvar nft = await contract.ERC721.Get(tokenId);',
    getAll: "var nfts = await contract.ERC721.GetAll();\nDebug.Log(nfts);",
    getOwned:
      '// Address of the Wallet to get the NFTs of\nvar address = "{{wallet_address}}";\nvar nfts = await contract.ERC721.GetOwned(address);\nDebug.Log(nfts);',
    transfer:
      'var walletAddress = "{{wallet_address}}";\nvar tokenId = "0";\nawait contract.ERC721.Transfer(walletAddress, tokenId);',
    signature:
      'var meta = new NFTMetadata()\n{\n    name = "Unity NFT",\n    description = "Minted From Unity (signature)",\n    image = "ipfs://QmbpciV7R5SSPb6aT9kEBAxoYoXBUsStJkMpxzymV4ZcVc"\n};\nstring connectedAddress = await sdk.wallet.GetAddress();\nvar payload = new ERC721MintPayload(connectedAddress, meta);\nvar signature = await contract.ERC721.signature.Generate(payload); // typically generated on the backend \n// Provide the signature you generated above to the Mint function:\nvar result = await contract.ERC721.signature.Mint(signature);',
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
    setRecipient: "await contract.sales.SetRecipient(recipientwalletAddress);",
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
};

/**
 * Take in a TypeScript SDK class name and method name and return a C# snippet
 * @param {string} className
 * @param {string} methodName
 */
export default function createCSharpSnippet(className, methodName) {
  return mapping?.[className]?.[methodName];
}
