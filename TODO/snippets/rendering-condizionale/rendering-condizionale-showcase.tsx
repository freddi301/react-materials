import { AnagraficaPersonaAnna } from "./anna";
import { AnagraficaPersonaCarmine } from "./carmine";
import { AnagraficaPersonaAngela } from "./anagraficaPersonaAngela";

// consegna
// realizzare dei componenti che ricevono le saegenti props
export type AnagraficaPersonaProps = {
  persona?: {
    nome?: string;
    cognome?: string;
    responsabile: boolean;
    reparto?: "hr" | "vendite" | "contabilita";
  };
};

// che poi verranno richiamati qui
export function RenderingCondizionaleShowcase() {
  return (
    <>
      <h1>Anna</h1>
      <AnagraficaPersonaAnna />
      <h1>Carmine</h1>
      <AnagraficaPersonaCarmine
        persona={{ cognome: "rossi", responsabile: true, reparto: "hr" }}
      />
      <h1>Angela</h1>
      <AnagraficaPersonaAngela
        persona={{ nome: "angela", cognome: "costantino" }}
      />
    </>
  );
}
