# Js Basics

# Js Modern

## Why compile JavaScript?

### Transpiling

Babel

### Bundling

Webpack

## Suggested Readings

- JavaScript Allongee [libro programmazione funzionale]
- Documentatzione Ufficiale React https://react.dev/learn
- You Don't Know JS https://github.com/getify/You-Dont-Know-JS

## Statement vs Expression

Intenzione:

- un EXPRESSION vuole trasmettere il concetto di VALORE
- uno STATEMENT vuole trasmettere il concetto di ISTRUZIONE

Intuizione:

- un EXPRESSION è qualcosa che si puo mettere tra le tonde
- uno STATEMENT è quando puo essere separato con il punto e virgola

Un' espressione in javascript, è una porzione di codice, che se sistituita con il poprio risultato, non cambia il significato del programma:

```tsx
console.log(1 + 2); // stampa 3
// sostituendo l'espressione 1 + 2 con il suo risultato
console.log(3); // stampa 3
```

```tsx
console.log(1 + 2);
if (true) {
  console.log(3);
}
```

Expression:

- operazioni aritmetiche + - / \* % ^
- operazioni logiche && || !
- operazioni binarie & | ^ >> << >>>
- chiamate a funzione (con o senza parametri) funzione() funzione(1, 2, 3)

Statement:

- il primo livello di un file javascript è una sequenza di statement
- struttura di controllo con keyword if, else, switch, for, while, do while, for of, for in, try catch finally
- blocchi di codice che sono racchiusi tra parentesi graffe {}

## Let Const Var

`const` è una keyoword per scrivere una definizione di una variabile. Es: `const x = 1;`
Dichiarando una varaibile con const, si crea una varaibile che non può essere riassegnata, pena errore runtime.
L'inizializzazione è obbligatoria, pena errore runtime.
E block scoped.

`let` è una keyoword per scrivere una definizione di una variabile. Es: `let x = 1;`
Dichiarando una varaibile con let, si crea una varaibile che può essere riassegnata.
L'inizializzazione è opzionale, se no undefined.
E block scoped.

`var` è una keyoword per scrivere una definizione di una variabile. Es: `var x = 1;`
Dichiarando una varaibile con var, si crea una varaibile che può essere riassegnata.
L'inizializzazione è opzionale, se no undefined.
E function scoped.
Comporta hoisting.

```tsx
// Block scoped significa che la variabile è disponibile all'uso
// solo dopo la sua dichiarazione
console.log(x); // <-- Errrore, x non è ancora stata dichiarata
const x = 4;

// Block scoped significa anche che è possibile fare il shadowing del nome in un nuovo blocco innestato
const x = 4;
console.log(x); // <-- 4
{
  console.log(x); // <-- 4
  const x = 5;
  console.log(x); // <-- 5
}
console.log(x); // <-- 4

// function scoped vuol dire che la varaibile ignora i blocchi, e considera solo i blocchi di funzione
function prova() {
  if (true) {
    var x = 4;
  }
  console.log(x); // <-- 4
}

// hoisting è il comportamento di spostare la dichiarazione di una variabile all'inizio del blocco di funzione più vicino, ma lasciando l'assegnazione al suo posto
function prova() {
  if (true) {
    var x = 4;
  }
  console.log(x); // <-- 4
}
// diventa
function prova() {
  var x;
  if (true) {
    x = 4;
  }
  console.log(x); // ecco perchè non da errore
}
```

### Keyword function statement

```javascript
function Hello() {
  return "hello";
}
// desugars to
var Hello = function Hello() {
  return "hello";
};
```

### Block scope vs function scope

```javascript
function hello() {
  // hoisting
  // var u;
  var u = 10; // u = 10
  const a = 8;
  consoel.log(u); // 10
  if (true) {
    var u = 6; // u = 6
    console.log(a); // 8
    const a = 5;
    console.log(a); // 5
  }
  console.log(a); // 8
  console.log(u); // 6
}
```

## Risoluzione variabili nei scope

## Values

In javascript abbiamo 2 tipi di valori

Primitivi: boolean, number, bigint, string, null, undefined, symbol
Oggetti: object

Tutti i valori (al netto di null e undefined) possono essere trattati come oggetti: x.y.

```tsx
// L'operatore keyword typeof di un valore ci restituisce una stringa che rappresnta il tipo

typeof "test"; // "string"
typeof true; // "boolean"
typeof 12; // "number"
typeof 120n; // "bigint"
typeof Symbol("hi"); // "symbol"
typeof undefined; // "undefined"
typeof iDoNotExist; // "undefined"
console.log(iDoNotExist); // ReferenceError!
typeof (() => {}); // "function"
typeof function () {}; // "function"
typeof null; // "object" !!!!
typeof { a: 1, b: 2 }; // "object"
```

## Functions

### keyword function vs arrow function

```tsx
// I due tipi di sintassi per definire una funzione in javascript

// keyword function
const x = function nomeFunzione(a, b, c) { console.log(a); return b + c; };
functionNameAsVarName(a, b, c) { }; // keyword function declaration se in posizione di statement; è come se var = function ....

// arrow function
const x = (a,b,c) => b + c; // corpo expression
const y = () => { console.log("hello"); return a + b; } // corpo code block
```

Altre differenze:

- keyword function ha la variabile speciale `this` che dipende dal contesto di invocazione (viene valotizzata al momento della chiamata di funzione, con l-oggetto al quale le funzione appartiene)
- arrow function non ha la variabile speciale `this`, quindi dipende dal contesto di dichiarazione (banalemente vede il this della keyword function che la contiene)
- keyword function ha la variabile speciale `arguments` che contiene tutti i parametri passati alla funzione
- arrow function non ha la variabile speciale `arguments`

### Esempi

in matematica

f(x) = x \* 2

y = f x ---- ad esempio per fare un grafico

```typescript
f = (x: number): number => x * 2;
```

```javascript
f = (x) => x * 2;
f(8); // 16
```

```typescript
f = (x: number, y: number): number => x + y;
```

```javascript
f = (x, y) => x + y;
douz = f(2, 4); // 6
```

#### Associativity

Left associative +

```tsx
// x = 1 + 2 + 3 + 4;
// x = (((1 + 2) + 3) + 4);
```

Right associative =>

```tsx
// a => b => c => d;
// a => (b => (c => d)));
```

#### Currying

```typescript
f = (x: number) => (y: number) => x + y; // closure su x
```

```javascript
f = (x) => (y) => x + y;

// cosa torna?
const z = f(2);
const z = (
  (x) => (y) =>
    x + y
)(2);
const z = (y) => 2 + y;
```

### Function as parameter (higher order function)

```typescript
f =
  (g: (u: number) => number) =>
  (x: number): number =>
    g(g(x));

function doubleExecution(operation: (data: number) => number) {
  return function (data) {
    const middle = operation(data);
    return operation(middle);
  };
}
```

```javascript
f = (g) => (x) => g(g(x));

doubleExecution = (operation) => (data) => operation(operation(data));
```

i due estremi
pro (nessuna indirezione) contro (nessun nome; non si capisce cosa fa cosa)
vs
pro (esplicito) contro (troppi nomi; troppa indirezione nella lettura; inventare nome è difficile)

```typescript
f = (g) => (x) => g(g(x));

const f: (g: (u: number) => number) => (x: number) => number =
  (g: (u: number) => number): number =>
  (x: number): number =>
    g(g(x));

// ---

type Data = number;
type Operation = (data: Data) => Data;
const f: (g: Operation) => (x: Data) => Data =
  (g: Operation): ((x: Data) => Data) =>
  (x: Data): Data =>
    g(g(x));

// --

type Data = number;
type Operation = (data: Data) => Data;
type DoubleExecution = (operation: Operation) => (data: Data) => Data;
const doubleExecution: DoubleExecution =
  (operation: Operation) =>
  (data: Data): Data =>
    operation(operation(data));

// --

type Data = number;
type Operation = (data: Data) => Data;
type DoubleExecution = (operation: Operation) => (data: Data) => Data;
const doubleExecution: DoubleExecution =
  (operation: Operation) =>
  (data: Data): Data => {
    const intermediate = operation(data);
    return operation(intermediate);
  };

// -- secondo Frederik questa è la versione con il miglior rapporto di quantità ed esplicita del codice

type Data = number;
type Operation = (data: Data) => Data;
const doubleExecution = (operation: Operation) => (data: Data) => {
  return operation(operation(data));
};

// --

type Data = number;
type Operation = (data: Data) => Data;
const doubleExecution = (operation: Operation) => (data: Data) => {
  const intermediateData = operation(data);
  const finalData = operation(intermediateData);
  return finalData;
};

// --

type Data = number;
type Operation = (data: Data) => Data;
type DoubleExecution = (operation: Operation) => (data: Data) => Data;
type Execution = (data: Data) => Data;
const doubleExecution: DoubleExecution = (operation: Operation) => {
  const execution: Execution = (data: Data) => {
    const intermediateData = operation(data);
    const finalData = operation(intermediateData);
    return finalData;
  };
};
```

// come utilizzarlo?

