import React from "react";

type Props = {
  copyText: string;
};

export default function CopyTemplateButton({ copyText }: Props) {
  const [text, setText] = React.useState("Copy Template");

  // When the button gets clicked, run a function that converts the text to "Copied!"
  const handleClick = () => {
    navigator.clipboard.writeText(copyText);
    setText("Copied to clipboard!");

    // After 1 second, change the text back to "Copy Template"
    setTimeout(() => {
      setText("Copy Template");
    }, 1000);
  };

  return (
    <a onClick={handleClick} className="view-code-btn">
      {text}
    </a>
  );
}
