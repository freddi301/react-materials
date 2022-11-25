import React from "react";

const inglese = { hello: "Hello" };

const italiano = { hello: "Ciao" };

const TraduzioniContext = React.createContext(inglese);

export function ComponenteContext() {
  return (
    <React.Fragment>
      <TraduzioniContext.Provider value={italiano}>
        <SottoComponente />
      </TraduzioniContext.Provider>
      <TraduzioniContext.Consumer>
        {(traduzioni) => <AltroComponente traduzioni={traduzioni} />}
      </TraduzioniContext.Consumer>
    </React.Fragment>
  );
}

function SottoComponente() {
  const traduzioni = React.useContext(TraduzioniContext);
  return <p>{traduzioni.hello}</p>;
}

function AltroComponente({ traduzioni }) {
  return <p>{traduzioni.hello}</p>;
}
