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
    name: "CommerceKit",
    description:
      "An all-in-one toolkit to build web3 commerce apps. Add powerful web3 features to your Shopify storefront enabling tokengated commerce, NFT loyalty programs, digital collectible sales, and more.",
    link: "https://thirdweb.com/solutions/commerce",
  },
  {
    image: "/assets/product/sdk.png",
    name: "GamingKit",
    description:
      "Everything you need to build web3 games. Build a stronger community around your game by giving players ownership of in-game assets",
    link: "https://thirdweb.com/solutions/gaming",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Minting",
    description:
      "A set of tools that allow creators and developers to launch new NFT collections in a configurable, secure and scalable way at zero cost to the creator.  ",
    link: "https://thirdweb.com/solutions/minting",
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
