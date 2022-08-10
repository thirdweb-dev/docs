import React from "react";
import GettingStartedCard from "../GettingStartedCard";

const products = [
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #FEFF00 108.42%)",
    name: "Prebuilt contracts",
    description: "Contract templates for common use-cases",
    link: "/prebuilt-contracts",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #00FF75 85.28%)",
    name: "Web3 SDK",
    description:
      "Components and hooks to integrate smart contracts into your apps",
    link: "/web3-sdk",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #FF8A00 108.42%)",
    name: "Contracts SDK",
    description: "Build and extend smart contracts using our Solidity SDK",
    link: "/contracts-sdk ",
  },
];

export default function LearnSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading">Learn</h2>

      <div className="row" style={{ marginBottom: 64 }}>
        <div className="col col--4" style={{ padding: 8 }}>
          <GettingStartedCard
            name="Platform Overview"
            description=""
            link="/platform-overview"
            image="/assets/overview.svg"
            additionalStyles={{
              height: 56,
              gap: 8,
            }}
          />
        </div>
        <div className="col col--4" style={{ padding: 8 }}>
          <GettingStartedCard
            name="Guides"
            description=""
            link="/guides"
            image="/assets/guides.svg"
            additionalStyles={{
              height: 56,
              gap: 8,
            }}
          />
        </div>
        <div className="col col--4" style={{ padding: 8 }}>
          <GettingStartedCard
            name="YouTube"
            description=""
            link="https://www.youtube.com/c/thirdweb_"
            image="/assets/youtube.svg"
            additionalStyles={{
              height: 56,
              gap: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}
