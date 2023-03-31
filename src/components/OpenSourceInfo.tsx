import React from "react";
import ViewRepoButton from "./ViewRepoButton";

type Props = {
  repoName: string;
  repoUrl: string;
  isLibrary?: boolean;
};

export default function OpenSourceInfo({
  repoName,
  repoUrl,
  isLibrary = true,
}: Props) {
  return (
    <div className="open-source-info-container">
      <h2>
        Open Source
        {isLibrary && " Library"}
      </h2>
      <p>
        The {repoName} {isLibrary && "library"} is open-source. You can view the
        source code and contribute to it on{" "}
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>

      <ViewRepoButton name={repoName} text="View on GitHub" link={repoUrl} />
    </div>
  );
}