```typescript
type Operation = (data: number) => number;
const doubleExecution = (operation: Operation) => (data: number) => {
  return operation(operation(data));
};

// SPOILER soluzione

const multiplicazionePer2 = (qualcosa) => qualcosa * 2;
const addizioneDi4 = (numero: number) => numero + 4;

const risultato6 = doubleExecution(addizioneDi4)(2);

// usare doubleExecution(???)(3) di modo che ritorni 1, tenersi in una riga
const risultato1_a = doubleExecution(addizioneDi4)(-6);
const risultato1_b = doubleExecution((n) => n + 1)(-1);
const risultato1_b = doubleExecution((n) => n - 1)(3);

const addizioneDi = (x) => (y) => x + y; // in java si chiamerebbe Factory di Operation
const risultato12 = doubleExecution(addizioneDi(10))(2); // 22

const adddtionOfOperationFactory = (settings: number): Oepration => {
  const additionBy: Operation = (data: number) => {
    return data + settings;
  };
  return operation;
};
```

```javascript
f = (g) => (x) => g(g(x));
f((x) => 2 * x)(4); // 16
```

### IIFE Immediately Invoked Function Expression

Serve per trasformare uno statement in un'espression

```javascript
const x = (() => {
  /* qui si possono usare statement */
})();
```

```javascript
// e tutto finto
// pero librearia.funzionalita vuole una stringa
libreria.funzionalita((() => {
  const hello = String.random();
  switch (hello) {
    case "a": return "b",
    case "c": return "g"
  }
})())
```

### Code block VS Object literal

Le parentesi graffe in javascript, sono utilizzate sia per blocchi di codice che per object literal.
Le Graffe nella posizione di expression indicano un object literal,
mentre le graffe nella posizione di statement indicano un blocco di codice.
Eccezione parte destra di arrow function.

```javascript
// object literal
const a = {
  x: 1,
  y: 2,
};
// statement
const f = () => {
  console.log(1);
  console.log(1);
};

while (true) console.log(1);
// statement
while (true) {
  console.log(1);
  console.log(1);
}

// invece se vogliamo tornare un oggetto da un arrow function
const f = () => ({
  x: 1,
  y: 2,
});
const f = () => {
  return {
    x: 1,
    y: 2,
  };
};
```

## Oggetti

In javascript gli oggetti sono dei contenitori di valori, e sono molto flessibili.
Sono fatti da una lista di chiave valore, dove le chiavi sono univoche nell'oggetto.
Le chiavi possono essere di tipo stringa o symbol, mentre i valori possono essere di qualsiasi tipo.

### Creazione

Ci sono diversi modi per creare un oggetto.

```javascript
// object literal
const o = { x: 1, x: 2 };
// cosa in realtà accade
const o = (() => {
  const obj = new Object();
  obj.x = 1;
  obj.x = 2;
  return obj;
})();
```

### Lettura

```javascript
const obj = { value: 42 };

console.log(obj["value"]); // 42

// forma breve di quella sopra
console.log(obj.value); // 42
```

### Funzioni in oggetti

```javascript
let obj = {
  aMethod: function () {},
  otherMethod() {}, // scorciatoia per sopra, questo viene tradotto in function, quindi ha il this
  anotherMethod: () => {},
};
obj.yetAnotherMethod = function () {};
obj.yetAnotherFunction = () => {};
```

### More syntax sugar

```javascript
// È possibile assegnare ad un oggetto delle proprietà utilizzando lo shorthand quando il nome della proprietà coincide con il nome della variabile da cui avreste estratto il valore
// property shorthand
getAjax({ payload });
// ...è uguale a...
getAjax({ payload: payload });

// computed object key
const obj = { ["par" + "am"]: 42 };
console.log(obj); // { param: 42 }
```

## Array

Gli array in javascript sono dei contenitori di una sequenza di valori, e sono molto flessibili.
Un array in javascript e mutabile, si posssono fare varie operazioni come aggiungere lementi in testa, in coda modificarli, rimuoverli, ecc.
Per leggere un elemento di un array si usa la notazione con le parentesi quadre indicando l'indice (che parte da 0).

### Creazione

Ci sono varie modalità

```javascript
// Array literal
const a = [1, 2, 3];
// cosa in realtà accade
const a = (() => {
  const arr = new Array();
  arr[0] = 1;
  arr[1] = 2;
  arr[2] = 3;
  return arr;
})();
```

### Lettura

```javascript
const a = ["a", "b", "c"];

console.log(a[0]); // "a"
console.log(a[1]); // "b"
console.log(a[2]); // "c"
console.log(a[3]); // undefined
console.log(a[-1]); // undefined
```

### Modifica

Esempi di operazioni mutabili, ovvero che modificano l-array originale

```javascript
const a = ["a", "b", "c"];

// .pop()
const arr = [1, 2, 3, 4];
arr.pop(); // 4
arr; // [1, 2, 3]

// .push()
const arr = [1, 2, 3, 4];
arr.push(5); // 5
arr; // [1, 2, 3, 4, 5]

// .shift()
const arr = [1, 2, 3, 4];
arr.shift(); // 1;
arr; // [2, 3, 4]

// .unshift()
const arr = [1, 2, 3, 4];
arr.unshift(0); // 5
arr; // [0, 1, 2, 3, 4]

// .fill()
new Array(4).fill(9); // [9, 9, 9, 9]

// .reverse()
const arr = [1, 2, 3, 4];
arr.reverse(); // [4, 3, 2, 1]
arr; // [4, 3, 2, 1]

// .sort()
const arr = [1, 4, 3, 2];
arr.sort(); // [1, 2, 3, 4]
arr; // [1, 2, 3, 4]

// .splice()
// fa molte operazioni diverse, ed e di difficile utilizzo, e ancora di piu difficile comprensione, EVITARE
```

## Mutabality vs Immutability

Le strutture dati e gli algoritmi possono essere mutabili o immutabili.

Quando sviluppiamo del software ci troviamo sempre a scegliere tra questi due paradigmi facendo dei compromessi:

Mutabilità PRO:

- con abbastanza effort si può ottimmizzare al massimo l'uso di risorse come tempo cpu e spazio ram
  - l'ottimizzzazione è un processo manule, e richiede molto efort
  - da notare che a parità di effert, i porgrammi con paradigma immutabili sono più efficienti in media
- è che corrisponde in modo diretto alla metafora della modelllazione del mondo reale (che appunto è mutabile)

Mutabilità CONTRO:

- è facile creare bug
- difficilta di lettura (perchè ogni istruzione potrebbe modificare qualsiasi cosa)
- non corrisponde alla metafore della modellazione del mondo con modelli matematici (che sono immutabili)
  - quindi se si opta per questo approccio c'è della fatica in più

Immutabilità PRO:

- è facile creare programmi corretti
- facilita di lettura del codice (appunto perchè le espressioni non modificano nulla)
- senza effort aggiuntivo si ottengono performance accettabili
- corrisponde direttamente alla metafore della modellazione del mondo con modelli matematici (che sono immutabili)

Immubilità CONTRO:

- non corrisponde alla metafora della modelllazione del mondo reale (che è mutabile)
  - quindi se si opta per questo approccio c'è della fatica in più

```javascript
// variabili

const a = 4; // immutabile
let b;
b = 6; // mutazione

// oggetti

const o = {}; // immutabile (limitazione di javascript, l'iimutabilita in questo caso si ferma al puntatore)
o.x = 1; // mutazione (aggiunta attributo)
o.x = 2; // mutazione (modifica attributo)
delete o.x; // mutazione (rimozione attributo)
```

Prendiamo il seguente codice:

```javascript
const obj = { someProperty: 12 };
someFunction(obj);
```

Dopo questo codice obj.someProperty varrà ancora 12? L'unica risposta possibile è
“non lo sappiamo” a meno che di non conoscere il codice di someFunction.
In poche parole, se un oggetto viene mutato da un’altra porzione di codice, per poter
fare delle assunzioni corrette su tale oggetto dobbiamo conoscerne il
comportamento.

Il javascript dovendo rimanere retrocompatibile, non puo permettersi di cambiare comportameni esistenti come ad esempio rendere gli oggetti immutabili.
Al momento non ci sono nuove specifiche approvate per introdurre immutabilita nel linguaggio.

Come alternativa ci rimane l-autodisciplina nel trattare gli oggetti come immutabili, e un uso sapiente di syntax sugar che il javascript ci mette a disposizione.

Nel paradigma immutabile, per modellare il cambio di stato o la mutabilit' esiste unico approccio che è quello dicreare nuovi a partire da quelli originali, includendo contestualemente le modifiche.

```javascript
const original = {
  a: 1,
  b: 2,
  c: 3,
};
const modified = {
  a: original.a,
  b: original.b,
  c: 345,
};
```

## Object destructuring + rest

## Object spread

```javascript
// versione syntax sugar che si chiama object spread
const modified = { ...original, c: 345, d: 78 };
const original = {
  a: 1,
  b: 2,
  c: 3,
};
// verione esetesa
const modified = {
  a: original.a,
  b: original.b,
  c: 345,
};
```

## Array destructuring + rest

```javascript
function funzinalita(array) {
  const first = array[0];
  const second = array[1];
  const rest = array.slice(2);
  // c'è la scorciatoia del array destructuring
  // questo equivale a quello prima
  const [first, second, ...rest] = array;

  // intuizione
  // const [a, b, c] =
  //       [1, 2, 3];
}
```

## Array spread

```javascript
Math.min = (...numbers) => {
  for (let min = -Infinity, i = 0; i++; i < numbers.length) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
};
Math.min(1, 2, 3, 4);
Math.min(...[1, 2, 3]); // si traduce in Math.min(1,2,3)

function prova(a, b, ...resto) {} // a = 1 b = 2 c [3,4]
prova(1, 2, 3, 4, 5, 6); // a = 1; b = 2; resto = [3,4,5]
prova(1, ...[2, 3, 4]); // si traduce in Math.min(1,2,3) dentro prova a = 1; b = 2; resto = [3]
```

