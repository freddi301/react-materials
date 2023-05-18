# Js Basics

# Js Modern

## Suggested Readings

// JavaScript Allongee [libro programmazione funzionale]

## Functions

// in matematica

// f(x) = x * 2

// y = f x ---- ad esempio per fare un grafico


```typescript
f = (x: number): number => x * 2
```

```javascript
f = (x) => x * 2
f(8) // 16
```



// un a funzione che prende 2 parametri


```typescript
f = (x: number, y: number): number => x + y
```

```javascript

f = (x, y) => x + y
f(2, 4) // 6

```

// Currying

```typescript
f = ((x: number) => ((y: number) => x + y)) // closure su x
```

```javascript
f = x => y => x + y;

f(3); // per pterlo fare
(x => y => x + y)(3);
(y => 3 + y);

// f(2)(4)
(f(2))(4);
((x => y => x + y)(2))(4);
((y => 4 + y)(2));
(4 + 2);
6
```


// Left associative +

// 1 + 2 + 3 + 4
// ((1 + 2) + 3) + 4

// Right assocative =>

// a => b => c => d
// a => (b => (c => d))


```typescript
f = (g: (u: number) => number) => (x: number): number => g(g(x))

function doubleExecution(opreation: (data: number) => number) {
  return function (data) {
    const middle = operation(data)
    return operation(middle)
  }
}
```

```javascript
f = g => x => g(g(x))

doubleExecution = operation => data => operation(operation(data))
```


// i due estremi
// pro (nessuna indirezione) contro (nessun nome; non si capisce cosa fa cosa)
// vs
// prop (esplicito) contro (troppi nomi; troppa indirezione nella lettura; inventare nome è difficile)


```typescript
f = g => x => g(g(x))

const f
  : (g: (u: number) => number) => (x: number) => number
  = (g: (u: number) => number): number => (x: number): number => g(g(x))

// ---

type Data = number
type Operation = (data: Data) => Data
const f
  : (g: Operation) => (x: Data) => Data
  = (g: Operation): (x: Data) => Data => (x: Data): Data => g(g(x))

// --

type Data = number;
type Operation = (data: Data) => Data;
type DoubleExecution = (operation: Operation) => (data: Data) => Data;
const doubleExecution: DoubleExecution = (operation: Operation) => (data: Data): Data => operation(operation(data))

// --

type Data = number;
type Operation = (data: Data) => Data;
type DoubleExecution = (operation: Operation) => (data: Data) => Data;
const doubleExecution: DoubleExecution = (operation: Operation) => (data: Data): Data => {
  const intermediate = operation(data)
  return operation(intermediate)
}

// -- secondo Frederik questa è la versione con il miglior rapporto di quantità ed esplicita del codice

type Data = number;
type Operation = (data: Data) => Data;
const doubleExecution = (operation: Operation) => (data: Data) => {
  return operation(operation(data))
}

// --

type Data = number;
type Operation = (data: Data) => Data;
const doubleExecution = (operation: Operation) => (data: Data) => {
  const intermediateData = operation(data)
  const finalData = operation(intermediateData)
  return finalData
}

// --

type Data = number;
type Operation = (data: Data) => Data;
type DoubleExecution = (operation: Operation) => (data: Data) => Data;
type Execution = (data: Data) => Data
const doubleExecution: DoubleExecution = (operation : Operation) => {
  const execution: Execution = (data: Data) => {
    const intermediateData = operation(data)
    const finalData = operation(intermediateData)
    return finalData
  }
} 
```


// come utilizzarlo?

```typescript
type Operation = (data: number) => number;
const doubleExecution = (operation: Operation) => (data: number) => {
  return operation(operation(data))
}

const multiplicazionePer2 = (qualcosa) => qualcosa * 2;
const addizioneDi4 = (numero : number) => numero + 4;


const risultato6 = doubleExecution(addizioneDi4)(2);

// usare doubleExecution(???)(3) di modo che ritorni 1, tenersi in una riga
const risultato3 = doubleExecution(numero => numero - 1)(3)

const addizioneDi = x => y => x + y // in java si chiamerebbe Factory di Operation
const risultato12 = doubleExecution(addizioneDi(10))(2) // 12

const adddtionOfOperationFactory = (settings: number): Oepration => {
  const additionBy: Operation = (data: number) => {
    return data + settings
  }
  return operation
}

```

