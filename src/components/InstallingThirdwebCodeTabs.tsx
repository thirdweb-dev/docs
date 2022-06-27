import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function ThirdwebCodeSnippet() {
  const installationSnippets = {
    javascript: `npm install @thirdweb-dev/sdk ethers`,
    // react: `npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers`,
    python: `pip install thirdweb-sdk`,
    // solidity: `npm install @thirdweb-dev/contracts`,
    go: `go get github.com/thirdweb-dev/go-sdk`,
  };

  return (
    <Tabs groupId="thirdweb-code-snippet" defaultValue={"javascript"}>
      {Object.keys(installationSnippets).map((language) => (
        <TabItem
          key={language}
          value={language}
          label={
            // capitalize first letter
            language.charAt(0).toUpperCase() + language.slice(1)
          }
        >
          <CodeBlock language={`bash`}>
            {installationSnippets[language]}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
