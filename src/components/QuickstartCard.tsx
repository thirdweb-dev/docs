import React from "react";

type Props = {
  name: string;
  description: string;
  link: string;
  image: string;
  openInNewTab?: boolean;
};

export default function QuickstartCard({
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
        padding: 0,
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
      <div
        className="card__header"
        style={{
          pointerEvents: "none",
        }}
      >
        <div
          className="card__body"
          style={{
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              pointerEvents: "none",
              minHeight: 36,
            }}
          >
            <img
              src={image}
              style={{
                width: "36px",
                marginRight: 12,
                pointerEvents: "none",
              }}
            />
            <h5
              style={{
                fontWeight: 600,
                marginBottom: 0,
                fontSize: "1.25rem",
                pointerEvents: "none",
              }}
            >
              {name}
            </h5>
          </div>
          <p style={{ opacity: 0.9, marginTop: 6, pointerEvents: "none" }}>
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
