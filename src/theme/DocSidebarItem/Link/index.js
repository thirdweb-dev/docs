import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { isActiveSidebarItem } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";
import styles from "./styles.module.css";

// List of sidebar items that have icons, display name (label) of icon is the key

const iconMapping = {
  React: "/assets/languages/react.png",
  "React Native": "/assets/languages/react-native.png",
  TypeScript: "/assets/languages/typescript.png",
  Python: "/assets/languages/python.png",
  Go: "/assets/languages/go.png",
  Unity: "/assets/languages/unity.webp",
  Solidity: "/assets/languages/solidity.png",
  Auth: "/assets/product/auth.png",
  ContractKit: "/assets/product/extensions.png",
  "Prebuilt Contracts": "/assets/product/contracts.png",
  Dashboard: "/assets/product/dashboard.png",
  Deploy: "/assets/product/deploy.png",
  Publish: "/assets/product/publish.png",
  SDK: "/assets/product/sdk.png",
  "EVM SDK": "/assets/product/sdk.png",
  "Solana SDK": "/assets/product/sdk.png",
  Solana: "/assets/product/sdk.png",
  GamingKit: "/assets/product/sdk.png",
  Storage: "/assets/product/storage.png",
  "UI Components": "/assets/product/ui.png",
};

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
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
        {iconMapping[label] && (
          <img
            src={iconMapping[label]}
            alt={label}
            className={`${styles.icon} ${
              label === "Solidity" && styles.invertDarkIcon
            }
            ${
              (label === "React" || label === "React Native") &&
              styles.invertLightIcon
            }`}
          />
        )}
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
