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

  react: [
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
    {
      type: "doc",
      label: "ThirdwebProvider",
      id: "ThirdwebProvider",
    },
    {
      type: "doc",
      label: "ThirdwebSDKProvider",
      id: "ThirdwebSDKProvider",
    },
    {
      type: "doc",
      label: "Connecting Wallets",
      id: "Connecting Wallets",
    },
    {
      type: "category",
      label: "Wallets",
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "wallets",
        },
      ],
    },
    {
      type: "category",
      label: "UI Components",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "ConnectWallet",
          id: "ui-components/ConnectWallet",
        },
        {
          type: "doc",
          label: "Web3Button",
          id: "ui-components/Web3Button",
        },
        {
          type: "doc",
          label: "NFT Renderer",
          id: "ui-components/ThirdwebNftMedia",
        },
        {
          type: "doc",
          label: "IPFS Renderer",
          id: "ui-components/MediaRenderer",
        },
      ],
    },
    // === Hooks === \\
    {
      type: "category",
      label: "Hooks",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "useAddress",
          id: "hooks/core/useaddress",
        },
        {
          type: "doc",
          label: "useContract",
          id: "hooks/core/usecontract",
        },
        {
          type: "doc",
          label: "useContractRead",
          id: "hooks/core/usecontractread",
        },
        {
          type: "doc",
          label: "useContractWrite",
          id: "hooks/core/usecontractwrite",
        },
        {
          type: "doc",
          label: "useContractEvents",
          id: "hooks/core/usecontractevents",
        },
        {
          type: "doc",
          label: "useSDK",
          id: "hooks/core/usesdk",
        },

        // === Claim Conditions === \\
        {
          type: "category",
          label: "Claim Conditions",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/claim-conditions",
            },
          ],
        },

        // === Delayed Reveal === \\
        {
          type: "category",
          label: "Delayed Reveals",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/delayed-reveal",
            },
          ],
        },

        // === Marketplace === \\
        {
          type: "category",
          label: "Marketplaces",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/marketplace",
            },
          ],
        },

        // === Metadata === \\
        {
          type: "category",
          label: "Metadata",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/metadata",
            },
          ],
        },

        // === Network === \\
        {
          type: "category",
          label: "Network Connection",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/network",
            },
          ],
        },

        // === NFT === \\
        {
          type: "category",
          label: "NFTs",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/nft",
            },
          ],
        },

        // === NFT Drop === \\
        {
          type: "category",
          label: "NFT Drops",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/nft-drop",
            },
          ],
        },

        // === Permissions === \\
        {
          type: "category",
          label: "Permission Controls",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/permissions",
            },
          ],
        },

        // === Royalties & Fees === \\
        {
          type: "category",
          label: "Royalty & Fees",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/fees",
            },
          ],
        },

        // === Token === \\
        {
          type: "category",
          label: "Tokens",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/token",
            },
          ],
        },

        // === Token Drop === \\
        {
          type: "category",
          label: "Token Drops",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/token-drop",
            },
          ],
        },

        // === Wallet Connector Hooks === \\
        {
          type: "category",
          label: "Wallet Connection",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/wallet",
            },
          ],
        },
        // === Smart Wallet === \\
        {
          type: "category",
          label: "Smart Wallet",
          items: [
            {
              type: "autogenerated",
              dirName: "hooks/smart-wallet",
            },
          ],
        },
      ],
    },
    // === Auth === \\
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "autogenerated",
          dirName: "auth",
        },
      ],
    },

    // === Storage === \\
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

    // Migration guide
    {
      type: "doc",
      label: "Migration Guide",
      id: "migration-guide",
    },

    // Full Reference
    {
      type: "html",
      value:
        '<a style="text-decorations:none; color:inherit;" href="/reference/react/index.html" target="_blank">Full Reference</a>',
      defaultStyle: true,
    },
    // {
    //   type: "html",
    //   value:
    //     '<a style="text-decorations:none; color:inherit;" href="/reference/react/index.html" target="_blank">Full Reference</a>',
    //   defaultStyle: true,
    // },
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
