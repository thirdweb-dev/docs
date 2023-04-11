import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function FromPrivateKeyCodeTabs() {
  const installationSnippets = {
    javascript: `import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = ThirdwebSDK.fromPrivateKey(
  // Learn more about securely accessing your private key: https://portal.thirdweb.com/typescript/sdk.thirdwebsdk.fromwallet
  "<your-private-key-here>",
  "polygon", // configure this to your network
);
`,

    python: `from thirdweb import ThirdwebSDK
from thirdweb.types.nft import NFTMetadataInput
import os

# Learn more about securely accessing your private key: https://portal.thirdweb.com/typescript/sdk.thirdwebsdk.fromwallet
PRIVATE_KEY = "<your-private-key-here>"

# Now you can create a new instance of the SDK with your private key
sdk = ThirdwebSDK.from_private_key(PRIVATE_KEY, "mumbai")`,

    go: `package main

import (
    "fmt"
    "encoding/json"

    "github.com/thirdweb-dev/go-sdk/thirdweb"
)

func main() {
    // Learn more about securely accessing your private key: https://portal.thirdweb.com/typescript/sdk.thirdwebsdk.fromwallet
    privateKey := "..."

    // Instantiate the SDK with your privateKey
    sdk, err := thirdweb.NewThirdwebSDK("mumbai", &thirdweb.SDKOptions{
        PrivateKey: privateKey,
    })
    if err != nil {
        panic(err)
    }
}`,

    unity: `// Unity does not support instantiating the SDK with a private key.`,
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    go: "go",
    unity: "csharp",
  };

  return (
    <Tabs groupId="thirdweb-code-snippet" defaultValue="javascript">
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
