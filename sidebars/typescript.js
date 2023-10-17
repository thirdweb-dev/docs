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
      label: "Overview",
      id: "index",
    },
    {
      type: "doc",
      label: "Getting Started",
      id: "getting-started",
    },

    // ThirdwebSDK
    {
      type: "category",
      label: "ThirdwebSDK",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "thirdwebsdk",
        },
        {
          type: "doc",
          label: "fromPrivateKey",
          id: "thirdwebsdk.fromprivatekey",
        },
        {
          type: "doc",
          label: "fromWallet",
          id: "thirdwebsdk.fromwallet",
        },
        {
          type: "doc",
          label: "fromSigner",
          id: "thirdwebsdk.fromsigner",
        },
      ],
    },

    // Deploying Contracts
    {
      type: "doc",
      label: "Contract Deployer",
      id: "thirdwebsdk.sdk.contractdeployer",
    },

    // Contract Verification on Block Explorers
    {
      type: "doc",
      label: "Contract Verification",
      id: "thirdwebsdk.sdk.contractverifier",
    },

    // Contract Utils
    {
      type: "doc",
      label: "Contract Utilities",
      id: "contract-utils",
    },

    // Deterministic Deployments
    {
      type: "doc",
      label: "Deterministic Deployments",
      id: "deterministic-deployments",
    },

    // Interacting with contracts
    {
      type: "category",
      label: "Interacting with Contracts",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "interacting-with-contracts/0 Overview",
        },
        {
          type: "doc",
          label: "Get A Contract",
          id: "interacting-with-contracts/thirdwebsdk.smartcontract",
        },
        {
          type: "doc",
          label: "Call Contract Functions",
          id: "interacting-with-contracts/thirdwebsdk.smartcontract.call",
        },
        {
          type: "doc",
          label: "Transaction Builder",
          id: "interacting-with-contracts/thirdwebsdk.smartcontract.prepare", // ???
        },
        {
          type: "doc",
          label: "Detecting Contract Extensions",
          id: "interacting-with-contracts/thirdwebsdk.smartcontract.detectfeatures", // ???
        },
        {
          type: "category",
          label: "Using Extensions",
          items: [
            {
              type: "category",
              label: "ERC721",
              items: [
                {
                  type: "autogenerated",
                  dirName: "interacting-with-contracts/extensions/erc721",
                },
              ],
            },
            {
              type: "category",
              label: "ERC1155",
              items: [
                {
                  type: "autogenerated",
                  dirName: "interacting-with-contracts/extensions/erc1155",
                },
              ],
            },
            {
              type: "category",
              label: "ERC20",
              items: [
                {
                  type: "autogenerated",
                  dirName: "interacting-with-contracts/extensions/erc20",
                },
              ],
            },
            {
              type: "category",
              label: "Marketplace V3",
              items: [
                {
                  type: "autogenerated",
                  dirName:
                    "interacting-with-contracts/extensions/marketplace-v3",
                },
              ],
            },
            {
              type: "autogenerated",
              dirName: "interacting-with-contracts/extensions/general",
            },
          ],
        },
        {
          type: "category",
          label: "Using Prebuilt Contracts",
          items: [
            {
              type: "autogenerated",
              dirName: "interacting-with-contracts/prebuilt-contracts",
            },
          ],
        },
      ],
    },

    // Contract Events
    {
      type: "category",
      label: "Contract Events",
      items: [
        {
          type: "autogenerated",
          dirName: "events",
        },
      ],
    },

    // UserWallet
    {
      type: "category",
      label: "Wallet Actions",
      items: [
        {
          type: "autogenerated",
          dirName: "wallet",
        },
      ],
    },

    // // Auth
    // {
    //   type: "category",
    //   label: "Auth",
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "auth",
    //     },
    //   ],
    // },

    // Storage
    {
      type: "category",
      label: "Storage",
      items: [
        {
          type: "autogenerated",
          dirName: "storage",
        },
      ],
    },

    // // Utils
    // {
    //   type: "category",
    //   label: "Utilities",
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "utilities",
    //     },
    //     // getNativeTokenByChainId
    //     // toWei
    //     // toEther
    //     // toUnits
    //     // toDisplayValue
    //   ],
    // },

    // Constants
    {
      type: "category",
      label: "Constants",
      items: [
        {
          type: "autogenerated",
          dirName: "constants",
        },
        // ALL_ROLES
        // ChainId
        // CHAIN_ID_TO_NAME
        // CHAIN_NAME_TO_ID
        // DEFAULT_IPFS_GATEWAY
      ],
    },

    // Migration Guide
    {
      type: "doc",
      label: "Migration Guide",
      id: "migration-guide",
    },

    // // Full Reference
    // {
    //   type: "category",
    //   label: "Full Reference",
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "reference",
    //     },
    //   ],
    // },
  ],
};

module.exports = sidebars;
