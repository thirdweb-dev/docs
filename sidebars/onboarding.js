/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  onboarding: [
    {
      type: "doc",
      label: "Home",
      id: "0 0 Home",
    },
    {
      type: "doc",
      label: "Overview ",
      id: "0 1 Platform Overview",
    },
    {
      type: "doc",
      label: "API Keys",
      id: "0 Getting Started/API Keys",
    },
    {
      type: "link",
      label: "Connect",
      href: "/connect",
    },
    {
      type: "link",
      label: "Smart Wallet",
      href: "/smart-wallet",
    },
    {
      type: "link",
      label: "Engine",
      href: "/engine",
    },
    {
      type: "link",
      label: "Embedded Wallet",
      href: "/embedded-wallet",
    },
    {
      type: "link",
      label: "Solidity SDK",
      href: "/solidity",
    },
    {
      type: "link",
      label: "Publish",
      href: "/publish",
    },
    {
      type: "link",
      label: "Deploy",
      href: "/deploy",
    },
    {
      type: "link",
      label: "Pre-Built Contracts",
      href: "/pre-built-contracts",
    },
    {
      type: "link",
      label: "Contract SDK",
      href: "/sdk",
    },
    {
      type: "link",
      label: "Mobile",
      href: "/mobile",
    },
    {
      type: "link",
      label: "Auth",
      href: "/auth",
    },
    {
      type: "link",
      label: "Storage",
      href: "/storage",
    },
    {
      type: "link",
      label: "Signature Minting",
      href: "/signature-minting",
    },
    {
      type: "link",
      label: "RPC Edge",
      href: "/rpc-edge",
    },
    {
      type: "link",
      label: "Bundler & Paymaster",
      href: "/smart-wallet/infrastructure",
    },
    {
      type: "link",
      label: "Wallet SDK",
      href: "/wallet",
    },
    {
      type: "link",
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      type: "link",
      label: "CLI",
      href: "/cli",
    },
    {
      type: "link",
      label: "Glossary",
      href: "/glossary",
    },
    {
      type: "link",
      label: "Templates",
      href: "https://thirdweb.com/templates",
    },
    {
      type: "link",
      label: "Guides",
      href: "https://blog.thirdweb.com/guides/",
    },
    {
      type: "link",
      label: "React",
      href: "/react",
    },
    {
      type: "link",
      label: "TypeScript",
      href: "/typescript",
    },
    {
      type: "link",
      label: "React Native",
      href: "/react-native",
    },
    {
      type: "link",
      label: "Python",
      href: "/python",
    },
    {
      type: "link",
      label: "Go",
      href: "/go",
    },
    {
      type: "link",
      label: "Unity",
      href: "/unity",
    },
    {
      type: "link",
      label: "Solidity",
      href: "/solidity",
    },
  ],

  buildContracts: [
    {
      type: "autogenerated",
      dirName: "1 Solidity SDK",
    },
    {
      type: "link",
      href: "/contracts",
      label: "Full Reference",
    },
  ],

  publish: [
    {
      type: "autogenerated",
      dirName: "7 Publish",
    },
  ],

  embeddedWallet: [
    {
      type: "autogenerated",
      dirName: "21 Embedded Wallet",
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "link",
          href: "/react/react.embeddedwallet",
          label: "React",
        },
        {
          type: "link",
          href: "/react-native/react-native.embeddedwallet",
          label: "React Native",
        },
        {
          type: "link",
          href: "/wallet/embedded-wallet",
          label: "Wallet SDK",
        },
      ],
    },
  ],

  deploy: [
    {
      type: "autogenerated",
      dirName: "14 Deploy",
    },
  ],

  prebuiltContracts: [
    {
      type: "autogenerated",
      dirName: "2 Explore",
    },
  ],

  wallets: [
    {
      type: "autogenerated",
      dirName: "12 Wallet",
    },
  ],

  signatureMinting: [
    {
      type: "autogenerated",
      dirName: "19 Signature Minting",
    },
  ],

  smartWallet: [
    {
      type: "autogenerated",
      dirName: "18 Smart Wallet",
    },
  ],

  engine: [
    {
      type: "autogenerated",
      dirName: "17 Engine",
    },
  ],

  connect: [
    {
      type: "autogenerated",
      dirName: "20 Connect",
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "category",
          label: "Connect Wallet Component",
          items: [
            {
              type: "link",
              href: "/react/react.connectwallet",
              label: "React",
            },
            {
              type: "link",
              href: "/react-native/react-native.connectwallet",
              label: "React Native",
            },
            {
              type: "link",
              href: "/unity/connectwallet",
              label: "Unity",
            },
          ],
        },
        {
          type: "category",
          label: "SDKs",
          items: [
            {
              type: "link",
              href: "/wallet",
              label: "Wallet SDK",
            },
            {
              type: "link",
              href: "/typescript/sdk.userwallet.balance",
              label: "TypeScript",
            },
            {
              type: "link",
              href: "/react/connecting-wallets",
              label: "React",
            },
            {
              type: "link",
              href: "/react-native/wallets",
              label: "React Native",
            },
            {
              type: "link",
              href: "/unity/wallet/authenticate",
              label: "Unity",
            },
          ],
        },
      ],
    },
  ],

  sdk: [
    {
      type: "doc",
      label: "Overview",
      id: "3 EVM SDK/0 Overview",
    },
    {
      type: "doc",
      label: "Architecture",
      id: "3 EVM SDK/1 How it works",
    },
    {
      type: "doc",
      label: "Getting Started",
      id: "3 EVM SDK/2 Getting Started",
    },
    {
      type: "category",
      label: "SDK References",
      items: [
        {
          type: "link",
          href: "/react",
          label: "React",
        },
        {
          type: "link",
          href: "/react-native",
          label: "React Native",
        },
        {
          type: "link",
          href: "/typescript",
          label: "TypeScript",
        },
        {
          type: "link",
          href: "/python",
          label: "Python",
        },
        {
          type: "link",
          href: "/go",
          label: "Go",
        },
        {
          type: "link",
          href: "/unity",
          label: "Unity",
        },
      ],
    },
  ],

  auth: [
    {
      type: "autogenerated",
      dirName: "10 Auth",
    },
  ],

  rpcEdge: [
    {
      type: "autogenerated",
      dirName: "16 RPC Edge",
    },
  ],

  storage: [
    {
      type: "autogenerated",
      dirName: "11 Storage",
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "link",
          href: "https://thirdweb.com/dashboard/storage",
          label: "Dashboard",
        },
        {
          type: "link",
          href: "/cli/upload",
          label: "CLI",
        },
        {
          type: "link",
          href: "/react/react.usestorage",
          label: "React",
        },
        {
          type: "link",
          href: "/react-native/storage",
          label: "React Native",
        },
        {
          type: "link",
          href: "/typescript/storage",
          label: "TypeScript",
        },
        {
          type: "link",
          href: "/python/python.storage",
          label: "Python",
        },
        {
          type: "link",
          href: "/unity/storage",
          label: "Unity",
        },
        {
          type: "link",
          href: "/go/storage",
          label: "Go",
        },
      ],
    },
  ],

  dashboard: [
    {
      type: "autogenerated",
      dirName: "8 Dashboard",
    },
  ],

  glossary: [
    {
      type: "autogenerated",
      dirName: "13 Glossary",
    },
  ],

  cli: [
    {
      type: "doc",
      id: "9 CLI/0 Overview",
    },
    {
      type: "category",
      label: "Commands",
      items: [
        {
          type: "doc",
          id: "9 CLI/commands/2 Create",
        },
        {
          type: "doc",
          id: "9 CLI/commands/3 Install",
        },
        {
          type: "doc",
          id: "9 CLI/commands/4 Build",
        },
        {
          type: "doc",
          id: "9 CLI/commands/8 Generate",
        },
        {
          type: "doc",
          id: "9 CLI/commands/1 Login",
        },
        {
          type: "doc",
          id: "9 CLI/commands/2 0 Logout",
        },
        {
          type: "doc",
          id: "9 CLI/commands/7 Upload",
        },
        {
          type: "link",
          href: "/deploy/getting-started",
          label: "Deploy",
        },
        {
          type: "link",
          href: "/publish",
          label: "Publish",
        },
      ],
    },
  ],
};

module.exports = sidebars;
