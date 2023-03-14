import path from "path";
import fs from "fs-extra";
import jsonData from "../docs/feature_snippets.json" assert { type: "json" };

(async () => {
  const getFeatureFunctions = (featureName) => {
    // Read from feature_snippets.json
    const { name, summary, methods, properties } = jsonData[featureName];
    return { name, summary, methods, properties };
  };

  const generateContractLink = (contractName) => {
    // If it contains ERC721, then the link is :
    // /solidity/erc-721/${contractName}
    // If it contains ERC1155, then the link is :
    // /solidity/erc-1155/${contractName}
    // If it contains ERC20, then the link is :
    // /solidity/erc-20/${contractName}
    // Otherwise the link is :
    // /solidity/extensions/${contractName}
    let output = "";

    if (contractName.includes("ERC721")) {
      output = `/solidity/erc-721/${contractName}`;
    } else if (contractName.includes("ERC1155")) {
      output = `/solidity/erc-1155/${contractName}`;
    } else if (contractName.includes("ERC20")) {
      output = `/solidity/erc-20/${contractName}`;
    } else {
      output = `/solidity/extensions/${contractName}`;
    }

    return output.toLowerCase();
  };

  const generateTextForFeatureFunctions = (featureName) => {
    const { name, summary, methods, properties } =
      getFeatureFunctions(featureName);

    let output = ``;

    for (const method of [...methods]) {
      const {
        name: methodName,
        summary: methodSummary,
        remarks,
        examples: methodExamples,
        reference: methodReference,
      } = method;

      output += `
### ${methodSummary}

${remarks || ""}

<CodeSnippetWithSummary
      contract={\`${featureName}\`}
      name={\`${methodName}\`}
      isFeatureSnippet={true}
      isGetContractCode={false}
      showHr={${methods.indexOf(method) !== methods.length - 1}}
      dontShowSummary
    />
  
`;
    }

    return output;
  };

  // Produce a concatenated string of all the functions and

  // given an array of names, generate a page that follows the above structure in the specified folder.
  const generatePages = async (pages, baseFolder) => {
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { name, sidebarName, displayName, description, folder } = page;
      const pagePath = path.join(
        `${baseFolder}/${folder}`,
        i.toString() + " " + name + ".mdx",
      );

      const pageContent = `---
slug: /sdk/interacting-with-contracts/erc721/${name.toLowerCase()}
title: ${sidebarName}
---

import FeatureCodeSnippets from "../../../../../src/components/FeatureCodeSnippets";
import CodeSnippetWithSummary from "../../../../../src/components/CodeSnippetWithSummary";
import QuickstartCard from "../../../../../src/components/QuickstartCard";

# ${displayName}

${description}

You can utilise these features of the SDK on your contract if it implements [${name}](${generateContractLink(
        name,
      )}).

<div className="row" style={{ marginBottom: 24 }}>
  <div className="col col--12" style={{ marginTop: 8 }}>
    <QuickstartCard
      name="Learn how to implement ${name}"
      link={"${generateContractLink(name)}"}
      image="/assets/icons/general.png"
    />
  </div>
</div>


${generateTextForFeatureFunctions(name)}

`;
      await fs.writeFile(pagePath, pageContent);
      console.log("Created page: " + pagePath);
    }
  };

  // generate pages for the erc721 contracts
  await generatePages(
    [
      {
        name: "ERC721",
        displayName: "ERC721",
        sidebarName: "Standard",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Supply",
        displayName: "ERC721Supply",
        sidebarName: "Supply",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Mintable",
        displayName: "ERC721Mintable",
        sidebarName: "Mint",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721BatchMintable",
        displayName: "ERC721BatchMintable",
        sidebarName: "Batch Mint",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Enumerable",
        displayName: "ERC721Enumerable",
        sidebarName: "View All",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721LazyMintable",
        displayName: "ERC721LazyMintable",
        sidebarName: "Drop",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Claimable",
        displayName: "ERC721Claimable",
        sidebarName: "Claim",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Burnable",
        displayName: "ERC721Burnable",
        sidebarName: "Burn",
        description: "",
        folder: "1 ERC721",
      },
      {
        name: "ERC721SignatureMint",
        displayName: "ERC721SignatureMint",
        sidebarName: "Signature-Based Minting",
        description: "",
        folder: "1 ERC721",
      },
      // ERC-1155
      {
        name: "ERC1155",
        displayName: "ERC1155",
        sidebarName: "Standard",
        description: "",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155Mintable",
        displayName: "ERC1155Mintable",
        sidebarName: "Mint",
        description: "",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155BatchMintable",
        displayName: "ERC1155BatchMintable",
        sidebarName: "Batch Mint",
        description: "",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155Enumerable",
        displayName: "ERC1155Enumerable",
        sidebarName: "View All",
        description: "",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155LazyMintable",
        displayName: "ERC1155LazyMintable",
        sidebarName: "Drop",
        description: "",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155Burnable",
        displayName: "ERC1155Burnable",
        sidebarName: "Burn",
        description: "",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155SignatureMintable",
        displayName: "ERC1155SignatureMint",
        sidebarName: "Signature-Based Minting",
        description: "",
        folder: "2 ERC1155",
      },

      // ERC-20
      {
        name: "ERC20",
        displayName: "ERC20",
        sidebarName: "Standard",
        description: "",
        folder: "3 ERC20",
      },
      {
        name: "ERC20Mintable",
        displayName: "ERC20Mintable",
        sidebarName: "Mint",
        description: "",
        folder: "3 ERC20",
      },
      {
        name: "ERC20BatchMintable",
        displayName: "ERC20BatchMintable",
        sidebarName: "Batch Mint",
        description: "",
        folder: "3 ERC20",
      },
      {
        name: "ERC20Burnable",
        displayName: "ERC20Burnable",
        sidebarName: "Burn",
        description: "",
        folder: "3 ERC20",
      },
      {
        name: "ERC20SignatureMintable",
        displayName: "ERC20SignatureMintable",
        sidebarName: "Signature-Based Minting",
        description: "",
        folder: "3 ERC20",
      },
    ],

    // ./docs/onboarding/3 Web3 SDK/3 4 Interacting with Contracts/3 4 1 NFT
    path.join(
      path.dirname("."),
      "docs",
      "onboarding",
      "3 Web3 SDK",
      "3 4 Interacting with Contracts",
    ),
  );
})();
