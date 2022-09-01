import React from "react";
// @ts-ignore
import jsonData from "../../docs/feature_snippets.json";
import CodeSnippetWithSummary from "./CodeSnippetWithSummary";
import Heading from "@theme/Heading";

export default function FeatureCodeSnippets({ featureName }) {
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
      {methods.map((method, index) => (
        <div key={index}>
          <Heading as="h3">{method.summary}</Heading>
          <p>{method.remarks}</p>
          <CodeSnippetWithSummary
            contract={featureName}
            name={method.name}
            isFeatureSnippet
            dontShowSummary
            showHr={index !== methods.length - 1}
            isGetContractCode={false}
          />
        </div>
      ))}
    </>
  );
}
