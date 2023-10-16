import React from "react";
import Details from "@theme/Details";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";

type Props = {
  configurator: string;
  config: string;
  connectUI: string;
  selectUI: string;
};

export function CustomizeWalletConfiguratorRN({
  configurator,
  config,
  connectUI,
  selectUI,
}: Props) {
  return (
    <Details summary="customize (optional)">
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

// override connection UI
${config}.connectUI = ${connectUI}; // react component

// custom selection UI
${config}.selectUI = ${selectUI}; // react component
`}</CodeBlock>

      <p>
        Once the config is ready, you can use it with <code>ConnectWallet</code>{" "}
        component or <code>useConnect</code> hook as shown below
      </p>

      <CodeBlock language="tsx">
        {`\
// add to ThirdwebProvider to add it in ConnectWallet's modal
<ThirdwebProvider supportedWallets={[${config}]} clientId="your-client-id"/>;

// or use it with useConnect hook
const connect = useConnect();
connect(${config}, { ... });`}
      </CodeBlock>
    </Details>
  );
}
