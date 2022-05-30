---
slug: /thirdweb-deploy/thirdweb-cli
title: thirdweb CLI
---

# thirdweb CLI

## Getting started

The thirdweb CLI is your one-stop-shop for publishing custom contracts for your team or the world to use. The CLI uploads all necessary data to decentralized storage and makes it available to deploy via the thirdweb sdk or thirdweb dashboard.

This brings all the capabilities of thirdweb to your own custom contracts.

## Deploying your contract

Once your contract code is setup like above, you can now publish it by running:

```shell
npx thirdweb deploy
```

Alternatively, you install the CLI as a global command on your machine:

```shell
npm i -g @thirdweb-dev/cli
thirdweb deploy
```

This command will:

- auto-detect any contracts in your project
- compile your project
- Upload ABIs to IPFS
- Open the deploy flow in your thirdweb dashboard in a browser

From the thirdweb dashboard, you can review and deploy your contracts.

---

## Commands

- `thirdweb deploy` - Compile & deploy contracts through your dashboard
- `thirdweb publish` - Compile & publish contracts, makes them available for easy deployment later directly from your dashboard.

---

## Supported projects

To publish, you need to be in a directory that contains a project which the CLI is compatible
with. The projects we support so far:

- hardhat
- forge
- truffle
- brownie
- solc
