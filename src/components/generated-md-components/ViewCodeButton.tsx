import React from "react";

type Props = {
  link: string;
  name: string;
};

export default function ViewCodeButton({ link, name }: Props) {
  return (
    <a
      className="viewCodeBtn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-view-code={name}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        src={"/assets/github-icon.webp"}
        style={{
          // Make it completely white
          filter: "brightness(0) invert(1)",
          height: 24,
          width: 24,
          pointerEvents: "none",
          marginLeft: 12,
        }}
      />

      {/* Horizontal white line 1px wide */}
      <div
        style={{
          height: 32,
          width: 1,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          marginRight: 12,
          marginLeft: 12,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ marginRight: 14, fontWeight: 600 }}>View Code</div>
      </div>
    </a>
  );
}
