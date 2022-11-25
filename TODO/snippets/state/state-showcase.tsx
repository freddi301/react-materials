import React from "react";
import { SommatoreAnna } from "./anna";
import { SommatoreAngela } from "./angela";
import { SommatoreCarmine } from "./carmine";

export function StateShowcase() {
  return (
    <>
      <h1>Sommatore</h1>
      <p>
        Componente che ha due stati (React.useState) con valore iniziale 0 due{" "}
        {"<input/>"}e uno {"<span>"} con la somma
      </p>
      <h2>Anna</h2>
      <SommatoreAnna />
      <h2>Angela</h2>
      <SommatoreAngela />
      <h2>Carmine</h2>
      <SommatoreCarmine />
      <hr />
    </>
  );
}
