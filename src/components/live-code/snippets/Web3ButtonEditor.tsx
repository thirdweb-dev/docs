import React from "react";
import LiveCodeEditor from "../LiveCodeEditor";
import { Web3Button } from "@thirdweb-dev/react";

const scope = { Web3Button };

const code = `<Web3Button
  contractAddress="0xb413df01580659F671471956e9D2fAe989d1dcd3"
  action={(contract) => contract.erc721.claim(1)}
  theme="dark"
>
  Claim an NFT!
</Web3Button>`;

export default function ConnectWalletEditor() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
