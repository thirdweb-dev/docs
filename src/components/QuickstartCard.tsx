import React from "react";

type Props = {
  name: string;
  description: string;
  link: string;
  image: string;
};

export default function QuickstartCard({
  name,
  description,
  link,
  image = "/assets/icons/general.svg",
}: Props) {
  return (
    <a
      className="card-demo"
      style={{
        cursor: "pointer",
        height: "100%",
        color: "inherit",
        textDecoration: "none",
      }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card" style={{ height: "100%" }}>
        <div className="card__header">
          <div className="card__body">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <img
                src={image}
                style={{ width: "36px", height: "36px", marginRight: 12 }}
              />
              <h5
                style={{
                  fontWeight: 600,
                  marginBottom: 0,
                  fontSize: "1.25rem",
                }}
              >
                {name}
              </h5>
            </div>
            <p style={{ opacity: 0.9, marginTop: 6 }}>{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
