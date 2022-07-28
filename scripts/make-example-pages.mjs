import examplesJson from "../docs/example-repos.json" assert { type: "json" };
import fetch from "node-fetch";
import fs from "fs";

function transformName(name) {
  const capitalizeWords = ["nft", "ts", "dao"];
  const lowercaseWords = ["thirdweb"];

  return name
    .split("-")
    .map((word) => {
      if (capitalizeWords.includes(word)) {
        return word.toUpperCase();
      }

      if (lowercaseWords.includes(word)) {
        return word.toLowerCase();
      }

      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

async function makeExamplePages(repos) {
  const examplePages = [];

  await Promise.all(
    repos.map(async (repo) => {
      const url = `https://raw.githubusercontent.com/thirdweb-example/${repo.name}/main/README.md`;

      const response = await fetch(url);
      const text = await response.text();

      examplePages.push({
        name: repo.name,
        description: repo.description,
        text: text,
        demo: repo.homepage,
        html_url: repo.html_url,
      });
    }),
  );

  return examplePages;
}

function filterContent(content, url) {
  const lines = content.split("\n");
  lines[0] = "## Using this template";
  // Replace the first line of the content with "# Guide"
  const filteredLines = lines
    .filter((l) => {
      if (
        l.startsWith("![") ||
        l.startsWith("<img") ||
        l.startsWith("</div") ||
        l.startsWith("<div") ||
        l.startsWith("<!--") ||
        l.startsWith("<h1") ||
        l.startsWith("</h1")
      ) {
        return false;
      }

      return true;
    })
    .map((l) => {
      // Go through each letter of the line until you see "](."
      // When you do, replace the text that comes after it until you see a closing ")".
      // The new text should be the old text stripped of the starting ".", and replaced with `${url}/blob/main/`.
      let i = 0;
      while (i < l.length) {
        if (l[i] === "(" && l[i + 1] === ".") {
          const start = i + 2;
          let end = start;
          while (l[end] !== ")") {
            end++;
          }
          const newText = `${url}/blob/main` + l.slice(start, end);
          l = l.slice(0, start - 1) + newText + l.slice(end);
        }
        i++;
      }
      return l;
    });

  return filteredLines.join("\n");
}

function createPageFormat(page) {
  const metadata = `---
slug: /templates/${page.name}-template
hide_title: true
---`;

  const importSection =
    `import DemoButton from '../../../../src/components/generated-md-components/DemoButton';` +
    "\n" +
    `import ViewCodeButton from '../../../../src/components/generated-md-components/ViewCodeButton';` +
    "\n";

  const demoButton = page.demo
    ? `<DemoButton link="${page.demo}" name="${page.name}"/>`
    : "";
  const viewCodeButton = page.html_url
    ? `<ViewCodeButton link="${page.html_url}" name="${page.name}"/>`
    : "";

  const buttonSection =
    `<div style={{display: 'flex', flexDirection: 'row', gap: '2%', marginBottom:32, width: '100%', alignItems:'center', justifyContent: 'center', marginTop:16}}>
    ${demoButton}
    ${viewCodeButton}
  </div>` +
    "\n" +
    "\n" +
    "---" +
    "\n";

  const md = filterContent(page.text, page.html_url);

  const createSnippet =
    "To create a new project using this template, use the [thirdweb CLI](/thirdweb-cli):" +
    "\n" +
    "```jsx" +
    "\n" +
    "npx thirdweb create --template " +
    page.name +
    "\n" +
    "```";

  const introSection = `# ${transformName(page.name)}\n\n${
    page.description || ""
  }`;

  const guideSection = md;

  return `${metadata}\n\n${importSection}\n\n${introSection}\n\n${createSnippet}\n\n${buttonSection}\n\n${guideSection}`;
}

async function run() {
  console.log("Making example pages...");

  // Copy the /docs/onboarding/6 Examples/generated-examples\_category.json_ file
  // so we can restore it after deleting the generated pages.
  const examplesCategoryJson = fs.readFileSync(
    "./docs/onboarding/6 Examples/generated-examples/_category_.json",
    "utf8",
  );

  // First, delete all pages inside \docs\onboarding\6 Examples\generated-examples using rmdir
  const dir = "./docs/onboarding/6 Examples/generated-examples";

  if (fs.existsSync(dir)) {
    fs.rmdirSync(dir, { recursive: true });
  }

  // Make a new directory for the generated pages
  fs.mkdirSync(dir);

  const examplePages = await makeExamplePages(examplesJson);

  // Restore category.json
  fs.writeFileSync(
    "./docs/onboarding/6 Examples/generated-examples/_category_.json",
    examplesCategoryJson,
  );

  // For each example page,
  // write a file to the /docs/onboarding/6 Examples/test folder
  // with the name of the example and the content of the page.

  examplePages.forEach((page) => {
    fs.writeFileSync(
      `docs/onboarding/6 Examples/generated-examples/${page.name}.mdx`,
      createPageFormat(page),
    );
  });
}

run();
