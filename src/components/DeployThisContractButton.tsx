import React from "react";

type Props = {
  link: string;
};

export default function DeployThisContractButton({ link }: Props) {
  return (
    <a
      className="deployContractBtn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 14,
          paddingRight: 16,
        }}
      >
        <img
          src={"/assets/icons/thirdweb-icon.png"}
          style={{
            // Make it completely white
            filter: "brightness(0) invert(1)",
            height: 24,
            width: 24,
          }}
        />

        {/* Horizontal white line 1px wide */}
        <div
          style={{
            height: 41,
            width: 1,
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            marginRight: 4,
            marginLeft: 12,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ marginLeft: 8 }}>Deploy Contract</div>
        </div>
      </div>
    </a>
  );
}
