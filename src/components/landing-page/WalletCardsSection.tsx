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
    image: "/assets/wallets/smart-wallet.svg",
    name: "Create Wallets",
    description:
      "Create wallets with different key management structures and security models.",
    link: "/wallet/smart-wallet",
  },

  {
    image: "/assets/product/wallet.png",
    name: "Connect Wallets",
    description: "Connect any wallet to your application.",
    link: "/wallet",
  },
  {
    image: "/assets/product/auth.png",
    name: "Auth",
    description: "Prove the ownership of a wallet to off-chain systems",
    link: "/auth",
  },
];

export default function WalletSection() {
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
