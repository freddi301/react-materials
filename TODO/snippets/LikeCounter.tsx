import React, { useState } from "react";

/**
 * Contatore di like
 * @example
 *  <LikeCounter/>
 */
export function LikeCounter() {
  const [likes, setLikes] = useState(0);
  // likes è lo stato attuale
  // setLikes è la funzione che useremo per modificare lo stato
  // 0 è lo stato iniziale
  return <button onClick={() => setLikes(likes + 1)}>{likes} 👍</button>;
}

// ESERCITAZIONE
export function Calcolatrice() {
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDue, setNumeroDue] = useState(0);
  const somma = numeroUno + numeroDue;
  return (
    <div>
      <input
        type="number"
        value={numeroUno}
        onChange={event => setNumeroUno(Number(event.target.value))}
      />
      <input
        type="number"
        value={numeroDue}
        onChange={event => setNumeroDue(Number(event.target.value))}
      />
      <output>{somma}</output>
    </div>
  );
}

// ESERCITAZIONE
export function CounterCoppie() {
  const [numeroMaschi, setNumeroMaschi] = useState(0);
  const [numeroFemmine, seNumeroFemmine] = useState(0);
  const coppie = Math.min(numeroMaschi, numeroFemmine);

  return (
    <div>
      <button onClick={() => setNumeroMaschi(numeroMaschi + 1)}>
        {numeroMaschi}👨{" "}
      </button>
      <button onClick={() => seNumeroFemmine(numeroFemmine + 1)}>
        {numeroFemmine}🤦
      </button>
      {coppie}👪
    </div>
  );
}
