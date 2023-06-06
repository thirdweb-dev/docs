import React from "react";
import Details from "@theme/Details";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";

type Props = {
  configurator: string;
  config: string;
  connectUI: string;
  selectUI: string;
  isInstalled?: string;
};

export function CustomizeWalletConfigurator({
  configurator,
  config,
  connectUI,
  selectUI,
  isInstalled,
}: Props) {
  return (
    <Details summary="customize">
      <p>
        <code>{config}</code> contains the default config for metadata and UI.
        you can optionally choose to override the defaults to customize the
        wallet.{" "}
        <Link href="/wallet/build-a-wallet#create-a-wallet-configurator-function">
          Learn more about these configs
        </Link>
      </p>
      <CodeBlock language="tsx">{`\
const ${config} = ${configurator}({ ... });

// override metadata
${config}.meta.name = "..."; // change the name
${config}.meta.iconURL = "..."; // change the icon
${config}.meta.urls = {
  // change urls to download the wallet on various platforms
  android: "https://...",
  ios: "https://...",
  chrome: "https://...",
  firefox: "https://...",
};

// override connection UI
${config}.connectUI = ${connectUI}; // react component

// custom selection UI
${config}.selectUI = ${selectUI}; // react component
${
  isInstalled
    ? `
// custom logic to check if the wallet is installed or not
${config}.isInstalled = ${isInstalled}; // function`
    : ""
}
`}</CodeBlock>

      <p>
        Once the config is ready, you can use it with <code>ConnectWallet</code>{" "}
        component or <code>useConnect</code> hook as shown below
      </p>

      <CodeBlock language="tsx">
        {`\
// add to ThirdwebProvider to add it in ConnectWallet's modal
<ThirdwebProvider supportedWallets={[${config}]} />;

// or use it with useConnect hook
const connect = useConnect();
connect(${config}, { ... });`}
      </CodeBlock>
    </Details>
  );
}
