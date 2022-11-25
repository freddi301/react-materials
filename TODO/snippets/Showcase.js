import React from "react";
import { Calcolatrice } from "./calcolatrice";
import { Luca, Addizionatore, OrdinaLista } from "./luca";
import {
  Alberto,
  AlbertoLista,
  Sottrattore,
  ListaFilmAlberto
} from "./alberto";
import { LayoutEffect } from "./LayoutEffect";
import { ComponenteContext } from "./context";
import { PortalExample } from "./portal";
import { RefExamples } from "./ref";

export function Showcase() {
  const arrayDiEsempio = [
    { name: "pippo", id: 1 },
    { name: "pluto", id: 2 },
    { name: "paperino", id: 3 }
  ];
  return (
    <React.Fragment>
      <div>
        <h1>Ref examples</h1>
        <RefExamples />
      </div>
      <PortalExample />
      <div>
        <h1>Component Context</h1>
        <ComponenteContext />
      </div>
      <div>
        <h1>Layout Effect</h1>
        <LayoutEffect />
      </div>
      <div>
        <h1>Calcolatrice</h1>
        <Calcolatrice />
      </div>
      <div>
        <h1>Alberto</h1>
        <Alberto />
        <Sottrattore x={10} y={2}>
          <div>Del testo</div>
        </Sottrattore>
        <Sottrattore x={10} y={2} children={<div>Del testo</div>} />
        <AlbertoLista lista={arrayDiEsempio} />
        <ListaFilmAlberto />
      </div>
      <div>
        <h1>Luca</h1>
        <Luca />
        <OrdinaLista arr={arrayDiEsempio} />
        <Addizionatore a={4} b={3}>
          <div>
            <h1>ciao</h1>
          </div>
        </Addizionatore>
        <Addizionatore
          a={4}
          b={3}
          children={
            <div>
              <h1>ciao</h1>
            </div>
          }
        />
      </div>
    </React.Fragment>
  );
}
// esempi differenza useState e useReducer
/*
interface Contatore {
  increment()
  decrement()
  reset()
}

function useContatore(){
  return {
    increment(){},
    decrement(){},
    reset(){}
  }
}

const contatore = useContatore()
contatore.increment()
contatore.decrement()
contatore.reset()


function useContatore(){
  return React.useReducer((state, action) => {
    switch (action.type) {
      case "increment":
      case "decrement":
      case "reset":
    }
  }, 0)
}

const contatore = useContatore()
contatore.dispatch({type: "increment"})
contatore.dispatch({type: "decrement"})
contatore.dispatch({type: "reset"})
*/
//React.useEffect(() => {
// qui uso valore1 e valore2
// eseguo qualcosa di imperativo
//  return () => {
// qui ripulisco quello che ho fatto
//  }
//}, [valore1, valore2])
// tramite React.useEffect
// creare un effetto che
// ci stampa un valore in console
// ogni secondo
// il tutto in una custom hook
// che prende come parametro il valore
// const intervalId = setInterval(() => {
// viene eseguito ogni secondo
// }, 1000)
// clearInterval(intervalId) // ferma l'esecuzione
// esempio di loop
// const [value, setValue] = React.useState(0)
// React.useEffect(() => {
//   setValue(Math.random())
// }, [value])

/*
function useConterCorretto() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const double = count * 2;
  return { count, increment, double };
}
function useConterScorretto() {
  const [count, setCount] = React.useState(0);
  const [double, setDouble] = React.useState(0);
  const increment = () => setCount(count + 1);
  React.useEffect(() => {
    setDouble(count * 2);
  }, [count]);
  return { count, increment, double };
}
// const [state, setState] = useLocalStorage(chiave, valoreDiDefault)
// utilizzando il local storage
// salviamo il valore di modo da recuperarlo anche in caso di reload della pagina
// localStorage.setItem("chiave", "valore")
// localStorage.getItem("chiave")
// React.useState(statoInizialeCostosoDaCreare)
// React.useState(() => statoInizialeCostosoDaCreare)
// const valore = possibilmenteVuoto || diDefault
// const valore = possibilmenteVuoto ? possibilmenteVuoto : diDefault
// const valore = possibilmenteVuoto ?? diDefault
// Esempio di event loop
const tasks = [];
function addToTasks(task) {
  tasks.push(task);
}
while (true) {
  const task = tasks.shift();
  task();
}
addToTasks(() => {
  console.log("a");
  addToTasks(() => {
    console.log("b");
  });
  console.log("c");
});
const raddopiatoreAsincrono = (num, callback) => {
  setTimeout(() => callback(num * 2), 1000);
};
raddopiatoreAsincrono(4, (x) => console.log(x));
const raddopiatoreAsincrono_2 = (num) => {
  return {
    then(callback) {
      setTimeout(() => callback(num * 2), 1000);
    }
  };
};
raddopiatoreAsincrono(4, (x) => console.log(x));
// diventa cosi
raddopiatoreAsincrono(4).then((x) => console.log(x));
const task = raddopiatoreAsincrono(4);
task.then((x) => console.log(x, "uno"));
task.then((x) => console.log(x, "due"));
const add = (a, b) => a + b;
add(1, 2);
const add_2 = (a) => (b) => a + b;
add(1)(2);
const add6 = add(6);
const ten = add6(4);
const raddopiatoreAsincrono_3 = (num) => {
  const listeners = [];
  setTimeout(() => {
    const val = num * 2;
    for (const listener of listeners) {
      listener(val);
    }
  }, 1000);
  return {
    then(onSuccess) {
      listeners.push(onSuccess);
    }
  };
};
raddopiatoreAsincrono(4).then((x) => console.log(x));
const dopoUnSeondo4 = raddopiatoreAsincrono(4);
dopoUnSeondo4.then((x) => console.log(x));
dopoUnSeondo4.then((x) => (document.body.innerText = x));
const raddopiatoreAsincrono_4 = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num * 2), 1000);
  });
};
raddopiatoreAsincrono(4).then((x) => console.log(x));
new Promise((resolve, reject) => {
  // fa altre cose
  resolve(9);
}).then((x) => console.log(x));
new Promise((resolve, reject) => reject("errore")).catch((x) =>
  console.error(x)
);
// metti dentro la scatola
const scatola = new Promise(function promiseExecution(resolve, reject) {
  resolve("regalo");
});
// tira fuori dalla scatola
scatola.then(function onSuccess(contenuto) {
  console.log("grazie babbo natale per " + contenuto);
});
new Promise((resolve) => resolve(4));
Promise.resolve(4); // shortcut

const quattro = Promise.resolve(4);
const sei = quattro.then((n) => n + 2);
const sorpresa = Promise.resolve("batman").then((s) => Promise.resolve(s));
// Promise(Promise("batman"))
// Promise("batman")
const pa = new Promise((resolve) => resolve(1));
const pb = new Promise((resolve) => resolve(2));
const pc = new Promise((resolve) => resolve(3));

async function somma() {
  const a = await pa;
  const b = await pb;
  const c = await pc;
  return a + b + c;
}
somma().then((x) => console.log());
function somma_2() {
  return pa.then((a) => pb.then((b) => pc.then((c) => a + b + c)));
}
// aspetta(4) ritorna una promise che si risolve dopo 4 millisecondi
// risalutaConEleganteRitardo("ciao") stampa "ri-ciao" dopo 5 secondi (usare await)

*/

export async function getListaFilm() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  if (Math.random() > 0.9) throw new Error();
  return [
    { id: 1, titolo: "il padrino" },
    { id: 2, titolo: "cast away" }
  ];
}
