import React from "react";
import "./styles.css";

export default function App() {
  // cella di memoria che risponde alla domanda: quale riga è selezionata?
  const [rigaSelezionata, setRigaSelezionata] = React.useState(null);
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
        {multe.map(multa => {
          // variabile che risponde alla domanda: la riga è selezionata?
          const isSelected = rigaSelezionata === multa.id;
          return (
            <tr
              key={multa.id}
              style={isSelected ? { backgroundColor: "aqua" } : {}}
              onClick={() => {
                // setRigaSelezionata(isSelected ? null : multa.id);
                if (!isSelected) {
                  setRigaSelezionata(multa.id);
                } else {
                  setRigaSelezionata(null);
                }
              }}
            >
              <td>{multa.id}</td>
              <td>{multa.targa}</td>
              <td>{multa.costo}</td>
              <td>{multa.punti}</td>
            </tr>
          );
        })}
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
