import React from "react";

type Props = {
  copyText: string;
};

const defaultText = "Clone Template";

export default function CopyTemplateButton({ copyText }: Props) {
  const [text, setText] = React.useState(defaultText);

  // When the button gets clicked, run a function that converts the text to "Copied!"
  const handleClick = () => {
    navigator.clipboard.writeText(copyText);
    setText("Now paste to the CLI!");

    // After 1 second, change the text back to "Copy Template"
    setTimeout(() => {
      setText(defaultText);
    }, 1800);
  };

  return (
    <a onClick={handleClick} className="view-code-btn">
      {text}
    </a>
  );
}
