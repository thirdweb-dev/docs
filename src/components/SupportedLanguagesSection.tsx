import React from "react";

type Props = {};

const languageToImageMapping = {
  JavaScript: `/assets/languages/javascript.png`,
  React: `/assets/languages/react.png`,
  Python: `/assets/languages/python.png`,
  Go: `/assets/languages/go.svg`,
};

const languageToUrlMapping = {
  JavaScript: `https://javascript.info`,
  React: `https://reactjs.org`,
  Python: `https://www.python.org`,
  Go: `https://golang.org`,
};

export default function SupportedLanguagesSection({}: Props) {
  return (
    <div className="row" style={{ paddingBottom: 12 }}>
      {["JavaScript", "React", "Python", "Go"].map((lang) => (
        <a
          className="col col--6"
          key={lang}
          style={{ marginBottom: 16, color: "inherit" }}
          onClick={() => window.open(languageToUrlMapping[lang], "_blank")}
        >
          <div
            className="card-demo"
            style={{ cursor: "pointer", height: "100%" }}
          >
            <div className="card" style={{ height: "100%" }}>
              <div
                className="card__header"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src={languageToImageMapping[lang]}
                  style={{
                    height: 32,
                    width: 32,
                    marginRight: 12,
                    borderRadius: "50%",
                  }}
                />
                <h3 style={{ fontSize: "1rem", fontWeight: 700 }}>{lang}</h3>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
