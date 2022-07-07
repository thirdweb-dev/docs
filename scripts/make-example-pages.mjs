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

function filterContent(content) {
  const lines = content.split("\n");
  const filteredLines = lines.filter((l) => {
    if (
      l.startsWith("![") ||
      l.startsWith("<img") ||
      l.startsWith("</div") ||
      l.startsWith("<div") ||
      l.startsWith("<!--")
    ) {
      return false;
    }

    return true;
  });
  return filteredLines.join("\n");
}

function createPageFormat(page) {
  const metadata = `---
slug: /templates/${page.name}-template
hide_title: true
---`;

  // Create an iframe that fits the demo onto this page
  const iframe = `<iframe
    src="${page.demo}"
    title="${page.name}"
    width="100%"
    height="420px"
    scrolling="yes"
    style={{marginBottom: 32, borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.2)'
    }}
  ></iframe>`;

  const buttonSection = `<ul>
    <li>
      <a href="${page.demo}" >View Demo</a>
    </li>
    <li>
      <a href="${page.html_url}">View Code on GitHub</a>
    </li>
  </ul>`;

  const md = filterContent(page.text);

  const createSnippet =
    "```jsx" +
    "\n" +
    "npx thirdweb create --template " +
    page.name +
    "\n" +
    "```";

  const introSection = `# ${transformName(page.name)}\n\n${page.description}`;

  const demoSection = iframe + `\n\n` + `---`;

  const guideSection = md;

  return `${metadata}\n\n${introSection}\n\n${createSnippet}\n\n${buttonSection}\n\n${demoSection}\n\n${guideSection}`;
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
