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
    image: "/assets/product/wallet.png",
    name: "Wallet SDK",
    description:
      "Integrate wallet connection capabilities into web3 applications",
    link: "/wallet",
  },
  {
    image: "/assets/product/connect-wallet.png",
    name: "Connect Wallet Button",
    description:
      "A simple button that lets users connect their wallets to your web3 application",
    link: "react/react.connectwallet",
  },
  {
    image: "/assets/product/auth.png",
    name: "Auth",
    description:
      "Authenticate users with their wallets. Securely verify a user’s on-chain identity without relying on a centralized database",
    link: "/auth",
  },
];

export default function SolutionsSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Wallets
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
