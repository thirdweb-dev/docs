import React from "react";
import ProductCard from "./ProductCard";

type Product = {
  image: string;
  name: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    image: "/assets/product/extensions.png",
    name: "ContractKit",
    description:
      "Base contracts that can be configured with extensions to meet your specific use case",
    link: "/contractkit",
  },
  {
    image: "/assets/product/contracts.png",
    name: "Explore",
    description:
      "Discover and deploy contracts from world-class protocols & developers in 1-click",
    link: "/pre-built-contracts",
  },
  {
    image: "/assets/product/sdk.png",
    name: "SDK",
    description:
      "Powerful SDKs for every stack. Support for Javascript, React, Python, Go, Node.js, Unity",
    link: "/sdk",
  },
  {
    image: "/assets/product/ui.png",
    name: "UI Components",
    description:
      "Plug and play UI components to easily add web3 functionality to your apps",
    link: "/ui-components",
  },
  {
    image: "/assets/product/deploy.png",
    name: "Deploy",
    description:
      "Deploy contracts on-chain with a simple deployment workflow designed for team collaboration",
    link: "/deploy",
  },
  {
    image: "/assets/product/release.png",
    name: "Release",
    description:
      "Publish your contracts to be discovered by our community of 70k+ web3 developers",
    link: "/release",
  },
  // {
  //   image: "/assets/product/sdk.png",
  //   name: "Solana SDK",
  //   description:
  //     "Powerful SDKs for every stack. Support for Javascript, React, Python, Go, Node.js, Unity",
  //   link: "/solana",
  // },
  // {
  //   image: "/assets/product/sdk.png",
  //   name: "GamingKit",
  //   description:
  //     "Unity interface for building web3 games on EVM compatible networks",
  //   link: "/gamingkit",
  // },

  // {
  //   image: "/assets/product/auth.png",
  //   name: "Auth",
  //   description: "Easily integrate wallet-based login flows",
  //   link: "/auth",
  // },
  // {
  //   image: "/assets/product/storage.png",
  //   name: "Storage",
  //   description: "Store off-chain data using decentralized storage systems",
  //   link: "/storage",
  // },
  {
    image: "/assets/product/dashboard.png",
    name: "Dashboard",
    description:
      "Manage, analyze, and interact with all your deployed contracts conveniently from a single place",
    link: "/dashboard",
  },
];

export default function ExploreProductsSection() {
  return (
    <div className="explore-products-container">
      <div className="row" style={{ marginBottom: 64 }}>
        {products.map((p, i) => (
          <div className="col col--4" key={i} style={{ padding: 8 }}>
            <ProductCard
              image={p.image}
              name={p.name}
              description={p.description}
              link={p.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
