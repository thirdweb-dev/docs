import React, { useState } from "react";
import TemplateCard from "../templates/components/TemplateCard";
import ExampleRepo from "../templates/types/ExampleRepo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

type Props = {
  repos: ExampleRepo[];
};

export default function AllTemplatesContainer({ repos }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const categories = {
    "Starter Templates": ["starter-kit"],
    Solidity: ["extensions", "contract-kit", "solidity"],
    Solana: ["solana"],
    Prebuilt: [
      "nft-drop",
      "nft-collection",
      "edition",
      "token",
      "token-drop",
      "multiwrap",
      "pack",
      "marketplace",
      "split",
      "vote",
    ],
    NFTs: [
      "nft-drop",
      "nft-collection",
      "signature-based-minting",
      "signature-drop",
      "pack",
      "multiwrap",
    ],
    Auth: ["auth", "authentication"],
    Drops: ["nft-drop", "signature-drop", "token-drop"],

    // (Solana TODO)
    // Solana: ["solana"],
  };

  return (
    <>
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
          .filter(([key, values]) =>
            // if name is in any of the repo's topics
            repos.some((e) => values.some((v) => e.topics.includes(v))),
          )
          .map(([key, values]) => (
            <li
              className={`pills__item ${
                selectedCategory === key ? "pills__item--active" : ""
              }`}
              style={{
                minWidth: "fit-content",
                maxHeight: 48,
                marginTop: 4,
                marginBottom: 4,
              }}
              onClick={() =>
                setSelectedCategory(key === selectedCategory ? undefined : key)
              }
              role="button"
              key={key}
            >
              {key}
            </li>
          ))}
      </ul>

      <TransitionGroup
        className="row"
        style={{ marginBottom: 24, transition: "all 1s" }}
      >
        {repos
          .filter((e) =>
            // any of the selected categories

            // if undefined, retuen all
            selectedCategory === undefined
              ? true
              : // otherwise, return if any of the selected categories are in the repo's topics
                categories[selectedCategory].some((v) => e.topics.includes(v)),
          )
          .sort(
            (a, b) =>
              parseInt(b.stargazers_count) - parseInt(a.stargazers_count),
          )
          .map((t) => (
            <CSSTransition key={t.name} timeout={300} classNames="transition">
              <TemplateCard t={t} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
}
