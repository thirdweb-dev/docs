import React from "react";
import { Web3Button, useContractRead } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const additionalScope = { Web3Button, useContractRead };

const code = `function App() {
  const contractAddress = "0x1AfA522cB9441dB4E253fd0c0F2C91B6f1B947E1";

  return (
    <ThirdwebProvider activeChain="goerli">
      <Web3Button
        contractAddress={contractAddress}
        action={async (contract) => contract?.call("updateGreeting", "Hello World!")}
      >
        Call Function
      </Web3Button>
    </ThirdwebProvider>
  );
}`;

export default function GettingStartedLiveEditor() {
  return (
    <LiveCodeEditor
      code={code}
      additionalScope={additionalScope}
      wrapInProvider={false}
    />
  );
}
