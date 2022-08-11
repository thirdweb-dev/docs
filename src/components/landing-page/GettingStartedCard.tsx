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
      className="tw-card"
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
      <div className="tw-card-icon-container">
        {/* TODO FIX this */}
        <img className="tw-card-icon" src={image} alt={name} />
      </div>

      <div className="tw-card-text-container">
        <p className="tw-card-title">{name}</p>
        <p className="tw-card-description">{description}</p>
      </div>
    </a>
  );
}
