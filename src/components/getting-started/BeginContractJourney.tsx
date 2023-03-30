import React, { useEffect, useState } from "react";

const items = [
  {
    id: "prebuilt-contract-section",
    title: "Explore",
    description:
      "Secure, gas-optimized, and audited contracts that are ready to be deployed with one-click.",
    icon: "/product/contracts.png",
  },
  {
    id: "custom-contract-section",
    title: "Build your own",
    description:
      "Create custom contracts that are specific to your use case using the Solidity SDK.",
    icon: "/product/extensions.png",
  },
  {
    id: "deploy-contract-section",
    title: "Deploy from source",
    description:
      "Already have a contract ready to deploy? Learn how to use our interactive CLI to ship it.",
    icon: "/product/deploy.png",
  },
];

export default function BeginContractJourney() {
  const [activeTab, setActiveTab] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (activeTab === undefined) return;
    // Grab the id of the items[activeTab]
    const id = items[activeTab]?.id;
    if (!id) return;
    // Grab the element with the id
    const element = document.getElementById(id);
    if (!element) return;

    // Update the other tabs visibility css
    items.forEach((item, index) => {
      const otherElement = document.getElementById(item.id);
      if (!otherElement) return;

      // Set height too
      otherElement.style.height = index === activeTab ? "auto" : "0px";
      // Overflow
      otherElement.style.overflow = index === activeTab ? "visible" : "hidden";

      // Set opacity too
      otherElement.style.opacity = index === activeTab ? "1" : "0";
    });

    // wait 0.1 seconds
    setTimeout(() => {
      // Scroll to the element
      // Scroll to the second h3 element
      const h3 = element.getElementsByTagName("h3")[0];

      // Get the offset of the h3 element
      const offset = h3.offsetTop;

      // Scroll to the offset
      window.scrollTo({
        top: offset - 72,
        behavior: "smooth",
      });
    }, 301);
  }, [activeTab]);

  return (
    <div className="contract-journey-container">
      {items.map((item, index) => (
        <div
          className={`tw-card contract-journey-card ${
            activeTab === index ? "active-journey-card" : ""
          }`}
          data-getting-started-deploy-pathway={item.title}
          key={index}
          onClick={() => setActiveTab(index)}
        >
          <div className="heading">
            <img
              className="logo"
              src={`/assets${item.icon}`}
              alt={item.title}
            />
            <p className="title">{item.title}</p>
          </div>

          <p className="description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
