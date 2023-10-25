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
    image: "/assets/product/storage.png",
    name: "Storage",
    description:
      "Get fast access to data stored on blockchain with a unified API that works with a storage provider of your choice",
    link: "/storage",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Engine",
    description:
      "Server-side interface for contracts & wallets, without the complexities of wallet and transaction management",
    link: "/engine",
  },
  {
    image: "/assets/product/sdk.png",
    name: "RPC Edge",
    description:
      "Reliable access to querying data and interacting with the blockchain through global edge RPCs",
    link: "/rpc-edge",
  },
];

export default function InfrastructureCards() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Infrastructure
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
