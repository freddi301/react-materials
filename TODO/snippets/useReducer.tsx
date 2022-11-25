import React from "react";

// React.useReducer
// è una hook di react fondamentale della gestione dellos stato
// e talmente fondamentale che React.useState è implementata attraverso React.useReducer

// useReducer ci permette di incapsulare la logica di modifica dello stato
// 2 parametri
// primo è la funzione reducer (ananalogi di array.reducer)
// secondo stato iniziale
// useReducer ha anche altre firme, meno comunemente utilizzate
export function ContatoreReducer() {
  const [contaState, contaDispatch] = React.useReducer(
    (
      state: number,
      action:
        | { type: "inc" }
        | { type: "dec" }
        | { type: "set"; payload: number }
    ) => {
      switch (action.type) {
        case "inc":
          return state + 1;
        case "dec":
          return state - 1;
        case "set":
          return action.payload;
        // è buona pratica lanciare un errore su un azione non gestita
        // (occhio però questo errore è utile in sviluppo
        // perchè vediamo lo stack trace,
        // non dovrebbe mai accedere in production)
        default:
          throw new Error();
      }
    },
    0
  );
  return (
    <div>
      <input
        type="number"
        value={contaState}
        onChange={(event) =>
          contaDispatch({
            type: "set",
            payload: event.currentTarget.valueAsNumber
          })
        }
      />
      <button onClick={() => contaDispatch({ type: "inc" })}>inc</button>
      <button onClick={() => contaDispatch({ type: "dec" })}>dec</button>
    </div>
  );
}

// solitamente suddividiamo le operazioni in funzioni diverse
/*
function inc(){}
function dec(){}
function set(){}
*/

// per motivi di performance con useReducer dobbiamo accorparle
// quindi divneta una serializzazione della chiamata a funzione fatta a mano

/*
disptach({type: "inc"}) // invece di inc()
dispatch({type: "dec"}) // invece di dec()
dispatch({type: "set", payload: 45}) // invece di set(45)

switch(action.type){
  case "inc"
  case "dec"
  case "set"
}
// invece di function inc(){} function dec(){} function set(){}
*/

// CURIOSITA
// in realta React.useState è implementato cosi
// (qui per dimostrazione è stato semplificato)
function useState<T>(initialState: T) {
  const [state, dispatch] = React.useReducer(
    (state: T, action: T) => action,
    initialState
  );
  return [state, (value: T) => dispatch(value)];
}
