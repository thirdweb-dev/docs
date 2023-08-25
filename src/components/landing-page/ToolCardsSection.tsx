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
    image: "/assets/product/CLI.png",
    name: "CLI",
    description:
      "A suite of commands that let you interface with thirdweb tools through your terminal",
    link: "/cli",
  },
  {
    image: "/assets/product/dashboard.png",
    name: "Dashboard",
    description:
      "Manage, analyze, and interact with all your deployed contracts conveniently from a single place",
    link: "/dashboard",
  },
];

export default function ToolSection() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Tools
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
