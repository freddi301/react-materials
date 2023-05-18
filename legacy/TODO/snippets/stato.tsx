import React from "react";

// per gestire lo stato si possono usare diversi metodi

// React.useState()
// si può utilizzare solo all interno di un componente
// rappresenta una cella di meoria
// come unico parmatero vuole lo stato inizialeò
// ritorna un array con due elementi
// il primo è il valore attuale della cella di memoria
// il secondo e una funzione per modificarlo
// ogni volta che modifichiamo lo stato
// il componente viene rirenderizzato
// (rirenderivvato vuol dire, che la funzione viene rieseguita, e viene prodotto una nuova copia del dom reale, successivamente react applica il nuovo virtual dom alla pagina)
export function ContatoreSemplice() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export function InputSemplice() {
  const [text, setText] = React.useState("");
  return (
    <>
      <input
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      {text.split("").reverse().join("")}
    </>
  );
}

// in react il jsx si suddivide in componentei
// quindi funzioni con nome Lettera maiuscola

// in react le interazioni si suddividono in **hoook**

// cosa sono react hooks?
// sono delle funzioni speciali
// possono essere richiamate solo all'interno dei componenti
// hanno il prefisso useQualcosa
// devono PER FORZA essere richiamate sempre nello stesso ordine e nello stesso numero
// es: se in un comopnente ci sono due React.useState
//   ogni volta che la funzione del componente viene eseguita
//   React.useState deve essere chiamato 2 volte
// significa che non possono stare dentro a if, for, map, while, switc ...

// React.useQualcosa sono hook offerte da react

// possiamo creare delle react hook personalizzate
// che sono semplicemente funzioni che utilizzaano al proprio interno
// React.useQualcosa
// gli si applicano le stesse regole di sopra

function EsempioHookScorretto() {
  const [a, setA] = React.useState(true);
  if (a) {
    const [b, setB] = React.useState(false);
  }
}

// IMMUTABIULITA STATO

// esempio di cosa non deve accadere
export function MutandoLoStatoRompiamoTutto() {
  const [persona, setPersona] = React.useState({
    nome: "mario",
    cognome: "rossi"
  });
  let [conta, setConta] = React.useState(0);
  return (
    <div>
      nome: {persona.nome}
      <br />
      cognome: {persona.cognome}
      <br />
      <button
        onClick={() => {
          // mutare lo stato invece di creare una nuova copia
          // e impostarla usando il setter di React.useState
          // si ottengono problemi di sincronizzazione
          // questa cosa e un BUG
          persona.nome += "x"; // ORRRORE

          // cosi sto modificando la variabile conta di questo scope
          // ma react, rieseguendo da capo la funzione del componente
          // ogni esecuzione di una funzione, ha il proprio scope
          // quindi fondamentalmente questa assegnazione vale solo per l'esecuzione attuale
          // del componente, e non di quella prossima
          conta += 1; // ORRORE
        }}
      >
        cambia
      </button>
      <button onClick={() => setConta(conta + 1)}>{conta}</button>
    </div>
  );
}
