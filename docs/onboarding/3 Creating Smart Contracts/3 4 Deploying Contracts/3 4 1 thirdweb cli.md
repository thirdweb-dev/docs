---
slug: /thirdweb-cli
title: thirdweb CLI
---

# thirdweb CLI Overview

The [thirdweb CLI](https://github.com/thirdweb-dev/thirdweb-cli) is a suite of commands that allows you to develop and deploy smart contracts that
can utilize the SDK and the dashboard on your own smart contracts. It includes commands that can:

- Deploy your smart contracts without the use of private keys
- Create web applications that can interact with your smart contracts
- Publish your smart contracts for others to use _(coming soon)_

### Detect

As you're developing your contracts, you may want to implement [Contract Extensions](https://portal.thirdweb.com/thirdweb-deploy/contract-extensions) to add standard functionality to your contracts like NFT minting, querying, and more.

During your development, you can run the `thirdweb detect` command to detect any extensions on your contracts for confirmation and to suggest additional related extensions.

```bash
npx thirdweb detect
```

### Deploy

- Auto-detect any deployable contract in your project
- Compile your project
- Upload the ABI and bytecode to IPFS
- Generate a deploy link

Follow the link to the dashboard where you can connect a wallet (or a multi-sig like Gnosis) to deploy your code to blockchains from your browser-connected wallet. **No copy/pasting of private keys or complex scripting is required!**

```bash
npx thirdweb deploy
```

### Release

Upload your contract to the dashboard and create a sharable landing page with your contract's information.

```bash
npx thirdweb release
```

### Continuous Integration (Alpha)

Set up continuous integration for your contracts.

This adds a [GitHub Action](https://github.com/features/actions) to deploy the contract on pull requests and pushes to Git branches.

```bash
npx thirdweb install-ci
```

### Create

Create a new app with the language & framework of your choice and thirdweb pre-configured.

```bash
# Create a basic project with the language & framework of your choice
npx thirdweb create
```

You can also start with one of our [example repositories](https://github.com/thirdweb-example) by passing the `--example` flag and the name of the repo.

```bash
# Create a project from an example repository
npx thirdweb create --example marketplace
```
