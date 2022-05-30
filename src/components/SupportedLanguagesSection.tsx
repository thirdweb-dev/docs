import React from "react";

const languageToImageMapping = {
  JavaScript: `/assets/languages/javascript.png`,
  React: `/assets/languages/react.png`,
  Python: `/assets/languages/python.png`,
  Go: `/assets/languages/go.png`,
  Solidity: `/assets/languages/solidity.png`,
};

const languageToUrlMapping = {
  JavaScript: `/typescript`,
  React: `/react`,
  Python: `/python`,
  Go: `/go`,
  Solidity: "/contracts",
};

export default function SupportedLanguagesSection() {
  return (
    <div className="row supported-language-section">
      {["JavaScript", "React", "Python", "Go", "Solidity"].map((lang) => (
        <a
          className="col col--12 card"
          key={lang}
          href={languageToUrlMapping[lang]}
          target="_blank"
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
      ))}
    </div>
  );
}
