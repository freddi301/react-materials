// questo file si chiama index
// quindi se da un altra parta importiamo la cartella che lo contiene
// in realtà viene importato questo file

// se l'import comincia con una lettera, il compilatore va a cerca il modulo in node_modules
// se è nella forma import Nome from "pacchetto"
// nella variabile Nome viene assegnato quello che nel pacchetto e indicato con default export
// questo si chiama default import
import React from "react";

// se l'import comincia con un percorso relativo, il compilatore cerca il file relativemte a quello dove l'import risiede
// nella forma import "pacchetto" viene sono eseguito il file
// questo si chiama import
import "./anna";

// in questa forma il file importato viene eseguito
// e la variabile in questo file viene assegnata a quella dell'export dell'altro file
// questo si chiama named imnport
import { TabellaArrayMultidimensionaleAnna } from "./anna";
import { TabellaMultidimensionaleCarmine } from "./carmine";
import { TabellaArrayMultidimensionaleAngela } from "./provaangela";

//

// TabellaMultidimensionale
// dato input
/*
[
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
]
*/
// deve renderizzare
/*
+---+---+---+
| a | b | c |
+---+---+---+
| d | e | f |
+---+---+---+
| g | h | i |
+---+---+---+
*/

// questo è un named export
export function ShowcaseTabellaArrayMultidimensional() {
  const data = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  // React.Fragment è un componente React speciale
  // che serve solo per poter rotornare più di un elemento jsx da un componente
  // senza andare a creare div indesiderati
  // come si puo usare come shortcut per il fragment il tag senza nome
  // es: <><button/><button/></>
  // tanto alla fine viene trasformato in <React.Fragment><button/><button/></React.Fragment>
  return (
    <React.Fragment>
      <h1>Anna</h1>
      <TabellaArrayMultidimensionaleAnna multiArray={data} />
      <h1>Carmine</h1>
      <TabellaMultidimensionaleCarmine
        lista={data}
        intestazione="tabella Carmine"
      />
      <h1>Angela</h1>
      <TabellaArrayMultidimensionaleAngela
        lista={data}
        intestazione="tabella Angela"
      />
    </React.Fragment>
  );
}
