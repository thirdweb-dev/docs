import React from "react";
import ThemedImage from "@theme/ThemedImage";

export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-left-title">
            thirdweb <br /> documentation
          </h1>
          <p className="hero-left-description">
            thirdweb is a complete web3 development framework that provides
            everything you need to connect your apps and games to decentralized
            networks
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-right-image-container">
            <ThemedImage
              sources={{
                light: "/assets/docs-hero-light-2.png",
                dark: "/assets/docs-hero.png",
              }}
              className="hero-right-image"
              alt="thirdweb documentation hero image"
            />
          </div>
        </div>
      </div>

      <hr className="hero-divider" />
    </>
  );
}