```javascript
f = (g) => (x) => g(g(x))
f( x => 2*x )(4) // 16
```


### Block scope vs function scope

```javascript
function hello () {
  // hoisting
  // var u;
  var u = 10 // u = 10
  const a = 8;
  consoel.log(u) // 10
  if (true) {
    var u = 6 // u = 6
    console.log(a) // 8
    const a = 5;
    console.log(a) // 5
  }
  console.log(a) // 8
  consoel.log(u) // 6
}

```

### IFEE Immediately Invoked Function Expression
Serve per trasformare uno statement in un'espression

```javascript
// e tutto finto
libreria.funzionalita((() => {
  const hello = String.random(); 
  switch (hello) {
    case "a": return "b",
    case "c": return "g"
  }
})())


function Hello(){
  return "hello"
}
// desugars to
var Hello = function Hello(){
    return "hello"
}
```

### Code block VS Object literal

```javascript
const a = {
  x: 1,
  y: 2
} // oggetto
const f = () => {
  console.log(1);
  console.log(1);
} // statement
while (true) console.log();
while (true) {
  console.log(1);
  console.log(1);
} // statement
```

Un oggetto un contenitore, fatto di una lista di chiave valore, con chiavi che sono univoche nell-oggetto
```javascript
{ x: 1, x: 2 }
(() => {
    const obj = {}
    obj.x = 1;
    obj.x = 2;
    return obj;
})
```

```javascript
const a = 4; // dichiarazione
let b; b = 6; // mutazione


const original = {
  a: 1,
  b: 2,
  c: 3
};
// verione esetesa
const modified = {
  a: original.a,
  b: original.b,
  c: 345
};
// versione syntax sugar che si chiama object spread
const modified = { ...original, c: 345, d : 78  }


// esempio sort
[1,2,3].sort((a, b) => {
  // deve tornare 0 se sono uguali
  // deve tornare < 0 se a deve stare prima di b
  // deve tornare > 0 se a deve stare prima di b

  // per numeri
  return a - b // quindi questo sarebbe l'0ridnamneto asscnedente
  return b - a // quindi questo sarebbe l'0ridnamneto dissencdente

  // per stringhe .localCompare ordina in base all'allfabeto della lingua dell'utente
  return a.localCompare(b)  
  return b.localCompare(a)
  // < o > invece confronto come se ofsse ASCII
  // ["a", "b", "à"].sort() // ["a", "b", "à"]
  // ["a", "b", "à"].sort(...localCompare...) // ["a", "à", "b"]

  // per oggetti tornate per semplicità 0 -1 o 1
})
```

spesso vi può capitare che vi serve una funzionalità che ha solo la variante mutabile
in questo caso usare trucchetto: "mutabilità locale"
```javascript
function immutableReverse(originalArray)
  const modifiedArray = [...orignalArray] // clono con array spread
  modifiedArray.reverse() // modifico il clone
  return modfiedArray // l'orignale rimane intatto; 
// e all'esterno non si nota nessuna modifica allo stato dle mondo
```


// using spread ...
let p1 = {
    ...person
};

// using  Object.assign() method <- quetaè la versione desugared quindi stessa funzionalità del {...x}
let p2 = Object.assign({}, person); 

// using JSON <- ok per prortotipare ma ha delle limitazioni (omette le funzioni)
let p3 = JSON.parse(JSON.stringify(person));


```javascript
function funzinalita(array)
  const first = array[0]
  const second = array[1]
  const rest = array.slice(2)
  // c'è la scorciatoia del array destructuring
  // questo equivale a quello prima
  const [first, second, ...rest] = array

  // intuizione
  const [a, b, c]
      = [1, 2, 3];

  Math.min = (...numbers) => {
    for (let min = -Infinity, i = 0; i++; i<numbers.length) {
      if (numbers[i] < min) min = numbers[i]
    };
    return min;
  }
  Math.min(1,2,3,4)
  Math.min(...[1,2,3]) // si traduce in Math.min(1,2,3)

  function prova(a, b, ...resto) {}  // a = 1 b = 2 c [3,4]
  prova(1,2,3,4,5,6) // a = 1; b = 2; resto = [3,4,5]
  prova(1,...[2,3,4]) // si traduce in Math.min(1,2,3) dentro prova a = 1; b = 2; resto = [3]

```


