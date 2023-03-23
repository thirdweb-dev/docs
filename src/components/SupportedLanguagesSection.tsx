import React from "react";

const languageToImageMapping = {
  JavaScript: `/assets/languages/javascript.png`,
  React: `/assets/languages/react.png`,
  "React Native": `/assets/languages/react.png`,
  Python: `/assets/languages/python.png`,
  Go: `/assets/languages/go.png`,
  Unity: `/assets/languages/unity.webp`,
};

const languageToUrlMapping = {
  JavaScript: `/typescript`,
  React: `/react`,
  "React Native": "/react-native",
  Python: `/python`,
  Go: `/go`,
  Unity: `/unity`,
};

export default function SupportedLanguagesSection({
  languages,
}: {
  languages: string[];
}) {
  // If no languages are passed in, default to these four
  const arrayToUse =
    languages.length > 0 ? languages : ["JavaScript", "Python", "Go", "Unity"];

  return (
    <div className="row supported-language-section">
      {arrayToUse.map((lang) => (
        <div className="col col--6" style={{ padding: 0 }}>
          <a
            className="card"
            style={{ margin: 8 }}
            key={lang}
            href={languageToUrlMapping[lang]}
            aria-label={`${lang} SDK`}
          >
            <div className="card__body">
              <img
                alt={lang}
                className={`supported-language-section__icon supported-language-section__icon__${lang}`}
                src={languageToImageMapping[lang]}
              />
              <h3>{lang}</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
