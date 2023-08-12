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
    description: "Upload and access files in decentralized storage",
    link: "/storage",
  },
  {
    image: "/assets/icons/deployment.png",
    name: "RPC Edge",
    description: "Free, fast and reliable access to 900+ chains.",
    link: "https://thirdweb.com/dashboard/rpc",
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
