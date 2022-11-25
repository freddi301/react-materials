import React from "react";

export function Intro() {
  const common = { step: 5 };
  return (
    <div>
      <div>
        <h1>Botta e risposta</h1>
        <div>
          <p>Cos'è React?</p>
          <p>
            React è un framework javascript front end con sintassi JSX per
            creare interfacce
          </p>
          <p>Un framework javascript per fare applicazioni frontend</p>
          <p>
            React è una libreria JavaScript frontend per creare viste in modo
            dichiarativo
          </p>
        </div>
        <div>
          <p>
            Quale meccanismo react ci permette di rendre una pagina interattiva?
          </p>
          <p>
            useState, perché ritorna una funzione che si può utilizzare (ad
            esempio) nell'onclick
          </p>
          <p>componente tramite l'utilizzo di hooks?</p>
          <p>
            Per rendere una pagina interattiva si usa un meccanismo chiamato
            react hook, in particolare React.useState() che crea un area di
            memoria che si puo aggiornare con il setter relativo, che fa
            rieseguire il codice del componente
          </p>
        </div>
        <div>
          <p>Qual'è l'unita di riutilizzo in ambito React?</p>
          <p>Componente</p>
          <p>componente</p>
          <p>
            Il componente, una funzione che ritorna markup JSX che può essere
            richiamata più volte
          </p>
        </div>
      </div>
      <Counter1 {...common} />
      <Counter2 {...common} />
    </div>
  );
}

function Counter1({ step = 10 }) {
  const [count, setCount] = React.useState(0);
  const double = count * 2;
  return (
    <div>
      <button onClick={() => setCount(count + step)}>{count}</button>
      {double}
    </div>
  );
}

function Counter2(props) {
  const [count, setCount] = React.useState(0);
  const double = count * 2;
  return (
    <div>
      <button onClick={() => setCount(count + props.step)}>{count}</button>
      {double}
    </div>
  );
}
