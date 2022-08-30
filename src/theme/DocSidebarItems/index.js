import React, { memo } from "react";
import { DocSidebarItemsExpandedStateProvider } from "@docusaurus/theme-common/internal";
import DocSidebarItem from "@theme/DocSidebarItem";
import { translate } from "@docusaurus/Translate";
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({ items, ...props }) {
  const pathsToHideCategories = ['python', 'typescript', 'react', 'go', 'contracts'];
  const basePath = ['/pt-BR/', '/'].find((path) => {
    props?.activePath.startsWith(path)
  }) || '/';

  const showCategories = props?.level === 1 &&
    !pathsToHideCategories.some((path, idx) => {
      props?.activePath.startsWith(`${basePath}${path}`)
    });

  const sidebarItems = [
    {
      title: "",
      items: [
        translate({
          id: "theme.DocSidebarItems.homeLabel",
          message: "Home",
          description: "Home category label",
        }),

        translate({
          id: "theme.DocSidebarItems.platformOverviewLabel",
          message: "Platform Overview",
          description: "Platform Overview category label",
        }),

        translate({
          id: "theme.DocSidebarItems.gettingStartedLabel",
          message: "Getting Started",
          description: "Getting Started category label",
        }),

        translate({
          id: "theme.DocSidebarItems.createProjectLabel",
          message: "Create A Project",
          description: "Create A Project category label",
        }),
      ],
    },
    {
      title: translate({
        id: "theme.DocSidebarItems.buildContractsLabel",
        message: "Build Contracts",
        description: "Build Contracts category",
      }),
      items: [
        translate({
          id: "theme.DocSidebarItems.prebuiltLabel",
          message: "Prebuilt",
          description: "Prebuilt sidebar item",
        }),
        translate({
          id: "theme.DocSidebarItems.extensionsLabel",
          message: "Extensions",
          description: "Extensions sidebar item",
        }),
      ],
    },
    {
      title: translate({
        id: "theme.DocSidebarItems.shipProjectsLabel",
        message: "Ship Projects",
        description: "Ship Projects category label",
      }),
      items: [
        translate({
          id: "theme.DocSidebarItems.releaseLabel",
          message: "Release",
          description: "Release sidebar item",
        }),
        translate({
          id: "theme.DocSidebarItems.deployLabel",
          message: "Deploy",
          description: "Deploy sidebar item",
        }),
      ],
    },
    {
      title: translate({
        id: "theme.DocSidebarItems.createAppsLabel",
        message: "Create Apps",
        description: "Create Apps category label",
      }),
      items: [
        translate({
          id: "theme.DocSidebarItems.sdkLabel",
          message: "SDK",
          description: "SDK sidebar item",
        }),
        translate({
          id: "theme.DocSidebarItems.authLabel",
          message: "Auth",
          description: "Auth sidebar item",
        }),
      ],
    },
    {
      title: translate({
        id: "theme.DocSidebarItems.manageProjectsLabel",
        message: "Manage Projects",
        description: "Manage Projects category label",
      }),
      items: [
        translate({
          id: "theme.DocSidebarItems.dashboardLabel",
          message: "Dashboard",
          description: "Dashboard sidebar item",
        })
      ],
    },
    {
      title: "",
      items: [
        translate({
          id: "theme.DocSidebarItems.templatesLabel",
          message: "Templates",
          description: "Templates sidebar item",
        }),
        translate({
          id: "theme.DocSidebarItems.guidesLabel",
          message: "Guides",
          description: "Guides sidebar item",
        }),
        translate({
          id: "theme.DocSidebarItems.sdkReferencesLabel",
          message: "SDK References",
          description: "Guides sidebar item",
        }),
      ],
    },
  ];

  if (showCategories) {
    const guidesLabel = translate({
      id: "theme.DocSidebarItems.guidesLabel",
      message: "Guides",
      description: "Guides sidebar item",
    });

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
          .filter((item) => item.label !== guidesLabel)
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
