// Scope is the global scope of the code editor
import React from "react";
import { ThirdwebProvider, useContract, useNFT } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useNFT };

const code = `function App() {
  // The token ID of the NFT you want to fetch
  const tokenId = 0;

  const { contract } = useContract("0x149ec8910A8e699D708f2b9c75e1F864DfCD1e1c");
  const { data: nft, isLoading, error } = useNFT(contract, tokenId);

  if (isLoading) return <div>Fetching NFT…</div>;
  if (error) return <div>Error fetching NFT</div>;
  if (!nft) return <div>NFT not found</div>;
  return <div>
    <strong>NFT Metadata</strong>
    <pre>{JSON.stringify(nft, null, 2)}</pre>
  </div>;
}`;

export default function UseNFTHook() {
  return <LiveCodeEditor code={code} scope={scope} />;
}
