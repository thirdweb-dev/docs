import React from "react";
import jsonData from "../../docs/snippets.json";
import featureJsonData from "../../docs/feature_snippets.json";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function ThirdwebCodeSnippet({
  contract,
  name,
  isFeatureSnippet = false,
  isGetContractCode = false,
  showHr = true,
}) {
  const languagesToShow = {
    javascript: true,
    react: true,
    python: true,
    go: true,
  };

  if (!contract || !name) {
    return null;
  }

  const contractObject = isFeatureSnippet
    ? featureJsonData[contract]
    : jsonData[contract];

  if (!contractObject) {
    return null;
  }

  const methods = contractObject.methods;
  const properties = contractObject.properties;

  if (!methods && !properties) {
    return null;
  }

  let codeObjectToUse;
  if (isGetContractCode) {
    codeObjectToUse = contractObject;
  } else {
    // Try find in methods
    const method = methods.find((m) => m.name === name);
    // Try find in properties if not found in methods
    const propertyOrMethodFallback =
      method === undefined ? properties.find((p) => p.name === name) : method;

    if (!propertyOrMethodFallback) {
      return null;
    }

    codeObjectToUse = propertyOrMethodFallback;
  }

  const { examples, reference: references } = codeObjectToUse;

  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    react: "jsx",
    go: "go",
  };

  return (
    <>
      <Tabs
        groupId="thirdweb-code-snippet"
        defaultValue={Object.keys(examples)[0]}
      >
        {Object.entries(languagesToShow).map(([language, alwaysShow]) => {
          const example = examples[language];
          const reference = references[language];

          // Capitalize first letter for language name
          const languageName =
            language.charAt(0).toUpperCase() + language.slice(1);

          // If the example is empty, return null
          if (!example) {
            if (!alwaysShow) {
              return (
                <TabItem
                  key={language}
                  attributes={{
                    style: { display: "none" },
                  }}
                  hidden={true}
                  value={language}
                  label={languageName}
                >
                  {null}
                </TabItem>
              );
            }

            return (
              <TabItem key={language} value={language} label={languageName}>
                <CodeBlock language={languageToHighlightMapping[language]}>
                  <p>
                    <b>{languageName} SDK</b> support for <b>{name}</b> is
                    coming soon.{" "}
                  </p>
                  <p>
                    Want this feature sooner?{" "}
                    <a href="https://discord.com/invite/thirdweb">
                      Let us know in Discord!
                    </a>
                  </p>
                </CodeBlock>
              </TabItem>
            );
          }

          return (
            <TabItem key={language} value={language} label={languageName}>
              <CodeBlock language={languageToHighlightMapping[language]}>
                {example}
              </CodeBlock>

              {reference && (
                <a
                  href={reference}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    marginTop: "1rem",
                    textDecoration: "none",
                  }}
                >
                  View in {languageName} SDK Documentation
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
