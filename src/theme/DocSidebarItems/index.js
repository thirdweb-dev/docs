import React, { memo } from "react";
import { DocSidebarItemsExpandedStateProvider } from "@docusaurus/theme-common/internal";
import DocSidebarItem from "@theme/DocSidebarItem";
import IconHome from "@theme/Icon/Home";
import Link from "@docusaurus/Link";
import { iconMapping } from "../DocSidebarItem/Link";
import styles from "../DocSidebarItem/Link/styles.module.css";

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  // Category logic (i.e. "Build contracts", etc.)
  const showCategoryPages = ["/platform-overview", "/templates", "/api-keys"];
  const checkIfShowCategoryPages = (item) => {
    // check if starts with
    return (
      item === "/" || showCategoryPages.some((page) => item.startsWith(page))
    );
  };
  const showCategories =
    props?.level === 1 && checkIfShowCategoryPages(props?.activePath);

  // Back to home logic = if not on show category pages, show back to home
  const showBackToHome =
    props?.level === 1 && !checkIfShowCategoryPages(props?.activePath);

  const sidebarItems = [
    {
      title: null, // No title for the first section
      items: ["Home", "Overview "],
    },
    {
      title: "Wallets",
      items: [
        "Connect",
        "Smart Wallet",
        "Embedded Wallet",
        "Wallet SDK",
        "Auth",
      ],
    },
    {
      title: "Contracts",
      items: [
        "Contract SDK",
        "Pre-Built Contracts",
        "Solidity SDK",
        "Deploy",
        "Publish",
        "UI Components",
      ],
    },
    {
      title: "Infrastructure",
      items: ["Engine", "Storage", "RPC Edge"],
    },
    {
      title: "Payments",
      items: ["NFT Checkouts"],
    },
    {
      title: "Tools",
      items: ["CLI", "Dashboard"],
    },
    {
      title: "SDK References",
      items: [
        "React",
        "React Native",
        "TypeScript",
        "Python",
        "Go",
        "Unity",
        "Solidity",
      ],
    },
    {
      title: "Solutions",
      items: ["Signature Minting", "Gaming"],
    },
    {
      title: "Resources",
      items: ["API Keys", "Templates", "Guides", "Glossary"],
    },
  ];

  const formatCategoryName = (name) => {
    const formatted =
      name.split("/")[1].charAt(0).toUpperCase() + name.split("/")[1].slice(1);

    if (formatted === "Sdk") {
      return "Contract SDK";
    }

    if (formatted === "Pre-built-contracts") {
      return "Pre-Built Contracts";
    }

    if (formatted === "Embedded-wallet") {
      return "Embedded Wallet";
    }

    if (formatted === "Web3-api") {
      return "Web3 API";
    }

    if (formatted === "Ui-components") {
      return "UI Components";
    }

    if (formatted === "Wallet") {
      return "Wallet SDK";
    }

    if (formatted === "Typescript") {
      return "TypeScript";
    }

    if (formatted === "Contracts") {
      return "Solidity";
    }

    if (formatted === "Cli") {
      return "CLI";
    }

    // If not the word pre-built, split by dash and capitalize each word
    return formatted
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  if (showCategories) {
    return (
      <DocSidebarItemsExpandedStateProvider>
        {sidebarItems.map((section, index) => (
          <div key={index} className="sidebar-section-container">
            {section.title && <p className="section-title">{section.title}</p>}
            {items
              .filter((item) => section.items.includes(item.label))
              .sort(
                (a, b) =>
                  section.items.indexOf(a.label) -
                  section.items.indexOf(b.label),
              )
              .map((item, index) => (
                <DocSidebarItem
                  key={index}
                  item={item}
                  index={index}
                  {...props}
                />
              ))}
          </div>
        ))}
      </DocSidebarItemsExpandedStateProvider>
    );
  }

  return (
    <DocSidebarItemsExpandedStateProvider>
      {showBackToHome && (
        <div className="sub-sidebar-category">
          <Link href="/" className="menu__list-item back-home-link">
            <IconHome
              style={{
                height: 19,
                marginBottom: "-3px",
                marginRight: "0.5rem",
              }}
            />
            {"All Docs"}
          </Link>

          {iconMapping[formatCategoryName(props?.activePath)] && (
            <div>
              <img
                src={iconMapping[formatCategoryName(props?.activePath)]}
                // Below (hacky) styling rules:
                // - Invert the icon for Solidity on dark mode
                // - Invert the icon for React and React Native on light mode
                // - Add padding for the svg icons (guides and templates)
                // - Invert the icon for "Home", "Platform Overview", and "Getting Started" on light mode
                className={`
            
            ${styles.icon} ${
                  formatCategoryName(props?.activePath) === "Solidity" &&
                  styles.invertDarkIcon
                }

            ${
              (formatCategoryName(props?.activePath) === "React" ||
                formatCategoryName(props?.activePath) === "React Native") &&
              styles.invertLightIcon
            }

            ${
              (formatCategoryName(props?.activePath) === "Templates" ||
                formatCategoryName(props?.activePath) === "Guides") &&
              styles.paddingIcon
            }

            ${
              (formatCategoryName(props?.activePath) === "Home" ||
                formatCategoryName(props?.activePath) === "Platform Overview" ||
                formatCategoryName(props?.activePath) === "Getting Started") &&
              styles.invertLightIcon
            }
            `}
              />
              <p>{formatCategoryName(props?.activePath)}</p>
            </div>
          )}
        </div>
      )}

      {items.map((item, index) => (
        <DocSidebarItem
          key={index}
          item={item}
          index={index}
          showBackToHome={showBackToHome}
          {...props}
        />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
