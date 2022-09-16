import React, { useMemo } from "react";

type Props = {
  text: string;
  link?: string;
};

export default function TwitterCard({ text, link }: Props) {
  const twitterIntentUrl = useMemo(() => {
    const url = new URL("https://twitter.com/intent/tweet");
    url.searchParams.append("text", `${text}`);
    return url.href;
  }, []);

  return (
    <a
      className="tw-card"
      style={{
        cursor: "pointer",
        height: "100%",
        width: "100%",
        color: "inherit",
        textDecoration: "none",
        padding: 0,
      }}
      href={link || twitterIntentUrl}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      <div
        className="card__header"
        style={{
          pointerEvents: "none",
        }}
      >
        <div
          className="card__body"
          style={{
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              pointerEvents: "none",
              minHeight: 36,
            }}
          >
            <img
              src={"/assets/twitter.png"}
              style={{
                maxHeight: "36px",
                marginRight: 12,
                pointerEvents: "none",
              }}
            />
            <h5
              style={{
                fontWeight: 600,
                marginBottom: 0,
                fontSize: "1.25rem",
                pointerEvents: "none",
              }}
            >
              Share on Twitter
            </h5>
          </div>
        </div>
      </div>
    </a>
  );
}
