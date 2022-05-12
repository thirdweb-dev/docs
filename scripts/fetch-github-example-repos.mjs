import fetch from "node-fetch";
import fs from "fs-extra";

const apiUrl = "https://api.github.com/users/thirdweb-example/repos";
const ghRes = await fetch(apiUrl);
const ghData = await ghRes.json();

const dataWeWant = ghData.map((repo) => {
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
  };
});

fs.writeFileSync(
  "./docs/example-repos.json",
  JSON.stringify(dataWeWant, null, 2),
);

// Have 1 section that's templates and maybe 1 section that's the projects

// maybe fetch all and filter on client-side ?
