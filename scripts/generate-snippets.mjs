import fs from "fs";
import createReactSnippet from "./helper/create-react-snippet-from-mapping.mjs";

const CLASSES = [
  "ThirdwebSDK",
  "NFTCollectionImpl",
  "EditionImpl",
  "TokenDropImpl",
  "TokenImpl",
  "NFTDropImpl",
  "EditionDropImpl",
  "MarketplaceImpl",
  "MarketplaceDirect",
  "MarketplaceAuction",
  "SplitImpl",
  "PackImpl",
  "VoteImpl",
  "MultiwrapImpl",
  "ContractDeployer",
  "ContractEvents",
  "DelayedReveal",
  "GasCostEstimator",
  "RemoteStorage",
  "ContractInterceptor",
  "ContractMetadata",
  "ContractRoles",
  "SignatureDropImpl",
  "SmartContract",
  "WalletAuthenticator",
  "UserWallet",
];

const typescript = JSON.parse(
  fs.readFileSync(
    `${process.cwd()}/submodules/js/packages/sdk/docs/snippets.json`,
    "utf8",
  ),
);

const react = JSON.parse(
  fs.readFileSync(
    `${process.cwd()}/submodules/js/packages/react/docs/snippets.json`,
    "utf8",
  ),
);

const python = JSON.parse(
  fs.readFileSync(
    `${process.cwd()}/submodules/python/docs/docs/snippets.json`,
    "utf8",
  ),
);

const go = JSON.parse(
  fs.readFileSync(`${process.cwd()}/submodules/go/docs/snippets.json`, "utf8"),
);

const snippets = CLASSES.reduce((acc, contractName) => {
  const data = {
    name: contractName,
    summary: "",
    examples: {},
    methods: [],
    properties: [],
    reference: {},
  };

  // Get snippets from every SDK
  const tsExample = Object.values(typescript).find(
    (snippet) => snippet.name.toLowerCase() === contractName.toLowerCase(),
  );
  const reactExample = Object.values(react).find((snippet) =>
    snippet.name.toLowerCase().includes(contractName.toLowerCase()),
  );
  const pythonExample = Object.values(python).find((snippet) =>
    snippet.name.toLowerCase().includes(contractName.toLowerCase()),
  );
  const goExample = Object.values(go).find((snippet) =>
    snippet.name.toLowerCase().includes(contractName.toLowerCase()),
  );

  // Get contract summary from typescript docs
  data.summary = tsExample?.summary || "";

  // Get snippets for methods
  data.methods =
    tsExample?.methods?.map((method) => ({
      name: method.name,
      summary: method.summary,
      remarks: method.remarks,
      examples: {
        javascript:
          tsExample?.methods?.find(
            (m) => m.name.toLowerCase() === method.name.toLowerCase(),
          )?.examples?.javascript || "",
        python:
          pythonExample?.methods?.find(
            (m) =>
              m.name.replaceAll("_", "").toLowerCase() ===
              method.name.toLowerCase(),
          )?.example || "",
        go:
          goExample?.methods?.find(
            (m) => m.name.toLowerCase() === method.name.toLowerCase(),
          )?.example || "",
        react:
          createReactSnippet(contractName, method.name).example ||
          (function gen() {
            const ts =
              tsExample?.methods?.find(
                (m) => m.name.toLowerCase() === method.name.toLowerCase(),
              )?.examples?.javascript || "";

            if (ts.includes("sdk")) {
              return `const sdk = useSDK();\n\n${ts}`;
            } else {
              return ts;
            }
          })(),
      },
      reference: {
        javascript:
          tsExample?.methods
            ?.find((m) => m.name.toLowerCase() === method.name.toLowerCase())
            ?.reference?.toLowerCase() || "",
        python:
          pythonExample?.methods?.find(
            (m) =>
              m.name.replaceAll("_", "").toLowerCase() ===
              method.name.toLowerCase(),
          )?.reference || "",
        go:
          goExample?.methods?.find(
            (m) => m.name.toLowerCase() === method.name.toLowerCase(),
          )?.reference || "",
        react:
          createReactSnippet(contractName, method.name).reference ||
          tsExample?.methods
            ?.find((m) => m.name.toLowerCase() === method.name.toLowerCase())
            ?.reference?.toLowerCase() ||
          "",
      },
    })) || [];

  // Get snippets for properties
  data.properties =
    tsExample?.properties?.map((property) => ({
      name: property.name,
      summary: property.summary,
      remarks: property.remarks,
      examples: {
        javascript:
          tsExample?.properties?.find(
            (p) => p.name.toLowerCase() === property.name.toLowerCase(),
          )?.examples?.javascript || "",
        python:
          pythonExample?.properties?.find(
            (p) =>
              p.name.replaceAll("_", "").toLowerCase() ===
              property.name.toLowerCase(),
          )?.example || "",
        go:
          goExample?.properties?.find(
            (m) => p.name.toLowerCase() === property.name.toLowerCase(),
          )?.example || "",
        react:
          createReactSnippet(contractName, property.name).example ||
          (function gen() {
            const ts =
              tsExample?.properties?.find(
                (p) => p.name.toLowerCase() === property.name.toLowerCase(),
              )?.examples?.javascript || "";

            if (ts.includes("sdk")) {
              return `const sdk = useSDK();\n\n${ts}`;
            } else {
              return ts;
            }
          })(),
      },
      reference: {
        javascript:
          tsExample?.properties
            ?.find((p) => p.name.toLowerCase() === property.name.toLowerCase())
            ?.reference?.toLowerCase() || "",
        python:
          pythonExample?.properties?.find(
            (p) =>
              p.name.replaceALl("_", "").toLowerCase() ===
              property.name.toLowerCase(),
          )?.reference || "",
        go:
          goExample?.properties?.find(
            (p) => p.name.toLowerCase() === property.name.toLowerCase(),
          )?.reference || "",
        react:
          createReactSnippet(contractName, property.name).reference ||
          tsExample?.properties
            ?.find((p) => p.name.toLowerCase() === property.name.toLowerCase())
            ?.reference?.toLowerCase() ||
          "",
      },
    })) || [];

  // Add reference for typescript contract interface
  if (tsExample?.reference) {
    data.reference.typescript = tsExample.reference;
  }

  // Add reference for python contract interface
  if (pythonExample?.reference) {
    data.reference.python = pythonExample.reference;
  }

  // Add reference for go contract interface
  if (goExample?.reference) {
    data.reference.go = goExample.reference;
  }

  // Add setup examples for each SDK
  data.examples = {
    ...(tsExample?.examples || {}),
    ...(reactExample?.examples?.javascript
      ? { react: reactExample.examples.javascript }
      : {}),
    ...(pythonExample?.example ? { python: pythonExample.example } : {}),
    ...(goExample?.example ? { go: goExample.example } : {}),
  };

  acc[contractName.replace("Impl", "")] = data;

  return acc;
}, {});

fs.writeFileSync(
  `${process.cwd()}/docs/snippets.json`,
  JSON.stringify(snippets, null, 2),
);

fs.writeFileSync(
  `${process.cwd()}/docs/feature_snippets.json`,
  fs.readFileSync(
    `${process.cwd()}/submodules/js/packages/sdk/docs/feature_snippets.json`,
    "utf8",
  ),
);
