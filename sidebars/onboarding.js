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
      label: "Connect Wallet",
      href: "react/react.connectwallet",
    },
    {
      type: "link",
      label: "Smart Wallet",
      href: "/smart-wallet",
    },
    {
      type: "link",
      label: "Web3 API",
      href: "/web3-api",
    },
    {
      type: "link",
      label: "Email Wallet",
      href: "/wallet/paper",
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
      label: "Contract SDKs",
      href: "/sdk",
    },
    {
      type: "link",
      label: "SDKs",
      href: "/sdk",
    },
    {
      type: "link",
      label: "UI Components",
      href: "/react/react.connectwallet",
    },
    {
      type: "link",
      label: "Solana SDK",
      href: "/solana",
    },
    {
      type: "link",
      label: "GamingKit",
      href: "/gamingkit",
    },
    {
      type: "link",
      label: "CommerceKit",
      href: "/commercekit",
    },
    {
      type: "link",
      label: "Minting",
      href: "/minting",
    },
    {
      type: "link",
      label: "Mobile",
      href: "/mobile",
    },
    {
      type: "link",
      label: "Digital Collectibles",
      href: "/digital-collectibles",
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

  deploy: [
    {
      type: "autogenerated",
      dirName: "16 Deploy",
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
      dirName: "14 Wallet",
    },
  ],

  smartWallet: [
    {
      type: "autogenerated",
      dirName: "23 Smart Wallet",
    },
  ],

  web3Api: [
    {
      type: "autogenerated",
      dirName: "22 Web3 API",
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

  solana: [
    {
      type: "autogenerated",
      dirName: "4 Solana SDK",
    },
  ],

  gaming: [
    {
      type: "autogenerated",
      dirName: "13 Gaming",
    },
  ],
  commerce: [
    {
      type: "autogenerated",
      dirName: "12 Commerce",
    },
  ],

  minting: [
    {
      type: "autogenerated",
      dirName: "17 Minting",
    },
  ],

  digitalCollectibles: [
    {
      type: "autogenerated",
      dirName: "19 Digital Collectibles",
    },
  ],

  glossary: [
    {
      type: "autogenerated",
      dirName: "15 Glossary",
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
