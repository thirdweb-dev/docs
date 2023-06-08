import fs from "fs";

const thirdwebChainsPath = `${process.cwd()}/submodules/js/packages/chains/chains`;
const docsOutPath = `${process.cwd()}/docs/chains/chains`;
const chainTemplateHelperDirectory = `${process.cwd()}/scripts/helper/chain-template-helpers`;
const overridesPath = `${chainTemplateHelperDirectory}/overrides`;

function getExportName(slug: string) {
  let exportName = slug
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("");

  // if chainName starts with a number, prepend an underscore
  if (exportName.match(/^[0-9]/)) {
    exportName = `_${exportName}`;
  }
  return exportName;
}

async function generateDocs() {
  console.log("Generating chain docs...");
  // get overrides, if any
  const overridesArray = await fs.readdirSync(overridesPath);

  // start extracting chains
  const chains = await fs.readdirSync(thirdwebChainsPath);

  for (const chain of chains) {
    const chainPath = `${thirdwebChainsPath}/${chain}`;
    // Parse content
    const data = await import(chainPath);

    // check if chain is overriden
    if (overridesArray.includes(`${data.default.default.slug}.md`)) {
      // copy the override instead and not autogenerate for that chain
      await fs.writeFileSync(
        `${docsOutPath}/${data.default.default.slug}.md`,
        await fs.readFileSync(
          `${overridesPath}/${data.default.default.slug}.md`,
        ),
      );
      continue;
    }

    // create file
    await fs.writeFileSync(
      `${docsOutPath}/${data.default.default.slug}.md`,
      await fs
        .readFileSync(
          `${chainTemplateHelperDirectory}/template-chain.md`,
          "utf-8",
        )
        .split("{ chainName }")
        .join(data.default.default.name)
        .split("{chainName}")
        .join(data.default.default.name)
        .split("{chainId}")
        .join(data.default.default.chainId)
        .split("{chainSlug}")
        .join(data.default.default.slug)
        .split("{chainExport}")
        .join(getExportName(data.default.default.slug))
        .split("{ chainExport }")
        .join(getExportName(data.default.default.slug)),
    );
  }
}

function main() {
  generateDocs();
}

main();
