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
    image: "/assets/solutions/commerce.png",
    name: "CommerceKit",
    description:
      "An all-in-one toolkit to build web3 commerce apps. Add powerful web3 features to your Shopify storefront enabling tokengated commerce, NFT loyalty programs, digital collectible sales, and more.",
    link: "/commercekit",
  },
  {
    image: "/assets/solutions/gaming.png",
    name: "GamingKit",
    description:
      "Everything you need to build web3 games. Build a stronger community around your game by giving players ownership of in-game assets",
    link: "/gamingkit",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Minting",
    description:
      "A set of tools that allow creators and developers to launch new NFT collections in a configurable, secure and scalable way at zero cost to the creator.  ",
    link: "/minting",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Mobile",
    description:
      "A set of developer tools and SDK’s that make it easy to integrate web3 features into iOS and Android applications.",
    link: "/mobile",
  },
  {
    image: "/assets/product/sdk.png",
    name: "Digital Collectibles",
    description:
      "Comprehensive set of developer tools designed to help digital collectible projects seamlessly integrate web3 features into your digital commerce and customer experience programs.",
    link: "/digital-collectibles",
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
