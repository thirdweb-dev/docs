import React from "react";
import CodeBlock from "@theme/CodeBlock";

type Props = {
  type: "base" | "extension";
  category: string;
  name: string;
};

export default function ImportSnippet({ type, category, name }: Props) {
  return (
    <div
      onClick={(e) => {
        const tagName = e.target.tagName;
        // If tagName is BUTTON, svg, or path -> this is the "copy to clipboard" button
        if (tagName === "BUTTON" || tagName === "SVG" || tagName === "PATH") {
          const posthog = window?.posthog;

          if (posthog) {
            posthog.capture("Copy Import Snippet", {
              type: type,
              category: category,
              contract: name,
            });
          }
        }
      }}
    >
      <CodeBlock
        language="solidity"
        data-contract-import="contract-import"
        data-contract-import-type={type}
        data-contract-import-name={name}
      >
        {`import "@thirdweb-dev/contracts/${type}/${name}.sol";`}
      </CodeBlock>
    </div>
  );
}
