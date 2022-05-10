import React from "react";
// @ts-ignore
import jsonData from "../../docs/snippets.json";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function ThirdwebCodeSnippet({
  contract,
  name,
  isGetContractCode,
}) {
  if (!contract || !name) {
    return <></>;
  }

  const contractObject = jsonData[contract];

  if (!contractObject) {
    return <></>;
  }

  const methods = contractObject.methods;
  const properties = contractObject.properties;

  if (!methods && !properties) {
    return <></>;
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
      return <></>;
    }

    codeObjectToUse = propertyOrMethodFallback;
  }

  const { summary, examples, reference: references } = codeObjectToUse;

  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    react: "jsx",
  };

  return (
    <Tabs
      groupId="thirdweb-code-snippet"
      defaultValue={Object.keys(examples)[0]}
    >
      {Object.keys(examples).map((language) => {
        const example = examples[language];
        const reference = references[language];
        // Capitalize first letter for language name
        const languageName =
          language.charAt(0).toUpperCase() + language.slice(1);

        // If the example is empty, return null
        if (!example) {
          // @ts-ignore
          return <TabItem value={""}></TabItem>;
        }

        return (
          <TabItem key={language} value={language} label={languageName}>
            {/* <b>{summary}</b> */}
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
  );
}
