import React, { memo } from "react";
import { DocSidebarItemsExpandedStateProvider } from "@docusaurus/theme-common/internal";
import DocSidebarItem from "@theme/DocSidebarItem";
import IconHome from "@theme/Icon/Home";
import Link from "@docusaurus/Link";

// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  // Category logic (i.e. "Build contracts", etc.)
  const showCategoryPages = [
    "/platform-overview",
    "/getting-started",
    "/create",
    "/release",
    "/deploy",
    "/templates",
    "/cli",
  ];
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
      title: "",
      items: [
        "Home",
        "Platform Overview",
        "Getting Started",
        "Create A Project",
      ],
    },
    {
      title: "Build Contracts",
      items: ["ContractKit"],
    },
    {
      title: "Deploy Contracts",
      items: ["Release", "Deploy", "Prebuilt Contracts"],
    },
    {
      title: "Build Apps",
      items: [
        "EVM SDK",
        "Solana SDK",
        "GamingKit",
        "UI Components",
        "Auth",
        "Storage",
      ],
    },
    {
      title: "Manage Projects",
      items: ["Dashboard"],
    },
    {
      title: "",
      items: ["CLI", "Templates", "Guides", "SDK References"],
    },
  ];

  const categoryNameToIcon = {
    Auth: "auth.png",
    ContractKit: "extensions.png",
    "Prebuilt Contracts": "contracts.png",
    Dashboard: "dashboard.png",
    Deploy: "deploy.png",
    Release: "release.png",
    SDK: "sdk.png",
    Solana: "sdk.png",
    GamingKit: "sdk.png",
    Storage: "storage.png",
    "UI Components": "ui.png",
  };

  const formatCategoryName = (name) => {
    const formatted =
      name.split("/")[1].charAt(0).toUpperCase() + name.split("/")[1].slice(1);

    if (formatted === "Sdk") {
      return "SDK";
    }

    if (formatted === "Ui-components") {
      return "UI Components";
    }

    if (formatted === "Contractkit") {
      return "ContractKit";
    }

    if (formatted === "Gamingkit") {
      return "GamingKit";
    }

    // If not the word pre-built, split by dash and capitalize each word
    if (formatted !== "Pre-built-contracts") {
      return formatted
        .split("-")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    } else {
      return "Prebuilt Contracts";
    }
  };

  if (showCategories) {
    return (
      <DocSidebarItemsExpandedStateProvider>
        {sidebarItems.map((section, index) => (
          <div key={index} className="sidebar-section-container">
            {section.title && (
              <p className="sidebar-section-title">{section.title}</p>
            )}
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

        {/* Now the rest of the items */}
        {items
          .filter(
            (item) =>
              !sidebarItems.some((section) =>
                section.items.includes(item.label),
              ),
          )
          .filter((item) => item.label !== "Guides")
          .map((item, index) => (
            <DocSidebarItem key={index} item={item} index={index} {...props} />
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

          {categoryNameToIcon[formatCategoryName(props?.activePath)] && (
            <div>
              <img
                src={`/assets/product/${
                  categoryNameToIcon[formatCategoryName(props?.activePath)]
                }`}
              />
              <p>{formatCategoryName(props?.activePath)}</p>
            </div>
          )}
        </div>
      )}

      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
