import React from "react";

type Props = {
  link: string;
};

export default function YoutubeEmbed({ link }: Props) {
  return (
    <div className="iframe-container">
      <iframe
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="responsive-iframe"
      />
    </div>
  );
}
