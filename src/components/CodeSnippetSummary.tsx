import React from "react";
import jsonData from "../../docs/snippets.json";
import featureJsonData from "../../docs/feature_snippets.json";

type Props = {
  contract: string;
  name: string;
  isFeatureSnippet: boolean;
  isGetContractCode: boolean;
  showHr: boolean;
};

export default function CodeSnippetRemark({
  contract,
  name,
  isFeatureSnippet = false,
  isGetContractCode = false,
  showHr = true,
}: Props) {
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

  const { examples, reference: references, summary, remarks } = codeObjectToUse;

  return <div>{summary}</div>;
}
