import React from "react";
import { AnagraficaPersonaProps } from "./rendering-condizionale/rendering-condizionale-showcase";

export function AnagraficaPersonaAngela({ persona }: AnagraficaPersonaProps) {
  if (!persona) {
    return null;
  }
  const { nome, cognome, responsabile, reparto } = persona;
  return (
    <div>
      {nome && <div>nome:{nome}</div>}
      {cognome && <div>cognome:{cognome}</div>}
      {responsabile ? <div>responsabile</div> : <div>--</div>}
      {() => {
        if (!reparto) return null;
        switch (reparto) {
          case "hr":
            return <div>reparto: {reparto}</div>;
          case "vendite":
            return <div>reparto: {reparto}</div>;
          case "contabilita":
            return <div>reparto: {reparto}</div>;

          case undefined:
            return null;
          default:
            return null;
        }
      }}
    </div>
  );
}
