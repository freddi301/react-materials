import React from "react";

// use react context to implement internationalization (i18n)
// define transtaltions for two language
// use labels from the translations istead of writing them directly in jsx
// let the use choose the language

type Language = "english" | "italian";
type Translation = {
  welcome: string;
  description: string;
};

const languages: Record<Language, Translation> = {
  english: {
    welcome: "Welcome",
    description: "This site supports multiple languages",
  },
  italian: {
    welcome: "Benvenuto",
    description: "Questo sito supporta diverse lingue",
  },
};

const TranslationContext = React.createContext(languages.english);

export function AlbertoContext() {
  const [language, setLanguage] = React.useState<Language>("italian");

  return (
    <TranslationContext.Provider value={languages[language]}>
      {(Object.keys(languages) as Array<Language>).map((language) => {
        return (
          <button key={language} onClick={() => setLanguage(language)}>
            {language}
          </button>
        );
      })}
      <MainPage />
    </TranslationContext.Provider>
  );
}

function MainPage() {
  const labels = React.useContext(TranslationContext);
  return (
    <div>
      <h1>{labels.welcome}</h1>
      <p>{labels.description}</p>
    </div>
  );
}