## Local mutability is global immutability

spesso vi può capitare che vi serve una funzionalità che ha solo la variante mutabile
in questo caso usare trucchetto: "mutabilità locale"

```javascript
function immutableReverse(originalArray)
  const modifiedArray = [...orignalArray] // clono con array spread
  modifiedArray.reverse() // modifico il clone
  return modfiedArray // l'orignale rimane intatto;
// e all'esterno non si nota nessuna modifica allo stato dle mondo
```

## Array.sort

```javascript
[1, 2, 3].sort((a, b) => {
  // deve tornare 0 se sono uguali
  // deve tornare < 0 se a deve stare prima di b
  // deve tornare > 0 se a deve stare prima di b

  // per numeri
  return a - b; // quindi questo sarebbe l'0ridnamneto asscnedente
  return b - a; // quindi questo sarebbe l'0ridnamneto dissencdente

  // per stringhe .localCompare ordina in base all'allfabeto della lingua dell'utente
  return a.localCompare(b);
  return b.localCompare(a);
  // < o > invece confronto come se ofsse ASCII
  // ["a", "b", "à"].sort() // ["a", "b", "à"]
  // ["a", "b", "à"].sort(...localCompare...) // ["a", "à", "b"]

  // per oggetti tornate per semplicità 0 -1 o 1
});
```

## Array.map

```typescript
// Il .map è la trasformazione di un oggetto, ma applicata ad un array di oggetti

const arrayOriginale = ["a", "b", "c"];
const suffisso = "--";
const arrayNuovo = arrayOriginale
  .map(function newItemProducer(itemOriginale) {
    const itemNuovo = itemOriginale.toUppercase() + suffisso;
    return itemNuovo;
  }) // ["A--", "B--", "C--"]

  [(1, 2, 3)].map((x) => x * 2) /* => produce => */
  [(2, 4, 6)][(1, 2, 3)].map((x) => x * 2) /* => produce => */[(2, 4, 6)];

// VOTI: **

type Person = { name: string };
type Worker = { name: string; job: string };
function fromPersonToWorker(person: Person): Worker {
  return { ...person, job: "React developer" };
}

const fredAtHome: Person = { name: "Frederik" };
const fredAtSmc: Worker = fromPersonToWorker(fredAtHome);

const fannulloni: Array<Person> = [];
const fannulloniConstipendio: Array<Worker> =
  fannulloni.map(fromPersonToWorker);

// VOTI:********
```

## Array.filter

```typescript
// il .filter è il criterio su un ogetto ma applicato ad un array di oggetti

["apple", "orange", "ananas", "banana"].filter(
  (fruit) => fruit.charAt(0) === "a"
) /* => produces => */[("apple", "ananas")];

type Fruit = string;

function startsWihtA(fruit: Fruit): boolean {
  const firstLEtter = fruit.charAt(0);
  return firstLetter === "a";
}

const doesAppleStartsWithA = startsWihtA("appple");

const fruits: Array<Fruit> = ["apple", "orange", "ananas", "banana"];
const fruitsILike =
  fruits.filter(startsWihtA) /* => produces => */[("apple", "ananas")];
```

## Import/Export

```typescript
// file src/libreria.ts

export const x = 10;
export function haha() {}

// file src/applicazione.ts

import { x, haha } from "./libreria";

console.log(x);
haha();
```

esempio di file risultatnto dopo il bundling

```javascript
const librearia = (() => {
  const x = 10;
  function haha() {}

  return { x, haha }; // gli export diventato un oggetto ritornato
})();

const applicatione = (() => {
  const { x, haha } = libreria; // gli import diventato un oggetto destrutturato

  console.log(x);
  haha();
})();
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
function outer() {
  const a = 1;
  function inner() {
    const b = 2;
    console.log(b);
    console.log(a);
  }
  return inner;
}

class inner {
  constructor(a) {
    this.a = a;
    this.b = 2;
  }
  run() {
    console.log(this.b);
    console.log(this.a);
  }
}

class outer {
  constructor() {
    this.a = 1;
    this.inner = new inner(this.a);
  }
  run() {
    return this.inner;
  }
}
```

## Array.reduce

Array.reduce la codifica funzionale del ciclo for con accumulatore

```javascript
const array = [10, 20, 30];
let accumulatore = 100;
for (let i = 0; i < array.length; i++) {
  console.log({ accumulatore, "array[i]": array[i], i });
  const item = array[i];
  accumulatore = accumulatore + item;
}
console.log(accumulatore);

console.log(
  [10, 20, 30].reduce((accumulatore, item) => {
    console.debug({ accumulatore, item });
    return accumulatore + item;
  }, 100)
);
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

## Object destructuring

```tsx
// molto spesso ci capita di dover leggere degli attributi di un oggetto

// esiste un syntax sugar che ci permete di estraare gli attributi di un oggetto
// in variabili

// es:

// dichiarato in un latro file
const oggetto = { x: 1, y: 2, z: 3 };

// destructuring
const { x, y, z } = oggetto;

// viene in realtà tradotto in

const x = oggetto.x;
const y = oggetto.y;
const z = oggetto.z;

// in cosa viene trasformato questo?
const { a } = p;
// traduzione
const a = p.a;

// in cosa viene tradotto?
const {
  a: { b },
} = t;
// traduzione
const b = t.a.b;

// in cosa viene tradotto?
const {
  a: { b },
  c,
} = t;
// traduzione
const b = t.a.b;
const c = t.c;

// const è la keyword (puop essere let const var o niente)
// {a,b,c} si chiama LHS (left hand side)
// {a: 1, b: 2, c: 3} si chiama (right hand side)
// se a sinistra abbiamo la destrutturazione di un oggetto
// a destra abbiamo la construzione di un oggetto
const { a, b, c } = { a: 1, b: 2, c: 3 };

// in cosa viene tradotto?
// suggerimento: nei prametri di una funzione
// ci possiamo sempre scriver LHS delle variabili
function f({ a, b }) {
  return a + b;
}
// traduzione
function f() {
  const a = arguments[0].a;
  const b = arguments[0].b;
  return a + b;
}

// in cosa viene tradotto?
function f({ a, b }, { c, d }) {
  return a + b + c + d;
}
// traduzione
function f() {
  const a = arguments[0].a;
  const b = arguments[0].b;
  const c = arguments[1].c;
  const d = arguments[1].d;

  return a + b + c + d;
}

// in cosa viene tradotto?
function f(a, { b, c }, d) {
  return a * b * c * d;
}
// traduzione
function f() {
  const a = arguments[0];
  const b = arguments[1].b;
  const c = arguments[1].c;
  const d = arguments[2].d;
  return a * b * c * d;
}

// invece per le arrow function
// per specificare argv di java
(...argComeCiPare) => {};

// i tre punti ... fanno parte del opbject e array destructuring
// es:
const oggetto = { a: 1, b: 2, c: 3 };
const { a, ...ilResto } = oggetto;
// vioene tradotto in
const a = oggetto.a;
const ilResto = { b: a.b, c: a.c };

// per gli array
const array = ["a", "b", "c", "d"];
const [primo, secondo, ...resto] = array;
// vinee tradotto in
const a = array[0];
const b = array[1];
const resto = [array[2], array[3]];

// IMPORTANTE, per livello di array o ogetto
// i ... solo una volta, e solo alla fine
// es NO
const { ...a, ...b } = oggetto;
// es SI
const [[...restoA], ...restoB] = [[1, 2], 3, 4, 5];

const { a: aConNomeDiverso = 45, b: { c } = { c: 42 }, ...resto } = qualcosa;
```

# React Basics

## React paradigm (non interactive)

Punto di partenza react

```tsx
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
// const root = { currentRealDom: rootElement, currentVirtualDom: null }

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

function coppiaDiNumeri(numero) {
  return [numero, numerio];
}
const esempio = coppiaDiNumero(4);

// in react invece i nostri dati sono virtual dom
// e le nostre funzioni si chiamano componenti
// in react l'unita di suddivisione e riutilizzo del codice sono appuntoo i compoenti
// ma siccome il virtual dom non èatro che un albero di ogggetti
// un componento è una funzione che li produce

// function MioComponente(props) {
function MioComponente({ nome, cognome }: { nome: string; cognome: string }) {
  // const nome = props.nome
  // const cognome = props.cognome
  return (
    <h1>
      {nome} {cognome}
    </h1>
  );
  // React.createElement("h1", {}, nome, cognome);
  // return <h1>{nome + " " + cognome}</h1>
}
const esempio = <MioComponente nome={"Fred"} cognome={"Bat"} />;
// const esempio = React.createElement(MioComponente, { nome: "Fred", cognome: "Bat" })
// const esempio = MioComponente({ nome: "Fred", cognome: "Bat" }) // come se voelssi fare cosi
// const esempio = { component: MioComponente, props: { nome: "Fred", cognome: "Bat" } } // ma in realtà è cosi !!!
```

## React naive DIY

```typescript

type VirtualDom =
  { component: "p", props: { children: string } } |
  { component: "div", props: { children: Array<VirtualDom> } } |
  { component: (props: any) => VirtualDom, props: any } |
  null

function render(current: VirtualDom, next: VirtualDom, realDom: HtmlElement) {
  if (current === null && next !== null) {
    realDom.appendChild(create(next))
  }
  if (current !== && next === null) {
    realDom.removeChild(realDom.child)
  }
  update(current, next, realDom)
}

