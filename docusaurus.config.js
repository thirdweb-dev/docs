// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");

const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");
// const disableCachePlugin = require("./plugins/disable-cache-plugin");
const path = require("path");

const baseUrl = process.env.BASE_URL || "/";

//@ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "thirdweb developer portal",
  tagline: "Get started with thirdweb by diving into our developer portal.",
  url: "https://portal.thirdweb.com",
  baseUrl,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "thirdweb-dev", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  baseUrlIssueBanner: true,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars/onboarding.js"),
          id: "onboarding",
          path: "docs/onboarding",
          routeBasePath: "/",
          remarkPlugins: [[npm2yarn, { sync: true }]],
          sidebarCollapsed: false,
          editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        },
        sitemap: {
          changefreq: "daily",
        },
        theme: {
          customCss: [require.resolve("./src/scss/custom.scss")],
        },
      }),
    ],
  ],
  plugins: [
    // disableCachePlugin,
    "docusaurus-node-polyfills",
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "typescript",
        path: "docs/typescript",
        routeBasePath: "typescript",
        sidebarPath: require.resolve("./sidebars/typescript.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react",
        path: "docs/react",
        routeBasePath: "react",
        sidebarPath: require.resolve("./sidebars/react.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react-native",
        path: "docs/react-native",
        routeBasePath: "react-native",
        sidebarPath: require.resolve("./sidebars/react-native.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "contracts",
        path: "docs/contracts",
        routeBasePath: "contracts",
        sidebarPath: require.resolve("./sidebars/contracts.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "python",
        path: "docs/python",
        routeBasePath: "python",
        sidebarPath: require.resolve("./sidebars/python.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "go",
        path: "docs/go",
        routeBasePath: "go",
        sidebarPath: require.resolve("./sidebars/go.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "unity",
        path: "docs/unity",
        routeBasePath: "unity",
        sidebarPath: require.resolve("./sidebars/unity.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
        editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        // ... other options
      },
    ],
    "posthog-docusaurus",
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "@components": path.resolve(__dirname, "./src/components/"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/portal.png",
      algolia: {
        appId: "IAIE3FU2AD",
        apiKey: "1d9ebc991c049c913bedcf3d50916922",
        indexName: "thirdweb",
        contextualSearch: true,
      },
      posthog: {
        apiKey: "phc_hKK4bo8cHZrKuAVXfXGpfNSLSJuucUnguAgt2j6dgSV",
        appUrl: "https://a.thirdweb.com", // optional
        enableInDevelopment: true, // optional
      },
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: "dark",
        // This removes light mode
        disableSwitch: false,
      },
      navbar: {
        logo: {
          alt: "thirdweb docs",
          src: "img/thirdweb-logo-transparent-black.svg",
          href: "/",
          srcDark: "img/thirdweb-logo-transparent-white.svg",
        },
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "JavaScript / TypeScript",
                to: "/typescript",
              },
              {
                label: "React",
                to: "/react",
              },
              {
                label: "Storage",
                to: "/storage",
              },
              {
                label: "Contracts",
                to: "/contracts",
              },
              {
                label: "Go",
                to: "/go",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/thirdweb",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/thirdweb",
              },
              {
                label: "GitHub",
                href: "https://github.com/thirdweb-dev",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Dashboard",
                href: "https://thirdweb.com/dashboard",
              },
              {
                label: "Blog",
                href: "https://blog.thirdweb.com",
              },
              {
                label: "Guides",
                href: "/guides",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} thirdweb, Inc.`,
      },
      prism: {
        additionalLanguages: ["solidity", "csharp"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  scripts: [
    {
      src: "https://thirdweb.com/js/pl.js",
      defer: true,
      "data-domain": "portal.thirdweb.com",
      "data-api": "https://pl.thirdweb.com/api/event",
    },
  ],
};

module.exports = config;
