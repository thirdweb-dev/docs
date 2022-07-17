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

      console.log(`Made page for ${repo.name}`);
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
      // If a line contains something that looks like: [something](relative-path)
      // replace it with: [something](url/relative-path)

      let newString = "";
      // Find each time there is a link
      const links = l.split("](");
      if (links.length > 1) {
        for (let i = 1; i < links.length; i += 2) {
          const link = links[i];
          const linkEnd = link.indexOf(")");
          const linkText = link.substring(0, linkEnd);
          const restOfLinkText = link.substring(linkEnd).slice(1);

          if (linkText.startsWith(".")) {
            // Link text now looks like ./relative-path
            // Replace the link text with: url + /relative-path
            links[i] = `](${url}/blob/main/${linkText.slice(2)})`;

            newString += links[i - 1] + links[i] + restOfLinkText;
          }
        }
      }
      return newString || l;
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
    "To create a new project using this template, use the [thirdweb CLI](/thirdweb-deploy/thirdweb-cli):" +
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

  const examplePages = await makeExamplePages(examplesJson);

  console.log(examplePages);

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
