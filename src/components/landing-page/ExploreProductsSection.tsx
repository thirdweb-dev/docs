import React from "react";
import ProductCard from "./ProductCard";

type Product = {
  gradient: string;
  name: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #FEFF00 108.42%)",
    name: "Prebuilt contracts",
    description: "Contract templates for common use-cases",
    link: "/pre-built-contracts",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #00FF75 85.28%)",
    name: "SDK",
    description:
      "Components and hooks to integrate smart contracts into your apps",
    link: "/sdk",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #FF8A00 108.42%)",
    name: "Extensions",
    description: "Build and extend smart contracts using our Solidity SDK",
    link: "/extensions ",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #14FF00 108.42%)",
    name: "Release",
    description: "Publish your contracts to our on-chain contract registry",
    link: "/release",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #ADFF00 108.42%)",
    name: "Deploy",
    description: "A seamless contract deployment framework",
    link: "/deploy",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #FF4242 108.42%) ",
    name: "Auth",
    description: "Easily integrate wallet-based login flows",
    link: "/auth",
  },
  {
    gradient: "linear-gradient(324.45deg, #410AB7 7.45%, #00FFFF 108.42%)",
    name: "Dashboard",
    description: "Easily analyze and manage your smart contracts",
    link: "/dashboard",
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
              gradient={p.gradient}
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
