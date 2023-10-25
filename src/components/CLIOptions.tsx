import React from "react";

type Props = {
  flags: string[];
  description: string;
};

export default function CLIOptions({
  flags,
  description,
}: Props) {
  return <div>
    <p>
      &emsp;{flags.map((c) => <code>{c}</code>)}
      <br />
      &emsp;&emsp;{description}
    </p>
  </div>;
}
