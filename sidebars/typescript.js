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
      label: "Migration Guide",
      id: "migration-guide",
    },

    // ThirdwebSDK
    {
      type: "category",
      label: "Initializing the SDK",
      items: [
        {
          type: "doc",
          label: "From Private Key (Backend)",
          id: "sdk.thirdwebsdk.fromprivatekey",
        },
        {
          type: "doc",
          label: "From Signer",
          id: "sdk.thirdwebsdk.fromsigner",
        },
        {
          type: "doc",
          label: "All SDK Options",
          id: "sdk.sdkoptions",
        },
      ],
    },

    // Detectable Features
    {
      type: "category",
      label: "Interacting with Contracts",
      items: [
        {
          type: "autogenerated",
          dirName: "extensions",
        },
      ],
    },
  ],
};

module.exports = sidebars;
