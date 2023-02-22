import React from "react";
import { ThirdwebProvider, useContract, useNFT } from "@thirdweb-dev/react";
import LiveCodeEditor from "../LiveCodeEditor";

const scope = { React, ThirdwebProvider, useContract, useNFT };

const code = `function App() {
  // The token ID of the NFT you want to fetch
  const tokenId = 0;

  const { contract } = useContract("0x4935154046C2f281AcE726018149F1a25449910d");
  const { data: nft, isLoading, error } = useNFT(contract, tokenId);

  if (isLoading) return <div>Fetching NFT…</div>;
  if (error) return <div>Error fetching NFT</div>;
  if (!nft) return <div>NFT not found</div>;
  
  return <div style={{display:'flex', flexDirection:'column'}}>
    <strong>{nft.metadata.name}</strong>
    <img src={nft.metadata.image}/>
  </div>;
}`;

export default function UseNFTHook() {
  return <LiveCodeEditor code={code} scope={scope} />;
}
