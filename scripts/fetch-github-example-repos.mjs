import fetch from "node-fetch";
import fs from "fs-extra";

async function fetchPage(pageNumber) {
  const apiUrl = `https://api.github.com/users/thirdweb-example/repos?per_page=100&page=${pageNumber}`;
  const ghRes = await fetch(apiUrl);
  return await ghRes.json();
}

async function fetchAllPages() {
  let pageNumber = 1;
  let allData = [];
  let pageData = await fetchPage(pageNumber);

  while (pageData.length > 0) {
    allData.push(...pageData);
    pageNumber++;
    pageData = await fetchPage(pageNumber);
  }

  return allData;
}

const allPageData = await fetchAllPages();

const dataWeWant = allPageData
  .map((repo) => {
    const {
      name,
      html_url,
      description,
      created_at,
      updated_at,
      clone_url,
      topics,
      language,
      stargazers_count,
      is_template,
      homepage,
    } = repo;

    return {
      name,
      html_url,
      description,
      created_at,
      updated_at,
      clone_url,
      topics,
      language,
      stargazers_count,
      is_template,
      homepage,
    };
  })
  // filter out the .github repo lol
  .filter((repo) => repo.name !== ".github");

fs.writeFileSync(
  "./docs/example-repos.json",
  JSON.stringify(dataWeWant, null, 2),
);

// Have 1 section that's templates and maybe 1 section that's the projects

// maybe fetch all and filter on client-side ?
