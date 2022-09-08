import React from "react";

type Props = {
  image: string;
  name: string;
  description: string;
  link: string;
};

export default function ProductCard({ image, name, description, link }: Props) {
  return (
    <a
      className="tw-card"
      style={{
        cursor: "pointer",
        height: "100%",
        width: "100%",
        color: "inherit",
        textDecoration: "none",
        flexDirection: "column",
      }}
      href={link}
      target={
        link.startsWith("http") && !link.includes("portal.thirdweb.com") // if the link is external, we want to open it in a new tab
          ? "_blank"
          : undefined
      }
      rel={
        link.startsWith("http") && !link.includes("portal.thirdweb.com") // if the link is external, we want to open it in a new tab
          ? "noopener noreferrer"
          : undefined
      }
      data-quickstart={"quickstart"} // Generic flag to capture all events
      data-card-name={name}
      data-card-description={description}
      data-card-link={link}
    >
      <div className="tw-card-text-container">
        <img width={24} height={24} src={image} />

        <p className="tw-card-title" style={{ marginTop: 8 }}>
          {name}
        </p>
        <p className="tw-card-description" style={{ marginTop: 4 }}>
          {description}
        </p>
      </div>
    </a>
  );
}
