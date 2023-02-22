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
    image: "/assets/product/sdk.png",
    name: "Solana SDK",
    description:
      "Powerful SDKs for every stack. Support for Javascript, React, Python, Go, Node.js, Unity",
    link: "/solana",
  },
  {
    image: "/assets/product/sdk.png",
    name: "GamingKit",
    description:
      "Unity interface for building web3 games on EVM compatible networks",
    link: "/gamingkit",
  },
];

export default function SolutionsSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Solutions
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
