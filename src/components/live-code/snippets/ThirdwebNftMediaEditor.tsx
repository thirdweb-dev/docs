import React from "react";
import LiveCodeEditor from "../LiveCodeEditor";
import {
  ThirdwebProvider,
  ThirdwebNftMedia,
  useContract,
  useNFT,
} from "@thirdweb-dev/react";

const scope = { ThirdwebProvider, ThirdwebNftMedia, useContract, useNFT };

const code = `function Home() {
  const { contract } = useContract(
    "0xb413df01580659F671471956e9D2fAe989d1dcd3"
  );
  const { data: nft, isLoading, error } = useNFT(contract, "0");

  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return <ThirdwebNftMedia metadata={nft.metadata} />;
}`;

export default function ThirdwebNftMediaEditor() {
  return (
    <LiveCodeEditor
      code={code}
      additionalScope={scope}
      wrapInProvider={false}
      network="goerli"
    />
  );
}