function create(virtualNode: VirtualDom): HtmlElement | null {
  if (virtualNode === null) return null
  if (typeof virtualNode.component === "Function") {
    return create(virtualNode.component(virtualNode.props))
  }
  if (typeof virtualNode.component === "string") {
    const element = document.createElement(virtualNode.component)
    for (const [attribute, value] of virtualNode.props) {
      element.setAttribute(attribute, value)
    }
    return element;
  }
}

function update(current: VirtualDom, next: VirtualDom, realDom: HtmlElement) {
  if (typeof virtualNode.component === "string") {
    // se il tag non cambia, es: da "div" rimane "div"
    if (current.component === next.component) {
      for (const attribute of Object.keys(current).concat(Object.keys(next))) {
        // aggiorno solo gli attributi che differiscono
        if (curent[attribute] !== next[attribute]) {
          element.setAttribute(attribute, next[attribute])
        }
      }
    } else {
      realDom.replaceChild(create(next), realDom.child)
    }
  }
}

```

## React props passing example

```tsx

React.createElement(component, props) // è una funzione
// che come primo parametro, accettaa la funzione che rappresenta il componente react
// oppure una string (es: "div") per indicare un elemento nativo html
// come seocndo parametro accetta i parametri per il componente
// nel caso di un componenten nativo tipo "div" soono proprio gli attributi html
// nel caso di un componentne a forma di funzione, i parametri da passargli
// es: <div id="container" aria-label="contenitore">
// è: React.createElement("div", { id: "container", "aria-label": "contenitore" })
// es: <div/>
// è: React.createElement("div", {})


// I have a react component in typescript
function Person({ name, age }: { name: String; age: number }) {
  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </div>
  );
}

// and and instance of it as react element
const personElement = <Person name="John" age={30} />;

// same code as above but in javascript and wihtout jsx
function Person(props) {
  return React.createElement(
    "div",
    {},
    React.createElement("div", {}, "name: ", props.name),
    React.createElement("div", {}, "age: ", props.age)
  );
}

const personElement = React.createElement(Person, { name: "John", age: 30 }); // è solo un modo per indicare a react che in realtà
// qui voglio eseguire la chiamata di functione
// const personElement = Person({ name: "John", age: 30 })
// E qui qui che avviene il passgio di paraemtri, in react noti come props

// In definitiva il JSX è solo un modo per codificare le chiamate a funzione.
// quindi volendo semplificare

function Person(props) {
  return div({}, [
    div({},["name: ", props.name])
    div({},["name: ", props.name])
  ])
}
const personElement = Person({ name: "John", age: 30 });

// l'unica grande differenza è che in questa versione semplificate le funzioni vengono eseguite subito
// mentre nella versione jsx le funzioni non vengono eseguite subito, bensi codificate come istruzioni per eseguirle
// cosi react puo decidere quando aggiornare quale parte della pagina, senza rieseguire il codice
// di tutto l'albero dell'applicazione
```

## children prop

```tsx
// se ci serve un componente che possa fare qualcosa con i propri figli
// possiamo utilizzare la prop speciale children
// che è un array di elementi tra l'apertura e chiususra del tag del nostro componente
function WrapperContainer({ children }) {
  return <div>{children}</div>;
}
const app = (
  <WrapperContainer>
    <input />
    <input />
  </WrapperContainer>
);

// equivale a scrivere
const app = WrapperContainer({
  children: [<input />, <input />],
});

// eseguendo diventa
const app = (
  <div>
    <input />
    <input />
  </div>
);
```

Ci sono due prop speciali e riservate in react: "children" e "key" che quindi non possono essere utilizzate come paramteri arbitrari per i nostri componenti

## List rendering

ricorda: react è in grado di renderizzare solo alcuni tipi di dato
null, undefined, true, false vengono interpretati come spazio vuoto
string e number invece come testo puro

<div/> che è il jsx per istanziare componenti nativi
<MyComponent/> che è il jsx per istanziare componenti creati da noi
[null, undefined, true, false, "", 0, <div>, <MyComponent/>] una array che contiene qualsiasi cosa di cui sopra

```tsx
// creare un compoentente react che visualizza il seguente dato
// e che va utilizzato cosi
// usare typescript, Array.map e le props
// per il momento ignoriamo i warning sulle "key"

const app = (
  <PersonList
    persons={[
      { id: "y0", name: "Fred", age: 28 },
      { id: "x1", name: "John", age: 30 },
    ]}
  />
);

// SPOILER soluzione

type Person = { id: string; name: string; age: number };

function PersonListItem({ person: { name, age } }: { person: Person }) {
  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </div>
  );
}

function PersonList({ persons }: { persons: Array<Person> }) {
  return (
    <div>
      {persons.map((person) => {
        return <PersonListItem key={person.id} person={person} />;
      })}
    </div>
  );
}

// key è una props speciale che serve quando renderizziamo array di elementi dinamici
// è vitale per 2 motivi
// performance: affinchè react possa riordinare in modo efficiente gli elementi in pagina
// significato: più avanti quando utilizzzeremo lo stato, noteremo che lo stato di un componente
//   è legato alla sua posizione nell'albero, e alla key se si trova in un array
//   quindi è fondamentale, che le key siano univoche e non ripetute per tutti gli elementi nell array (non serve che siano univoche globalmente)
```

## Event handlers

```tsx
const app = (
  <div
    onClick={(event) => {
      console.log("click");
    }}
  >
    click me
  </div>
);
```

Gli event handlers in react, sono gli stessi del DOM, con alcune piccole differenze:

- Il nome dell'evento è in CamelCase
- E una prop degli elementi nativi es `div`
- Gli va passato una callback (callback indica una funzione che verrà chiamata in un secondo momento)
- La cllback riceve un parametro, che per convenzione chiamaiamo event, che corrisponde all'evento.
  - questo evento non è l'evento nativo del dom, bensi una versione "virtuale" (perchè react per perfromanze riutilizza gli oggetti degli eventi)
  - pertanto, l'oggetto dopo che la funzione callback finisce, verà riutillazto, quinid per salvarlo, o utilizzarlo in un secondo momento
  - bisogno chiamare il metodo event.persist()

Come prassi, scrivere gli event handler inline, eventualmente per portarli fuori, selezionare codice in vscode usare click destro -> refactor -> extract con const in enclosing scope:

Scrive le callback come arrow function con graffe inline e nome dell'evento `event`, motivazioni:

- più breve
- inferisce tipo evento in typescript
- leggibilità (un livello di indirezione in meno)
- condizionalità (se fosse fuori, dobbiamo verificarlo due volte ed e facile dimentarselo)

Quando la si mette fuori, attenzione a non richiamare la funzione erroneamente:

```tsx
// CORRETTO
const onClick = (event) => {
  console.log();
};
const app = <div onClick={onClick}></div>;

// SBAGLIATO
const onClick = (event) => {
  console.log();
};
const app = <div onClick={onClick()}></div>;

// POTREBBE ANDARE BENE
const onClick = (event) => {
  console.log();
};
const app = (
  <div
    onClick={(event) => {
      onClick(event);
    }}
  ></div>
);

