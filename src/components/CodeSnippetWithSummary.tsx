import React from "react";
import CodeSnippetSummary from "./CodeSnippetSummary";
import ThirdwebCodeSnippet from "./ThirdwebCodeSnippet";

type Props = {
  contract: string;
  name: string;
  isFeatureSnippet: boolean;
  isGetContractCode: boolean;
  showHr: boolean;
  dontShowSummary: boolean;
};

export default function CodeSnippetWithSummary({
  contract,
  name,
  isFeatureSnippet = false,
  isGetContractCode = false,
  showHr = true,
  dontShowSummary = false,
}: Props) {
  return (
    <>
      {!dontShowSummary && (
        <CodeSnippetSummary
          contract={contract}
          name={name}
          isFeatureSnippet={isFeatureSnippet}
          isGetContractCode={isGetContractCode}
        />
      )}

      <ThirdwebCodeSnippet
        contract={contract}
        name={name}
        isFeatureSnippet={isFeatureSnippet}
        isGetContractCode={isGetContractCode}
        showHr={showHr}
      />
    </>
  );
}
