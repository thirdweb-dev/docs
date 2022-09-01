import path from "path";
import fs from "fs-extra";
import jsonData from "../docs/feature_snippets.json" assert { type: "json" };

(async () => {
  // Each page within the ./docs/onboarding/3 Web3 SDK/3 4 Interacting with Contracts/3 4 1 NFT
  // folder that ends with mdx is a page that we want to create.
  // The structure of these pages is as follows:
  // ---
  // slug: /sdk/interacting-with-contracts/erc721/{name}
  // title: {name} (Capitalized)
  // ---
  // import FeatureCodeSnippets from "../../../../../src/components/FeatureCodeSnippets";
  // import CodeSnippetWithSummary from "../../../../../src/components/CodeSnippetWithSummary";
  // # {name}
  // Description
  // ### Connecting to the contract
  // <FeatureCodeSnippets featureName={name} />

  const getFeatureFunctions = (featureName) => {
    // Read from feature_snippets.json
    const { name, summary, methods } = jsonData[featureName];
    return { name, summary, methods };
  };

  const generateTextForFeatureFunctions = (featureName) => {
    const { name, summary, methods } = getFeatureFunctions(featureName);

    let output = ``;

    for (const method of methods) {
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
slug: /sdk/interacting-with-contracts/erc721/${name}
title: ${sidebarName}
---

import FeatureCodeSnippets from "../../../../../src/components/FeatureCodeSnippets";
import CodeSnippetWithSummary from "../../../../../src/components/CodeSnippetWithSummary";

# ${displayName}

${description}

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
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Supply",
        displayName: "ERC721Supply",
        sidebarName: "Supply",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Mintable",
        displayName: "ERC721Mintable",
        sidebarName: "Mint",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721BatchMintable",
        displayName: "ERC721BatchMintable",
        sidebarName: "Batch Mint",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Enumerable",
        displayName: "ERC721Enumerable",
        sidebarName: "View All",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Droppable",
        displayName: "ERC721Droppable",
        sidebarName: "Drop",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Claimable",
        displayName: "ERC721Claimable",
        sidebarName: "Claim",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721Burnable",
        displayName: "ERC721Burnable",
        sidebarName: "Burn",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      {
        name: "ERC721SignatureMint",
        displayName: "ERC721SignatureMint",
        sidebarName: "Signature-Based Minting",
        description: "more information on this coming soon.",
        folder: "1 ERC721",
      },
      // ERC-1155
      {
        name: "ERC1155",
        displayName: "ERC1155",
        sidebarName: "Standard",
        description: "more information on this coming soon.",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155Mintable",
        displayName: "ERC1155Mintable",
        sidebarName: "Mint",
        description: "more information on this coming soon.",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155BatchMintable",
        displayName: "ERC1155BatchMintable",
        sidebarName: "Batch Mint",
        description: "more information on this coming soon.",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155Enumerable",
        displayName: "ERC1155Enumerable",
        sidebarName: "View All",
        description: "more information on this coming soon.",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155Droppable",
        displayName: "ERC1155Droppable",
        sidebarName: "Drop",
        description: "more information on this coming soon.",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155Burnable",
        displayName: "ERC1155Burnable",
        sidebarName: "Burn",
        description: "more information on this coming soon.",
        folder: "2 ERC1155",
      },
      {
        name: "ERC1155SignatureMintable",
        displayName: "ERC1155SignatureMint",
        sidebarName: "Signature-Based Minting",
        description: "more information on this coming soon.",
        folder: "2 ERC1155",
      },
      // ERC-20
      {
        name: "ERC20",
        displayName: "ERC20",
        sidebarName: "Standard",
        description: "more information on this coming soon.",
        folder: "3 ERC20",
      },
      {
        name: "ERC20Mintable",
        displayName: "ERC20Mintable",
        sidebarName: "Mint",
        description: "more information on this coming soon.",
        folder: "3 ERC20",
      },
      {
        name: "ERC20BatchMintable",
        displayName: "ERC20BatchMintable",
        sidebarName: "Batch Mint",
        description: "more information on this coming soon.",
        folder: "3 ERC20",
      },
      {
        name: "ERC20Burnable",
        displayName: "ERC20Burnable",
        sidebarName: "Burn",
        description: "more information on this coming soon.",
        folder: "3 ERC20",
      },
      {
        name: "ERC20SignatureMintable",
        displayName: "ERC20SignatureMintable",
        sidebarName: "Signature-Based Minting",
        description: "more information on this coming soon.",
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
