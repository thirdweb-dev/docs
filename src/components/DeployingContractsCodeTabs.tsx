import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function ThirdwebCodeSnippet() {
  const installationSnippets = {
    javascript: `const contractAddress = await sdk.deployer.deployNFTDrop({
  name: "My Drop",
  primary_sale_recipient: "your-address",
});
`,

    python: `from thirdweb import ThirdwebSDK
from thirdweb.types.settings.metadata import NFTDropContractMetadata

nft_drop = sdk.get_nft_drop(
        sdk.deployer.deploy_nft_drop(
            NFTDropContractMetadata(
                name="SDK NFT Drop",
                primary_sale_recipient="your-address"
            )
        )
    )`,

    go: `// Support for Deploying contracts with the Go SDK is coming soon.`,
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    go: "go",
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
          <CodeBlock language={languageToHighlightMapping[language]}>
            {installationSnippets[language]}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
