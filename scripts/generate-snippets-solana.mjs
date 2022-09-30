import fs from "fs";
import createReactSnippet from "./helper/create-react-snippet-from-mapping.mjs";
import createReactSnippetSolana from "./helper/create-react-snippet-solana.mjs";

const CLASSES = [
  "ThirdwebSDK",
  "NFTCollection",
  "Token",
  "NFTDrop",
  "UserWallet",
];

const typescript = JSON.parse(
  fs.readFileSync(
    `${process.cwd()}/submodules/js/packages/sdk/docs/solana/snippets.json`,
    "utf8",
  ),
);

const react = JSON.parse(
  fs.readFileSync(
    `${process.cwd()}/submodules/js/packages/react/docs/solana/snippets.json`,
    "utf8",
  ),
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
        react:
          createReactSnippetSolana(contractName, method.name).example ||
          (function gen() {
            const ts =
              tsExample?.methods?.find(
                (m) => m.name.toLowerCase() === method.name.toLowerCase(),
              )?.examples?.javascript || "";

            if (ts.includes("sdk") && ts.startsWith("const")) {
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
        react:
          createReactSnippetSolana(contractName, method.name).reference ||
          tsExample?.methods
            ?.find((m) => m.name.toLowerCase() === method.name.toLowerCase())
            ?.reference?.toLowerCase() ||
          "",
      },
    })) || [];

  // Add reference for typescript contract interface
  if (tsExample?.reference) {
    data.reference.typescript = tsExample.reference;
  }

  // Add setup examples for each SDK
  data.examples = {
    ...(tsExample?.examples || {}),
    ...(reactExample?.examples?.javascript
      ? { react: reactExample.examples.javascript }
      : {}),
  };

  acc[contractName.replace("", "")] = data;

  return acc;
}, {});

fs.writeFileSync(
  `${process.cwd()}/docs/snippets_solana.json`,
  JSON.stringify(snippets, null, 2),
);
