import { join, parse } from "path";
import { createInterface } from "readline";
import fs from "fs-extra";

const { readdir, createReadStream, writeFile, readFile } = fs;

const outDir = "./docs/solana";
const packageRoot = "./submodules/js/packages/sdk";
const inDir = packageRoot + "/docs/solana";
const readmePath = packageRoot + "/README.md";

fs.rmdirSync(outDir, { recursive: true, force: true });
fs.ensureDirSync(outDir);

async function main() {
  const docFiles = await readdir(inDir);
  for (const docFile of docFiles) {
    try {
      const { name: id, ext } = parse(docFile);
      if (ext !== ".md") {
        continue;
      }

      const docPath = join(inDir, docFile);
      const docPathOut = join(outDir, docFile);
      const input = createReadStream(docPath);
      const output = [];
      const lines = createInterface({
        input,
        crlfDelay: Infinity,
      });

      let title = "";

      lines.on("line", (line) => {
        if (!title) {
          const titleLine = line.match(/## (.*)/);
          if (titleLine) {
            title = titleLine[1];
          }
        }
        const homeLink = line.match(/\[Home\]\(.\/index\.md\) &gt; (.*)/);
        if (homeLink) {
          //skip the breadcrumb line alltogether
          return;
        }
        // See issue #4. api-documenter expects \| to escape table
        // column delimiters, but docusaurus uses a markdown processor
        // that doesn't support this. Replace with an escape sequence
        // that renders |.
        if (line.startsWith("|")) {
          line = line.replace(/\\\|/g, "&#124;");
        }
        if (line.includes("<b>")) {
          line = line.replace(/<b>/g, "**");
        }
        if (line.includes("##")) {
          line = line.replace(/\\#\\#/g, "**");
        }
        if (line.includes("</b>")) {
          line = line.replace(/<\/b>/g, "**");
        }
        if (line.includes("<!-- -->")) {
          line = line.replace(/<!-- -->/g, "");
        }

        output.push(line);
      });

      await new Promise((resolve) => lines.once("close", resolve));
      input.close();

      const header = [
        "---",
        `slug: /${id}`,
        `title: ${title}`,
        `hide_title: true`,
        `displayed_sidebar: solana`,
        "---",
      ];

      await writeFile(docPathOut, header.concat(output).join("\n"));
    } catch (err) {
      console.error(`Could not process ${docFile}: ${err}`);
    }
  }
  await copyReadMe();
}

async function copyReadMe() {
  const header = [
    "---",
    `title: Thirdweb Solana SDK`,
    `hide_title: true`,
    `displayed_sidebar: solana`,
    "---",
  ];
  const fileContents = await readFile(readmePath, "utf8");
  await writeFile(
    join(outDir, "index.md"),
    header.join("\n") + "\n" + fileContents,
  );
}

main();
