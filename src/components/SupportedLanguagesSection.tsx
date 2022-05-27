import React from "react";

const languageToImageMapping = {
  JavaScript: `/assets/languages/javascript.png`,
  React: `/assets/languages/react.png`,
  Python: `/assets/languages/python.png`,
  Go: `/assets/languages/go.png`,
};

const languageToUrlMapping = {
  JavaScript: `/typescript`,
  React: `/react`,
  Python: `/python`,
  Go: `/go`,
};

export default function SupportedLanguagesSection() {
  return (
    <div className="row" style={{ paddingTop: 16 }}>
      {["JavaScript", "React", "Python", "Go"].map((lang) => (
        <a
          className="col col--12"
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
