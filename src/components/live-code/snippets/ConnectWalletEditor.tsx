import React from "react";
import LiveCodeEditor from "../LiveCodeEditor";

const code = `<ConnectWallet />`;

export default function ConnectWalletEditor() {
  return <LiveCodeEditor code={code} />;
}