// POTREBBE ANDARE BENE
const makeOnClick = (testo) => (event) => {
  console.log(testo);
};
const app = <div onClick={makeOnClick("hello")}></div>;
```

## Rendering condizionale

### Early return

Si usa nel caso in cui, vogliamo tornare una versione "vuota" di un pezzo di UI
l'if else sul primo livello del componente
è utile sopratutto per il early-return in caso di paramteri nulli

```tsx
function MioComponente({ name }) {
  // se is visible e true visualizzare "Hello world"
  // altrimenti non visualizzare nulla
  if (name) {
    return <div>hello {name}</div>;
  }
  return null;
}
```

### Ternary operator

Serve per visualizzare in base ad una condizione booleana
l'operatore ternario e utile per graficare i valori booleani

```tsx
function MioComponente({ isVisible }) {
  return <div>{isVisible ? <div>It is visible</div> : null}</div>;
}
```

### Logic operators

Serve per visualizzare qualcosa se c'è. (Sfrutta la proprietà short-circuit degli operatori booleani di javascript)
gli operatori logici (di solito &&)
sono utili per visualizzare i campi opzionali

```tsx
function MioComponente({ nome, cognome }: { nome?: string; congome: string }) {
  return (
    <div>
      {nome && <div>{nome}</div>}
      {cognome && <div>{cognome}</div>}
    </div>
  );
}
```

### IIFE

Serve nel caso in cui necessetiamo di uno statement nella posizione di expression
IFEE (immediately invoked function expression)
ci permette di sfruttare gli statement nel jsx
utile sopratutto per rendering condizionale di piu di due alternative

```tsx
function MioComponente({ status }: { status: "acceso" | "spento" | "rotto" }) {
  return (
    <div>
      {(() => {
        switch (status) {
          case "acceso":
            return <div>acceso</div>;
          case "spento":
            return <div>spento</div>;
          case "rotto":
            return <div>rotto</div>;
        }
      })()}
    </div>
  );
}
```

## React component state

Mentre le props, sono delle infuromazioni che arrivano al compoennte dal chi lo richiama.

Lo stato di un compoennte è privato al componente (non è accessibile dal chiamante o dai figli, a meno chè non viene passato esplicitamente)

Come al cambio delle props di un componente, il compoenten viene rirendirizzato e aggiornato in pagina, cosi al cambiare dello stato interno avviene la medesima cosa.

## React hooks

React hooks, sono delle funzioni speciali, che troviamo nel package "react" nell'oggetto React, che cominciano con il suffisso use (es: useSTate, useEffect).

Ci permettono di agganciarci al lifecycle dei componenti, hanno funzioni diverse.

E hanno delle regole da rispettare. (piu avanti)

## React.useState

React.useState è una react hook, che serve per creare uno slot di stato interno privato al componente. Se questo slot di memoria viene aggiornato, il componete viene rirenderizzato.

```tsx
function MyComponent() {
  const [count, setCount] = React.useState(0);
  return (
    <button
      onClick={(event) => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
```

React.useState torna un array di due elementi: Il primo è il valore attuale dello slot di memoria, il secondo è una funzione che serve per aggiornarlo (setter);

Di norma si assegna a const con array destructuring, il primo elemento viene chiamato col nome scelto, e il setter con prefisso set;

React.useState riceve come parametro il valore iniziale assunto dallo slot di memoria.

React.useState ha anche un altra firma sia per il setter che per lo stato iniziale, che servono principalmente per motivi di performance.

```tsx
function MyComponent() {
  const [count, setCount] = React.useState(() => 0);
  return (
    <button
      onClick={(event) => {
        setCount((count) => count + 1);
      }}
    >
      {count}
    </button>
  );
}
```

Come primo parametro accetta una funzione che produce il valore iniziale da usare se produrre il valore iniziale è costoso.
Il setter, invece del valore da settare, accetta una funzione che dato il valore attuale produce il nuovo. Questo serve per la memoizzazione o per fare dei set state consecutivi.

### Simple counter + conditional rendering with workflow

```tsx
// usando typescript + verificare funzionamento in codesandbox
// scrivere un componente che si chiama Counter
// che dato un numero massimo di persone
// visualizza un bottone con il numero di persone attuali
// cliccando sul buttone il numero di persone attuali aumenta di 1
// se il numero di persone è magioreuguale all' 80% del massimo visualizzare anche scritta "capienza quasi raggiunta"
// se raggiunge la capienza, nascondere il bottone, e visualizzare messaggio "capienza raggiunta"
// cosa utilizzeremo?: component definition, props, useState, event handlers, conditional rendering

// SPOILER soluzione con workflow

// scrivere il jsx statico con valori hard coded

function Counter() {
  return (
    <div>
      <button>aumenta numero di persone di 1</button>
      <div>numero di persone: 0</div>
      <div>capienza massima: 10</div>
      <div>capienza quasi raggiunta</div>
      <div>capienza raggiunta</div>
    </div>
  );
}

// aggiungere gli event handler che fanno il alert() della descrizione di quello che dovrebbe accadere, oppure annotare con // TODO

function Counter() {
  return (
    <div>
      <button
        onClick={(event) => {
          // TODO
          alert("aumentare il conteggio di 1");
        }}
      >
        aumenta numero di persone di 1
      </button>
      <div>numero di persone: 0</div>
      <div>capienza massima: 10</div>
      <div>capienza quasi raggiunta</div>
      <div>capienza raggiunta</div>
    </div>
  );
}

// sostituire tutti i valori hard coded con delle variabili const nello scope del componente

function Counter() {
  const numeroDiPersone = 0;
  const capienzaMassima = 10;
  const isCapienzaQuasiRaggiunta = false;
  const isCapienzaRaggiunta = false;
  return (
    <div>
      {!isCapienzaRaggiunta && (
        <button
          onClick={(event) => {
            // TODO
            alert("aumentare il conteggio di 1");
          }}
        >
          aumenta numero di persone di 1
        </button>
      )}
      <div>numero di persone: {numeroDiPersone}</div>
      <div>capienza massima: {capienzaMassima}</div>
      {isCapienzaQuasiRaggiunta && <div>capienza quasi raggiunta</div>}
      {isCapienzaRaggiunta && <div>capienza raggiunta</div>}
    </div>
  );
}

// individuare quali const devono diventare props, e trascrivere

function Counter({ capienzaMassima }: { capienzaMassima: number }) {
  const numeroDiPersone = 0;
  const isCapienzaQuasiRaggiunta = false;
  const isCapienzaRaggiunta = false;
  return (
    <div>
      {!isCapienzaRaggiunta && (
        <button
          onClick={(event) => {
            // TODO
            alert("aumentare il conteggio di 1");
          }}
        >
          aumenta numero di persone di 1
        </button>
      )}
      <div>numero di persone: {numeroDiPersone}</div>
      <div>capienza massima: {capienzaMassima}</div>
      {isCapienzaQuasiRaggiunta && <div>capienza quasi raggiunta</div>}
      {isCapienzaRaggiunta && <div>capienza raggiunta</div>}
    </div>
  );
}

// individuare quali const dovrebbero cambiare nel tempo, e quindi trasformarle in React.useState

function Counter({ capienzaMassima }: { capienzaMassima: number }) {
  const [numeroDiPersone, setNumeroDiPersone] = React.useState(0);
  const isCapienzaQuasiRaggiunta = false;
  const isCapienzaRaggiunta = false;
  return (
    <div>
      {!isCapienzaRaggiunta && (
        <button
          onClick={(event) => {
            // TODO
            alert("aumentare il conteggio di 1");
          }}
        >
          aumenta numero di persone di 1
        </button>
      )}
      <div>numero di persone: {numeroDiPersone}</div>
      <div>capienza massima: {capienzaMassima}</div>
      {isCapienzaQuasiRaggiunta && <div>capienza quasi raggiunta</div>}
      {isCapienzaRaggiunta && <div>capienza raggiunta</div>}
    </div>
  );
}

// individuare le const ed implementare eventuali valori derivati

function Counter({ capienzaMassima }: { capienzaMassima: number }) {
  const [numeroDiPersone, setNumeroDiPersone] = React.useState(0);
  const isCapienzaQuasiRaggiunta = numeroDiPersone >= capienzaMassima * 0.8;
  const isCapienzaRaggiunta = numeroDiPersone >= capienzaMassima;
  return (
    <div>
      {!isCapienzaRaggiunta && (
        <button
          onClick={(event) => {
            // TODO
            alert("aumentare il conteggio di 1");
          }}
        >
          aumenta numero di persone di 1
        </button>
      )}
      <div>numero di persone: {numeroDiPersone}</div>
      <div>capienza massima: {capienzaMassima}</div>
      {isCapienzaQuasiRaggiunta && <div>capienza quasi raggiunta</div>}
      {isCapienzaRaggiunta && <div>capienza raggiunta</div>}
    </div>
  );
}

// implementare gli event handler

function Counter({ capienzaMassima }: { capienzaMassima: number }) {
  const [numeroDiPersone, setNumeroDiPersone] = React.useState(0);
  const isCapienzaQuasiRaggiunta = numeroDiPersone >= capienzaMassima * 0.8;
  const isCapienzaRaggiunta = numeroDiPersone >= capienzaMassima;
  return (
    <div>
      {!isCapienzaRaggiunta && (
        <button
          onClick={(event) => {
            setNumeroDiPersone(numeroDiPersone + 1);
          }}
        >
          aumenta numero di persone di 1
        </button>
      )}
      <div>numero di persone: {numeroDiPersone}</div>
      <div>capienza massima: {capienzaMassima}</div>
      {isCapienzaQuasiRaggiunta && <div>capienza quasi raggiunta</div>}
      {isCapienzaRaggiunta && <div>capienza raggiunta</div>}
    </div>
  );
}
```

### React state immutability

Lo stato (props, stato interno, context) in react fanno parte della parte immutabile e dichiarativa. (ad esempio reactRoot.render, Rract.useEffect e event handlers della parte imperativa)

Quindi! NON POSSIAMO MUTARE in alcun modo lo stato, bensi dobbiamo sempre produrre nuove versione (es: clonaendo e contesuatlmente modificando lo stato esistente) e pasarle ai vari setter.

```tsx
function MioComponente() {
  const [persona, setPersona] = React.useState({ nome: "", cognome: "" });
  return (
    <div>
      <input
        value={persona.nome}
        onChange={(event) => {
          // SBAGLIATO! perche react aggiorname il componente in pagina, solo se richiamamiamo un setter di stato
          persona.nome = event.currentTarget.value;

          // SBAGLIATO! perche react aggiorname il componente in pagina, solo se richiamamiamo un setter di stato con una nuova istanza
          persona.nome = event.currentTarget.value;
          setPersona(persona);

          // CORRETTO
          setPersona({ ...persona, nome: event.currentTarget.value });

          // CORRETTO MA ANCORA MEGLIO
          const nome = event.currentTarget.value; // catturo subito il valore, perchè per motivi vari potrebbe cambiare
          setPersona((persona) => ({ ...persona, nome }));

          // ALTERNATIVA PIU ESPLICITA
          const nuovoNome = event.currentTarget.value;
          const nuovaPersona = { ...persona, nome: nuovoNome };
          setPersona(nuovaPersona);
        }}
      />
      <input
        value={persona.cognome}
        onChange={(event) => {
          // FORMA MIGLIORE per compromesso numero di indirezioni ed esplicità
          const congome = event.currentTarget.value;
          setPersona({ ...persona, cognome });
        }}
      />
    </div>
  );
}
```

## React.useReducer

E la react hook fondamentale per lo stato interno.
E talmente fondamentale che React.useState è implementata attraverso React.useReducer.
React.useReducer ci permette di incapsulare la logica di modifica dello stato.
Primo parametero è una funzione che dato lo stato attuale ed un azione, produce nuovo stato.
Secondo parametro è lo stato iniziale, oppure una funzione che produce lo stato iniziale.
Ritorna un array di due elementi: il primo è lo stato attuale, il secondo una funzione per notificare un'azione da svolgere sullo stato.

```tsx
function MyComponent() {
  const [count, dispatchCount] = React.useReducer(
    (
      state,
      action: { type: "increment" } | { type: "decrement"; amount: number }
    ) => {
      switch (action.type) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - action.amount;
        // è buona pratica lanciare un errore su un azione non gestita
        // (occhio però questo errore è utile in sviluppo
        // perchè vediamo lo stack trace,
        // non dovrebbe mai accadere in production)
        default:
          throw new Error();
      }
    },
    0
  );
  return (
    <button
      onClick={(event) => {
        dispatchCount({ type: "increment" });
      }}
    >
      {count}
    </button>
  );
}
```

```tsx
// solitamente suddividiamo le operazioni in funzioni diverse

function inc() {}
function dec() {}
function set(amount: number) {}

// per motivi di performance con useReducer dobbiamo accorparle
// quindi diventa una serializzazione della chiamata a funzione fatta a mano

disptach({ type: "inc" }); // invece di inc()
dispatch({ type: "dec" }); // invece di dec()
dispatch({ type: "set", amount: 45 }); // invece di set(45)

switch (action.type) {
  case "inc":
  case "dec":
  case "set":
}
```

In realtà React.useState è una hook costruita con React.useReducer

```tsx
// versione esemplificativa
function useState(initial) {
  const [state, dispatch] = React.useReducer(
    (state, action) => action,
    initial
  );
  return [state, disptach];
}
```

## Todo list + workflow

```tsx
// realizzare un componente TodoList
// mi deve permettere di gestire una lista di todo
// implementare le seguenti features in ordine perhcè sono in ordine crescente di complessità
// quindi aggiungere un todo
// rimuovere un todo
// segnare come letto un todo
// modificare il testo di un todo
// riordinare i todo

// SPOILER soluzione

// da consultare i vscode -> ctrl + shift + p -> File: compare new untitled text files
// incollando il passggio precedente a sinistra, e quello successivo a destra per vedere le differenze

// ---

(() => {
  function TodoList() {
    return null;
  }
})();

// quindi aggiungere un todo

// ---

(() => {
  function TodoList() {
    return (
      <div>
        <input placeholder="scrivi qui" />
        <button>aggiungi</button>
        <div>
          <div>todo 1</div>
          <div>todo 1</div>
          <div>todo 1</div>
        </div>
      </div>
    );
  }
})();

// ---

(() => {
  function TodoList() {
    return (
      <div>
        <input
          placeholder="scrivi qui"
          onChange={(event) => {
            alert("modifica testo");
          }}
        />
        <button
          onClick={(event) => {
            alert("aggiungi");
          }}
        >
          aggiungi
        </button>
        <div>
          <div>todo 1</div>
          <div>todo 1</div>
          <div>todo 1</div>
        </div>
      </div>
    );
  }
})();

// ---

(() => {
  function TodoList() {
    return (
      <div>
        <input
          placeholder="scrivi qui"
          onChange={(event) => {
            alert("modifica testo");
          }}
        />
        <button
          onClick={(event) => {
            alert("aggiungi");
          }}
        >
          aggiungi
        </button>
        <div>
          {[].map((item, index) => {
            return <div key={index}>todo 1</div>;
          })}
        </div>
      </div>
    );
  }
})();

// ---

(() => {
  function TodoList() {
    const value = "";
    const todos = [];
    return (
      <div>
        <input
          placeholder="scrivi qui"
          input={value}
          onChange={(event) => {
            alert("modifica testo");
          }}
        />
        <button
          onClick={(event) => {
            alert("aggiungi");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return <div key={index}>{todo}</div>;
          })}
        </div>
      </div>
    );
  }
})();

// ---

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            alert("modifica testo");
          }}
        />
        <button
          onClick={(event) => {
            alert("aggiungi");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return <div key={index}>{todo}</div>;
          })}
        </div>
      </div>
    );
  }
})();

