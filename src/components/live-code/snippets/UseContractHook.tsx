// Scope is the global scope of the code editor
import React from "react";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract };

const code = `function App() {
  const { contract, isLoading, error } = useContract(
    "0x083cc9b849E1A8CfEb6736654BF7ac5a98f81a6"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !contract) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Contract</h1>
      <p>Connected to contract:</p>
      <pre>{contract.getAddress()}</pre>
    </div>
  );
}`;

export default function UseContractHook() {
  return <LiveCodeEditor code={code} scope={scope} />;
}
