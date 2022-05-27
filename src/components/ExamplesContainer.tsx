import React, { useState } from "react";
// @ts-ignore import the json github examples
import exampleRepos from "../../docs/example-repos.json";

type ExampleRepo = {
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  clone_url: string;
  topics: string[];
  language: string;
  stargazers_count: string;
  is_template: boolean;
};

const iconMapping = {
  "nft-drop": "/assets/icons/drop.svg",
  "edition-drop": "/assets/icons/drop.svg",
  "nft-collection": "/assets/icons/collection.svg",
  edition: "/assets/icons/collection.svg",
  general: "/assets/icons/general.svg",
  marketplace: "/assets/icons/marketplace.svg",
  nft: "/assets/icons/nft.svg",
  pack: "/assets/icons/pack.svg",
  token: "/assets/icons/token.svg",
  split: "/assets/icons/split.svg",
  "getting-started": "/assets/icons/getting-started.svg",
};

const categories = {
  "thirdweb-deploy": "thirdweb deploy",
  "nft-drop": "NFT Drop",
  "nft-collection": "NFT Collection",
  "edition-drop": "Edition Drop",
  edition: "Edition",
  marketplace: "Marketplace",
  token: "Token",
  pack: "Pack",
  split: "Split",
  "wallet-connection": "Wallets",
};

const starterKitToDisplayNameMapping = {
  "cra-javascript-starter": "Create React App + JavaScript",
  "cra-typescript-starter": "Create React App + TypeScript",
  "next-javascript-starter": "Next.js + JavaScript",
  "next-typescript-starter": "Next.js + TypeScript",
  "vite-javascript-starter": "Vite + JavaScript",
  "vite-typescript-starter": "Vite + TypeScript",
};

const repoToExampleGuideMapping = {
  "marketplace-next-ts": "/examples/marketplace",
  "custom-minting-page": "/examples/nft-drop",
};

function transformName(name: string) {
  const capitalizeWords = ["nft", "ts", "dao"];

  return name
    .split("-")
    .map((word) => {
      if (capitalizeWords.includes(word)) {
        return word.toUpperCase();
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    })
    .join(" ");
}

export default function ExamplesContainer() {
  const examples = exampleRepos as ExampleRepo[];

  // Type this as any string thats in categories array
  const [selectedCategory, setSelectedCategory] = useState<string>();

  function decideIcon(e: ExampleRepo) {
    let icon = "";

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
    <>
      {/* Description */}
      <p style={{ fontSize: "1.1rem" }}>
        Use our pre-built examples to kickstart your projects, or to learn more
        about using thirdweb's features.
      </p>

      {/* Starter Kits */}
      <h2>Starter Kits</h2>

      <div className="row">
        {examples
          .filter((e) => e.is_template === true)
          .map((repo) => (
            <a
              href={repo.html_url}
              target="_blank"
              className="col col--6"
              style={{
                marginBottom: 24,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div className="card-demo" style={{ cursor: "pointer" }}>
                <div className="card">
                  <div
                    className="card__header"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={iconMapping["getting-started"]}
                      style={{ marginRight: 16 }}
                    />
                    <h3 style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                      {starterKitToDisplayNameMapping[repo.name]}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
      </div>

      <h2>Feature Examples</h2>

      {/* Filters */}
      <ul
        className="pills"
        style={{
          // wrap
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <li
          className={`pills__item ${
            selectedCategory === undefined ? "pills__item--active" : ""
          }`}
          style={{
            minWidth: "fit-content",
            maxHeight: 48,
            marginTop: 4,
            marginBottom: 4,
          }}
          onClick={() => {
            setSelectedCategory(undefined);
          }}
          role="button"
        >
          All
        </li>
        {Object.entries(categories)
          .filter(([name, displayName]) =>
            // if name is in any of the repo's topics
            examples.some((e) => e.topics.includes(name)),
          )
          .map(([name, displayName]) => (
            <li
              className={`pills__item ${
                selectedCategory === name ? "pills__item--active" : ""
              }`}
              style={{
                minWidth: "fit-content",
                maxHeight: 48,
                marginTop: 4,
                marginBottom: 4,
              }}
              onClick={() =>
                setSelectedCategory(
                  name === selectedCategory ? undefined : name,
                )
              }
              role="button"
            >
              {displayName}
            </li>
          ))}
      </ul>

      {/* Repos */}
      <div className="row">
        {examples
          .filter((e) => e.is_template === false)
          .filter((e) =>
            // any of the selected categories

            // if undefined, retuen all
            selectedCategory === undefined
              ? true
              : // otherwise, check if the selected category is in the topics
                e.topics.includes(selectedCategory),
          )
          .sort(
            (a, b) =>
              parseInt(b.stargazers_count) - parseInt(a.stargazers_count),
          )
          .map((repo) => (
            <a
              // Prefer to show internal guide but fallback to github url
              href={repoToExampleGuideMapping[repo.name] || repo.html_url}
              // Open in new tab if its a github url, same if internal guide
              target={repoToExampleGuideMapping[repo.name] ? "" : "_blank"}
              className="col col--6"
              style={{
                marginBottom: 24,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div
                className="card-demo"
                style={{ cursor: "pointer", height: "100%" }}
              >
                <div className="card" style={{ height: "100%" }}>
                  <div
                    className="card__header"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <img src={decideIcon(repo)} style={{ marginRight: 16 }} />
                    <div className="card__body">
                      <h3 style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                        {transformName(repo.name)}
                      </h3>
                      <p style={{ opacity: 0.9 }}>{repo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
      </div>
    </>
  );
}
