// https://codesandbox.io/s/condescending-resonance-blv6i

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>targa</th>
          <th>costo</th>
          <th>punti</th>
        </tr>
      </thead>
      <tbody>
        {multe.map(multa => (
          <tr key={multa.id}>
            <td>{multa.id}</td>
            <td>{multa.targa}</td>
            <td>{multa.costo}</td>
            <td>{multa.punti}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const multe = [
  { id: "ahdg", targa: "RM462TU", costo: 45, punti: 1 },
  { id: "jjsr", targa: "LU463II", costo: 22, punti: 2 },
  { id: "llqw", targa: "NA529TT", costo: 90, punti: 0 },
  { id: "yyqr", targa: "MI333MB", costo: 250, punti: 4 }
];

console.table(multe);
