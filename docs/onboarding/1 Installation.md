---
title: Installation
slug: /installation
---

import InstallingThirdwebCodeTabs from "../../src/components/InstallingThirdwebCodeTabs.tsx";
import InitializingThirdwebCodeTabs from "../../src/components/InitializingThirdwebCodeTabs.tsx";
import SupportedLanguagesSection from "../../src/components/SupportedLanguagesSection.tsx";

# Automatic Setup

The easiest way to create **web applications** is by using `create-thirdweb-dapp`.

```bash
npx @thirdweb-dev/create-thirdweb-dapp
```

This interactive CLI creates a new app with the language & framework of your choice and thirdweb pre-configured.

You can also start with one of our [example projects](/examples) by passing the `--example` flag.

```bash
# This clones our NFT minting page example project.
npx @thirdweb-dev/create-thirdweb-dapp --example custom-minting-page
```

Our most popular examples are:

- [custom-minting-page](https://github.com/thirdweb-example/custom-minting-page): An NFT minting page with a claim button and remaining supply
- [nft-gated-website](https://github.com/thirdweb-example/nft-gated-website): A website where content is only accessible to users who hold an NFT
- [signature-based-minting](https://github.com/thirdweb-example/signature-based-minting): Server-side signature-based minting on an NFT Collection with Next.js

## Manual Setup

Alternatively, install the thirdweb CLI in your project by adding the required dependencies.

This is recommended for existing projects or projects not running on web clients.

<InstallingThirdwebCodeTabs />

### SDK References

We also have getting started guides for each of our supported languages:

<SupportedLanguagesSection />