## Array.map

```typescript

// Il .map è la trasformazione di un oggetto, ma applicata ad un array di oggetti

const arrayOriginale = ["a", "b", "c"]
const suffisso = "--"
const arrayNuovo = arrayOriginale.map(function newItemProducer(itemOriginale) {
  const itemNuovo = itemOriginale.toUppercase() + suffisso
  return itemNuovo
}) // ["A--", "B--", "C--"]

[1,2,3].map(x => x * 2) /* => produce => */ [2,4,6]

[1,2,3].map(x => x * 2) /* => produce => */
[2,4,6]

// VOTI: **

type Person = { name: string }
type Worker = { name: string, job: string }
function fromPersonToWorker(person: Person): Worker { return {...person, job: "React developer"} }

const fredAtHome: Person = {name: "Frederik"}
const fredAtSmc: Worker =  fromPersonToWorker(fredAtHome)

const fannulloni: Array<Person> = []
const fannulloniConstipendio: Array<Worker> = fannulloni.map(fromPersonToWorker)

// VOTI:********

```

## Array.filter

```typescript

// il .filter è il criterio su un ogetto ma applicato ad un array di oggetti

["apple", "orange", "ananas", "banana"].filter(fruit => fruit.charAt(0) === "a") /* => produces => */ ["apple", "ananas"]

type Fruit = string

function startsWihtA(fruit: Fruit): boolean {
  const firstLEtter = fruit.charAt(0)
  return firstLetter === "a"
}

const doesAppleStartsWithA = startsWihtA("appple")

const fruits: Array<Fruit> = ["apple", "orange", "ananas", "banana"]
const fruitsILike = fruits.filter(startsWihtA) /* => produces => */ ["apple", "ananas"]

```

## Import/Export 

```typescript

// file src/libreria.ts

export const x = 10
export function haha(){}

// file src/applicazione.ts

import { x, haha } from "./libreria"

console.log(x);
haha();

```
esempio di file risultatnto dopo il bundling
```javascript

const librearia = (() => {
  const x = 10
  function haha(){}

  return { x, haha } // gli export diventato un oggetto ritornato
})()

const applicatione = (() => {
  const { x, haha } = libreria // gli import diventato un oggetto destrutturato

  console.log(x);
  haha();
})()

```

esiste anche una forsa più datata di funzionalità import/export che si chiama require/define e sono delle espressioni;

un import è uno statement

e diviso in due parti:

sinistra: cosa imparotre

destra: da quale file

```typescript
import <sinistra> from <destra>

import <qualcosa> from "../hello/hello" // percorso relativo del file nei sorgenti
import <qualcosa> from "/hello/hello" // percorso assuluto del file nei sorgenti (quinid tipicamnete a partire dalla cartella src)
import <qualcosa> from "libreria-esterna" // nome della cartella della libreria all'interno di node_modules
  // node_modules è la cartella creata da npm (pacjage manager di nodejs) quando si istallano le dipendenze ovvero libreire esterne
import <qualcosa> from "@user/library" // di recente è stato aggiunto anche il prefisso del nome dell'utente che ha creato la libreira
  // di default npm scarica le libreire da npmjs.com
  // esistono anche altri package manager (esempio yarn) e repository pubblici e privati

// named import
import { hello } from <qualcosa>
// corrispettiov per il named export
export const hello = ""

// deafult import
import NomeDiverso from <qualcosa>
// corrispettiov per il named export
export default const NomeOriginale = ""

// combo
import NomeDiverso, { qualcosa } from <qualcosa>

// importa tutti i named export e li mette nell'oggetto Raccolta
import * as Raccolta from <qualcosa>

// named import e contesuale rinominzaione
import { qualcosa as qualcosaDvisero } from <qualcosa>

// named export o famo strano
export const a = 1
export const b = 2
// si può scrivere anche
const a = 1
const b = 2
export { a, b }

// altra forma ameesasa di export
export { a as x };
```

