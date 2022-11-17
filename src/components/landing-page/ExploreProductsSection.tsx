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
    description: "Build and extend smart contracts using our Solidity SDK",
    link: "/contractkit",
  },
  {
    image: "/assets/product/contracts.png",
    name: "Prebuilt contracts",
    description: "Prebuilt and audited contracts",
    link: "/pre-built-contracts",
  },
  {
    image: "/assets/product/dashboard.png",
    name: "Dashboard",
    description: "Easily analyze and manage your smart contracts",
    link: "/dashboard",
  },
  {
    image: "/assets/product/sdk.png",
    name: "EVM SDK",
    description:
      "Components and hooks to integrate smart contracts into your apps",
    link: "/sdk",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Solana SDK",
    description:
      "JavaScript interface for building web3 applications on Solana",
    link: "/solana",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Gaming",
    description:
      "Unity interface for building web3 games on EVM compatible blockchains",
    link: "/gaming",
  },
  {
    image: "/assets/product/ui.png",
    name: "UI Components",
    description:
      "Plug and play UI components to easily add web3 functionality to your apps",
    link: "/ui-components",
  },
  {
    image: "/assets/product/auth.png",
    name: "Auth",
    description: "Easily integrate wallet-based login flows",
    link: "/auth",
  },
  {
    image: "/assets/product/release.png",
    name: "Release",
    description: "Publish your contracts to our on-chain contract registry",
    link: "/release",
  },
  {
    image: "/assets/product/deploy.png",
    name: "Deploy",
    description: "A seamless contract deployment framework",
    link: "/deploy",
  },
  {
    image: "/assets/product/storage.png",
    name: "Storage",
    description: "Store off-chain data using decentralized storage systems",
    link: "/storage",
  },
];

export default function ExploreProductsSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Explore Products
      </h2>

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
