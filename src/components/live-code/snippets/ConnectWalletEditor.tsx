import React from "react";
import LiveCodeEditor from "../LiveCodeEditor";
import { ConnectWallet } from "@thirdweb-dev/react";

const scope = { ConnectWallet };

const code = `<ConnectWallet
  theme="dark"
  btnTitle="Connect Wallet"
/>`;

export default function ConnectWalletEditor() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
