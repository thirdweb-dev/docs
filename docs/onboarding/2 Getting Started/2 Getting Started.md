---
title: Getting Started
slug: /getting-started
---

import InstallingThirdwebCodeTabs from "../../../src/components/InstallingThirdwebCodeTabs.tsx";
import InitializingThirdwebCodeTabs from "../../../src/components/InitializingThirdwebCodeTabs.tsx";
import SupportedLanguagesSection from "../../../src/components/SupportedLanguagesSection.tsx";

# Automatic Setup

The easiest way to get started is by using `create-tw-app`.

```bash
npx create-tw-app
```

This interactive CLI creates a new app with the language & framework of your choice, and thirdweb pre-configured.

You can also start off with one of our [example projects](/examples) by passing the `--example` flag.

```bash
# This clones our NFT minting page example project.
npx create-tw-app --example custom-minting-page
```

## Manual Setup

Alternatively, install thirdweb in your project by adding the required depdenencies.

<InstallingThirdwebCodeTabs />

### SDK References

We also have getting started guides for each of our supported languages:

<SupportedLanguagesSection />
