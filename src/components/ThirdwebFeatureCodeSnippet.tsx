import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import reactSnippets from "../../docs/feature_snippets_react.json";
import typescriptSnippets from "../../docs/feature_snippets_sdk.json";

type Props = {
  featureName: string;
  languageFunctionMapping: {
    react?: string;
    javascript?: string;
    python?: string;
    go?: string;
  };
  showHr: boolean;
};

export default function ThirdwebFeatureCodeSnippet({
  featureName,
  languageFunctionMapping,
  showHr = true,
}: Props) {
  function createSnippetsObject() {
    return {
      react:
        reactSnippets?.[featureName]?.find(
          (s) => s.name === languageFunctionMapping["react"],
        ) ||
        typescriptSnippets?.[featureName]?.find(
          (s) => s.name === languageFunctionMapping?.["javascript"],
        ),
      javascript: typescriptSnippets?.[featureName]?.find(
        (s) => s.name === languageFunctionMapping?.["javascript"],
      ),
    };
  }

  const snippetsObject = createSnippetsObject();

  const languagesToShow = {
    react: {
      label: "React",
      key: "javascript",
      syntax: "jsx",
      docsLink: "https://portal.thirdweb.com/react",
    },
    javascript: {
      label: "Javascript",
      key: "javascript",
      syntax: "javascript",
      docsLink: "https://portal.thirdweb.com/typescript",
    },
    python: {
      label: "Python",
      key: "python",
      syntax: "python",
      docsLink: "https://portal.thirdweb.com/python",
    },
    go: {
      label: "Go",
      key: "go",
      syntax: "go",
      docsLink: "https://portal.thirdweb.com/go",
    },
  };

  return (
    <>
      <Tabs groupId={"thirdweb-code-snippet"} defaultValue={"react"}>
        {Object.entries(languagesToShow).map(([language, languageInfo]) => {
          if (!snippetsObject[language]) {
            return (
              <TabItem
                key={language}
                value={language}
                label={languageInfo.label}
              >
                <CodeBlock language={"text"}>
                  {`Check our ${languageInfo.label} documentation to see how to utilize ${featureName} in ${languageInfo.label}.`}
                </CodeBlock>

                <a
                  href={languageInfo.docsLink}
                  style={{
                    display: "block",
                    marginTop: "1rem",
                    textDecoration: "none",
                  }}
                >
                  View {languageInfo.label} SDK Documentation
                </a>
              </TabItem>
            );
          }

          // Grab the example snippet
          let example = snippetsObject[language].examples[languageInfo.key];
          // Grabthe reference URL
          let reference = snippetsObject[language].reference[languageInfo.key];

          return (
            <TabItem key={language} value={language} label={languageInfo.label}>
              <CodeBlock language={languageInfo.syntax}>{example}</CodeBlock>
              <p className="code-snippet-migration-tip">
                This snippet is for <strong>v3</strong> of the SDK.{" "}
                <a href={`${languageInfo.docsLink}/migration-guide`}>
                  Learn how to upgrade
                </a>
                .
              </p>
              {reference && (
                <a
                  href={reference}
                  style={{
                    display: "block",
                    marginTop: "1rem",
                    textDecoration: "none",
                  }}
                >
                  View in {languageInfo.label} SDK Documentation
                </a>
              )}
            </TabItem>
          );
        })}
      </Tabs>
      {showHr && (
        <hr
          style={{
            marginTop: 32,
            backgroundColor: "var(--ifm-toc-border-color)",
          }}
        />
      )}
    </>
  );
}
