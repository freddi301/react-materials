import React from "react";

const languages = {
  italiano: {
    hello: "Hello",
    world: "World",
    foo: "Foo",
    bar: "Bar"
  },
  inglese: {
    hello: "Ciao",
    world: "Mondo",
    foo: "Pippo",
    bar: "Pluto"
  }
};

const ParoleContext = React.createContext(languages.inglese);

export function AlbertoContext() {
  const [lingua, setLingua] = React.useState("italiano");

  return (
    <div>
      <ParoleContext.Provider value={languages[lingua]}>
        <Dizionario />
      </ParoleContext.Provider>
      {Object.keys((lingua) => {
        return (
          <button key={lingua} onClick={() => setLingua(lingua)}>
            {lingua}
          </button>
        );
      })}
    </div>
  );
}

function Dizionario() {
  const parole = React.useContext(ParoleContext);
  return (
    <ul>
      {Object.values(parole).map((p) => (
        <li>{p}</li>
      ))}
    </ul>
  );
}
