// https://codesandbox.io/s/jolly-satoshi-729m9

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// creare un input testuale
// creare un bottone, che se cliccato
// lancia un alert che ha come testo il
// contenuto dell'input

function App() {
  const [text, setText] = React.useState("");
  function lanciaAlert() {
    alert(text);
  }
  function qualcosa(event) {
    const text = event.target.value;
    setText(text);
  }
  return (
    <div>
      <input onChange={qualcosa} />
      <button onClick={lanciaAlert}>lancia alert</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