## Closure implementation in objects

```javascript

function outer(){
  const a = 1;
  function inner(){
    const b = 2;
    console.log(b)
    console.log(a);
  }
  return inner;
}

class inner {
  constructor(a){
    this.a = a;
    this.b = 2;
  }
  run(){
    console.log(this.b)
    console.log(this.a);
  }
}

class outer {
  constructor(){
    this.a = 1;
    this.inner = new inner(this.a);
  }  
  run(){
    return this.inner;
  }
}
```

## Array.reduce

Array.reduce la codifica funzionale del ciclo for con accumulatore

```javascript
const array = [10,20,30]
let accumulatore = 100
for (let i = 0; i < array.length; i++){
  console.log({accumulatore, "array[i]": array[i], i})
  const item = array[i]
  accumulatore = accumulatore + item;
}
console.log(accumulatore)

console.log(
  [10,20,30].reduce((accumulatore, item) => {
    console.debug({accumulatore, item})
    return accumulatore + item;
  }, 100)
)
```

## Replicate Array.filter, Array.map

```typescript
// l'obiettivo è implementare per conto nostro le seguenti functioni sugli array di javascript
// Array.filter
// Array.map
// preferibilmente in typescript (l'editor vscopde ha il supporto nativo)

// seguono alcuni passaggi propedeutici
// seguiremo prima un aproccio WET (Write Everything Twice) cosi da capire dove avvengono le ripetizioni
// per poi applicare DRY (Don't Repeat Yourself) e creare una funzione generica che possa essere riutilizzata

// le istruzioni cominciano con "TODO"
// il codice commentato invece da una direzione per l'implementazione

type Persona = {
  nome: string;
  eta: number;
  altezza: number;
};

const frederik: Persona = {
  nome: "Frederik",
  eta: 28,
  altezza: 1.85,
};

// TODO: mettere più persone nell'esempio di modo da poter testare più avanti le funzionalità che implementeremo
const persone: Array<Persona> = [frederik];

// TODO: creare un nuovo array in cui sono presenti solo le persone il cui nome comincia per A

/*
const personeConNomeCheIniziaPerA: Array<Persona> = []
for (itero con un indice sull'array delle persone) {
  if (il nome comincia per a) {
    // aggiungere la persona all'array delle persone con nome che comincia per A
  }
}
console.log(persone)
console.log(personeConNomeCheIniziaPerA)
*/

// TODO: creare un nuovo array in cui sono presenti solo le persone che hanno più di 30 anni

/*
const personeConPiuDi30Anni: Array<Persona> = []
// simile a prima
*/

// TODO: creare un nuovo array in cui sono presenti solo le persone che sono alte più di 1.80

/*
const personeAlte: Array<Persona> = []
// simile a prima
*/

// TODO: scrivere una funzione che dato un array di persone, restituisce un array di persone il cui nome comincia per A, senza modificare quello originale

/*
function calcolaPersoneConNomeCheIniziaPerA(persone: Array<Persona>): Array<Persona> {
}
*/

// TODO: scrivere una funzione che dato un array di persone, restituisce un array di persone che sono più alte di 1.80, senza modificare quello originale

/*
simile a prima
*/

// TODO: scrivere una funzione che dato un array di persone, restituisce un array di persone che hanno più di 30 anni, senza modificare quello originale

/*
simile a prima
*/

// Ora notare bene dove che avviene la ripetizione di codice
// per evitare ripetizione di codice solitamente si porcedere ad "asrarre" il codice ripetuto
// quindi prendo il codice che si ripete
// lo metto dentro una funzione sensa parametri
// le parti che variano da un esempio all'altro le trasformo in parametri della funzione

// TODO: scrivere una funzione che datat una condizione e un array di persone, restituisce un array di persone che soddisfano la condizione, senza modificare quello originale
// la condizione è una funzione che dato una persona restituisce un booleano, true se la persona soddisfa la condizione, false altrimenti

/*
function filtraPersone(persone: Array<Persona>, condizione: (persona: Persona) => boolean): Array<Persona> {
  // crea un array vuoto
  // itero l'array
  //  se la persona soddisfa la condizione
  //   aggiungo la persona all'array
  // restituisco il nuovo array
}
*/

// TODO: [opzionale] crea una funzione che dato un oggetto di qualisasi tipo e una condizione
// restituisce un nuovo array senza modifica l'originale che contiente solog gli oggetti che soddisfano la condizione
// la condizione è una funzione che dato un oggetto restituisce un booleano, true se l'oggetto soddisfa la condizione, false altrimenti
// in typescript per indicare un parametro che accetta un valore (numero, stringa, oggetto, array, ecc) si mette nelle tonde
// per indicare un parametro che accetta il TIPO di un valore si usano le parentesi angolari <NomeDelTipo>

/*
function filtra<Oggetto>(array: Array<Oggetto>, condizione: (elemento: Oggetto) => boolean): Array<T> {
}
*/

// TODO: creare un nuovo array, senza modificare l'originale, dove le persone hanno il nome che finisce per "u" (quinid aggiungi "u" al nome)

/*
const personeDiOriginiSarde: Array<Persona> = [];
for (itero con un indice sull'array delle persone) {
  const copiaPersona = // copiare la persona però al nome aggiungiamo "u"
  // aggiungere la copia della persona all'array delle persone con nome che finisce per "u"
}
console.log(persone)
console.log(personeConNomeCheIniziaPerA)
*/

// TODO: creare un nuovo array, senza modificare l'originale, dove le persone hanno il doppio dell'età

/*
const quelliCheComincianoLeFrasiConAiMieiTempi: Array<Persona> = []
  // simile a prima 
*/

// TODO: creare un nuovo array, senza modificare l'originale, dove le persone hanno l'altezza aumentata di 12cm

/*
const concorrentiContestTAcco12: Array<Persona> = []
// simile a prima
*/

// TODO: creare una funzione che dato un array di persone, restituisce un array di persone il cui nome finisce per "u", senza modificare quello originale

// TODO: creare una funzione che dato un array di persone, restituisce un array di persone che hanno il doppio dell'età, senza modificare quello originale

// TODO: creare una funzione che dato un array di persone, restituisce un array di persone che hanno l'altezza aumentata di 12cm, senza modificare quello originale

// TODO: creare una funzione che dato un array di persone, a una trasformazione, restituisce un array di persone trasformate, senza modificare quello originale (e senza modificare le persone originali!)
// la trasformazione è una funzione che dato una persona restituisce una persona trasformata

/*
function trasformaPersone(persone: Array<Persona>, trasformazione: (persone: Persona) => Persona): Array<Persona> {
  // crea un array vuoto
  // itero l'array originale
  //  trasformo la persona
  //  aggiungo la persona trasformata all'array
  // restituisco il nuovo array
*/

// TODO: fare la versione generica di trasformaPersone

// COMPLIMENTI, hai replicato con successo la funzionalità di filter e map

```

