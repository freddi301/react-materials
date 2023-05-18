import React from "react";

function RefExample() {
  const divRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={divRef}
      onClick={() => {
        console.log(divRef.current);
      }}
    >
      Ref example
    </div>
  );
}

function RefFunctionExample() {
  const divRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={(element) => {
        if (element) {
          divRef.current = element;
          // e in questo momento che il div del dom reale corrispondente
          // a questo di viene aggiunto al dom reale
        } else {
          divRef.current = null;
        }
      }}
      onClick={() => {
        console.log(divRef.current);
      }}
    >
      Ref function example
    </div>
  );
}

function RefVariableExample() {
  const simpleRef = React.useRef(0); // non fa partire rerender
  const [simpleState, setSimpleState] = React.useState(0); // fa partire rerender
  return (
    <div>
      <button
        onClick={() => {
          simpleRef.current = simpleRef.current + 1;
        }}
      >
        ref {simpleRef.current}
      </button>
      <button
        onClick={() => {
          setSimpleState(simpleState + 1);
        }}
      >
        state {simpleState}
      </button>
    </div>
  );
}

// integrare un date picker jquery
// https://jqueryui.com/datepicker/

/*
  $(<qui elemento del dom reale dove mettere il date picker>).datepicker();
*/

declare global {
  interface Window {
    "$": any
  }
}

function Soluzione() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    window.$(ref.current).datepicker();
  }, []);

  return <div ref={ref} />;
}
