import CopyTemplateButton from "@site/src/components/CopyTemplateButton";
import React from "react";
import type ExampleRepo from "../types/ExampleRepo";

type Props = { t: ExampleRepo };

export default function TemplateCard({ t }: Props) {
  function sendPosthogEvent(name: string) {
    // @ts-ignore
    const posthog = window?.posthog;
    if (posthog) {
      posthog.capture("Template Select", {
        name: name,
      });
    }
  }

  const iconMapping = {
    nft: "/assets/icons/nft.png",
    "nft-drop": "/assets/icons/drop.png",
    "nft-collection": "/assets/icons/nft.png",
    "edition-drop": "/assets/icons/edition-drop.png",
    edition: "/assets/icons/edition.png",
    token: "/assets/icons/token.png",
    "token-drop": "/assets/icons/token.png",
    marketplace: "/assets/icons/marketplace.png",
    pack: "/assets/icons/pack.png",
    split: "/assets/icons/split.png",
    vote: "/assets/icons/vote.png",
    "getting-started": "/assets/icons/sdks.png",
    general: "/assets/icons/general.png",
    "wallet-connection": "/assets/icons/vote.png",
    "thirdweb-deploy": "/assets/product/extensions.png",
    vite: "/assets/languages/vite.webp",
    next: "/assets/languages/nextjs.png",
    cra: "/assets/languages/react.png",
    hardhat: "/assets/languages/hardhat.png",
    forge: "/assets/languages/forge.png",
  };

  function transformName(name: string) {
    const capitalizeWords = ["nft", "ts", "dao", "cra"];
    const lowercaseWords = ["thirdweb"];

    return name
      .split("-")
      .map((word) => {
        if (capitalizeWords.includes(word)) {
          return word.toUpperCase();
        }

        if (lowercaseWords.includes(word)) {
          return word.toLowerCase();
        }

        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function decideIcon(e: ExampleRepo) {
    let icon = "";

    const checkForList = [
      {
        check: "hardhat",
        return: "/assets/languages/hardhat.png",
      },
      {
        check: "forge",
        return: "/assets/languages/forge.png",
      },

      {
        check: "vite-",
        return: "/assets/languages/vite.webp",
      },
      {
        check: "next-",
        return: "/assets/languages/nextjs.png",
      },
      {
        check: "cra-",
        return: "/assets/languages/react.png",
      },
      {
        check: "firebase",
        return: "/assets/languages/firebase.png",
      },
      {
        check: "supabase",
        return: "/assets/languages/supabase.png",
      },
      {
        check: "gated",
        return: "/assets/icons/permissionless.png",
      },
      {
        check: "game",
        return: "/assets/icons/gamefi.png",
      },
      {
        check: "nft",
        return: "/assets/icons/nft.png",
      },
      {
        check: "dao",
        return: "/assets/icons/daos.png",
      },
      {
        check: "solana",
        return: "/assets/languages/solana.png",
      },
    ];

    for (let i = 0; i < checkForList.length; i++) {
      if (e.name.includes(checkForList[i].check)) {
        icon = checkForList[i].return;
        break;
      }
    }

    if (icon) {
      return icon;
    }

    for (let i = 0; i < e.topics.length; i++) {
      const topic = e.topics[i];
      if (iconMapping[topic]) {
        if (icon !== "") {
          // If there's more than one topic, use general icon
          return iconMapping["general"];
        } else {
          // Otherwise use the topic icon
          icon = iconMapping[topic];
          continue;
        }
      }
    }

    return icon || iconMapping["general"];
  }

  return (
    <div
      className="col col--6"
      style={{
        color: "inherit",
        textDecoration: "none",
        padding: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "auto",
      }}
    >
      <div
        className="tw-card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          textAlign: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="card__body"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <img
            src={decideIcon(t)}
            style={{ pointerEvents: "none", height: 48 }}
          />

          <div>
            <h3
              style={{
                fontWeight: 600,
                pointerEvents: "none",
                marginBottom: 0,
              }}
            >
              {transformName(t.name)}
            </h3>
            {/* <code>{t.name}</code> */}
          </div>
        </div>

        <div
          className="button-container always-row"
          style={{ width: "100%", marginLeft: 16, marginTop: 8 }}
        >
          {t.homepage && (
            <a
              className="view-demo-btn"
              href={t.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}
          {t.html_url && (
            <a
              className="view-code-btn"
              href={t.html_url}
              target="_blank"
              rel="noopener noreferrer"
              data-example={"example"} // Generic flag to capture all events
              data-example-name={t.name}
              data-example-category={"feature-example"}
              data-example-url={t.html_url}
              onClick={() => sendPosthogEvent(t.name)}
            >
              View Code
            </a>
          )}
          <CopyTemplateButton
            copyText={`npx thirdweb@latest create --template ${t.name}`}
          />
        </div>
      </div>
    </div>
  );
}
