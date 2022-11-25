// https://codesandbox.io/s/wizardly-field-qjiqj?fontsize=14&hidenavigation=1&theme=dark

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      {false && <Padre />}
      {false && <Esempio />}
      {false && <EsempioCustomHook />}
      <Esercizio />
    </div>
  );
}

function Padre() {
  console.log("Padre rerender");
  const [text, setText] = React.useState("");
  const [counter, setCounter] = React.useState(0);
  // const derived = [counter, counter]
  const derived = React.useMemo(() => [counter, counter], [counter]);
  // const funzione = React.useMemo(() => (x) => x*2, []);
  const funzione = React.useCallback(x => x * 2, []);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <input value={text} onChange={event => setText(event.target.value)} />
      <FiglioMemo text={text} />
      <FigliaMemo anything={derived} />
    </div>
  );
}

function Figlio(props) {
  console.log("Figlio rerender");
  React.useEffect(() => {
    console.log("effect");
  }, [props.text]);
  return <h1>{props.text}</h1>;
}
const FiglioMemo = React.memo(Figlio);

function Figlia(props) {
  console.log("Figlia rerender");
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}
const FigliaMemo = React.memo(Figlia);

/*
useEffect

render -> reconciliation -> commit -> (effect)

*/

/*
useLayoutEffect

render -> reconciliation -> commit(layoutEffect)

*/

function Esempio() {
  const [currentCounter, setCurrentCounter] = React.useState(0);
  const [previousCounter, setPreviousCounter] = React.useState(0);
  function updateCounter(newCount) {
    setPreviousCounter(currentCounter);
    setCurrentCounter(newCount);
  }
  const [currentText, setCurrentText] = React.useState("");
  const [previousText, setPreviousText] = React.useState("");
  function updateText(newText) {
    setPreviousText(currentText);
    setCurrentText(newText);
  }
  return (
    <div>
      counter{" "}
      <button onClick={() => updateCounter(currentCounter + 1)}>
        {previousCounter} -> {currentCounter}
      </button>
      <hr />({previousText})
      <input
        value={currentText}
        onChange={event => updateText(event.target.value)}
      />
    </div>
  );
}

function EsempioCustomHook() {
  const [previousCounter, currentCounter, updateCounter] = usePreviousState(0);
  const [previousText, currentText, updateText] = usePreviousState("");
  return (
    <div>
      counter{" "}
      <button onClick={() => updateCounter(currentCounter + 1)}>
        {previousCounter} -> {currentCounter}
      </button>
      <hr />({previousText})
      <input
        value={currentText}
        onChange={event => updateText(event.target.value)}
      />
    </div>
  );
}

function usePreviousState(initialState) {
  const [currentState, setCurrentState] = React.useState(initialState);
  const [previousState, setPreviousState] = React.useState(initialState);
  function updateState(newState) {
    setPreviousState(currentState);
    setCurrentState(newState);
  }
  return [previousState, currentState, updateState];
}

/*
Esercizio

implementare una custom hook, che aggiorna il titolo della tab

*/

function Esercizio() {
  const [text, setText] = React.useState(document.title);
  // fare document.title = text
  // quando cambia text, aggiornare il titolo della tab
  // estrarre questa funzionalita in una hook
  // React.useEffect(() => {
  //   document.title = text
  // }, [text]);
  useTabName(text);
  return (
    <div>
      <h1>Tab title changer</h1>
      <input value={text} onChange={event => setText(event.target.value)} />
    </div>
  );
}

/*
Passi per creare una custom hook
1. copiare il codice contenente gli usi di hooks
2. si crea una funzione con nome adatto, con prefisso use.....
3. incolla il codice nel corpo della funzione definita
4. ritornare nella funzione i valori che la custom hook deve fornire
5. dichiarare come parametri della funzione tutte le variabili mancanti
6. rinominare variabili da nomi specifici a nomi generici
*/

function useTabName(tabName) {
  React.useEffect(() => {
    document.title = tabName;
  }, [tabName]);
}
