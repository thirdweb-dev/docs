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
  "thirdweb-deploy": "/assets/icons/tw-publish.webp",
};

const categories = {
  "nft-drop": "NFT Drop",
  "nft-collection": "NFT Collection",
  "edition-drop": "Edition Drop",
  edition: "Edition",
  multiwrap: "Multiwrap",
  pack: "Pack",
  "signature-drop": "Signature Drop",
  token: "Token",
  "token-drop": "Token Drop",
  marketplace: "Marketplace",
  split: "Split",
  vote: "Vote",
  "thirdweb-deploy": "Solidity SDK",
  "wallet-connection": "Wallets",
};

const starterKitToDisplayNameMapping = {
  "cra-javascript-starter": "Create React App - JavaScript",
  "cra-typescript-starter": "Create React App - TypeScript",
  "next-javascript-starter": "Next.js - JavaScript",
  "next-typescript-starter": "Next.js - TypeScript",
  "vite-javascript-starter": "Vite - JavaScript",
  "vite-typescript-starter": "Vite - TypeScript",
};

const starterKitToIconMapping = {
  "cra-javascript-starter": [
    "/assets/languages/javascript.png",
    "/assets/languages/react.png",
  ],
  "cra-typescript-starter": [
    "/assets/languages/typescript.png",
    "/assets/languages/react.png",
  ],
  "next-javascript-starter": [
    "/assets/languages/javascript.png",
    "/assets/languages/nextjs.png",
  ],
  "next-typescript-starter": [
    "/assets/languages/typescript.png",
    "/assets/languages/nextjs.png",
  ],
  "vite-javascript-starter": [
    "/assets/languages/javascript.png",
    "/assets/languages/vite.webp",
  ],
  "vite-typescript-starter": [
    "/assets/languages/typescript.png",
    "/assets/languages/vite.webp",
  ],
};

const repoToExampleGuideMapping = {
  "marketplace-next-ts": "/templates/marketplace",
  "custom-minting-page": "/templates/nft-drop",
  "nft-gated-website": "/templates/token-gated-membership",
};

function transformName(name: string) {
  const capitalizeWords = ["nft", "ts", "dao"];
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
      {/* Starter Kits */}
      <h2>Starter Kits</h2>

      <div className="row">
        {examples
          .filter((e) => e.is_template === true)
          .map((repo) => (
            <a
              href={`/templates/${repo.name}-template`}
              className="col col--6"
              style={{
                marginBottom: 24,
                color: "inherit",
                textDecoration: "none",
              }}
              data-example={"example"} // Generic flag to capture all events
              data-example-name={repo.name}
              data-example-category={"starter-kit"}
              data-example-url={repo.html_url}
            >
              <div
                className="card-demo"
                style={{ cursor: "pointer", pointerEvents: "none" }}
              >
                <div
                  className="card"
                  style={{
                    pointerEvents: "none",
                  }}
                >
                  <div
                    className="card__header"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <img
                      src={starterKitToIconMapping[repo.name][0]}
                      style={{
                        marginRight: 8,
                        pointerEvents: "none",
                        width: 42,
                      }}
                    />
                    <img
                      src={starterKitToIconMapping[repo.name][1]}
                      style={{
                        pointerEvents: "none",
                        width: 42,
                      }}
                    />
                    <h3
                      style={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        pointerEvents: "none",
                        marginLeft: 16,
                      }}
                    >
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
              href={
                repoToExampleGuideMapping[repo.name] ||
                `/templates/${repo.name}-template`
              }
              className="col col--4"
              style={{
                marginBottom: 24,
                color: "inherit",
                textDecoration: "none",
              }}
              data-example={"example"} // Generic flag to capture all events
              data-example-name={repo.name}
              data-example-category={"feature-example"}
              data-example-url={repo.html_url}
            >
              <div
                className="card-demo"
                style={{
                  cursor: "pointer",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="card"
                  style={{ height: "100%", pointerEvents: "none" }}
                >
                  <div
                    className="card__header"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      textAlign: "center",
                      height: "100%",
                      pointerEvents: "none",
                    }}
                  >
                    <img
                      src={decideIcon(repo)}
                      style={{ pointerEvents: "none", width: 48 }}
                    />
                    <div
                      className="card__body"
                      style={{ pointerEvents: "none" }}
                    >
                      <h3 style={{ fontWeight: 600, pointerEvents: "none" }}>
                        {transformName(repo.name)}
                      </h3>

                      {/* <code>{repo.name}</code> */}
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
