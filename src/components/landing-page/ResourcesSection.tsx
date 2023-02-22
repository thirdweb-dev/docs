import React from "react";
import GettingStartedCard from "../GettingStartedCard";

type Resource = {
  name: string;
  description: string;
  link: string;
  image: string;
};

const resources: Resource[] = [
  {
    name: "Guides",
    description:
      "Learn more about how you can use thirdweb to build your web3 app",
    link: "https://blog.thirdweb.com/guides/",
    image: "/assets/guides.svg",
  },
  {
    name: "Templates",
    description:
      "Kickstart your project using one of our templates with a 1-line command",
    link: "/templates",
    image: "/assets/sdk-reference.svg",
  },
  {
    name: "YouTube",
    description:
      "Learn web3 development by building working apps with video tutorials",
    link: "https://www.youtube.com/thirdweb",
    image: "/assets/youtube.svg",
  },
];

export default function ResourceCards() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Additional Resources
      </h2>
      <div className="row" style={{ marginBottom: 64 }}>
        {resources.map((r, i) => (
          <div className="row" style={{ marginBottom: 64 }}>
            <div className="col col--3" style={{ padding: 8 }}>
              <GettingStartedCard
                name={r.name}
                description={r.description}
                link={r.link}
                image={r.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
