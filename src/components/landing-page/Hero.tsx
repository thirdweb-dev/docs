import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 className="hero-left-title">
          thirdweb <br /> documentation
        </h1>
        <p className="hero-left-description">
          Welcome to the docs! Here you will find guides, references and
          resources that will help you build with thirdweb.
        </p>
      </div>

      <div className="hero-right">
        <div className="hero-right-image-container">
          <img
            className="hero-right-image"
            src="/assets/docs-hero.png"
            alt="hey"
          />
        </div>
      </div>
    </div>
  );
}
