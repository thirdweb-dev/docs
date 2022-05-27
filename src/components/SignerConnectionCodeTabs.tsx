import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function ThirdwebCodeSnippet() {
  const installationSnippets = {
    javascript: `// my_script.ts
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = ThirdwebSDK.fromPrivateKey(
  process.env.PRIVATE_KEY, // Your wallet private key
  "mumbai", // configure this to your network
);
`,

    python: `from thirdweb import ThirdwebSDK
from thirdweb.types.nft import NFTMetadataInput
import os

# This PRIVATE KEY is coming from your environment variables. Make sure to never put it in a tracked file or share it with anyone.
PRIVATE_KEY = os.environ.get("PRIVATE_KEY")

# Now you can create a new instance of the SDK with your private key
sdk = ThirdwebSDK.from_private_key(PRIVATE_KEY, "mumbai")`,

    go: `package main

import (
    "fmt"
    "encoding/json"

    "github.com/thirdweb-dev/go-sdk/thirdweb"
)

func main() {
    // Get your private key securely (preferably from an environment variable)
    privateKey := "..."

    // Instantiate the SDK with your privateKey
    sdk, err := thirdweb.NewThirdwebSDK("mumbai", &thirdweb.SDKOptions{
        PrivateKey: privateKey,
    })
    if err != nil {
        panic(err)
    }

    // Replace your contract address here
    address := "0x..."
    nft, err := sdk.GetNFTCollection(address)
    if err != nil {
        panic(err)
    }

    // Now you can execute transactions using the SDK contract functions
    tx, err := nft.Mint(
        &thirdweb.NFTMetadataInput{
            Name:        "Test NFT",
            Description: "Minted with the thirdweb Go SDK",
            Image: "ipfs://QmcCJC4T37rykDjR6oorM8hpB9GQWHKWbAi2YR1uTabUZu/0",
        },
    )
    if err != nil {
        panic(err)
    }

    result, _ := json.Marshal(&tx)
    fmt.Println(string(result))
}`,
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
