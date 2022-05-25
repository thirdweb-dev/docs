---
slug: /getting-started/deploying-contracts
---

# Deploying Contracts

## Deploying via the thirdweb Dashboard

You can deploy smart contracts onto the blockchain using the thirdweb dashboard for free. In order to do this, you’ll need to first get yourself some test funds from a faucet.

:::tip Testnet Choice

For your first project we recommend you use the Mumbai Testnet. You can access free test MATIC from [the official faucet](https://faucet.polygon.technology/).

:::

### Contract Setup & Deployment

Once you have loaded up on testnet MATIC, let’s deploy your first contract.

Head over to the [**thirdweb dashboard**](https://thirdweb.com/dashboard) and connect your wallet.

Click **Deploy New Contract** and you’ll be taken to our contract deployment page.

This is where you’ll find all of our available [pre-built contracts](/pre-built-contracts).

Under **Pre-built Contracts**, click the `Deploy Now` button on the **NFT Collection** contract.

From here, you’ll be prompted to configure your NFT Collection’s metadata:

![Contract Metadata Setup](../assets/contract-metadata.png)

You can also configure specific settings within your smart contract such as

- Primary Sales Recipient Address
- Royalties Address
- Royalties Percentage

![Payout Settings Setup](../assets/payout-settings.png)

_For the sake of this guide you can also just leave the defaults in place._

When you’re happy with the configuration, you can deploy your smart contract with one click!

![Network Selection](../assets/network-selection.png)

You’ll need to approve one transaction and pay the gas fee to deploy your NFT Collection smart contract to the blockchain.

Congratulations! You just deployed your first smart contract onto the Mumbai Polygon Testnet! 🎉

:::info Deploying via SDK

You can also deploy contracts directly via any of our SDKs, this allows you to deploy contracts dynamically based on what your application needs are. Below is an example to deploy the same NFT Collection we deployed via the thirdweb dashboard with the sdk.

```javascript title="deployNftCollection.js"
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const signer = {
  /* a valid Signer */
};

const sdk = new ThirdwebSDK(signer);

await sdk.deployer.deployNFTCollection({
  name: "Your NFT Collection Name",
  primary_sale_recipient: "your-address-here",
});
```

[Learn More](/typescript/sdk.contractdeployer)

:::

### Mint your first NFT

Now you can easily view and mint new NFTs into your collection using the the dashboard too! Let's mint an NFT into your collection now.

Click on the **Mint** button and enter the details such as the name, image, description, and properties of your new NFT.

![Mint New NFT](../assets/mint-new-nft.png)

Approve the transaction, and you have successfully minted your first NFT into your collection!
