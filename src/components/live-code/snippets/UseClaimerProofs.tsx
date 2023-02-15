// Scope is the global scope of the code editor
import React from "react";
import {
  ThirdwebProvider,
  useContract,
  useClaimerProofs,
  useAddress,
  ConnectWallet,
} from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = {
  React,
  ThirdwebProvider,
  useContract,
  useClaimerProofs,
  useAddress,
  ConnectWallet,
};

const code = `function App() {
  const { contract } = useContract(
    "0x4935154046C2f281AcE726018149F1a25449910d",
    "nft-drop"
  );
  const address = useAddress();

  const {
    data: proof,
    isLoading,
    error,
  } = useClaimerProofs(contract, address || "");

  if (error) {
    console.error("failed to fetch proof", error);
  }

  if (address && isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {address ? <div>Proof: {proof ? JSON.stringify(proof) : "null"}</div> : <ConnectWallet />}
    </div>
  );
}`;

export default function UseClaimerProofs() {
  return <LiveCodeEditor code={code} scope={scope} />;
}
