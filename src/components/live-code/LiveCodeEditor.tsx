import React from "react";
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
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
  ConnectWallet,
};

function LiveCodeEditor({ code, additionalScope, network }: Props) {
  const { colorMode } = useColorMode();

  return (
    <ThirdwebProvider activeChain={network}>
      <LiveProvider
        code={code}
        scope={{
          ...defaultScope,
          ...additionalScope,
        }}
      >
        <div className="live-code-block-container">
          <div className="live-code-block">
            <h3>Editor</h3>
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
            <h3>Preview</h3>
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
    <ThirdwebProvider activeChain="goerli">
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
