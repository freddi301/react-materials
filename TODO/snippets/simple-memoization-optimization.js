// https://codesandbox.io/s/mystifying-galois-z47jn

import React from "react";
import "./styles.css";

export default function App() {
  const [selectedId, setSelectedId] = React.useState(null);
  return DATA.map(ticket => (
    <TicketCardMemo
      key={ticket.id}
      ticket={ticket}
      isSelected={selectedId === ticket.id}
      onSelect={setSelectedId}
    />
  ));
}

function TicketCard({ ticket, isSelected, onSelect }) {
  wait(100);
  return (
    <div
      onClick={() => onSelect(ticket.id)}
      style={isSelected ? { backgroundColor: "aqua" } : {}}
    >
      {ticket.id}: {ticket.reason}
    </div>
  );
}
const TicketCardMemo = React.memo(TicketCard);

function wait(ms) {
  const was = performance.now();
  while (true) if (performance.now() - was > ms) break;
}

const DATA = [
  { id: "ggjr", reason: "divieto di sosta", costo: 35 },
  { id: "tgjr", reason: "transito con semaforo rosso", costo: 200 },
  { id: "uyjr", reason: "stop non rispettato", costo: 150 },
  { id: "uyqr", reason: "stop non rispettato", costo: 150 }
];