# React Basics

## React paradigm (non interactive)

Punto di partenza react

```tsx
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
// copnst root = { currentRealDom: rootElement, currentVirtualDom: null }

// root.render(<App />);

const pagina1 = <h1>Fred</h1>;
// const pagina = React.createElement("h1", {}, ["Fred"])
// const pagina = {component: "h1", children: ["Fred"]}

// root = { currentRealDom: rootElement, currentVirtualDom: null }
root.render(<h1>Fred</h1>);
// root = { currentRealDom: rootElement, currentVirtualDom: <h1>Fred</h1> }
root.render(<h1>Luca</h1>);
// root = { currentRealDom: rootElement, currentVirtualDom: <h1>Luca</h1> }
root.render(<h1>Mario</h1>);
```


Unita di uddivisione e riutilizzo del codice

```tsx

// in un software generico
// abbiamo i dati e le sitruzioni
// e utilizziamo le funzioni
// per suddividere il codice, e poterlo eventualmente riutilizzare
// noi componiamo software tramite il richiamo di funzione

function coppiaDiNUmeri(numero) {
  return [numero, numerio]
}
const esempio = coppiaDiNumero(4)


// in react invece i nostri dati sono virtual dom
// e le nostre funzioni si chiamano componenti
// in react l'unita di suddivisione e riutilizzo del codice sono appuntoo i compoenti
// ma siccome il virtual dom non èatro che un albero di ogggetti
// un componento è una funzione che li produce

// function MioComponente(props) {
function MioComponente({nome, cognome}: {nome: string, cognome: string}) {
  // const nome = props.nome
  // const cognome = props.cognome
  return <h1>{nome} {cognome}</h1>
  // React.createElement("h1", {}, nome, cognome);
  // return <h1>{nome + " " + cognome}</h1>
}
const esempio = <MioComponente nome={"Fred"} cognome={"Bat"}/>
// const esempio = React.createElement(MioComponente, { nome: "Fred", cognome: "Bat })
// const esempio = MioComponente({ nome: "Fred", cognome: "Bat" }) // come se fosse cosi

```


