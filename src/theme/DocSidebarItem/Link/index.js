import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { isActiveSidebarItem } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";
import styles from "./styles.module.css";

// List of sidebar items that have icons, display name (label) of icon is the key

export const iconMapping = {
  React: "/assets/languages/react.png",
  "React Native": "/assets/languages/react-native.png",
  TypeScript: "/assets/languages/typescript.png",
  Python: "/assets/languages/python.png",
  Go: "/assets/languages/go.png",
  Unity: "/assets/languages/unity.webp",
  Solidity: "/assets/languages/solidity.png",
  Auth: "/assets/product/auth.png",
  "Solidity SDK": "/assets/product/extensions.png",
  "Prebuilt Contracts": "/assets/product/contracts.png",
  Dashboard: "/assets/product/dashboard.png",
  Deploy: "/assets/product/deploy.png",
  Publish: "/assets/product/publish.png",
  SDK: "/assets/product/sdk.png",
  "EVM SDK": "/assets/product/sdk.png",
  "Solana SDK": "/assets/product/sdk.png",
  Solana: "/assets/product/sdk.png",
  GamingKit: "/assets/product/sdk.png",
  CommerceKit: "/assets/product/sdk.png",
  Storage: "/assets/product/storage.png",
  "UI Components": "/assets/product/ui.png",
  Home: "/assets/icons/home.png",
  "Platform Overview": "/assets/icons/wrench.png",
  "Getting Started": "/assets/icons/rocket.png",
  Templates: "/assets/sdk-reference.svg",
  Guides: "/assets/guides.svg",
  CLI: "/assets/icons/terminal.svg",
  Extensions: "/assets/icons/extensions.png"
};

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  showBackToHome, // Added this prop: if true, means we show the back to home icon, which we use to determine whether to show icons next to
  ...props
}) {
  const { href, label, className } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);
  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className,
      )}
      key={label}
    >
      <Link
        className={clsx(
          "menu__link",
          !isInternalLink && styles.menuExternalLink,
          {
            "menu__link--active": isActive,
          },
        )}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {/* TODO: something is wrong here (see console) */}
        {!showBackToHome && iconMapping[label] && (
          <img
            src={iconMapping[label]}
            alt={label}
            // Below (hacky) styling rules:
            // - Invert the icon for Solidity on dark mode
            // - Invert the icon for React and React Native on light mode
            // - Add padding for the svg icons (guides and templates)
            // - Invert the icon for "Home", "Platform Overview", and "Getting Started" on light mode
            className={`
            
            ${styles.icon} ${label === "Solidity" && styles.invertDarkIcon}

            ${
              (label === "React" || label === "React Native") &&
              styles.invertLightIcon
            }

            ${
              (label === "Templates" || label === "Guides") &&
              styles.paddingIcon
            }

            ${
              (label === "Home" ||
                label === "Platform Overview" ||
                label === "Getting Started") &&
              styles.invertLightIcon
            }
              
            `}
          />
        )}
        {label}
        {/* Uncomment to re-add the external link icon */}
        {/* {!isInternalLink && <IconExternalLink />} */}
      </Link>
    </li>
  );
}
