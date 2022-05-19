import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function ThirdwebCodeSnippet() {
  const installationSnippets = {
    javascript: `// my_script.ts
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// The RPC url determines which blockchain you want to connect to
const rpcUrl = "https://polygon-rpc.com/";
// instantiate the SDK as read only on a given blockchain
const sdk = new ThirdwebSDK(rpcUrl);
`,

    react: `import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

// the chainId our app wants to be running on
// for our example the Polygon Mumbai Testnet
const desiredChainId = ChainId.Mumbai;

export const MyApp = () => {
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      {/*
          Your App Goes Here
      */}
    </ThirdwebProvider>
  );
};
`,

    python: `from thirdweb import ThirdwebSDK
from web3 import Web3

# Add your own RPC URL here or use a public one
RPC_URL = "https://rpc-mumbai.maticvigil.com"

# Instantiate a new provider to pass into the SDK
provider = Web3(Web3.HTTPProvider(RPC_URL))

# Finally, you can create a new instance of the SDK to use
sdk = ThirdwebSDK(provider)`,

    solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@thirdweb-dev/contracts/ThirdwebContract.sol";

contract HellowWorldContract is ThirdwebContract {
  // your contract code
}
`,

    go: `import ("github.com/thirdweb-dev/go-sdk/pkg/thirdweb")

func main() {
	// Creates a new read only SDK instance to read data from your contracts
	// you can pass either
	// - a chain name (rinkeby, mumbai, mainnet, polygon, etc)
	// - your own rpc URL
	sdk, _ := thirdweb.NewThirdwebSDK("polygon", nil)
}

main()`,
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    react: "jsx",
    solidity: "solidity",
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
