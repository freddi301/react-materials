// Workflow creazione app React

// stesura del markup (statico) con valori finti

function Calcolatrice() {
  return (
    <div>
      <input value="12" type="text"></input>
      <select value="add">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input value="40" type="text"></input>
      <span> = 52</span>
    </div>
  );
}

// sostituzione dei valori finti con variabili
// dichiarate nello scope del componente

function Calcolatrice() {
  const operando1 = "12";
  const operando2 = "40";
  const operazione = "add";
  const risultato = "52";
  return (
    <div>
      <input value={operando1} type="number"></input>
      <select value={operazione}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input value={operando2} type="number"></input>
      <span> = {risultato}</span>
    </div>
  );
}

// individuazione stato fondamentale e derivato

function Calcolatrice() {
  const operando1 = "12"; // fondamentale
  const operando2 = "40"; // fondamentale
  const operazione = "add"; // fondamentale
  const risultato = "52"; // derivato
  return (
    <div>
      <input value={operando1} type="number"></input>
      <select value={operazione}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input value={operando2} type="number"></input>
      <span> = {risultato}</span>
    </div>
  );
}

// codifica degli stati fondamentali e derivati
// fondamentale -> React.useState
// derivate -> const qualcosa = calcolo()

function Calcolatrice() {
  const [operando1, setOperando1] = React.useState(12);
  const [operando2, setOperando2] = React.useState(40);
  const [operazione, setOperazione] = React.useState("add");
  const risultato = (() => {
    switch (operazione) {
      case "add": {
        return operando1 + operando2;
      }
      case "subtract": {
        return operando1 - operando2;
      }
      case "multiply": {
        return operando1 * operando2;
      }
      case "divide": {
        return operando1 / operando2;
      }
      default: {
        throw new Error();
      }
    }
  })();
  return (
    <div>
      <input value={operando1} type="number"></input>
      <select value={operazione}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input value={operando2} type="number"></input>
      <span> = {risultato}</span>
    </div>
  );
}

// binding sugli elementi di tipo input
// es:
//  const [text, setText] = React.useState("")
//  <input value={text} onChange={event => setText(event.currentTarget.value)}/>

function Calcolatrice() {
  const [operando1, setOperando1] = React.useState(12);
  const [operando2, setOperando2] = React.useState(40);
  const [operazione, setOperazione] = React.useState("add");
  const risultato = (() => {
    switch (operazione) {
      case "add": {
        return operando1 + operando2;
      }
      case "subtract": {
        return operando1 - operando2;
      }
      case "multiply": {
        return operando1 * operando2;
      }
      case "divide": {
        return operando1 / operando2;
      }
      default: {
        throw new Error();
      }
    }
  })();
  return (
    <div>
      <input
        value={operando1}
        type="number"
        onChange={(event) => setOperando1(Number(event.currentTarget.value))}
      ></input>
      <select
        value={operazione}
        onChange={(event) => setOperazione(event.currentTarget.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input
        value={operando2}
        type="number"
        onChange={(event) => setOperando2(Number(event.currentTarget.value))}
      ></input>
      <span> = {risultato}</span>
    </div>
  );
}

// spostare stato fondamentale, stato derivato e azioni
// in un custom hook
// di modo da separare le responsabilità
// componente -> visualizzazione
// hook -> logica
// - creare una funzione con prefisso use
// - taglia-incollare il codice dal componente nella nuova hook
// - richiamare la hook cosi creata nel punto dal quale e stato rimosso il codice
// - assegnare la chiamata alla hook ad una const con object destructuring
// - nel destructuring estrarre tutti gli attributi necessari (segnalati in rosso dall'ide)
// - ritornare nella hook sotto forma di oggetto tutti gli attributi cosi usati (si puo anche fare iun copia incolla del destructuring precedente)

export function Calcolatrice() {
  const {
    operando1,
    operando2,
    operazione,
    risultato,
    setOperazione,
    setOperando1,
    setOperando2
  } = useCalcolatrice();
  return (
    <div>
      <input
        value={operando1}
        type="number"
        onChange={(event) => setOperando1(Number(event.currentTarget.value))}
      ></input>
      <select
        value={operazione}
        onChange={(event) => setOperazione(event.currentTarget.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input
        value={operando2}
        type="number"
        onChange={(event) => setOperando2(Number(event.currentTarget.value))}
      ></input>
      <span> = {risultato}</span>
    </div>
  );
}

function useCalcolatrice() {
  const [operando1, setOperando1] = React.useState(12);
  const [operando2, setOperando2] = React.useState(40);
  const [operazione, setOperazione] = React.useState("add");
  const risultato = (() => {
    switch (operazione) {
      case "add": {
        return operando1 + operando2;
      }
      case "subtract": {
        return operando1 - operando2;
      }
      case "multiply": {
        return operando1 * operando2;
      }
      case "divide": {
        return operando1 / operando2;
      }
      default: {
        throw new Error();
      }
    }
  })();
  return {
    operando1,
    operando2,
    operazione,
    risultato,
    setOperazione,
    setOperando1,
    setOperando2
  };
}

// quasi sempre conviene raggruppare gli React.useState
// in un unico React.useState
// - creare uno React.useState all'inizio del componente/hook con nome "state"
// - impostando il valore iniziale, trasponendo quello degli altri Reac.useState()
// - commentare gli React.useState che si vogliono raggruppare
// - estrarre tramite object destructuring gli attributi dallo state
// - ricreare i setter mancanti
// - eliminare codice precedentemento commentato

function Calcolatrice() {
  const {
    operando1,
    operando2,
    operazione,
    risultato,
    setOperazione,
    setOperando1,
    setOperando2
  } = useCalcolatrice();
  return (
    <div>
      <input
        value={operando1}
        type="number"
        onChange={(event) => setOperando1(Number(event.currentTarget.value))}
      ></input>
      <select
        value={operazione}
        onChange={(event) => setOperazione(event.currentTarget.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <input
        value={operando2}
        type="number"
        onChange={(event) => setOperando2(Number(event.currentTarget.value))}
      ></input>
      <span> = {risultato}</span>
    </div>
  );
}

function useCalcolatrice() {
  const [state, setState] = React.useState({
    operando1: 12,
    operando2: 40,
    operazione: "add"
  });
  const { operando1, operando2, operazione } = state;
  const setOperando1 = (operando1) => {
    setState({ ...state, operando1 });
  };
  const setOperando2 = (operando2) => {
    setState({ ...state, operando2 });
  };
  const setOperazione = (operazione) => {
    setState({ ...state, operazione });
  };
  const risultato = (() => {
    switch (operazione) {
      case "add": {
        return operando1 + operando2;
      }
      case "subtract": {
        return operando1 - operando2;
      }
      case "multiply": {
        return operando1 * operando2;
      }
      case "divide": {
        return operando1 / operando2;
      }
      default: {
        throw new Error();
      }
    }
  })();
  return {
    operando1,
    operando2,
    operazione,
    risultato,
    setOperazione,
    setOperando1,
    setOperando2
  };
}

//-------------------------------------------------------------
//-------------------------------------------------------------

// Quando suddividere in componenti?

// - quando si trova del markup identico in più punti (completamente identico!!!)
// - quando si renderizza una lista ad esempio con il array.map()

// Cosa passare alle componenti filgi?

// - solo le informazioni strettamente necessarie, e anche preelaborate
// - ES: <Item item={item}/> invece di <Item list={list} index={2}/>
