// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");

const baseUrl = process.env.BASE_URL || "/";

//@ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "thirdweb portal",
  tagline: "Get started with thirdweb by diving into our developer portal.",
  url: "https://docs.thirdweb.com",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "thidweb-dev", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,
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
          breadcrumbs: false,
          remarkPlugins: [[npm2yarn, { sync: true }]],
          sidebarCollapsed: false,
          editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        },
        blog: {
          path: "guides",
          routeBasePath: "guides",
          tagsBasePath: "tag",
          showReadingTime: true,
          remarkPlugins: [[npm2yarn, { sync: true }]],
          blogDescription: "Guides for thirdweb developers",
          blogTitle: "Guides",
          postsPerPage: 10,
          blogSidebarTitle: "Recently added",
          editUrl: "https://github.com/thirdweb-dev/docs/edit/main",
        },
        sitemap: {
          changefreq: "daily",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "typescript",
        path: "docs/typescript",
        routeBasePath: "typescript",
        sidebarPath: require.resolve("./sidebars/typescript.js"),
        remarkPlugins: [[npm2yarn, { sync: true }]],
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
    "posthog-docusaurus",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/portal.png",
      algolia: {
        appId: "IAIE3FU2AD",
        apiKey: "1d9ebc991c049c913bedcf3d50916922",
        indexName: "thirdweb",
        contextualSearch: false,
      },
      posthog: {
        apiKey: "phc_hKK4bo8cHZrKuAVXfXGpfNSLSJuucUnguAgt2j6dgSV",
        appUrl: "https://a.thirdweb.com", // optional
        enableInDevelopment: false, // optional
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "thirdweb docs",
          src: "img/thirdweb.png",
          href: "/",
          srcDark: "img/thirdweb-white.png",
        },
        items: [
          {
            href: "/guides",
            label: "Guides",
            position: "left",
          },
          {
            href: "https://blog.thirdweb.com",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/thirdweb-dev",
            label: "GitHub",
            position: "right",
          },
        ],
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
                label: "React.JS",
                to: "/react",
              },
              {
                label: "Contracts",
                to: "/contracts",
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
                href: "https://twitter.com/thirdweb_",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
