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
    image: "/assets/product/contracts.png",
    name: "Build",
    description:
      "Easily build smart contracts using our pre-built contracts or Solidity SDK.",
    link: "/solidity",
  },
  {
    image: "/assets/product/publish.png",
    name: "Marketplace",
    description: "Publish and discover pre-built contracts.",
    link: "/publish",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Interact",
    description: "Read and write data from the blockchain using our SDKs",
    link: "/sdk",
  },
  {
    image: "/assets/product/deploy.png",
    name: "Deploy",
    description:
      "Easilt and securely deploy your smart contracts to the blockchain.",
    link: "/deploy",
  },
];

export default function ContractsSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Contracts
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
