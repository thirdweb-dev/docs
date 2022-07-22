import React from "react";

type Props = {
  link: string;
  contractType: string;
};

export default function DeployThisContractButton({
  link,
  contractType,
}: Props) {
  function formatName(name: string) {
    // Replace - with space and capitalize
    let newName = name.replace("-", " ");

    // Capitalize first letter of each word
    newName = newName
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    // Capitalize "Nft"
    if (newName.includes("Nft")) {
      newName = newName.replace("Nft", "NFT");
    }

    return newName;
  }

  return (
    <a
      className="deployContractBtn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-contract={contractType}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        src={"/assets/icons/thirdweb-icon.png"}
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
        <div style={{ marginRight: 14, fontWeight: 600 }}>
          Deploy {formatName(contractType)}
        </div>
      </div>
    </a>
  );
}
