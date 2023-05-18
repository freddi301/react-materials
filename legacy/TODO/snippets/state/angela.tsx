import React from "react";

export function SommatoreAngela() {
  const [a, setNumberA] = React.useState(0);
  const [b, setNumberB] = React.useState(0);
  return (
    <>
      <input
        type="number"
        onChange={(event) => setNumberA(event.currentTarget.valueAsNumber)}
      />
      <input
        type="number"
        onChange={(event) => setNumberB(event.currentTarget.valueAsNumber)}
      />
      <div>Somma: {a + b}</div>
    </>
  );
}
