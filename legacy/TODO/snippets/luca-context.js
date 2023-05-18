import React from "react";

const english = { eat: "eat" };
const italiano = { eat: "mangiare" };
const dialetto = { eat: "magnare" };

const TraduzioniContext = React.createContext(english);

function Traduci() {
  const traduci = React.useContext(TraduzioniContext);
  return <p>{traduci.eat}</p>;
}

export function LucaComponentContext() {
  const [language, setLanguage] = React.useState(english);

  function manageLanguage(val) {
    switch (val) {
      case "english": {
        return setLanguage(english);
      }
      case "italiano": {
        return setLanguage(italiano);
      }
      case "dialetto": {
        return setLanguage(dialetto);
      }
      default: {
        return setLanguage(dialetto);
      }
    }
  }

  return (
    <React.Fragment>
      <label>Seleziona traduzione</label>
      <select
        value="english"
        onChange={(event) => manageLanguage(event.currentTarget.value)}
      >
        <option value="english">Inglese</option>
        <option value="italiano">Italiano</option>
        <option value="dialetto">Dialetto</option>
      </select>
      <TraduzioniContext.Provider value={language}>
        <Traduci />
      </TraduzioniContext.Provider>
    </React.Fragment>
  );
}
