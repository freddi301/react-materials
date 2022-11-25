import React from "react";
import { AnagraficaPersonaProps } from "./rendering-condizionale-showcase";

export function AnagraficaPersonaAnna({ persona }: AnagraficaPersonaProps) {
  if (!persona) return null;
  const { nome, cognome, responsabile, reparto } = persona;
  return (
    <div>
      {nome && <span>nome: {nome}</span>}
      {cognome && <span>cognome: {cognome}</span>}
      {responsabile ? "responsabile" : "dipendente"}
      {(() => {
        switch (reparto) {
          case "hr":
            return <span>HR</span>;
          case "vendite":
            return <span>Vendita</span>;
          case "contabilita":
            return <span>Contabilità</span>;
          default:
            return null;
        }
      })()}
    </div>
  );
}
