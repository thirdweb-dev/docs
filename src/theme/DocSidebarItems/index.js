import React, { memo } from "react";
import { DocSidebarItemsExpandedStateProvider } from "@docusaurus/theme-common/internal";
import DocSidebarItem from "@theme/DocSidebarItem";
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  const pathsToHideCategories = ['python', 'typescript', 'react', 'go', 'contracts'];
  const basePath = ['/pt-BR/', '/'].find((path) => {
    props?.activePath.startsWith(path)
  });

  const showCategories = props?.level === 1 &&
    pathsToHideCategories.some((path, idx) => {
      !props?.activePath.startsWith(`${basePath}${path}`)
    });

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
      items: ["Prebuilt", "Extensions"],
    },
    {
      title: "Ship Projects",
      items: ["Release", "Deploy"],
    },
    {
      title: "Create Apps",
      items: ["SDK", "Auth"],
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
          <div key={section.title} className="sidebar-section-container">
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
      {items.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  );
}
// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
