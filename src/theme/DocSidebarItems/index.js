import React, { memo } from "react";
import { DocSidebarItemsExpandedStateProvider } from "@docusaurus/theme-common/internal";
import DocSidebarItem from "@theme/DocSidebarItem";
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  console.log(items);

  const showCategories =
    props?.level === 1 &&
    props?.activePath !== "/python" &&
    props?.activePath !== "/typescript" &&
    props?.activePath !== "/react" &&
    props?.activePath !== "/go" &&
    props?.activePath !== "/contracts";

  const sidebarItems = [
    {
      title: "Introduction",
      items: ["Home", "Platform Overview"],
    },
    {
      title: "Get Started 🤠",
      items: ["Getting Started", "Templates"],
    },
    {
      title: "Build Contracts 📄",
      items: ["Extensions", "Pre-Built Contracts"],
    },
    {
      title: "Create Apps 🧰",
      items: ["Dashboard", "SDK", "Auth"],
    },
    {
      title: "Ship To Production 🚀",
      items: ["Release & Deploy"],
    },
  ];

  if (showCategories) {
    return (
      <DocSidebarItemsExpandedStateProvider>
        {sidebarItems.map((section, index) => (
          <div key={section.title} style={{ marginBottom: "2.5rem" }}>
            {section.title && (
              <p
                style={{
                  fontSize: 16,
                  opacity: 0.8,
                  marginLeft: 12,
                  borderBottom: section.dontShowBorder
                    ? ""
                    : "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {section.title}
              </p>
            )}
            {items
              .filter((item) => section.items.includes(item.label))
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
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
