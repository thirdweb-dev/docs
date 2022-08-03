import React from "react";

type Props = {
  name: string;
  description: string;
  link: string;
  image: string;
  openInNewTab?: boolean;
};

export default function GettingStartedCard({
  name,
  description,
  link,
  image = "/assets/icons/general.png",
  openInNewTab = false,
}: Props) {
  return (
    <a
      className="new-card"
      style={{
        cursor: "pointer",
        height: "100%",
        width: "100%",
        color: "inherit",
        textDecoration: "none",
      }}
      href={link}
      target={
        openInNewTab
          ? "_blank"
          : link.startsWith("http") && !link.includes("portal.thirdweb.com") // if the link is external, we want to open it in a new tab
          ? "_blank"
          : undefined
      }
      rel={
        openInNewTab
          ? "noopener noreferrer"
          : link.startsWith("http") && !link.includes("portal.thirdweb.com") // if the link is external, we want to open it in a new tab
          ? "noopener noreferrer"
          : undefined
      }
      data-quickstart={"quickstart"} // Generic flag to capture all events
      data-card-name={name}
      data-card-description={description}
      data-card-link={link}
    >
      <div className="new-card-icon-container">
        <img className="new-card-icon" src={image} alt={name} />
      </div>

      <div className="new-card-text-container">
        <p className="new-card-title">{name}</p>
        <p className="new-card-description">{description}</p>
      </div>
    </a>
  );
}
