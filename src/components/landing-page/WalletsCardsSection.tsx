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
    image: "/assets/product/connect-wallet.png",
    name: "Connect",
    description: "Enable users to connect their wallets to web3 apps and games",
    link: "/connect",
  },
  {
    image: "/assets/wallets/smart-wallet.svg",
    name: "Smart Wallet",
    description:
      "Easily create and connect to ERC-4337 Smart Wallets in your application",
    link: "/smart-wallet",
  },
  {
    image: "/assets/wallets/embedded-wallet.svg",
    name: "Embedded Wallet",
    description:
      "Easily create and connect users with social or email wallets in your application",
    link: "/embedded-wallet",
  },
  {
    image: "/assets/product/wallet.png",
    name: "Wallet SDK",
    description:
      "Integrate, connect and embed wallets into web3 apps and games",
    link: "/wallet",
  },
  {
    image: "/assets/product/auth.png",
    name: "Auth",
    description:
      "Authenticate users with their wallets. Securely verify a user's on-chain identity without relying on a centralized database",
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
