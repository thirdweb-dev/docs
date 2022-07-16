// This is a direct copy of the ViewCodeButton component, but i want the data attribute to be different
// this should be changed later to be more reusable as one component

import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

type Props = {
  link: string;
  name: string;
};

export default function ViewContractCodeButton({ link, name }: Props) {
  const { colorMode } = useColorMode();

  return (
    <div style={{ width: "fit-content" }}>
      <a
        className="viewContractCodeBtn"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-view-contract-code={name}
        style={
          colorMode === "dark"
            ? {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }
            : {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "#000",
              }
        }
      >
        <img
          src={"/assets/github-icon.webp"}
          style={{
            // Make it completely white
            filter: colorMode === "dark" ? "brightness(0) invert(1)" : "",
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
            backgroundColor:
              colorMode === "dark"
                ? "rgba(255, 255, 255, 0.25)"
                : "rgba(0, 0, 0, 0.25)",
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
            View Smart Contract
          </div>
        </div>
      </a>
    </div>
  );
}
