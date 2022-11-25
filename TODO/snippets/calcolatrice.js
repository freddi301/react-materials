import React from "react";

export function Calcolatrice() {
  const {
    operando1,
    operando2,
    operazione,
    risultato,
    setOperazione,
    setOperando1,
    setOperando2
  } = useCalcolatrice();
  return (
    <div>
      <input
        value={operando1}
        type="number"
        onChange={(event) => setOperando1(Number(event.currentTarget.value))}
      ></input>
      <select
        value={operazione}
        onChange={(event) => setOperazione(event.currentTarget.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input
        value={operando2}
        type="number"
        onChange={(event) => setOperando2(Number(event.currentTarget.value))}
      ></input>
      <span> = {risultato}</span>
    </div>
  );
}

function useCalcolatrice() {
  const [state, setState] = React.useState({
    operando1: 12,
    operando2: 40,
    operazione: "add"
  });
  const { operando1, operando2, operazione } = state;
  const setOperando1 = (operando1) => {
    setState({ ...state, operando1 });
  };
  const setOperando2 = (operando2) => {
    setState({ ...state, operando2 });
  };
  const setOperazione = (operazione) => {
    setState({ ...state, operazione });
  };
  const risultato = (() => {
    switch (operazione) {
      case "add": {
        return operando1 + operando2;
      }
      case "subtract": {
        return operando1 - operando2;
      }
      case "multiply": {
        return operando1 * operando2;
      }
      case "divide": {
        return operando1 / operando2;
      }
      default: {
        throw new Error();
      }
    }
  })();
  return {
    operando1,
    operando2,
    operazione,
    risultato,
    setOperazione,
    setOperando1,
    setOperando2
  };
}
