// https://codesandbox.io/s/serverless-water-8rfk9

import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  //const [counter, setCounter] = useLoggedState1(0);
  const [counter2, setCounter2] = useLoggedState2(0);
  const [
    malinconicCounterPrevious,
    malinconicCounterCurrent,
    setMalinconicCounter
  ] = usePreviousState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/*after: <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
      <hr />
      before:{" "}
      <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
      <hr />
      <button
        onClick={() => setMalinconicCounter(malinconicCounterCurrent + 1)}
      >
        {malinconicCounterPrevious} -> {malinconicCounterCurrent}
      </button>
      <hr />
      <ValidatedStateExample />
      <hr />
      <TransformedStateExample />
      <hr />
      <HistoryStateExample />
    </div>
  );
}

function useLoggedState1(defaultValue) {
  const [state, setState] = React.useState(defaultValue);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return [state, setState];
}

function useLoggedState2(defaultValue) {
  const [state, setState] = React.useState(defaultValue);
  // decorator
  function loggingSetState(newState) {
    console.log(newState);
    setState(newState);
  }
  return [state, loggingSetState];
}

function usePreviousState(defaultState) {
  const [previousState, setPreviousState] = React.useState(defaultState);
  const [currentState, setCurrentState] = React.useState(defaultState);
  function setState(newState) {
    setCurrentState(newState);
    setPreviousState(currentState);
  }
  return [previousState, currentState, setState];
}

function ValidatedStateExample() {
  // set state should work only if
  // secondParameter(newState) === true
  const [state, setState] = useValidatedState("", hasNoGs);
  return (
    <input value={state} onChange={event => setState(event.target.value)} />
  );
}

function hasNoGs(text) {
  return !text.includes("g");
}

function useValidatedState(defaultState, validation) {
  const [state, setState] = React.useState(defaultState);
  function setValidState(newState) {
    // lo stato deve cambiare solo se
    // validation(newState) === true
    if (validation(newState)) {
      setState(newState);
    }
  }
  return [state, setValidState];
}

function TransformedStateExample() {
  const [text, setText] = useTransformedState("", toUpperCase);
  return <input value={text} onChange={event => setText(event.target.value)} />;
}

function toUpperCase(text) {
  return text.toUpperCase();
}

function useTransformedState(defaultState, transform) {
  // transform is a function
  // when updating state, transform the new state with transform function first, the update it
  // returns transformedState, updateStateFunction
  const [state, setState] = React.useState(defaultState);
  function setTransfromedState(newState) {
    setState(transform(newState));
  }
  return [state, setTransfromedState];
}

function HistoryStateExample() {
  const [[currentText, ...textHistory], setText] = useHistoryState("");
  return (
    <div>
      <input
        value={currentText}
        onChange={event => setText(event.target.value)}
      />
      <div>
        {textHistory.map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </div>
    </div>
  );
}

function useHistoryState(defaultState) {
  // stateHistory deve essere l'array che contiene lo storico di tutti gli state passati
  // ordinati dal più recente al più vecchio
  const [stateHistory, setStateHistory] = React.useState([defaultState]);
  function update(newState) {
    setStateHistory([newState, ...stateHistory]);
    // setStateHistory([newState].concat(stateHistory));
  }
  return [stateHistory, update];
}
