import React, { useState } from "react";
// @ts-ignore import the json github examples
import exampleRepos from "../../docs/example-repos.json";
import FeaturedExample from "../templates/components/FeaturedExample";
import TemplateCard from "../templates/components/TemplateCard";
import ExampleRepo from "../templates/types/ExampleRepo";
import AllTemplatesContainer from "./AllTemplatesContainer";

const solanaHub = exampleRepos.filter((t) => t.name === "solana-hub")[0];
const contractHub = exampleRepos.filter((t) => t.name === "contract-hub")[0];

export default function ExamplesContainer() {
  return (
    <>
      <h2>Explore What's Possible</h2>
      {/* Featured Example 1 */}
      <FeaturedExample
        id={contractHub.name}
        title="Contract Hub"
        description="Explore what you can do with the SDK by interacting with prebuilt contracts and viewing code snippets."
        image={{
          light: "/assets/ui-components.png",
          dark: "/assets/ui-components.png",
        }}
        links={{
          github: contractHub.html_url,
          demo: contractHub.homepage,
        }}
        whichFirst={"image"}
      />
      {/* Featured Example (Solana TODO) */}
      <FeaturedExample
        id={solanaHub.name}
        title="Solana Showcase"
        description="Discover the power of our Solana SDK by interacting with real programs and viewing code snippets."
        image={{
          light: "/assets/solana_tw.png",
          dark: "/assets/solana_tw.png",
        }}
        links={{
          github: solanaHub.html_url,
          demo: solanaHub.homepage,
        }}
        whichFirst={"text"}
      />

      <h2>Featured Templates</h2>
      <p>Start building your own app on top of one of our templates.</p>

      {/* Getting Started ???  */}

      {/* Create Utility */}
      <h3>Create Utility</h3>

      <div className="row" style={{ marginBottom: 24 }}>
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "nft-gated-website")[0]}
        />
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "nft-staking-app")[0]}
        />
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "play-to-earn-game")[0]}
        />
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "community-rewards")[0]}
        />
      </div>

      {/* Drop NFTs */}
      <h3>Build Drops</h3>

      <div className="row" style={{ marginBottom: 24 }}>
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "signature-drop")[0]}
        />
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "nft-drop")[0]}
        />
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "edition-drop")[0]}
        />
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "token-drop")[0]}
        />
      </div>

      {/* UI Components */}
      <h3>Create Interfaces</h3>

      <div className="row" style={{ marginBottom: 24 }}>
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "connect-wallet-button")[0]}
        />
        <TemplateCard
          t={exampleRepos.filter((t) => t.name === "web3button")[0]}
        />
      </div>

      {/* Login With Wallet */}
      {/* Stripe */}
      {/* Firebase */}

      {/* Prebuilt Contracts */}

      {/* All Templates */}
      <h3>All Templates</h3>

      <AllTemplatesContainer repos={exampleRepos} />
    </>
  );
}
