import React, { useEffect, useState } from "react";

const items = [
  {
    id: "standard-contract-section",
    title: "Standard Contract",
    description:
      "If your contract does not follow the proxy or factory contract patterns, then this is the option for you.",
    icon: "/product/contracts.png",
  },
  {
    id: "proxy-contract-section",
    title: "Proxy Contract",
    description:
      "Allow others to deploy a proxy of you pre-deployed contract. Your contract must follow the proxy contract pattern.",
    icon: "/product/extensions.png",
  },
  {
    id: "factory-contract-section",
    title: "Factory Contract",
    description:
      "Allow cheaper deployments & the option of adding custom logic. Your contract must follow the factory contract pattern.",
    icon: "/product/deploy.png",
  },
];

export default function ChoosePublishContract() {
  const [activeTab, setActiveTab] = useState<number | undefined>(0);

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
      const h2 = element.getElementsByTagName("h3")[0];

      // Get the offset of the h3 element
      const offset = h2.offsetTop;

      // Scroll to the offset
      window.scrollTo({
        top: offset - 72,
        behavior: "smooth",
      });
    }, 301);
  }, [activeTab]);

  return (
    <div className="choose-publish-container">
      {items.map((item, index) => (
        <div
          className={`tw-card choose-publish-card ${
            activeTab === index ? "active-publish-card" : ""
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
