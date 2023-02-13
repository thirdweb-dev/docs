import React from "react";
import { ThirdwebProvider, ConnectWallet } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, ConnectWallet };

const code = `<ConnectWallet />`;

export default function ConnectWalletEditor() {
  return <LiveCodeEditor code={code} scope={scope} />;
}
