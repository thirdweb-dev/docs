import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useColorMode } from "@docusaurus/theme-common";
import lightCodeTheme from "prism-react-renderer/themes/vsLight";
import darkCodeTheme from "prism-react-renderer/themes/oceanicNext";

type Props = {
  code: string;
  additionalScope?: any;
  wrapInProvider?: boolean;
  network?: string;
};

const defaultScope = {
  React,
  ThirdwebProvider,
};

function LiveCodeEditor({ code, additionalScope, network }: Props) {
  const { colorMode } = useColorMode();

  return (
    // Default to goerli if no network is provided
    <ThirdwebProvider activeChain={network || "goerli"} autoConnect={false}>
      <LiveProvider
        code={code}
        scope={{
          ...defaultScope,
          ...additionalScope,
        }}
      >
        <p>Edit the code below to see how it works!</p>
        <p>
          <i>Note: this playground uses the Goerli test network.</i>
        </p>
        <div className="live-code-block-container">
          <div className="live-code-block">
            <p className="live-code-subtitle">Editor</p>
            <LiveEditor
              theme={colorMode === "dark" ? darkCodeTheme : lightCodeTheme}
              style={{
                // @ts-expect-error
                "--ifm-pre-background":
                  colorMode === "dark" ? "#282c34" : "#fff",
              }}
            />
          </div>
          <div style={{ width: "38%" }}>
            <p className="live-code-subtitle">Preview</p>
            <LivePreview />
            <LiveError />
          </div>
        </div>
      </LiveProvider>
    </ThirdwebProvider>
  );
}

function WrappedLiveCodeEditor(props: Props) {
  return (
    <ThirdwebProvider activeChain="goerli" autoConnect={false}>
      <LiveCodeEditor {...props} />
    </ThirdwebProvider>
  );
}

export default function LiveCodeEditorWrapper(props: Props) {
  return props.wrapInProvider ? (
    <WrappedLiveCodeEditor {...props} />
  ) : (
    <LiveCodeEditor {...props} />
  );
}
