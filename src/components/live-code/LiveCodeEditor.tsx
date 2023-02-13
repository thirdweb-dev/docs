import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

type Props = {
  code: string;
  scope: any;
};

export default function ConnectWalletEditor({ code, scope }: Props) {
  return (
    <ThirdwebProvider activeChain="goerli">
      <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </ThirdwebProvider>
  );
}