// ---

// [FATTO] quindi aggiungere un todo

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState(["todo di esempio"]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodos = [value, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return <div key={index}>{todo}</div>;
          })}
        </div>
      </div>
    );
  }
})();

// ---

// rimuovere un todo

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState(["todo di esempio"]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodos = [value, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                {todo}
                <button
                  onClick={(event) => {
                    alert("rimuovi todo");
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState(["todo di esempio"]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodos = [value, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                {todo}
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1); // la mutazione è solo locale quindi OK
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

// [FATTO] rimuovere un todo

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState(["todo di esempio"]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodos = [value, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                {todo}
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([{}]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodos = [value, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  ckecked={true}
                  onChange={(event) => {
                    alert("cambio checkbox");
                  }}
                />
                {todo}
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

// [FATTO] segnare come letto un todo

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([
      {
        text: "todo di esempio",
        isDone: false,
      },
    ]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodo = { text: value, isDone: false };
            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(event) => {
                    const isDone = event.currentTarget.checked;
                    const newTodos = [...todos];
                    const newTodo = { ...newTodos[index], isDone };
                    newTodos[index] = newTodo;
                    setTodos(newTodos);
                  }}
                />
                {todo.text}
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

// [FATTO] modificare il testo di un todo

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([
      {
        text: "todo di esempio",
        isDone: false,
      },
    ]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodo = { text: value, isDone: false };
            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(event) => {
                    const isDone = event.currentTarget.checked;
                    const newTodos = [...todos];
                    const newTodo = { ...newTodos[index], isDone };
                    newTodos[index] = newTodo;
                    setTodos(newTodos);
                  }}
                />
                <input
                  value={todo.text}
                  onChange={(event) => {
                    // catturo il nuovo valore
                    const newText = event.currentTarget.value;
                    // creo una copia dell'array
                    const newTodos = [...todos];
                    // creo una copia dell'oggetto
                    const newTodo = { ...newTodos[index], text: newText };
                    // aggiorno la copia dell'array
                    newTodos[index] = newTodo;
                    // aggiorno lo stato
                    setTodos(newTodos);
                  }}
                />
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

// riordinare i todo

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([
      {
        text: "todo di esempio",
        isDone: false,
      },
    ]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodo = { text: value, isDone: false };
            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            return (
              <div key={index}>
                <button
                  onClick={(event) => {
                    alert("sposta su");
                  }}
                >
                  ^
                </button>
                <button
                  onClick={(event) => {
                    alert("sposta giu");
                  }}
                >
                  v
                </button>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(event) => {
                    const isDone = event.currentTarget.checked;
                    const newTodos = [...todos];
                    const newTodo = { ...newTodos[index], isDone };
                    newTodos[index] = newTodo;
                    setTodos(newTodos);
                  }}
                />
                <input
                  value={todo.text}
                  onChange={(event) => {
                    // catturo il nuovo valore
                    const newText = event.currentTarget.value;
                    // creo una copia dell'array
                    const newTodos = [...todos];
                    // creo una copia dell'oggetto
                    const newTodo = { ...newTodos[index], text: newText };
                    // aggiorno la copia dell'array
                    newTodos[index] = newTodo;
                    // aggiorno lo stato
                    setTodos(newTodos);
                  }}
                />
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([
      {
        text: "todo di esempio",
        isDone: false,
      },
    ]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodo = { text: value, isDone: false };
            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            const isFirst = index === 0;
            return (
              <div key={index}>
                <button
                  disabled={isFirst}
                  onClick={(event) => {
                    if (!isFirst) {
                      const thisTodo = todos[index];
                      const upperTodo = todos[index - 1];
                      const newTodos = [...todos];
                      newTodos[index - 1] = thisTodo;
                      newTodos[index] = upperTodo;
                      setTodos(newTodos);
                    }
                  }}
                >
                  ^
                </button>
                <button
                  onClick={(event) => {
                    alert("sposta giu");
                  }}
                >
                  v
                </button>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(event) => {
                    const isDone = event.currentTarget.checked;
                    const newTodos = [...todos];
                    const newTodo = { ...newTodos[index], isDone };
                    newTodos[index] = newTodo;
                    setTodos(newTodos);
                  }}
                />
                <input
                  value={todo.text}
                  onChange={(event) => {
                    // catturo il nuovo valore
                    const newText = event.currentTarget.value;
                    // creo una copia dell'array
                    const newTodos = [...todos];
                    // creo una copia dell'oggetto
                    const newTodo = { ...newTodos[index], text: newText };
                    // aggiorno la copia dell'array
                    newTodos[index] = newTodo;
                    // aggiorno lo stato
                    setTodos(newTodos);
                  }}
                />
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();

// ---

// [TODO] riordinare i todo

(() => {
  function TodoList() {
    const [value, setValue] = React.useState("");
    const [todos, setTodos] = React.useState([
      {
        text: "todo di esempio",
        isDone: false,
      },
    ]);
    return (
      <div>
        <input
          placeholder="scrivi qui"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          onClick={(event) => {
            const newTodo = { text: value, isDone: false };
            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            setValue("");
          }}
        >
          aggiungi
        </button>
        <div>
          {todos.map((todo, index) => {
            const isFirst = index === 0;
            const isLast = index === todos.length - 1;
            return (
              <div key={index}>
                <button
                  disabled={isFirst}
                  onClick={(event) => {
                    if (!isFirst) {
                      const thisTodo = todos[index];
                      const upperTodo = todos[index - 1];
                      const newTodos = [...todos];
                      newTodos[index - 1] = thisTodo;
                      newTodos[index] = upperTodo;
                      setTodos(newTodos);
                    }
                  }}
                >
                  ^
                </button>
                <button
                  disabled={isLast}
                  onClick={(event) => {
                    if (!isLast) {
                      const thisTodo = todos[index];
                      const lowerTodo = todos[index + 1];
                      const newTodos = [...todos];
                      newTodos[index + 1] = thisTodo;
                      newTodos[index] = lowerTodo;
                      setTodos(newTodos);
                    }
                  }}
                >
                  v
                </button>
                <input
                  type="checkbox"
                  checked={todo.isDone}
                  onChange={(event) => {
                    const isDone = event.currentTarget.checked;
                    const newTodos = [...todos];
                    const newTodo = { ...newTodos[index], isDone };
                    newTodos[index] = newTodo;
                    setTodos(newTodos);
                  }}
                />
                <input
                  value={todo.text}
                  onChange={(event) => {
                    // catturo il nuovo valore
                    const newText = event.currentTarget.value;
                    // creo una copia dell'array
                    const newTodos = [...todos];
                    // creo una copia dell'oggetto
                    const newTodo = { ...newTodos[index], text: newText };
                    // aggiorno la copia dell'array
                    newTodos[index] = newTodo;
                    // aggiorno lo stato
                    setTodos(newTodos);
                  }}
                />
                <button
                  onClick={(event) => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
})();
```

## Stato estrinseco e intrinseco

intrinseco: salvare le info nell'oggeto, quinid aggiungere al lui un attributo [usare solitamente questo]
estrinseco: salvare le info su un oggetto in una collection esterna e ricollegare tramite key o index [usare se non si può modificare la foram dell'oggetto originale]

## React.useEffect

```tsx
function MyComponent() {
  const [count, setCount] = React.useState(0);
  // vvvvvvvvvvvvvvvvvvvv
  React.useEffect(() => {
    console.log(count);
    return () => {
      console.log("cleanup");
    };
  }, [count]);
  // ^^^^^^^^^^^^^^^^^^^^
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

React.useEffect serve per incapsulare operazioni non pure, in gergo "effetti".
Riceve 2 parametri.
Il primo è una funzione che incapsule le istruzioni imperative con effetti collaterali, chiamiamola effetto. Queste istruzioni trovandosi dentro una funzione vengono eseguite appunto solo se la funzinione viene richiamata. Opzionalmente può ritornare una funzione di cleanup che verrà eseguita prima della successiva chiamata dell’effetto.
Il secondo parametro è un array, in gergo array delle dipendenze, dentro questo array dobbiamo scrivere tutte le variabili che utiliziamo nelle funzione effetto ma che non appertengono al suo scope. Questo array va scritto in modo espicito nella maggiorpate dei casi non può essere computato. Fondamentalmente ci possiamo affidare all'ide per riempire questo array in automatico.
La funzione effetto viene eseguita la prima volta che il componente viene renderizzato e poi ogni volta che una delle variabili dell'array delle dipendenze cambia valore e poi quando l'elemtno scompare dalla pgaina.

### Title changer

```tsx
// reallizzare un componente che permette di cambiare il titolo della tab del browser
// usare React.useEffect e document.title = ""

// SPOILER soluzione
function TitleChanger() {
  const [title, setTitle] = React.useState("React Workshop");
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      page title:{" "}
      <input
        value={title} // bisogna specificare quale sia il valore contenuto nell'input
        onChange={(event) => {
          // aggiorniamo lo stato prendendo il valore del campo di input dall'evento
          setTitle(event.target.value);
        }}
      />
    </div>
  );
}
```

### With setInterval

setInterval permette di far eseguire una funzione ogni n millisecondi.
Ritorna un id che permette di fermare l'esecuzione della funzione con clearInterval.

```tsx
function MyComponent() {
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("tick");
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
}
```

## Custom hook

```tsx
function useLogChanges<Value>(value: Value) {
  React.useEffect(() => {
    console.log(value);
  }, [value]);
}
```

Si chiama custom hook, qualsiasi funzione che utilizza una react hook (React.useQualcosa).
Per convenzione i nome comincia con use.
Non ha limitazione in quanto a parametri e ritorno.
E l'unita di riutilizzo del codice per logiche di stato e effects.

RECAP: qual'è l'unita di riutilizzo del codice?

- in javascript : funzione
- in react per il markup : componente (ovvero una funzione che produce virtual dom)
- in react per gestione stato e effects : custom hook (ovvero una funzione che a sua volta richiama custom hook)

## React.useEffect examples

### Timer bomb

```tsx
// il componente deve visualizzare un bottone
// con il testo "clicccami se no esplodi entro x secondi"
// la x nel testo deve essere real time
// se si clicca, la x ridiventa 10
// se il timer scade, visualizzare al posto del bottone "sei esploso"

// SPOILER soluzione

export function CountDown() {
  const [secondiRimanenti, setSecondiRimanenti] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      // qui dobbiamo utilizzare la firma del setter che ci permette
      // di passare una funzione che prende il valore precedente e ritorna il nuovo valore
      // altrimenti dovremmo inlcudere secondiRimanenti nell'array delle dipendenze
      // e questo non è possibile perchè cambia ogni volta che la funzione viene eseguita
      // NOTA: il setter mantiene sempre la stessa istanza tra i render, quinid non va OMESSO dalle dipendenze
      setSecondiRimanenti((secondiRimanenti) => secondiRimanenti - 1);
    }, 1000);
    // prima del return è FARE
    // dopo il return è DISFARE
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const seEsploso = secondiRimanenti < 0;
  if (seEsploso) {
    return <h1>sei esploso</h1>;
  }
  return (
    <button
      onClick={() => {
        setSecondiRimanenti(10);
      }}
    >
      clicccami se no esplodi entro {secondiRimanenti} secondi
    </button>
  );
}
```

### useLocalStorage

```tsx
// data la seguente applicazione
// implementare un custom hook useLocalStorage che salva e legge dal local storage
// di modo che se ricarcio la pagina il valore del campo di input non viene perso
function App() {
  const [nota, setNota] = useLocalStorage("nota", "");
  return (
    <input
      value={nota}
      onChange={(event) => {
        setNota(event.currentTarget.value);
      }}
    />
  );
}
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  // TODO
}

// SPOILER soluzione
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  const [state, setState] = React.useState(initialValue);
  // effetto da eseguire per leggere il valore iniziale
  React.useEffect(() => {
    const deserialize = (jsonString: string): Value => JSON.parse(jsonString);
    const valueFromLocalStorage = localStorage.getItem(localStorageKey);
    if (valueFromLocalStorage) {
      setState(deserialize(valueFromLocalStorage));
    }
  }, [localStorageKey]);
  // effetto da eseguire al cambio valore
  React.useEffect(() => {
    const serialize = (value: Value): string => JSON.stringify(value);
    localStorage.setItem(localStorageKey, serialize(value));
  }, [localStorageKey, value]);
  return [state, setState];
}
```

## DO derive - DO NOT synchronize

```tsx
// Assolutamente corretto
const [a, setA] = React.useState(0);
const [b, setB] = React.useState(0);
const c = a + b;

// Assolutamente sbagliato perchè
// - bisogna sincronizzare lo stato manualmente
// - è più codice
// - è meno leggibile ed immediato
// - produce facilemente anche bug difficili da individuare
// - va contro la filosofia di react
const [a, setA] = React.useState(0);
const [b, setB] = React.useState(0);
const [c, setC] = React.useState(0);
React.useEffect(() => {
  setC(a + b);
}, [a, b]);
```

## Controlled components

Un componente si dice controllato quando il suo stato è interamente controllato da un componente superiore (chiamante).

## Pattern di composizione

### Props passing

```tsx
function Twice({ n }: { n: number }) {
  return <div>{n * 2}</div>;
}
function App() {
  return (
    <div>
      <Twice n={2} />
      <Twice n={4} />
    </div>
  );
}
```

### Event propagation

Per convenzione prefisso "on"

```tsx
function Switcher({
  value,
  onChange,
}: {
  value: boolean;
  onChange(value: boolean): void;
}) {
  // const [value, onChange] = React.useState(false)
  <div
    onClick={(event) => {
      onChange(!value);
    }}
  >
    {value ? "on" : "off"}
  </div>;
}

function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <div>
      <Switcher value={isEnabled} onChange={setIsEnabled} />
    </div>
  );
}
```

### Render props

Veder in codesandbox

```tsx
function Twice({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      {children}
    </div>
  );
}
function Chapter({
  heading,
  content,
}: {
  heading: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div>
      <div>{heading}</div>
      <div>{content}</div>
    </div>
  );
}
function App() {
  return (
    <div>
      <Chapter
        heading={<h1>Say hello twice</h1>}
        content={<Twice>Hello</Twice>}
      />
      <Chapter heading={<h1>Say bye twice</h1>} content={<Twice>bye</Twice>} />
    </div>
  );
}
```

### HOC - Higher Order Componente

Come una uunzione si dice di ordine superiore se riceve e/o ritorna una funzione a sua volta,
cosi HOC è una funzione che riceve un componente e ritorna un componente.

E una tecnica desueta. Ne possiamo però trovare l'unico esempio utile sopravvissuto in React.memo.

```tsx
function WithPropLog<Props>(
  component: React.FunctionComponent<Props>
): React.FunctionComponent<Props> {
  return function WithPropLog(props: Props) {
    console.log(props);
    return <Component {...props} />;
  };
}
const TwiceWithLog = WithPropLog(Twice);
```

## Client only CRUD app exercise

Realizzare in react, pure client side, una app CRUD che permette di gestire una lista di persone.

- lista delle persone (READ tutte le entita)
- bottone elimina persona (DELETE singola entita)
- form di creazione e modifica persona (READ singola entita, CREATE singola entita, UPDATE singola entita)

# React Advanced

# React Best Practices

## Tools

- [nodejs](https://nodejs.org/en/)
  - [nvm linux](https://github.com/nvm-sh/nvm) oppure [nvm windows](https://github.com/coreybutler/nvm-windows) serve per gestire più versioni di nodejs contemporanemante
    - istallare LTS (long term support)
  - [yarn](https://yarnpkg.com/lang/en/)
- [gitkraken](https://www.gitkraken.com/) A PAGAMENTO

### [vscode](https://code.visualstudio.com/)

#### Extensions

- prettier
- eslint
- git lens
- bookmarks
- vscode icons
- live share
- markdown all in one
- todo tree
- one dark pro theme
- debugger for chrome
- debugger for firefox
- debugger for edge
- paste json as code
- vscode-styled-components
- copilot A PAGAMENTO

#### Configurazione

ctrl + , apre la finestra di configurazione, configurare sempre per progetto, questo crea un file .vscode/settings.json che è da committare

- format on save -> enabled
- formattore di default per javascript, typescript, html, css -> prettier
- bracket pairs -> active
- linked editing -> enabled
- render whitespace -> boundary

#### Cheatsheet

- `ctrl + spazio` usa autocompletamento
- `ctrl + p`
  - `>` ci fa eseguire comandi
  - nome file ci fa cercare file
  - `:`25 ci fa andare a riga del file corrente
  - `@` ci fa cercare tra le variabii nel file corrente
  - `#` ci fa cercare tra i nomi
- `ctrl + d` seleziona tutta la parole sotto al cursore
- `ctrl + d` ripetuto più volte seleziona la prossima porzione di testo identica (piccolo modale in alto a destra offre toggle case sensitive)
- `shift + alt + ->` seleziona il codice dentro le parentesi
- `alt + selezione col mouse` seleziona in colonna
- `f2` rinomina una variabile in tutto il progetto
- `click destro -> refactor` varie operazioni
- `ctrl + shift + p -> search editor` ricerca super avanzata

https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_keyboard-reference-sheets
https://code.visualstudio.com/docs/editor/codebasics
https://code.visualstudio.com/docs/editor/editingevolved

### React dev tools

- [react dev tools - chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [react dev tools - firefox](https://addons.mozilla.org/it/firefox/addon/react-devtools/)

## Creating app with create-react-app

```bash
yarn create react-app --template typescript nome-della-app
```

Cercare sempre di avere un feedback-loop molto breve (vedo le conseguenze delle mie modifiche in meno di 5 secondi)

Specialemente quando si fa integrazione (es: portali) utilizzare proxy, mock (vedi docs)

## React code writing workflow

Per gli esempi fare riferimento agli esempi precedenti (ricerca testuale "workflow" in questo file)

- scrivere il jsx statico con valori hard coded
  - se ci sono liste o tabelle scrivere il jsx statico in modo da mostrare 3 elementi (così e piu facile identificare dove avviene la ripetizione)
- aggiungere gli event handler che fanno il alert() della descrizione di quello che dovrebbe accadere, oppure annotare con // TODO
- sostituire tutti i valori hard coded con delle variabili const nello scope del componente
- individuare quali const devono diventare props, ovvero parametri del componente, e trascrivere
- individuare quali const dovrebbero cambiare nel tempo ma sono privati al componente, e quindi trasformarle in React.useState
  - selezionare il valore, click destro, refactor, extract const module scope
- individuare le const ed implementare eventuali valori derivati
- se ci sono campi imput, fare il binding `<input value={value} onChange={event => {}}/>`
- se ci sono liste o tabelle, implementarle
  - scrivere `{[].map(item => { return null })}`
    - copiando la riga statica e mettendola dentro il return del map
    - aggiungere la prop speciale key (se non si ha un id entità, si può usare l'index anche se non è ottimale)
    - verificare che il .map ripete correttamente gli elementi
    - infine cancellare la riga statica
- implementare gli event handler
- aggiungere stato intrinseco/estrinseco
- inviduare eventuali effetti collaterali e codificarli con React.useEffect
  - ricordiamoci di inserire nell'array delle dipendenze tutte le variabile usate nell'effetto (possiamo sfruttare l'ide per farlo in automatico)
  - ricordiamoci di scrivere il codice di cleanup se serve

## Forms: thin wrapper approach

When you need to create form components in React, it is recommended to avoid using a library and instead follow these steps:

1. Start with the basic approach of using the `useState` hook and `input` elements with `value` and `onChange` props.

```jsx
const [value, setValue] = React.useState("");
<input
  value={value}
  onChange={(event) => setValue(event.currentTarget.value)}
/>;
```

2. To create a custom hook that encapsulates the state management for a form field, you can use a thin wrapper approach. Begin by creating a custom hook called `useField` and initially include only the `useState` hook.

```tsx
export function useField<Value>({ initialValue }: { initialValue?: Value }) {
  type State = {
    value: { type: "set"; value: Value } | { type: "unset" };
    hasChanged: boolean;
  };
  const [state, setState] = React.useState<State>(() => {
    const value = initialValue
      ? { type: "set" as const, value: initialValue }
      : { type: "unset" as const };
    return { value, hasChanged: false };
  });
  const value = state.value.type === "set" ? state.value.value : undefined;
  const setValue = React.useCallback(
    (value: Value) =>
      setState((state) => {
        return { ...state, value: { type: "set", value }, hasChanged: true };
      }),
    []
  );
  return { value, setValue };
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

## React application layers

Every layer has access only to its children. Dependency inversion applies only for types.

- **App Layer**: `component/*.tsx`
  - **Data Layer**: It answers `Get data` and `Modify data`. Implemented as named exports of custom hooks for queries and mutations that takes Domain/DTO objects and return Domain/DTO objects. `component/data.ts`
    - **Rest**: Implements caching and aggregation. Custom hooks that just return [`react-query` v4](https://tanstack.com/query/latest) calls. `component/data.ts`
      - **Api object**: Implements authentication and data fetching. implemented as instantiable object \*(to handle ouatuh schemes) with configuration, exposed ad REact context with custom hook `useApi`. Handles internally authentication, refresh tokens, custom headers, adapts data. Use at least `customFetch` insted of `fetch` to eventually add global features as needed. Use `msw` for mocking.
    - **GraphQl**: Implements authentication, caching and aggregation. `ApolloGraphQL` Client `component/data.ts`
  - **Visual components Layer**: It answers `Show something`. Implement reased visual components to isolate from specific implementation. Implemented as flat directory `components` with named export for react components or custom hooks that are a thin wrapper around ui-kit used (ex: Bootstrap, MaterialUI, ClayUI). If needed custom styling with `styled-components/macro` with _css={`color: red`}_ and theme as React context with custom hook `useTheme` or project css global variables. `component/*data*.tsx`
  - **Forms**: use thin layer approach `component/*.tsx`
  - **i18n**: use `react-i18next` with label extraction, without context key, with `<Trans/>` component.
  - **State managment**: use plain props passing. If needed use renderProps.
  - **Routing**: use [`react-router` v6](https://reactrouter.com/en/main/start/overview)

## Library choice

- Styling

  - styled-components + vscode extension
  - className + css

- Internationalization (i18n) and localization (l10n)

  - react-i18next

- Chart and diagrams:

  - visx [scales](https://observablehq.com/@d3/learn-d3-scales)
  - svg tags
  - d3

- UI Kits

  - Material UI
  - Bootstrap
  - Bootstrap Italia
  - ClayUI

- Routing

  - React Router

- State Management

  - DO NOT USE LIBRARIES
  - USE props passing and render props

- Data Loading (REST)

  - @tanstack/react-query (più performante e personalizzabile rispetto a react-swr)

- Data Loading (GraphQL)

  - Apollo-GraphQL + VSCode extension

- Date Library

  - [Luxon.js](https://moment.github.io/luxon) <-- miglior api e performance
  - Day.js molto utilizzato ma api meno chiara
  - date-fns molto utilizzato ma api non tipizzata in typescript

- Array Utilities

  - Lodash (più veloce e con piu funzionalita rispetto a underscore)

- Infinite Lists

  - react-virtuso (più completo in termini di funzionalità, auto-dimensionamento)
  - react-window (più utilizzato, ma manuale)
  - @tanstack/react-virtual (simile a react-window, ma più recente)

- Animations

  - Framer Motion
  - React Spring

- Table

  - #tanstack/table [vedi qui per i tipi](https://tanstack.com/table/v8/docs/guide/introduction)
  - ag-Grid (tabella completa e standard, la più utilizzata per amministrazione pubblica)

- Mock:

  - [msw](https://mswjs.io/)

- Fonts
  - https://github.com/fontsource/fontsource

# Notes

- Esercizio calcolatrice dopo il counter
- Creare progetto di esempio, re counter
- Creare progetto di esempio, realizzando un applicazioneaCRUD lime- Trascrivere in qzesto file gli szippea nnlla cadtella legacy/TODOo un applicazione CRUD come- Trascrivere in questo file gli snippet nella cartella legacy/TODO
