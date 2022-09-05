// This is a direct copy of the ViewCodeButton component, but i want the data attribute to be different
// this should be changed later to be more reusable as one component

import React from "react";

type Props = {
  link: string;
  name: string;
  isInterface: boolean;
};

export default function ViewContractCodeButton({
  link,
  name,
  isInterface = false,
}: Props) {
  return (
    <div style={{ width: "fit-content" }}>
      <a
        className="viewContractCodeBtn"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-view-contract-code={name}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "#000", // overridden to #fff in css on dark mode
        }}
      >
        <img
          src={"/assets/github-icon.webp"}
          className="viewContractCodeBtn__icon"
          style={{
            height: 24,
            width: 24,
            pointerEvents: "none",
            marginLeft: 12,
          }}
        />

        {/* Horizontal white line 1px wide */}
        <div
          className="viewContractCodeBtn__divider"
          style={{
            height: 32,
            width: 1,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
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
            {isInterface ? "View Interface" : "View Smart Contract"}
          </div>
        </div>
      </a>
    </div>
  );
}
