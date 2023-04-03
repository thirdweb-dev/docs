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
    image: "/assets/product/auth.png",
    name: "Auth",
    description:
      "Authenticate users with their wallets. Securely verify a user’s on-chain identity without relying on a centralized database",
    link: "/auth",
  },
  {
    image: "/assets/product/storage.png",
    name: "Storage",
    description:
      "Get fast access to data stored on blockchain with a unified API that works with a storage provider of your choice",
    link: "/storage",
  },
  {
    image: "/assets/product/wallet.png",
    name: "Wallet",
    description:
      "Integrate wallet connection capabilities into web3 applications",
    link: "/wallet",
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
