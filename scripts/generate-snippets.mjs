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

const python = JSON.parse(
  fs.readFileSync(`${process.cwd()}/submodules/python/docs/docs/snippets.json`, "utf8"),
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
  const pythonExample = Object.values(python).find(snippet => snippet.name.toLowerCase().includes(contractName.toLowerCase()));

  // Get contract summary from typescript docs
  data.summary = tsExample?.summary || "";

  // Get snippets for methods
  data.methods = tsExample?.methods?.map(method => ({
    name: method.name,
    summary: method.summary,
    remarks: method.remarks,
    examples: {
      javascript: tsExample?.methods?.find(m => m.name.toLowerCase() === method.name.toLowerCase())?.examples?.javascript || "",
      python: pythonExample?.methods?.find(m => m.name.replaceAll("_", "").toLowerCase() === method.name.toLowerCase())?.example || "",
    },
    reference: {
      javascript: tsExample?.methods?.find(m => m.name.toLowerCase() === method.name.toLowerCase())?.reference || "",
      python: pythonExample?.methods?.find(m => m.name.replaceAll("_", "").toLowerCase() === method.name.toLowerCase())?.reference || "",
    }
  })) || [];

  // Get snippets for properties
  data.properties = tsExample?.properties?.map(property => ({
    name: property.name,
    summary: property.summary,
    remarks: property.remarks,
    examples: {
      javascript: tsExample?.properties?.find(p => p.name.toLowerCase() === property.name.toLowerCase())?.examples?.javascript || "",
      python: pythonExample?.properties?.find(p => p.name.replaceAll("_", "").toLowerCase() === property.name.toLowerCase())?.example || "",
    },
    reference: {
      javascript: tsExample?.properties?.find(p => p.name.toLowerCase() === property.name.toLowerCase())?.reference || "",
      python: pythonExample?.properties?.find(p => p.name.replaceALl("_", "").toLowerCase() === property.name.toLowerCase())?.reference || "",
    }
  })) || [];;
  
  // Add reference for typescript contract interface
  if (tsExample.reference) {
    data.reference.typescript = tsExample.reference;
  }

  // Add setup examples for each SDK
  data.examples = {
    ...(tsExample?.examples || {}),
    ...(reactExample?.examples?.javascript ? { react: reactExample.examples.javascript } : {}),
    ...(pythonExample?.example ? { python: pythonExample.example } : {}),
  }

  acc[contractName] = data

  return acc;
}, {});

fs.writeFileSync(
  `${process.cwd()}/docs/snippets.json`,
  JSON.stringify(snippets, null, 2),
);
