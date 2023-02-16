import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function ThirdwebCodeSnippet() {
  const installationSnippets = {
    javascript: `import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// Create a READ-ONLY instance of the ThirdwebSDK on the Polygon network
const sdk = new ThirdwebSDK("polygon"); // configure this to your network
`,

    python: `from thirdweb import ThirdwebSDK

# You can create new READ-ONLY instance of the SDK to use by just passing in a network name
sdk = ThirdwebSDK("mumbai")`,

    solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";

contract HellowWorldContract is ThirdwebContract {
  // your contract code
}
`,

    go: `package main

import (
	"fmt"
  
	"github.com/thirdweb-dev/go-sdk/thirdweb"
)

func main() {
	// Creates a new READ-ONLY instance of the SDK to get read-only data for your contracts, you can pass:
	// - a chain name (mainnet, goerli, polygon, mumbai, avalanche, fantom)
	// - a custom RPC URL
	sdk, err := thirdweb.NewThirdwebSDK("mumbai", nil)
	if err != nil {
		panic(err)
	}

	// Now we can interact with the SDK, like displaying the connected chain ID
	chainId, err := sdk.GetChainID()
	if err != nil {
		panic(err)
	}

	fmt.Println("New SDK instance create on chain", chainId)
}`,

    unity: `using UnityEngine;
using Thirdweb; // 1. Import the ThirdwebSDK

public class DemoClass : MonoBehaviour
{
    // 2. Create a ThirdwebSDK instance for us to use throughout the class
    private ThirdwebSDK sdk;

    void Start()
    {
        // 3. When the app starts, set up the ThirdwebSDK
        // Below, we're setting up a read-only instance on the "goerli" test network.
        sdk = new ThirdwebSDK("goerli");
    }
}`,
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    react: "jsx",
    solidity: "solidity",
    go: "go",
    unity: "csharp",
  };

  return (
    <Tabs groupId="thirdweb-code-snippet" defaultValue={"javascript"}>
      {Object.keys(installationSnippets)
        .filter((language) => language !== "solidity")
        .map((language) => (
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
