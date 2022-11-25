import { useState } from "react";

// function sommaCarmine() {
//   const [a, setA] = useState(0);
//   const [b, setB] = useState(0);

//   return (
//     <div>
//       <input name="a" type="text" onChange={setA(event.c)} />
//       <input name="b" type="text" onChange={setb(event.c)} />

//       <span></span>
//     </div>
//   );
// }

export function SommatoreCarmine() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      ciao
      <input
        name="a"
        type="text"
        onChange={(event) => setA(Number(event.currentTarget.value))}
        // onChange={(function() {}())
        // // o
        // (() => {})()}
        // FunctionExpression
      />
      a
      <input
        name="b"
        type="text"
        onChange={(event) => setB(Number(event.currentTarget.value))}
      />
      <span>{a + b}</span>
    </div>
  );
}
