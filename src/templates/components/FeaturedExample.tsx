import React from "react";
import ThemedImage from "@theme/ThemedImage";
import ViewCodeButton from "@components/ViewCodeButton";
import DemoButton from "@components/DemoButton";

type Props = {
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  };
  links: {
    github: string;
    demo: string;
  };
  id: string;
  whichFirst: "image" | "text";
};

export default function FeaturedExample({
  title,
  description,
  image,
  links,
}: Props) {
  return (
    <div className="featured-template-card">
      <div className="featured-template-left">
        <ThemedImage
          sources={{
            light: image.light,
            dark: image.dark,
          }}
          className="heroGridImage"
          alt="Solana Icon"
        />
      </div>

      <div className="featured-template-right">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="button-container">
          <DemoButton link={links.demo} />
          <ViewCodeButton link={links.github} />
        </div>
      </div>
    </div>
  );
}
