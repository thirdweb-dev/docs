import fs from "fs";

const CONTRACTS = [
  "NFTCollection",
  "Edition",
  "Token",
  "NFTDrop",
  "EditionDrop",
  "Marketplace",
  "Split",
  "Pack",
  "Vote"
]

const typescript = JSON.parse(
  fs.readFileSync(`${process.cwd()}/submodules/typescript/docs/snippets.json`, "utf8"),
);

const react = JSON.parse(
  fs.readFileSync(`${process.cwd()}/submodules/react/docs/snippets.json`, "utf8"),
);

const snippets = CONTRACTS.reduce((acc, contractName) => {
  const data = {
    name: contractName,
    summary: "",
    examples: {},
    methods: [],
    properties: [],
    reference: {},
  };

  // Get snippets from every SDK
  const tsExample = Object.values(typescript).find(snippet => snippet.name.toLowerCase() === contractName.toLowerCase());
  const reactExample = Object.values(react).find(snippet => snippet.name.toLowerCase().includes(contractName.toLowerCase()));
  const pythonExample = undefined;

  // Get contract summary from typescript docs
  data.summary = tsExample?.summary || "";

  // Get snippets for methods and properties
  data.methods = tsExample?.methods || [];
  data.properties = tsExample?.properties || [];
  
  // Add reference for typescript contract interface
  if (tsExample.reference) {
    data.reference.typescript = tsExample.reference;
  }

  // Add setup examples for each SDK
  data.examples = {
    ...(tsExample?.examples || {}),
    ...(reactExample?.examples?.javascript ? { react: reactExample.examples.javascript } : {}),
  }

  acc[contractName] = data

  return acc;
}, {});

fs.writeFileSync(
  `${process.cwd()}/docs/snippets.json`,
  JSON.stringify(snippets, null, 2),
);
