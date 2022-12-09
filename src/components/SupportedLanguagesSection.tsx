import React from "react";

const languageToImageMapping = {
  JavaScript: `/assets/languages/javascript.png`,
  React: `/assets/languages/react.png`,
  Python: `/assets/languages/python.png`,
  Go: `/assets/languages/go.png`,
  Unity: `/assets/languages/unity.webp`,
};

const languageToUrlMapping = {
  JavaScript: `/typescript`,
  React: `/react`,
  Python: `/python`,
  Go: `/go`,
  Unity: `/unity`,
};

export default function SupportedLanguagesSection(languages?: string[]) {
  const arrayToUse =
    languages.length > 0 ? languages : ["JavaScript", "Python", "Go", "Unity"];

  return (
    <div className="row supported-language-section">
      {arrayToUse.map((lang) => (
        <a
          className="col col--3 card"
          key={lang}
          href={languageToUrlMapping[lang]}
          aria-label={`${lang} SDK`}
          style={{ flex: 1 }}
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
      ))}
    </div>
  );
}
