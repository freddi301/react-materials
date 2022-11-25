import React from "react";

// l'if else sul primo livello del componente
// è utile sopratutto per il early-return in caso di paramteri nulli
type ComponenteAProps = { persona: { nome: string; cognome: string } | null };
function ComponenteA({ persona }: ComponenteAProps) {
  if (!persona) return null;
  const { nome, cognome } = persona;
  return (
    <div>
      <div>nome: {nome}</div>
      <div>cognome: {cognome}</div>
    </div>
  );
}

// gli operatori logici (di solito &&)
// sono utili per visualizzare i campi opzionali
type ComponenteBProps = {
  persona: { nome?: string; cognome?: string; eta?: number };
};
function ComponenteB({ persona: { nome, cognome, eta } }: ComponenteBProps) {
  return (
    <div>
      {nome && <div>nome: {nome}</div>}
      {cognome && <div>cognome: {cognome}</div>}
      {eta && <div>eta: {eta}</div>}
    </div>
  );
}

// IFEE (immediately invoked function expression)
// ci permette di sfruttare gli statement nel jsx
// utile sopratutto per rendering condizionale di piu di due alternative
type ComponentenCProps = {
  persona: { nome: string; coloreOcchi: "blu" | "verdi" | "castani" };
};
function ComponenteC({ persona: { nome, coloreOcchi } }: ComponentenCProps) {
  return (
    <div>
      <div>{nome}</div>
      <div>
        {(() => {
          switch (coloreOcchi) {
            case "blu":
              return <span>blu</span>;
            case "verdi":
              return <span>verdi</span>;
            case "castani":
              return <span>castani</span>;
          }
        })()}
      </div>
    </div>
  );
}

// l'operatore ternario e utile per graficare i valori booleani
type ComponenteDProps = {
  persona: { nome: string; responsabile: boolean };
};
function ComponenteDP({ persona: { nome, responsabile } }: ComponenteDProps) {
  return (
    <div>
      {nome}
      {responsabile ? <strong>responsabile</strong> : <span>dipendente</span>}
    </div>
  );
}
