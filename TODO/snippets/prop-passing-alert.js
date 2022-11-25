// https://codesandbox.io/s/fast-sea-98odb

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return <Padre />;
}

function Padre() {
  const azione = appellativo => {
    console.log("te l'avevo detto " + appellativo);
  };
  return <Figlio azione={azione} />;
}

function Figlio(props) {
  return (
    <button
      onClick={() => {
        props.azione("figliolo");
      }}
    >
      figlio
    </button>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
