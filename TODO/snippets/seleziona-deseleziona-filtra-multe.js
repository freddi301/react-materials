// https://codesandbox.io/s/autumn-cdn-t767y

import React from "react";
import "./styles.css";

export default function App() {
  const [rigaSelezionata, setRigaSelezionata] = React.useState(null);
  const [soloPagate, setSoloPagate] = React.useState(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={soloPagate}
        onChange={() => setSoloPagate(!soloPagate)}
      />{" "}
      visualizza solo pagate
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>targa</th>
            <th>costo</th>
            <th>punti</th>
            <th>pagata</th>
          </tr>
        </thead>
        <tbody>
          {multe
            .filter(multa => (soloPagate ? multa.pagata : true))
            .map(multa => {
              const isSelected = rigaSelezionata === multa.id;
              return (
                <tr
                  key={multa.id}
                  style={isSelected ? { backgroundColor: "aqua" } : {}}
                  onClick={() =>
                    setRigaSelezionata(isSelected ? null : multa.id)
                  }
                >
                  <td>{multa.id}</td>
                  <td>{multa.targa}</td>
                  <td>{multa.costo}</td>
                  <td>{multa.punti}</td>
                  <td>
                    <input type="checkbox" checked={multa.pagata} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

const multe = [
  { id: "ahdg", targa: "RM462TU", costo: 45, punti: 1, pagata: true },
  { id: "jjsr", targa: "LU463II", costo: 22, punti: 2, pagata: false },
  { id: "llqw", targa: "NA529TT", costo: 90, punti: 0, pagata: true },
  { id: "yyqr", targa: "MI333MB", costo: 250, punti: 4, pagata: false }
];

console.table(multe);
