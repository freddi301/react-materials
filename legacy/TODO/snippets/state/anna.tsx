import React from "react";

export function SommatoreAnna() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  return (
    <>
      A:
      <input
        type="text"
        onChange={(event) => {
          setA(Number(event.currentTarget.value));
        }}
      />
      <br />
      B:
      <input
        type="text"
        onChange={(event) => {
          setB(Number(event.currentTarget.value));
        }}
      />
      <br />
      <span>{a + b}</span>
    </>
  );
}
