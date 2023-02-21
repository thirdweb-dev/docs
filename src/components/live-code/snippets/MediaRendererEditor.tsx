import React from "react";
import LiveCodeEditor from "../LiveCodeEditor";
import { MediaRenderer } from "@thirdweb-dev/react";

const scope = { MediaRenderer };

const code = `function Home() {
  return (
    <MediaRenderer 
      src="ipfs://QmV4HC9fNrPJQeYpbW55NLLuSBMyzE11zS1L4HmL6Lbk7X" 
    />
  );
}`;

export default function MediaRendererEditor() {
  return <LiveCodeEditor code={code} additionalScope={scope} />;
}
