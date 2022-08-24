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

  typescript: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },
    {
      type: "doc",
      label: "ThirdwebSDK",
      id: "sdk.thirdwebsdk",
    },
    {
      type: "doc",
      label: "Deploying Contracts",
      id: "sdk.contractdeployer",
    },
    {
      type: "doc",
      label: "Custom Contracts",
      id: "sdk.smartcontract",
    },
    {
      type: "category",
      label: "Pre-built Contracts",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Pre-Built Contracts",
        description: "Interfaces for on-chain contracts.",
        keywords: ["contracts"],
      },
      items: [
        {
          type: "doc",
          label: "Edition",
          id: "sdk.edition",
        },
        {
          type: "doc",
          label: "Edition Drop",
          id: "sdk.editiondrop",
        },
        {
          type: "doc",
          label: "Marketplace",
          id: "sdk.marketplace",
        },
        {
          type: "doc",
          label: "NFT Collection",
          id: "sdk.nftcollection",
        },
        {
          type: "doc",
          label: "NFT Drop",
          id: "sdk.nftdrop",
        },
        {
          type: "doc",
          label: "Pack",
          id: "sdk.pack",
        },
        {
          type: "doc",
          label: "Split",
          id: "sdk.split",
        },
        {
          type: "doc",
          label: "Token",
          id: "sdk.token",
        },
        {
          type: "doc",
          label: "Vote",
          id: "sdk.vote",
        },
        {
          type: "doc",
          label: "Multiwrap",
          id: "sdk.multiwrap",
        },
        {
          type: "doc",
          label: "Signature Drop",
          id: "sdk.signaturedrop",
        },
      ],
    },
    {
      type: "category",
      label: "Contract Interfaces",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Contract Interfaces",
        description:
          "Contract interfaces that extend the functionality of contracts",
        keywords: ["contracts", "shared-interfaces"],
      },
      items: [
        {
          type: "doc",
          label: "ERC 20",
          id: "sdk.erc20",
        },
        {
          type: "doc",
          label: "ERC 721",
          id: "sdk.erc721",
        },
        {
          type: "doc",
          label: "ERC 1155",
          id: "sdk.erc1155",
        },
        {
          type: "doc",
          label: "Direct Listing",
          id: "sdk.marketplacedirect",
        },
        {
          type: "doc",
          label: "Auction Listing",
          id: "sdk.marketplaceauction",
        },
        {
          type: "doc",
          label: "NFT Drop Claim Conditions",
          id: "sdk.dropclaimconditions",
        },
        {
          type: "doc",
          label: "Edition Drop Claim Conditions",
          id: "sdk.droperc1155claimconditions",
        },
      ],
    },
    {
      type: "category",
      label: "Signature Minting",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Signature Minting",
        description: "Signature based minting for contracts.",
        keywords: ["contracts", "signature-minting"],
      },
      items: [
        {
          type: "doc",
          label: "ERC 20 Signature Minting",
          id: "sdk.erc20signaturemintable",
        },
        {
          type: "doc",
          label: "ERC 721 Signature Minting",
          id: "sdk.erc721withquantitysignaturemintable",
        },
        {
          type: "doc",
          label: "ERC 1155 Signature Minting",
          id: "sdk.erc1155signaturemintable",
        },
      ],
    },
    {
      type: "category",
      label: "Contract Settings",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Contract Settings",
        description: "Interfaces to manage contract settings.",
        keywords: ["contracts", "settings"],
      },
      items: [
        {
          type: "doc",
          label: "Contract Metadata",
          id: "sdk.contractmetadata",
        },
        {
          type: "doc",
          label: "Contract Roles",
          id: "sdk.contractroles",
        },
        {
          type: "doc",
          label: "Platform Fee",
          id: "sdk.contractplatformfee",
        },
        {
          type: "doc",
          label: "Royalties",
          id: "sdk.contractroyalty",
        },
        {
          type: "doc",
          label: "Primary Sales",
          id: "sdk.contractprimarysale",
        },
      ],
    },
    {
      type: "doc",
      label: "Remote Storage",
      id: "sdk.thirdwebsdk.storage",
    },
    {
      type: "doc",
      label: "Wallet Authentication",
      id: "sdk.walletauthenticator",
    },
    {
      type: "doc",
      label: "Contract Events",
      id: "sdk.contractevents",
    },
    {
      className: "hidden-category",
      type: "category",
      label: "Full Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Full Reference",
        description: "Everything exported by the package",
      },
      items: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
      collapsible: false,
    },
  ],
};

module.exports = sidebars;
