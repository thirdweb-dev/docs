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
      items: ["Extensions"],
    },
    {
      title: "Deploy Contracts",
      items: ["Release", "Deploy", "Prebuilt Contracts"],
    },
    {
      title: "Build Apps",
      items: ["SDK", "UI Components", "Auth"],
    },
    {
      title: "Manage Projects",
      items: ["Dashboard"],
    },
    {
      title: "",
      items: ["Templates", "Guides", "SDK References"],
    },
  ];

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "1rem",
          }}
        >
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