# React Advanced

# React Best Practices

## Forms: thin wrapper approach

When you need to create form components in React, it is recommended to avoid using a library and instead follow these steps:

1. Start with the basic approach of using the `useState` hook and `input` elements with `value` and `onChange` props.

```jsx
const [value, setValue] = React.useState("");
<input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
```

2. To create a custom hook that encapsulates the state management for a form field, you can use a thin wrapper approach. Begin by creating a custom hook called `useField` and initially include only the `useState` hook.

```tsx
function useField<Value>(props: { initial: Value }) {
  const [value, privateSetValue] = React.useState(props.initial);
  const [hasChanged, setHasChanged] = React.useState(false);

  const setValue = React.useCallback((value: Value) => {
    privateSetValue(value);
    setHasChanged(true);
  }, []);

  return { value, setValue, hasChanged };
}
```

3. Gradually add additional features inside the `useField` hook based on your requirements. This thin wrapper approach allows you to extend the functionality of the form field while remaining flexible and not tied to any specific approach.

4. Utilize the thin wrapper approach for input components as well. This way, if you need to change the style of all text input fields, you can easily do so. The `TextInput` component should receive the props returned by the `useField` hook directly through an interface.

```tsx
function TextInput(props: ReturnType<typeof useField<string>>) {
  return (
    <input
      value={props.value}
      onChange={(event) => props.setValue(event.currentTarget.value)}
      style={{ backgroundColor: props.hasChanged ? "gray" : "" }}
    />
  );
}
```

By following these steps, you can create custom form components in React using the thin wrapper approach, allowing for easy extensibility and flexibility throughout your application.

## React apllication layers

Every layer has access only to its children. Dependency inversion applies only for types.

- **App Layer**:
  - **Data Layer**: It answers `Get data` and `Modify data`. Implemented as named exports of custom hooks for queries and mutations that takes Domain/DTO objects and return Domain/DTO objects.
    - **Rest**
      - **Hooks useQuery useMutation**: Implements caching and aggregation. Custom hooks that just return `react-use-query` calls.
        - **Api object**: Implements authentication and data fetching. implemented as instantiable object *(to handle ouatuh schemes) with configuration, exposed ad REact context with custom hook `useApi`. Handles internally authentication, refresh tokens, custom headers, adapts data. Use at least `customFetch` insted of `fetch` to eventually add global features as needed. Use `msw` for mocking. 
    - **GraphQl**: Implements authentication, caching and aggregation. `ApolloGraphQL` Client
  - **Visual components Layer**: It answers `Show something`. Implement reased visual components to isolate from specific implementation. Implemented as flat directory `components` with named export for react components or custom hooks that are a thin wrapper around ui-kit used (ex: Bootstrap, MaterialUI, ClayUI). If needed custom styling with `styled-components` with *css={`color: red`}* and theme as REact context with custom hook `useTheme`.
  - **Forms**: use thin layer approach
  - **i18n**: use `react-i18next` with label extraction.
  - **State managment**: use plain props passing. If needed use renderProps.

# Notes

Exercise progression: like counter -> todo list -> CRUD UI