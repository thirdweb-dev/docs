import React from "react";
// @ts-ignore
import jsonData from "../../docs/feature_snippets.json";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";

export default function FeatureCodeSnippets({ 
  featureName
}) {
  if (!featureName) {
    return null;
  }

  const featureObject = jsonData[featureName];

  if (!featureObject) {
    return null;
  }

  const { summary, examples, methods, reference: references } = featureObject;


  return (
    <>
      <CodeSnippet examples={examples} references={references} />
      {methods.map((method, index) => (
        <>
          <Heading as="h4">{method.name}</Heading>
          <p>{method.summary}</p>
          <CodeSnippet examples={method.examples} references={method.reference} />
        </>
      ))}
    </>
  );
}

function CodeSnippet({ examples, references }) {
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
  )
}