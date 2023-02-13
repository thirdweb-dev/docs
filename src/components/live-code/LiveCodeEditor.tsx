import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { useColorMode } from "@docusaurus/theme-common";
import lightCodeTheme from "prism-react-renderer/themes/vsLight";
import darkCodeTheme from "prism-react-renderer/themes/oceanicNext";

console.log({ lightCodeTheme, darkCodeTheme });

type Props = {
  code: string;
  scope: any;
};

export default function ConnectWalletEditor({ code, scope }: Props) {
  const { colorMode } = useColorMode();

  return (
    <ThirdwebProvider activeChain="goerli">
      <LiveProvider code={code} scope={scope}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "8px",
            display: "flex",
            flexDirection: "row",
            gap: "2%",
            maxWidth: "95vw",
          }}
        >
          <div style={{ width: "60%" }}>
            <LiveEditor
              about=""
              theme={colorMode === "dark" ? darkCodeTheme : lightCodeTheme}
              style={{
                "--ifm-pre-background": "#282c34",
              }}
            />
          </div>
          <div style={{ width: "38%" }}>
            <LivePreview />
            <LiveError />
          </div>
        </div>
      </LiveProvider>
    </ThirdwebProvider>
  );
}
