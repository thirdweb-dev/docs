import React from "react";
import GettingStartedCard from "../GettingStartedCard";

export default function LearnSection() {
  return (
    <div className="explore-products-container" style={{ width: "100%" }}>
      <h2 className="explore-products-heading">Learn</h2>

      <div className="row" style={{ marginBottom: 64 }}>
        <div className="col col--4" style={{ padding: 8 }}>
          <GettingStartedCard
            name="Guides"
            description=""
            link="https://blog.thirdweb.com/guides/"
            image="/assets/guides.svg"
            additionalStyles={{
              height: 56,
              gap: 8,
            }}
          />
        </div>
        <div className="col col--4" style={{ padding: 8 }}>
          <GettingStartedCard
            name="YouTube"
            description=""
            link="https://www.youtube.com/c/thirdweb"
            image="/assets/youtube.svg"
            additionalStyles={{
              height: 56,
              gap: 8,
            }}
          />
        </div>
        <div className="col col--4" style={{ padding: 8 }}>
          <GettingStartedCard
            name="Office Hours"
            description=""
            link="https://lu.ma/thirdweb-office-hours"
            image="/assets/clock.svg"
            additionalStyles={{
              height: 56,
              gap: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}
