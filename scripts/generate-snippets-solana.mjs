import fs from "fs";
import createReactSnippetSolana from "./helper/create-react-snippet-solana.mjs";

const CLASSES = [
  "ThirdwebSDK",
  "NFTCollection",
  "Token",
  "NFTDrop",
  "Program",
  "UserWallet",
  "Deployer",
];

const typescript = JSON.parse(
  fs.readFileSync(
    `${process.cwd()}/submodules/js/packages/sdk/docs/solana/snippets.json`,
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
  const programTypeArg = {
    Program: "",
    NFTCollection: `, "nft-collection"`,
    NFTDrop: `, "nft-drop"`,
    Token: `, "token"`,
  };
  const reactExample = [
    "Program",
    "NFTCollection",
    "NFTDrop",
    "Token",
  ].includes(contractName)
    ? {
        examples: {
          javascript: `import { useProgram } from "@thirdweb-dev/sdk/solana"\n\nexport default function Component() {\n  const { program } = useProgram("{{program_address}}"${programTypeArg[contractName]})\n  ...\n}`,
        },
      }
    : {};

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
