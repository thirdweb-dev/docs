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
    image: "/assets/resources/guides.svg",
  },
  {
    name: "Templates",
    description:
      "Kickstart your project using one of our templates with a 1-line command",
    link: "/templates",
    image: "/assets/resources/sdk-reference.svg",
  },
  {
    name: "YouTube",
    description:
      "Learn web3 development by building working apps with video tutorials",
    link: "https://www.youtube.com/thirdweb",
    image: "/assets/resources/youtube.svg",
  },
  {
    name: "Events",
    description: "Attend live workshops and office hours to get hands-on with code",
    link: 'https://thirdweb.com/events',
    image: "/assets/resources/calendar.svg",
  },
  {
    name: "Discord",
    description: "Join our community of developers building the future of web3",
    link: 'https://discord.gg/thirdweb',
    image: "/assets/resources/discord.svg",
  },
  {
    name: "Support",
    description: "Troubleshooting articles and live support from customer support team",
    link: 'https://support.thirdweb.com',
    image: "/assets/resources/support.svg",
  }
];

export default function ResourceCards() {
  return (
    <div className="explore-products-container">
      <h2 className="explore-products-heading" style={{ marginBottom: 12 }}>
        Additional Resources
      </h2>
      <div className="row" style={{ marginBottom: 64 }}>
        {resources.map((p, i) => (
          <div className="col col--4" key={i} style={{ padding: 8 }}>
            <GettingStartedCard
              name={p.name}
              description={p.description}
              link={p.link}
              image={p.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
