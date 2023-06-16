# Js Basics

# Js Modern

## Why compile JavaScript?

### Transpiling

Babel

### Bundling

Webpack

## Suggested Readings

- JavaScript the good parts (libro snello sulle features più utili, circa 100pag)
- JavaScript Allongee (libro programmazione funzionale, circa 250pag)
- You Don't Know JS https://github.com/getify/You-Dont-Know-JS (documentazione completa di ogni dettaglio del linguaggio, 7 libri da 400pag)
- Documentatzione Ufficiale React https://react.dev/learn

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

// se leggiamo qualcosa che non esiste otteniammo undefined
console.log(obj.nonEsiste); // undefined
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

### Metodi utili

```javascript
// .slice() crea un nuovo array a partire da un array esistente, da un indice di inizio e uno di fine (escluso)
// gli indici di inizio e fine sono opzionali e possono essere negativi
// indici negativi indicano posizioni a partire dalle fine dell'array
// indici positivi indicano posizioni a partire dall'inizio dell'array
const arr = [1, 2, 3, 4];
arr.slice(1, 3); // [2, 3]
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

molto spesso ci capita di dover leggere degli attributi di un oggetto
esiste un syntax sugar che ci permete di estraare gli attributi di un oggetto
in variabili

```javascript
// destructuring
const obj = { a: "foo", b: "bar" };
const { a, b } = obj;
// è equivalente a
const obj = new Object();
obj.a = "foo";
obj.b = "bar";
const a = obj.a; // "foo"
const b = obj.b; // "bar"

// a cosa equivale?
const { a, b, c } = { a: "foo", b: "bar" };
// SPOILER SOLUZIONE
const obj = new Object();
obj.a = "foo";
obj.b = "bar";
const a = obj.a; // "foo"
const b = obj.b; // "bar"
const c = obj.c; // undefined

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

// destructuring con rinominazione
// è utile in queli pochi casi in cui abbiamo delle variabili omonime
const x = 10;
const coordinates = { x: 1, y: 2 };
const { x: xCoordinate, y: yCoordinate } = coordinates;
// è equivalente a
const xCoordinate = coordinates.x; // 1
const yCoordinate = coordinates.y; // 2

// object rest operator, indicato con 3 punti (...) quando nella parte sinistra di un'assegnazione/inizializzazione
// raccoglie in un oggetto tutte le rimaneti proprietà (limitazione, uno per destructuring)
const { a, ...rest } = { a: 1, b: 2, c: 3 };
// equivale a
const obj = { a: 1, b: 2, c: 3 };
const a = obj.a;
const rest = { b: 2, c: 3 };
```

```typescript
function removeAttribute<
  Obj extends Record<string, any>,
  Attr extends keyof Obj
>(obj: Obj, attr: Attr): Omit<Obj, Attr> {
  const { [attr]: unused, ...rest } = obj;
  return rest;
}
const o = { x: 1, y: 2, z: 3 }; // tipo in typescript {x: number, y: number, z: number}
const o1 = removeAttribute(o, "x"); // tipo in typescript {y: number, z: number}
```

## Object spread

```javascript
// versione syntax sugar che si chiama object spread
const original = {
  a: 1,
  b: 2,
  c: 3,
};
const modified = { ...original, c: 345, d: 78 };
// versione senza lo spread operator
const modified = {
  a: original.a,
  b: original.b,
  c: 345,
  d: 78,
};
const modified = (() => {
  const obj = new Object();
  for (const key in original) {
    obj[key] = original[key];
  }
  obj.c = 345;
  obj.d = 78;
  return obj;
})();

// a cosa corrisponde?
const a = "z";
const o1 = { x: 42, y: 62 };
const o2 = { y: 12, z: 22 };
const o = { [a]: 42, ...o1, x: 62, ...o2 };
// SPOILER soluzione
const o = (() => {
  const obj = new Object();
  obj[a] = 42;
  for (const key in o1) obj[key] = o1[key];
  obj.x = 62;
  for (const key in o2) obj[key] = o2[key];
  return obj;
})();
/*
  {
    z: 22,
    x: 62,
    y: 12,
  }
*/
```

## Array destructuring + rest

```javascript
// array desctrucuring
const a = [1, 2, 3];
const [x, y, z] = a;
// è equivalente a
const x = a[0];
const y = a[1];
const z = a[2];

// a cosa equivale?
const [x, y, z] = [1, 2];
// SPOILER soluzione
const a = [1, 2];
const x = a[0]; // 1
const y = a[1]; // 2
const z = a[2]; // undefined

// a cosa equivale?
const [x, y] = [1, 2, 3, 4];
// SPOILER soluzione
const arr = [1, 2, 3, 4];
const x = arr[0];
const y = arr[1];

// è possibile anche omettere delle variabili
// in cosa si traduce?
const [x, , z] = [1, 2, 3];
// SPOILER soluzione

// è possibile assegnare un valore di default alle variabili
// che viene utilizzato se il valore estratto dall'array è undefined
const [a, b = "pera", c = "banana"] = ["mela", "ananas"];
// è equivalente a
const arr = ["mela", "ananas"];
const a = arr[0]; // "mela"
const b = arr[1] === undefined ? "pera" : arr[1]; // "ananas"
const c = arr[2] === undefined ? "banana" : arr[2]; // "banana"

// a cosa equivale?
const [] = [];
// SPOILER soluzione
const arr = [];

// a cosa equivale?
const [x = "posta", y, z] = [undefined, "messaggio"];
// SPOILER soluzione
const arr = [undefined, "messaggio"];
const x = arr[0] === undefined ? "posta" : arr[0]; //"posta"
const y = arr[1]; //"messaggio"
const z = arr[2]; //undefined

// rest operator, raccoglie gli elementi rimaneti in un array (limitazione: può essere solo l'ultimo)
const [x, y, ...resto] = [1, 2, 3, 4, 5, 6];
// equivale a
const arr = [x, y, ...resto];
const x = arr[0]; //1
const y = arr[1]; //2
const resto = arr.slice(2); //[3,4,5,6]
```

## Array spread

```javascript
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, 99, ...a2]; // [1,2,3,99,4,5,6]
// è equivalente a
const a3 = new Array();
for (const item of a1) a1.push(item);
a3.push(99);
for (const item of a2) a3.push(item);

// a cosa equivale?
const a1 = [1, 2, 3];
const a2 = [...a1, 4, 5, 6, [a1], ...[a1]];
// SPOILER soluzione
const a2 = new Array();
for (const item of a1) a2.push(item);
a2.push(4);
a2.push(5);
a2.push(6);
a2.push([a1]);
for (const item of [a1]) a2.push(item);

// [1,2,3,4,5,6,[a1],a1]
```

## Destructuring in function parameters + rest

IN javascript è possibile utilizzare il destructruing anche nei parametri di una funzione

```javascript
// ... sul primo livello dei parametri di una funzione raccoglie in un array eventuali parametri rimanenti
// limitazione un solo rest sul primo livello e solo alla fine
const f = (a, ...rest) => {
  return { a, rest };
  // return { a: a, rest: rest }
};
// cosa torna?
f(1, 2, 3); // {a: 1, rest:[2,3]}
// cosa torna?
f(); // {a: undefined, rest:[]}
// cosa torna?
f(1, 2); // {a: 1, rest:[2]}
// cosa torna?
f(1, [2, 3]); //{a: 1, rest:[[2,3]]}

// cosa torna?
((...args) => args)(); // []
// cosa torna?
((...args) => args)(1); // [1]
// cosa torna?
((...args) => args)(1, 2); // [1,2]
// cosa torna?
((...args) => args)(1, 2, 3); // [1,2,3]
// cosa torna?
((a, b, ...args) => ({ a, b, args }))(1, 2, 3); // {a:1,b:2, args:[3]}

// in cosa viene tradotto?
function f({ a, b }) {
  return a + b;
}
// SPOILER soluzione
function f(arg1) {
  const a = arg1.a;
  const b = arg1.b;
  return a + b;
}

// in cosa viene tradotto?
function f({ a, b }, { c, d }) {
  return a + b + c + d;
}
// SPOILER soluzione
function f(arg1, arg2) {
  const a = arg1.a;
  const b = arg1.b;
  const c = arg2.c;
  const d = arg2.d;
  return a + b + c + d;
}

// lo spread operator si indica con i 3 punti (...) in posizione RHS (Right Hand Side)
// le posizioni RHS sono a destra dell'uguale oppure negli argomenti di una funzione
// parametri di una funzione sono le variabili nella sua dichiarazione
// argomenti sono i valori che passiamo ad una funzione quando la richiamiamo

// cosa torna?
((a, b, c) => ({ a, b, c }))(1, 2, 3); // {a:1,b:2,c:3}
// cosa torna?
((a, b, c) => ({ a, b, c }))(); // {a: undefined, b: undefined, c:undefined}
// cosa torna?
((a, b, c) => ({ a, b, c }))(1); // {a:1, b:undefined, c:undefined}
// cosa torna?
((a, b, c) => ({ a, b, c }))(1, 2, 3, 4); // {a:1, b:2, c: 3}

// cosa torna?
((a, b, c) => ({ a, b, c }))(...[1, 2, 3]); // {a:1, b:2, c:3}
// cosa torna?
((a, b, c) => ({ a, b, c }))(...[]); // {a: undefined, b:undefined, c:undefined}
// cosa torna?
((a, b, c) => ({ a, b, c }))(...[1]); // {a:1, b:undefined, c:undefined}
// cosa torna?
((a, b, c) => ({ a, b, c }))(...[1, 2, 3, 4]); // {a:1, b:2, c:3}
// cosa torna?
((a, b, c) => ({ a, b, c }))(1, 2, ...[3, 4]); // {a:1, b:2, c:3}
// cosa torna?
((a, b, c) => ({ a, b, c }))(1, 2, ...[3, 4], 5, 6); // {a:1, b:2, c:3}
// cosa torna?
((a, b, c, ...r) => ({ a, b, c, r }))(1, 2, ...[3, 4], 5, 6); // {a:1, b:2, c: 3, r: [4,5,6]}

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

Modifica l'array originale

```javascript
[1, 2, 3].sort((a, b) => {
  // deve tornare 0 se sono uguali
  // deve tornare < 0 se a deve stare prima di b
  // deve tornare > 0 se a deve stare prima di b

  // per numeri
  return a - b; // quindi questo sarebbe l'ordinamento asscendente
  return b - a; // quindi questo sarebbe l'ordinamento disscendente

  // per stringhe .localCompare ordina in base all'allfabeto della lingua dell'utente
  return a.localCompare(b); // ordinamento ascendente
  return b.localCompare(a); // ordinamento discendente
  // < o > invece confronto come se ofsse ASCII
  // ["a", "b", "à"].sort() // ["a", "b", "à"]
  // ["a", "b", "à"].sort(...localCompare...) // ["a", "à", "b"]

  // per oggetti tornate per semplicità 0 -1 o 1
});
```

## Array.filter

```typescript
// Array.filter codifica qeusta forma di for
const a = ["apple", "orange", "ananas", "banana"];
const b = new Array();
for (let i = 0; i < a.length; i++) {
  if (a[i].charAt(0) === "a") {
    b.push(a[i]);
  }
}
// si puo condificare con
const a = ["apple", "orange", "ananas", "banana"];
const b = a.filter((fruit) => fruit.charAt(0) === "a"); // [("apple", "ananas")]

type Fruit = string;

function startsWihtA(fruit: Fruit): boolean {
  const firstLEtter = fruit.charAt(0);
  return firstLetter === "a";
}

const doesAppleStartsWithA = startsWihtA("appple");

const fruits: Array<Fruit> = ["apple", "orange", "ananas", "banana"];
const fruitsILike = fruits.filter(startsWihtA); // [("apple", "ananas")];

// ottenere una lista di persone che hanno più di 18 anni, usare il metodo filter
type Person = { name: string; age: number };
const people: Array<Person> = [
  { name: "Mario", age: 17 },
  { name: "Luigi", age: 18 },
  { name: "Pippo", age: 19 },
  { name: "Pluto", age: 20 },
];
// const adults =
// SPOILER soluzione
const maggiorenni = people.filter((p) => p.age >= 18);
```

## Array.map

Questo metodo codifica il concetto di trasformazione degli elementi di un array

```typescript
// Il .map è la trasformazione di un oggetto, ma applicata ad un array di oggetti
// Array.map codifica qeusta forma di for
const arrayOriginale = ["a", "b", "c"];
const suffisso = "--";
const arrayNuovo = new Array();
for (let i = 0; i < arrayOriginale.length; i++) {
  const itemOriginale = arrayOriginale[i];
  const itemNuovo = itemOriginale.toUppercase() + suffisso;
  arrayNuovo.push(itemNuovo);
}

const arrayOriginale = ["a", "b", "c"];
const suffisso = "--";
const arrayNuovo = arrayOriginale.map(
  (itemOriginale) => itemOriginale.toUppercase() + suffisso
); // ["A--", "B--", "C--"]
// o un po più esplicito
const arrayNuovo = arrayOriginale.map(function newItemProducer(itemOriginale) {
  const itemNuovo = itemOriginale.toUppercase() + suffisso;
  return itemNuovo;
});

[1, 2, 3].map((x) => x * 2); // [2, 4, 6]

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

// trasformare un array di numeri in un array degli stessi numeri ma di segno opposto
const a = [1, 2, 3, -4, -5, -6];
// const b =
// SPOILER soluzione
a.map((x) => x * -1);
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
// più brevemente
[10, 20, 30].reduce((memo, item) => memo + item, 100);

// fare la media artimetica di un array di numeri utilizzando .reduce
const a = [1, 2, 3, 4];
// const somma =
// const media =
// SPOILER soluzione
const somma = a.reduce((elem, item) => elem + item, 0);
const media = somma / a.length;
```

## Array.find Array.every Array.some Array.flatten Array.flatMap

```javascript
// .find, dato un criterio e un array, ritorna il primo oggetto che soddisfa il criterio, altrimenti undefined
// non modifica l'array orignale
// il criterio è codificato come una funzione che prendo l'elelnto dell alista e torna true o false
const aFruitThatStartsWithA = ["apple", "orange", "ananas", "banana"].find(
  (fruit) => fruit.charAt(0) === "a"
); // "apple"

// .some risponde alla domanda: c'è almeno un elemento che soddisfa il criterio?
const isThereAFruitThatStartWithA = [
  "apple",
  "orange",
  "ananas",
  "banana",
].some((fruit) => fruit.charAt(0) === "a"); // true

// .every risponde alla domanda: tutti gli elementi soddisfano il criterio?
const doAllFruitsSTartWithA = ["apple", "orange", "ananas", "banana"].every(
  (fruit) => fruit.charAt(0) === "a"
); // false

// il metodo .flatten ci permette di appiattire un array multidimensionale in un array monodimensionale
const arrayMultidimensionale = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const arrayMonodimensionale = arrayMultidimensionale.flatten(); // [1, 2, 3, 4, 5, 6]

// il metodo .flatMap ci permette di applicare una trasformazione ad ogni elemento di un array e poi appiattire il risultato
const lettereMinuscole = ["a", "b", "c"];
const lettereMinuscoleSeguiteDallaRelativaMaiuscola = lettereMinuscole.flatMap(
  (lettera) => [lettera, lettera.toUpperCase()]
); // ["a", "A", "b", "B", "c", "C"]
```

## Array methods fluent examples

```typescript
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPari = numeri.filter((x) => x % 2 === 0);
const numeriPariMoltiplicatiPerDue = numeriPari.map((x) => x * 2);

/*
There are only two hard things in Computer Science: cache invalidation and naming things.
-- Phil Karlton
*/
// è possibile evitare di dover inventare nuovi nomi
// utlizzando una tecnica chiamata fluent interface
// che consiste nel concatenare più metodi
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeriPariMoltiplicatiPerDue = numeri
  .filter((x) => x % 2 === 0)
  .map((x) => x * 2);

// requisito
// dato un array di numeri
// mantenere solo i numeri pari
// duplicarli in sequenza es: [1,2] => [1,1,2,2]
// raddopiare i numeri
// fare la media aritmetica (considerando che la funzione passata a reduce riceve i parametri accumulatore, elemento, index_element, array_originale)
function operazioneComplessa(numeri: Array<numeri>) {
  // usaretecnica fluent interface
}
// SPOILER soluzione
function operazioneComplessa(numeri: Array<numeri>) {
  const numeriPariRadoppiatiInSequenzaPerDue = numeri
    .filter((x) => x % 2 === 0)
    .flatMap((x) => [x, x])
    .map((x) => x * 2);
  const somma = numeriPariRadoppiatiInSequenzaPerDue.reduce(
    (accumulatore, elemento, index_element, array_originale) =>
      accumulatore + elemento,
    0
  );
  return somma / numeriPariRadoppiatiInSequenzaPerDue.length;
}
function operazioneComplessa(numeri: Array<numeri>) {
  return numeri
    .filter((x) => x % 2 === 0)
    .flatMap((x) => [x, x])
    .map((x) => x * 2)
    .reduce(
      (accumulatore, elemento, index_element, array_originale) =>
        accumulatore + elemento / array_originale.length,
      0
    );
}
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

sinistra: cosa importare

destra: da quale file

```typescript
import <sinistra> from <destra>

import <qualcosa> from "../hello/hello" // percorso relativo del file nei sorgenti (inlcudere od ometter l'estensione è specifico per la configurazione del bundler)
import <qualcosa> from "/hello/hello" // percorso assoluto del file nei sorgenti (quindi tipicamnete a partire dalla cartella src)
import <qualcosa> from "libreria-esterna" // nome della cartella della libreria all'interno di node_modules
  // node_modules è la cartella creata da npm (package manager di nodejs) quando si istallano le dipendenze ovvero librerie esterne
import <qualcosa> from "@user/library" // di recente è stato aggiunto anche il prefisso del nome dell'utente che ha creato la libreira
  // di default npm scarica le libreire da npmjs.com
  // esistono anche altri package manager (esempio yarn) e repository pubblici e privati

// named import
import { hello } from <qualcosa>
// corrispettivo per il named export
export const hello = ""

// default import
import NomeDiverso from <qualcosa>
// corrispettivo per default export
export default const NomeOriginale = ""

// combo
import NomeDiverso, { qualcosa } from <qualcosa>

// importa tutti i named export e li mette nell'oggetto Raccolta
import * as Raccolta from <qualcosa>

// named import e contesuale rinominzaione
// utile per disambiguare nomi identidici exportati da file diversi
import { qualcosa as qualcosaDiverso } from <qualcosa>

// named export o famo strano
export const a = 1
export const b = 2
// si può scrivere anche
const a = 1
const b = 2
export { a, b } // ATTENZIONE: non è un vero e proprio object literal

// altra forma ammessa di export
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

## Replicate Array.filter, Array.map

```typescript
// l'obiettivo è implementare per conto nostro le seguenti function sugli array di javascript
// Array.filter
// Array.map
// preferibilmente in typescript (l'editor vscode ha il supporto nativo)

// seguono alcuni passaggi propedeutici
// seguiremo prima un aproccio WET (Write Everything Thrice) cosi da capire dove avvengono le ripetizioni
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
// per evitare ripetizione di codice solitamente si procede ad "astrarre" il codice ripetuto
// quindi prendo il codice che si ripete
// lo metto dentro una funzione sensa parametri
// le parti che variano da un esempio all'altro le trasformo in parametri della funzione

// TODO: scrivere una funzione che data una condizione e un array di persone, restituisce un array di persone che soddisfano la condizione, senza modificare quello originale
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
// restituisce un nuovo array senza modifica l'originale che contiente solo gli oggetti che soddisfano la condizione
// la condizione è una funzione che dato un oggetto restituisce un booleano, true se l'oggetto soddisfa la condizione, false altrimenti
// in typescript per indicare un parametro che accetta un valore (numero, stringa, oggetto, array, ecc) si mette tra parentesi tonde
// per indicare un parametro che accetta il TIPO di un valore si usano le parentesi angolari <NomeDelTipo>

/*
function filtra<Oggetto>(array: Array<Oggetto>, condizione: (elemento: Oggetto) => boolean): Array<Oggetto> {
}
*/

// TODO: creare un nuovo array, senza modificare l'originale, dove le persone hanno il nome che finisce per "u" (quindi aggiungi "u" al nome)

/*
const personeDiOriginiSarde: Array<Persona> = [];
for (itero con un indice sull'array delle persone) {
  const copiaPersona = // copiare la persona però al nome aggiungiamo "u", 
  // aggiungere la copia della persona all'array delle persone con nome che finisce per "u"
}
console.log(persone)
console.log(personeDiOriginiSarde)
*/

// TODO: creare un nuovo array, senza modificare l'originale, dove le persone hanno il doppio dell'età

/*
const quelliCheComincianoLeFrasiConAiMieiTempi: Array<Persona> = []
  // simile a prima
*/

// TODO: creare un nuovo array, senza modificare l'originale, dove le persone hanno l'altezza aumentata di 12cm

/*
const concorrentiContestTacco12: Array<Persona> = []
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

## Asynchroneus programming

JavasScript è un linguaggio single thread, ovvero non puo eseguire più istruzione parallelamente, non può avere ne più processi,
ne più thread contemporaneamente.

Nel browser abbiamo un solo thread che esegue il javascript e disegna anche la pagina web.

(Un processo è un istanza di un software che viene eseguita parallelamente alle altre, ed è anche isolata dalle altre, dolitamente gestita dal sistema operativo)

(Un thread è simile ad un processo, con la diferenza che può condividere la memoria con altri thread dello stesso software, puo essere gestito sia dal s.o. che dal software stesso)

Siccome avere un solo thread nel browser e molto limitante, poichè ad esempio scaricare una risorsa come un'immagine potrebbe bloccare tutto il resto della papgina web, il browser in realtà implementa diversi thread, di cui però non abbiamo il controllo. Per retrocompatibiltà come autori di codice javascript possiamo scrivere codice solo per il thread principale, e il browser si occupa di gestire i thread secondari.

In realtà è possibile integraigre con questi thread secondari, tramite un meccanismo che si chiama programmazione asincrona.

La programmazione asincrona fondamentalmente è un isnimee di api/metodi che se richiamati, non ritornano un valore immediatamente. Per cominucarci l'esito dell'operazione richiesta, bisogna sempre fornire una funzione detta di callback, che verrà eseguita a task completo.

### JavaScript main thread event loop

Il thread principale di javascript, per poter accomodare api asincrone, e timer, è implementato come un event loop (ciclo di eventi).

```typescript
// Per semplicità possiamo immaginare che esista un array chiamato event queue (coda degli eventi), che contiene delle funzioni che non prendono parametri e non restiscono nulla.
const eventQueue: Array<() => void> = [
  () => {
    console.log("hello");
  },
  () => {
    console.log("world");
  },
];

// Dopodiche eseguiamo gli eventi uno alla volta, finche non finisce la coda (in nodejs)
// nel browser invece va in stato di attesa IDLE
while (eventQueue.length > 0) {
  const event = eventQueue.shift()!;
  event();
}
```

Quindi possiamo considerare che mai il codice javascript verrà eseguito contemporaneamente con altro codice, questo semplifica di molto lo sviluppo di sftware non dovendosi precoccupare di gestire race condition.

Esempio di come sono implemtati i timer

```typescript
const eventQueue: Array<() => void> = [
  () => {
    setTimeout(() => {
      console.log("hello");
    }, 1000);
  },
];

const timers: Array<{ timestamp: number; callback: () => void }> = [];

function setTimeout(callback: () => void, delay: number) {
  const timestamp = Date.now() + delay;
  timers.push({ timestamp, callback });
}

while (true) {
  if (timers.length > 0) {
    const now = Date.now();
    const timerIndex = timers.findIndex(({ timestamp }) => timestamp <= now);
    if (timer) {
      timers[timerIndex].callback();
      timers.splice(timerIndex, 1);
    }
  }
  const event = eventQueue.shift()!;
  event();
}
```

### Node style cps

Storicamente le prime convenzione nell-utilizzo di api asincrone provengono dal contesto di nodejs

```javascript
// o è valorizzato l'errore oppure il dato
fs.readFile("./nome-file.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// variante con 2 callback, una per succesos l'altra per errore
asyncOperation(
  "parameter",
  (data) => console.log(data),
  (err) => console.error(err)
);
```

### Promise

Con l'andare del tempo, si è capito che scrivere codice asincrono con la modalità dei callback portava diversi svantaggi.

```javascript
// esempio callback hell
fs.readFile("./nome-file.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.readFile("./nome-file2.txt", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.readFile("./nome-file3.txt", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  });
});
```

Per questo sono state introdotte le promise. Una promise è un astrazione che rappresenta un valore futuro. In Javascript è codicifacta come un oggetto.

```javascript
function asyncOperation() {
  return new Promise((resolve, reject) => {
    // resolve è una funzione, va chiamata se vogliamo segnalare che la promise è stata risolta con successo
    // reject è una funzione, va chiamata se vogliamo segnalare che la promise è stata rigettata con errore
  });
}

// si potrebbe intender la promise come una variazione sul tema callback
asyncOperation(
  "parameter",
  (data) => console.log(data),
  (err) => console.error(err)
);
asyncOperation("parameter").then(
  (data) => console.log(data), // questo potrebbe essere la funzione resolve
  (err) => console.error(err) // e questa la funzione reject
);
```

La creazione dell'oggetto promise è da intendersi come aver avviato un task.

Un promise si può trovare in tre stati:

- pending (in attesa)
- fulfilled (risolta con successo)
- rejected (errore)

I passaggi di stato possbili sono

- pending -> fulfilled (accade quando viene richiamta la funzione resolve)
- pending -> rejected (accade quando viene richiamata la funzione reject)

Poichè la promise rappresenta un valore futuro e non molteplici valori futuri, chiamare resolve e/o reject più volte è un errore.

```typescript
// Per leggere il valore contenuto in una promise, è necessario utilizzare il metodo .then()
let p: Promise<number>;

p.then(
  (data) => console.log(data),
  (err) => console.error(err)
);

// .then(onSucces, onError) riceve 2 parametri, entrambi opzionali, che sono dell funzioni callback
// il primo è in caso di successo
// secondo in caso di errore
```

Le promise con il tempo sono state arrichite da più metodi, tra cui .catch() .finally() Promise.all Promise.resolve

Vediamo come milgiora la sitauzione del callback hell con le promise

```javascript
// esempio callback hell
Promise.all(
  fs.readFile("./nome-file1.txt"),
  fs.readFile("./nome-file2.txt"),
  fs.readFile("./nome-file3.txt")
)
  .then(([file1, file2, file3]) => {
    console.log(file1, file2, file3);
  })
  .catch((err) => {
    console.error(err);
  });
```

Da notare, che il metodo .then() corrisponde ad un concetto storicamente chiamato "flatMap" e "monad bind".
Questo vul dire che il valore ritornato da .then() è una promise il cui valore è quello tornato dai callback forniti.
Se i callback forniti ritoranno promise queste vengono "schiacciate".

```javascript
Promise.resolve(4).then((n) => Promise.resolve(n * 2)); // Promise(8) non Promise(Promise(8))
```

### Async/Await

E una sitassi alternativa per lavorare con le promise. E' stata introdotta nella specifica ES2017.

Si puo annotare una keyword function o arrow function con la keyword async. Questo vuol dire che la funzione ritorna una promise, ma sopratutto permette di utilizzare la keyword await per leggere il valore all'interno di altre promise.

Il vantaggio di questa è che ci permete id scrivere codice come se fosse sincrono anche se è asincrono.

Internamente le async function vengonono codificate con tutto una serie di promise/callback.

```typescript
async function asyncOperation(): Promise<void> {
  try {
    const data = await fs.readFile("./nome-file.txt");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

#### window.fetch example

```typescript
async function getJSON(endPoint: string): Promise<any> {
  const response = await fetch(endPoint, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok", { cause: response });
  }
  const jsonData = await response.json();
  return jsonData;
}

async function exampleUsage() {
  // recuperare un json da "example.com/api/persone" e samparlo in console, utilizzare window.fetch, e sintassi async/await
  console.log(await getJSON("https://example.com/api/persone"));
}

async function postJSON(endPoint: string, data: any): Promise<any> {
  const response = await fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok", { cause: response });
  }
  const jsonData = await response.json();
  return jsonData;
}

async function exampleUsage() {
  // recuperare un json da "example.com/api/persone" e samparlo in console, utilizzare window.fetch, e sintassi async/await
  console.log(await getJSON("https://example.com/api/persone"));

  console.log(await postJSON("https://example.com/api/persone", { nome: "Mario", cognome: "Rossi" })
}
```

# React Basics

## Prerequisites

### HTML

HTML (Hyper Text Markup Language) è il linguaggio di markup (quindi progettato per authoring di documenti stampati o digitali), del web.

Il codice sorgente è testo, che viene visualizzato come un documento digitale solitamente da un browser.

```html
<html>
  <head>
    <title>Titolo della pagina</title>
  </head>
  <body>
    <section>
      <h1>Titolo<h1>
      <p>
        Un paragrafo di <br/>
        testo con <a href="http://altra.pagina.com">link</a>
      </p>
    </section>
  </body>
</html>
```

Un documento è strutturato come un albero gerarichico di elementi chiamati tag. La sintassi prevede l'apertura e la chiusura di un tag, che può contenere altri tag o testo.
L'apertura è il nome del tag circondato da parentesi angolari `<div>` la chiusira vuole uno slash `</div>`.
Alcuni tag non hanno contenuto, e si possono scrivere in un modo più compatto `<br />`.
Ogni tag può avere degli attributi, che sono coppie nome valore, e sono scritti all'interno del tag di apertura `<a href="http://altra.pagina.com">` nome segno uguale e contuneto tra doppi apici.
Esistono diversi tag che hanno attributi e comportamenti specifici.
Tag principali sono:

- html che contiene tutto il documento
- head che contiene informazioni sul documento che non verranno visualizzate
- body che contiene il contenuto del documento
- div che serve per separare il contenuto in blocchi
- span che puo separe anche singoli caratteri
- a per codificare i link

### CSS

CSS (Cascading Style Sheet) è un linguaggio di stilizzazione e layout per documenti HTML.

```css
p {
  color: red;
  font-size: 16px;
}

button.primary {
  background-color: blue;
}
```

La sintassi de CSS consiste in un file di coppie: selettore e attributi.
Il selettore CSS è un espressione che indica quali elementi HTML devono essere le regole che segono nel blocco tra le paretnesi graffe.
Gli attributi sono coppie nome valore, separati da due punti, e terminati da un punto e virgola.
I selettori hanno una sintassi variegata e compinibile, alcuni esempi:

- `p {}` seleziona tutti i tag p
- `.container {}` seleziona tutti gli elementi con attributo classe specificato `<div class="container">`
- `#password {}` seleziona tutti gli elementi con attributo id specificato `<input id="password">`
- `button:hover {}` seleziona tutti i tag button quando il mouse vi è posizionato sopra (i due punti si chiamano pseudo-selettori)
- `p.note` seleziona tutti i tag specificati che hanno l'attributo classe specificato `<p class="note">`
- `.container .footer` seelziona tutti gli elementi figli `<div class="container"><div class="footer">...`

### DOM

DOM (Document Object Model) ed è l' API javascript per poter manipolare il documento.

```js
// ritrovare l'istanza dell'oggetto che rappresenta l'elemto html
const element = document.getElementById("element-id");

// creare un nuovo elemento html
const element = document.createElement("div");

// impostare un attributo
element.setAttribute("class", "container");

// aggiungere un elemento figlio
const child = document.createElement("div");
element.appendChild(child);

// rimuovere un elemento figlio
element.removeChild(child);

// crea nodo tesutale
const text = document.createTextNode("testo");

// cambia testo nodo testuale
text.nodeValue = "nuovo testo";

// aggiungere un event listener

const onClikc = (event) => {
  console.log("click");
};
element.addEventListener("click", onClick);

// rimuovere un event listener
element.removeEventListener("click", onClick);
```

````

### Nodejs npm

Mentre il browser è lambiente di esecuzione di JavaScript che ha accesso al documento, NodeJS è l'ambiente di esecuzione di JavaScript che ha a dispozione tutte le risorse del sistema operativo.

Npm è il package manager di NodeJS, che permette di installare librerie JavaScript e di gestire le loro dipendenze.

Ad oggi, le applicazioni JavaScript sono abbastanza complesse da richiedere l'uso di librerie esterne.

Quando una volta si includevano i file delle librerie esterne manualmente all'interno del progetto, ad oggi questo precesso è automatizzato.

Basta fornire un file di nome `package.json` che contiente una lista di librerire esterne da utilizzare nel progetto e lanciare il comando `npm install`.

Npm semplicmente andrà a scaricare la lista dei file forniti all'interno della cartella `node_modules`. (package.json da includere, node_modules da escludere dal sistema di versionning).

Esistono anche altetrnative a npm, quella più utilizzata si chiama yarn (è più veloce e ha features extra).

### Functional programming basics

#### keyword function e arrow function

```js
function f(a) {
  return a + 1;
}
const g = (b) => a + 2;
````

#### Pure function

Un a funzione si dice pura se soddifa questi criteri:

- dato uno stesso input, restituisce sempre lo stesso output
- non ha effetti collaterali ovvero non modifica lo stato del sistema circostante

```js
// impura
function example1(arg) {
  total.amount += 1; // modifica il sistema circostante
  return arg * total.amount; // resituisce un valore diverso ad ogni chiamata
}

// pura
function example2(arg) {
  return arg * 42; // restituisce sempre lo stesso valore per los tesso imput
}

// impura
function example3(arg) {
  total.amount = arg * 50; // modifica il sistema circostante
}
```

#### Higher order function

Una funzione si dice di ordine superiore se soddisfa almeno uno di questi criteri:

- accetta uno o più funzioni come argomenti
- ritorna una funzione

```js
// higher order function perchè restiruisce una funzione
function f() {
  return function () {
    return 42;
  };
}

// higher order function perchè accetta una funzione come argomento
function double(f, x) {
  return f(f(x));
}
```

## What is React

E' una libreria javascript opensource createa nel lontanto 2013.
Serve per realizzare interfaccie utente interattive (web, mobile, desktop, 3d).
Si basa su un paradigma di programmazione funzionale, dichiarativo e immutabile.

- funzionale perchè fa un uso intensivo di funzioni e features collegate (higher order function, closure, array methods ecc...)
- dichiarativo perchè invece di descrivere come realizzare un'interfaccia utente, il programmatore descrive cosa deve essere visualizzato, è la libreria ad occuparsi di come realizzarlo
- immutabile perchè come vincolo tecnico non è possibile modificare lo stato dell'interfaccia utente, ma solo sostituirlo con uno nuovo

## React enviroment

Siccome react sfrutta una moltitudine di features moderne di javascript, è necessario un ambiente di sviluppo che le supporti.
E possibile configurare un tale ambiente completamente da zero, ma è molto più semplice utilizzare un tool che lo faccia per noi.

Le seguenti sono al momento le più affermate:

- create-react-app è un setup con le best practice per lo sviluppo di applicazioni frontend single page
- next.js è un setup per lo sviluppo di applicaioni full stack (frontend con react, backend con nodejs)
- codesandobx.io è un ambiente online per prototipazione veloce e condivisibile

## Virtual DOM

React nasce per indirizzare le seguenti problematiche:

- facilitare la creazione di interfacce, evitando allo sviluppatore di dover scrivere codice complesso per aggiornare l'interfaccia, allo svilupaptore basta specifica il risultato finale voluto
- gestire l'interattività
- migliorare le performance evitando modifiche ridondanti e costose al dom

Il principio originale per il suo sviluppo è: la cosa più costosa alivello di ram e cpu è proprio l'utilizzo del DOM (lettura o scrittura), quindi per evutare il più possibile di interagire con il DOM react rappresenta il documento in memoria, in un oggetto chiamato virtual DOM che ne è una rappresentazione semplificata.

Quindi il virtual dom non è altro che una struttura gerarchica di oggetti javascript che rappresenta il documento html.

Il funzionamento base di react è il seguente:

- in memoria abbiamo il virtual dom che rappresnta lo stato attuale del dom reale
- notifichiamo a react che vogliamo aggiornare il documento passandogli la nuova rappresentazione del documento in virtual dom
- react confronta il virtual dom attuale con quello nuovo e determina quali sono le modifiche da apportare al dom reale

React è suddiviso in due parti:

- "react" (package javascript per lavorare con il dom virtuale), di suo non è legato ad una piattaforma o a una qualche visualizzione
- renderer è un componente software che si occupa di visualizzare il dom virtuale su una piattaforma specifica
  - web: packege "react-dom"
  - mobile: package "react-native"
  - 3d: "react-three-fiber"

## React paradigm (non interactive)

Punto di partenza react

```tsx
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
// const root = { currentRealDom: rootElement, currentVirtualDom: null }

const pagina1 = <h1>Fred</h1>;
// const pagina1 = React.createElement("h1", {}, ["Fred"])
// const pagina1 = {component: "h1", children: ["Fred"]}

// root = { currentRealDom: rootElement, currentVirtualDom: null }
root.render(<h1>Fred</h1>);
// root = { currentRealDom: rootElement, currentVirtualDom: <h1>Fred</h1> }
root.render(<h1>Luca</h1>);
// root = { currentRealDom: rootElement, currentVirtualDom: <h1>Luca</h1> }
root.render(<h1>Mario</h1>);
```

## Unita di suddivisione e riutilizzo del codice

```tsx
// in un software generico
// abbiamo i dati e le istruzioni
// e utilizziamo le funzioni
// per suddividere il codice, e poterlo eventualmente riutilizzare
// noi componiamo software tramite il richiamo di funzione

function coppiaDiNumeri(numero) {
  return [numero, numerio];
}
const esempio = coppiaDiNumero(4);

// in react invece i nostri dati sono il virtual dom
// e le nostre funzioni si chiamano componenti
// in react l'unita di suddivisione e riutilizzo del codice sono appunto i componenti
// ma siccome il virtual dom non è altro che un albero di oggetti
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
// const esempio = MioComponente({ nome: "Fred", cognome: "Bat" }) // come se volessi fare cosi
// const esempio = { component: MioComponente, props: { nome: "Fred", cognome: "Bat" } } // ma in realtà è cosi !!!
```

## React naive DIY

```typescript
type VirtualDom =
  | { component: "p"; props: { children: string } }
  | { component: "div"; props: { children: Array<VirtualDom> } }
  | { component: (props: any) => VirtualDom; props: any }
  | null;

function render(current: VirtualDom, next: VirtualDom, realDom: HtmlElement) {
  if (current === null && next !== null) {
    realDom.appendChild(create(next));
  }
  if (current !== null && next === null) {
    realDom.removeChild(realDom.child);
  }
  update(current, next, realDom);
}

function create(virtualNode: VirtualDom): HtmlElement | null {
  if (virtualNode === null) return null;
  if (typeof virtualNode.component === "Function") {
    return create(virtualNode.component(virtualNode.props));
  }
  if (typeof virtualNode.component === "string") {
    const element = document.createElement(virtualNode.component);
    for (const [attribute, value] of virtualNode.props) {
      element.setAttribute(attribute, value);
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
          element.setAttribute(attribute, next[attribute]);
        }
      }
    } else {
      realDom.replaceChild(create(next), realDom.child);
    }
  }
}
```

## React props passing example

```tsx

React.createElement(component, props) // è una funzione
// che come primo parametro, accetta la funzione che rappresenta il componente react
// oppure una stringa (es: "div") per indicare un elemento nativo html
// come secondo parametro accetta i parametri per il componente
// nel caso di un componente nativo tipo "div" sono proprio gli attributi html
// nel caso di un componente a forma di funzione, i parametri da passargli
// es: <div id="container" aria-label="contenitore">
// è: React.createElement("div", { id: "container", "aria-label": "contenitore" })
// es: <div/>
// è: React.createElement("div", {})


// React component in typescript
function Person({ name, age }: { name: string; age: number }) {
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

const personElement = React.createElement(Person, { name: "John", age: 30 });
// è solo un modo per indicare a react che in realtà
// qui voglio eseguire la chiamata di funzione
// const personElement = Person({ name: "John", age: 30 })
// E qui qui che avviene il passgio di parametri, in react noti come props

// In definitiva il JSX è solo un modo per codificare le chiamate a funzione ritardate.
// quindi volendo semplificare

function Person(props) {
  return div({}, [
    div({},["name: ", props.name])
    div({},["name: ", props.name])
  ])
}
const personElement = Person({ name: "John", age: 30 });

// l'unica grande differenza è che in questa versione semplificate le funzioni vengono eseguite subito
// mentre nella versione jsx le funzioni NON vengono eseguite subito, bensì codificate come istruzioni per eseguirle in un secodno momento
// cosi react puo decidere quando aggiornare quale parte della pagina, senza rieseguire il codice di tutto l'albero dell'applicazione
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

`Consegna: creare un componente che utilizzando la prop children, vializzzi i propri figli in un div, due volte, richiamrlo e testare visualmente il risultato`

Ci sono due prop speciali e riservate in react: "children" e "key" che quindi non possono essere utilizzate come paramteri arbitrari per i nostri componenti

## List rendering

ricorda: react è in grado di renderizzare solo alcuni tipi di dato
null, undefined, true, false vengono interpretati come spazio vuoto
string e number invece come testo puro

`<div/>` che è il jsx per istanziare componenti nativi
`<MyComponent/>` che è il jsx per istanziare componenti creati da noi
`[null, undefined, true, false, "", 0, <div>, <MyComponent/>]` una array che contiene qualsiasi cosa di cui sopra

```tsx
// creare un compontente react che visualizza il seguente dato
// usare typescript, Array.map e le props
// per il momento ignoriamo i warning sulle "key"
// di seguito la specifica di come lo sivuole istanziare

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
//   è legato alla sua posizione nell'albero del dom virtuale, e alla key se si trova in un array
//   quindi è fondamentale, che le key siano univoche e non ripetute per tutti gli elementi nell' array (non serve che siano univoche globalmente)
// solitamente usare l'id dell'entita che viene tornata dal backend
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

- Il nome dell'evento è in CamelCase prefissato con "on"
- E una prop degli elementi nativi es: `div`
- Gli va passato una callback (callback indica una funzione che verrà chiamata in un secondo momento)
- La callback riceve un parametro, che per convenzione chiamiamo event, che corrisponde all'evento con relativi dettagli.
  - questo evento non è l'evento nativo del dom, bensi una versione "virtuale" (perchè react per motivi di performance riutilizza gli oggetti degli eventi, in più appara differenze tra vari browser)
  - pertanto, l'oggetto dopo che la funzione callback finisce, verà riutillizzato, quindi per salvarlo, o utilizzarlo in un secondo momento
  - bisogno chiamare il metodo event.persist()

Come prassi, scrivere gli event handler inline, eventualmente per portarli fuori, selezionare codice in vscode usare click destro -> refactor -> extract con const in enclosing scope:

Scrive le callback come arrow function con graffe inline e nome dell'evento `event`, motivazioni:

- più breve
- inferisce tipo evento in typescript
- leggibilità (un livello di indirezione in meno)
- condizionalità (se fosse fuori, dobbiamo verificare la codnizione due volte ed e facile dimentarselo)

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
  if (!name) {
    return null;
  }
  return <div>hello {name}</div>;
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

Serve per visualizzare qualcosa se presente. (Sfrutta la proprietà short-circuit degli operatori booleani di javascript)
gli operatori logici (di solito && e ||)
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

Serve nel caso in cui necessetiamo di uno statement nella posizione di un expression
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

Mentre le props, sono delle informazioni che arrivano al componente dal chi lo richiama.

Lo stato di un componente è privato al componente (non è accessibile dal chiamante o dai figli, a meno chè non viene passato esplicitamente)

Come al cambio delle props di un componente, il componente viene rirendirizzato e aggiornato in pagina, cosi al cambiare dello stato interno avviene la medesima cosa.

## React hooks

React hooks, sono delle funzioni speciali, che troviamo nel package "react" nell'oggetto React, che cominciano con il suffisso use (es: useState, useEffect).

Ci permettono di agganciarci al lifecycle dei componenti, hanno funzionalità diverse.

E hanno delle regole da rispettare. (piu avanti)

## React.useState

React.useState è una react hook, che serve per creare uno slot di stato interno privato al componente. Se questo slot di memoria viene aggiornato, il componente viene rirenderizzato.

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
// se il numero di persone è magioreuguale all' 80% del massimo, visualizzare anche scritta "capienza quasi raggiunta"
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

// aggiungere gli event handler che fanno alert() della descrizione di quello che dovrebbe accadere, oppure annotare con // TODO

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
// aggiungere il rendering condizionale

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

Lo stato (props, stato interno, context) in react fanno parte della parte immutabile e dichiarativa. (ad esempio reactRoot.render, React.useEffect e event handlers della parte imperativa)

Quindi! NON POSSIAMO MUTARE in alcun modo lo stato, bensi dobbiamo sempre produrre nuove versione (es: clonando e contestualmente modificando lo stato esistente) e passarlo ai vari setter.

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

`Consegna: reallizare un componente che permette di editare un oggetto persona con campi: nome, età e verificare con react dev tools`

## React.useReducer

E la react hook fondamentale per lo stato interno.
E talmente fondamentale che React.useState è implementata attraverso React.useReducer.
React.useReducer ci permette di incapsulare la logica di modifica dello stato.
Primo parametero è una funzione che dato lo stato attuale ed un azione, produce il nuovo stato.
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
        // (attenzione perchè questo errore è utile in sviluppo perchè vediamo lo stack trace,non dovrebbe mai accadere in production)
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
// quindi diventa una serializzazione della chiamata a funzione fatta manualmente

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

```tsx
// Consegna: realizzare un componente che ha uno stato che è un numero. E possibile fare le segeutni operazioni sul numero
// - raddopiarlo
// - dimezzarlo
// - incrementarlo di 1
// - decrementarlo di 1
// - azzerarlo
// realizzare prima con useReducer e poi con useState e confrontare le due soluzioni

// SPOILER soluzione

function NumberOperationsReducer() {
  const [number, dispatch] = React.useReducer(
    (
      state: number,
      action:
        | { type: "double" }
        | { type: "half" }
        | { type: "increment" }
        | { type: "decrement" }
        | { type: "reset" }
    ) => {
      switch (action.type) {
        case "double":
          return state * 2;
        case "half":
          return state / 2;
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        case "reset":
          return 0;
        default:
          throw new Error();
      }
    },
    0
  );
  return (
    <div>
      <div>{number}</div>
      <button onClick={() => dispatch({ type: "double" })}>raddoppia</button>
      <button onClick={() => dispatch({ type: "half" })}>dimezza</button>
      <button onClick={() => dispatch({ type: "increment" })}>
        incrementa
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        decrementa
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>azzera</button>
    </div>
  );
}

function NumberOperationsState() {
  const [number, setNumber] = React.useState(0);
  return (
    <div>
      <div>{number}</div>
      <button onClick={() => setNumber(number * 2)}>raddoppia</button>
      <button onClick={() => setNumber(number / 2)}>dimezza</button>
      <button onClick={() => setNumber(number + 1)}>incrementa</button>
      <button onClick={() => setNumber(number - 1)}>decrementa</button>
      <button onClick={() => setNumber(0)}>azzera</button>
    </div>
  );
}
```

## Todo list + workflow

```tsx
// realizzare un componente TodoList
// deve permettere di gestire una lista di todo
// implementare le seguenti features in ordine perchè sono in ordine crescente di complessità
// aggiungere un todo
// rimuovere un todo
// segnare come letto un todo
// modificare il testo di un todo
// riordinare i todo

// SPOILER soluzione

// da consultare i vscode -> ctrl + shift + p -> File: compare new untitled text files
// incollando il passaggio precedente a sinistra, e quello successivo a destra per vedere le differenze

// ---

(() => {
  function TodoList() {
    return null;
  }
})();

// quindi aggiungere un todo

// ---
// aggiungo jsx statico per aggiunta e visualizzazione dei todo

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
// aggiungere gli event handler con annotazione da completare

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
// sostituire jsx statico lista con lista dinamica

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
// sostituire valori hardcoced con const

(() => {
  function TodoList() {
    const value = "";
    const todos = [];
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
// codificare lo stato interno

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

// implemtare gli event handler
// [FATTO] aggiungere un todo

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
// aggiungi elementi grafici e event handler per rimouvere un todo

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
// implementare event handler

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

// segnare todo come letto

// ---
// aggiungere jsx statico ed eventhandler vuoti per segnare todo come letto

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
// implentare gli event handler
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
// aggiere jsx e event handler

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
// implementa event handler sposta su

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

// implementa event handler sposta giu
// [DONE] riordinare i todo

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

intrinseco: salvare le info nell'oggeto, quindi aggiungere ad esso un attributo [usare solitamente questo]
estrinseco: salvare le info su un oggetto in una collection esterna e ricollegare tramite key o index [usare se non si può modificare la forma dell'oggetto originale]

## React.useEffect

E una react hook che ci permette di incapsulare operazioni non pure, in gergo "effetti".

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
La funzione effetto viene eseguita la prima volta che il componente viene renderizzato e poi ogni volta che una delle variabili dell'array delle dipendenze cambia valore e poi quando l'elemento scompare dalla pgaina.

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

Una custom hook è una funzione che utilizza almeno una react hook.
Per convenzione il nome comincia con use.

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
- in react per gestione stato e effects : custom hook (ovvero una funzione che a sua volta richiama customo react hook)

## React.useEffect examples

`Consegna, realizzare un componente, c'è un onput testuale, dopo mezzo secondo senza avvenute modifiche, stampa in console il contenuto del campo testaule. Usare React.useEffect, setTimeout`

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

// scrivere il psudocodice
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  // leggere dal local storage
  // salvare nel local storage
}

function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  // leggere dal local storage
  //   quando? al mount del componente
  // salvare nel local storage
  //   quando? quando viene richiamata la funzione che è il secondo elemento dell'array tornato da useLocalStorage
}

// implementare i valori di ritorno
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  // leggere dal local storage
  //   quando? al mount del componente
  // salvare nel local storage
  //   quando? quando viene richiamata la funzione che è il secondo elemento dell'array tornato da useLocalStorage
  const value = initialValue;
  const setValue = (value: Value) => {};
  return [value, setValue];
}

// individuo gli stati
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  // leggere dal local storage
  //   quando? al mount del componente
  // salvare nel local storage
  //   quando? quando viene richiamata la funzione che è il secondo elemento dell'array tornato da useLocalStorage
  const [value, setValue] = React.useState(initialValue);
  return [value, setValue];
}

// individuo gli effetti
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  const [value, setValue] = React.useState(initialValue);
  React.useEffect(() => {
    // leggere dal local storage
    //   quando? al mount del componente
  }, []);
  React.useEffect(() => {
    // salvare nel local storage
    //   quando? quando viene richiamata la funzione che è il secondo elemento dell'array tornato da useLocalStorage
  }, [value]);
  return [value, setValue];
}

// implemetare lettura e scrittura
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  const [value, setValue] = React.useState(initialValue);
  React.useEffect(() => {
    // leggere dal local storage
    const localStorageValue = localStorage.getItem(localStorageKey);
  }, [localStorageKey]);
  React.useEffect(() => {
    // salvare nel local storage
    localStorage.setItem(localStorageKey, valueAsString);
  }, [value]);
  return [value, setValue];
}

// implementare serializzazione e deserializzazione
function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value
): [Value, (value: Value) => void] {
  const [value, setValue] = React.useState(initialValue);
  React.useEffect(() => {
    // leggere dal local storage
    const localStorageValue = localStorage.getItem(localStorageKey);
    if (localStorageValue) {
      // deserializzazione
      const localStorageValueDeserialized = JSON.parse(localStorageValue);
      // aggiorno lo stato
      setValue(localStorageValueDeserialized);
    }
  }, [localStorageKey]);
  React.useEffect(() => {
    // serializzazione
    const valueAsString = JSON.stringify(value);
    // salvare nel local storage
    localStorage.setItem(localStorageKey, valueAsString);
  }, [value]);
  return [value, setValue];
}

// soluzione finale con possibilità di personalizzare la serializzazione/deserializzazione

function useLocalStorage<Value>(
  localStorageKey: string,
  initialValue: Value,
  serialize?: (value: Value) => string = (value) => JSON.stringify(value),
  deserialize?: (value: string) => Value = (value) => JSON.parse(value)
): [Value, (value: Value) => void] {
  const [state, setState] = React.useState(initialValue);
  // effetto da eseguire per leggere il valore iniziale
  React.useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem(localStorageKey);
    if (valueFromLocalStorage) {
      setState(deserialize(valueFromLocalStorage));
    }
  }, [localStorageKey]);
  // effetto da eseguire al cambio valore
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, serialize(value));
  }, [localStorageKey, value]);
  return [state, setState];
}
```

## Extract logic to custom hook

```tsx
// realizzare un componente calcolatrice
// con due input numerici
// una select per le operazioni di addizione, sottrazione, moltiplicazione e divisione
// e il risultato che si aggiorna automaticamente
// estrarre succesivamente la logica di calcolo in un custom hook

// SPOILER soluzione con workflow

function Calcolatrice() {
  return null;
}

function Calcolatrice() {
  return (
    <div>
      <input type="number" />
      <select>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="number" />
      {" = "}
      {risultato}
    </div>
  );
}

function Calcolatrice() {
  const operandoSinistro = 0;
  const operandoDestro = 0;
  const operatore = "addizione";
  const risultato = (() => {
    switch (operatore) {
      case "addizione":
        return operandoSinistro + operandoDestro;
      case "sottrazione":
        return operandoSinistro - operandoDestro;
      case "moltiplicazione":
        return operandoSinistro * operandoDestro;
      case "divisione":
        return operandoSinistro / operandoDestro;
    }
  })();
  return (
    <div>
      <input type="number" />
      <select>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="number" />
      {" = "}
      {risultato}
    </div>
  );
}

function Calcolatrice() {
  const operandoSinistro = 0;
  const operandoDestro = 0;
  const operatore = "addizione";
  const risultato = (() => {
    switch (operatore) {
      case "addizione":
        return operandoSinistro + operandoDestro;
      case "sottrazione":
        return operandoSinistro - operandoDestro;
      case "moltiplicazione":
        return operandoSinistro * operandoDestro;
      case "divisione":
        return operandoSinistro / operandoDestro;
    }
  })();
  return (
    <div>
      <input type="number" value={operandoSinistro} onChange={(event) => {}} />
      <select value={operatore} onChange={(event) => {}}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="number" value={operandoDestro} onChange={(event) => {}} />
      {" = "}
      {risultato}
    </div>
  );
}

function Calcolatrice() {
  const [operandoSinistro, setOperandoSinistro] = React.useState(0);
  const [operandoDestro, setOperandoDestro] = React.useState(0);
  const [operatore, setOperatore] = React.useState("addizione");
  const risultato = (() => {
    switch (operatore) {
      case "addizione":
        return operandoSinistro + operandoDestro;
      case "sottrazione":
        return operandoSinistro - operandoDestro;
      case "moltiplicazione":
        return operandoSinistro * operandoDestro;
      case "divisione":
        return operandoSinistro / operandoDestro;
    }
  })();
  return (
    <div>
      <input
        type="number"
        value={operandoSinistro}
        onChange={(event) => {
          setOperandoSinistro(event.currentTarget.valueAsNumber);
        }}
      />
      <select
        value={operatore}
        onChange={(event) => {
          setOperatore(event.currentTarget.value);
        }}
      >
        <option value="addizione">+</option>
        <option value="sottrazione">-</option>
        <option value="moltiplicazione">*</option>
        <option value="divisione">/</option>
      </select>
      <input
        type="number"
        value={operandoDestro}
        onChange={(event) => {
          setOperandoDestro(event.currentTarget.valueAsNumber);
        }}
      />
      {" = "}
      {risultato}
    </div>
  );
}

function Calcolatrice() {
  useCalcolatrice();
  return (
    <div>
      <input
        type="number"
        value={operandoSinistro}
        onChange={(event) => {
          setOperandoSinistro(event.currentTarget.valueAsNumber);
        }}
      />
      <select
        value={operatore}
        onChange={(event) => {
          setOperatore(event.currentTarget.value);
        }}
      >
        <option value="addizione">+</option>
        <option value="sottrazione">-</option>
        <option value="moltiplicazione">*</option>
        <option value="divisione">/</option>
      </select>
      <input
        type="number"
        value={operandoDestro}
        onChange={(event) => {
          setOperandoDestro(event.currentTarget.valueAsNumber);
        }}
      />
      {" = "}
      {risultato}
    </div>
  );
}
function useCalcolatrice() {
  const [operandoSinistro, setOperandoSinistro] = React.useState(0);
  const [operandoDestro, setOperandoDestro] = React.useState(0);
  const [operatore, setOperatore] = React.useState("addizione");
  const risultato = (() => {
    switch (operatore) {
      case "addizione":
        return operandoSinistro + operandoDestro;
      case "sottrazione":
        return operandoSinistro - operandoDestro;
      case "moltiplicazione":
        return operandoSinistro * operandoDestro;
      case "divisione":
        return operandoSinistro / operandoDestro;
    }
  })();
}

function Calcolatrice() {
  const {
    operandoSinistro,
    operandoDestro,
    operatore,
    setOperandoSinistro,
    setOperatore,
    setOperandoDestro,
    risultato,
  } = useCalcolatrice();
  return (
    <div>
      <input
        type="number"
        value={operandoSinistro}
        onChange={(event) => {
          setOperandoSinistro(event.currentTarget.valueAsNumber);
        }}
      />
      <select
        value={operatore}
        onChange={(event) => {
          setOperatore(event.currentTarget.value);
        }}
      >
        <option value="addizione">+</option>
        <option value="sottrazione">-</option>
        <option value="moltiplicazione">*</option>
        <option value="divisione">/</option>
      </select>
      <input
        type="number"
        value={operandoDestro}
        onChange={(event) => {
          setOperandoDestro(event.currentTarget.valueAsNumber);
        }}
      />
      {" = "}
      {risultato}
    </div>
  );
}

function useCalcolatrice() {
  const [operandoSinistro, setOperandoSinistro] = React.useState(0);
  const [operandoDestro, setOperandoDestro] = React.useState(0);
  const [operatore, setOperatore] = React.useState("addizione");
  const risultato = (() => {
    switch (operatore) {
      case "addizione":
        return operandoSinistro + operandoDestro;
      case "sottrazione":
        return operandoSinistro - operandoDestro;
      case "moltiplicazione":
        return operandoSinistro * operandoDestro;
      case "divisione":
        return operandoSinistro / operandoDestro;
    }
  })();
  return {
    operandoSinistro,
    operandoDestro,
    operatore,
    setOperandoSinistro,
    setOperatore,
    setOperandoDestro,
    risultato,
  };
}
```

## React hook rules

- possono essere utilizzate solo all'interno di componenti funzionali o altre custom hook
- non possono essere utilizzate all'interno di cicli o condizioni
- le react hook in un componente devono essere sempre chiamate nello stesso numero, tipologia e ordine in ogni render del componenten in questione

Internamente react identifica le varie chiamate alle hook tramite un indice numerico.

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

Serve per far fluire le informazioni dal compopente chiamante all'istanza del componente figlio

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

Server per far fluire le informazioni dal componente figlio al componente chiamante.

Si codifica come funzioni callbakc passate dal chiamante al figlio.

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

E quando passiamo come parametri di un componente il JSX.

E utile per evitare il problema del prop-drilling (passare props attravesro diversi livelli di componenti).

E utile per realizzare componenti generici e riusabili.

E utile per realizzare componenti che si occupano layout e appearance, ovvero un libreria grafica/linguaggio integrato all'interno del progetto.

Vedere in codesandbox

```tsx
// esempio componentni grafici
// solitamente in un progetto sli decide di utilizzare un linguaggio grafico specifico (esistente oppure creato apositmente dal desginer)
// seprare la parte grafica da quella funzionale ci è utile per migliorare la lettura del codice
// e ci facilita cambiamenti globali futuri alla grafica

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
function Titolo({ children }: { children: React.ReactNode }) {
  return <h1>{children}</h1>;
}

// in questo compnete si puo apprezzare il fatto che sono presenti solo componenti grafici che abbiamo definito ed utilizzato in tutto il progetto
// in realtà qui e da immaginarsi anche altro codice come hooks e logica, che cosi viene separato dalla parte puramente grafica
function App() {
  return (
    <React.Fragment>
      <Chapter
        heading={<Titolo>Say hello twice</Titolo>}
        content={<Twice>Hello</Twice>}
      />
      <Chapter
        heading={<Titolo>Say bye twice</Titolo>}
        content={<Twice>bye</Twice>}
      />
    </React.Fragment>
  );
}
```

```tsx
// esempio prop drilling

function ComponenteA({ x }) {
  return <div>{x}</div>;
}

// il componente b non ha bisogno della prop x, ma la deve passare al componente A
function ComponenteB({ x }) {
  return (
    <div>
      <ComponenteA x={x} />
    </div>
  );
}

function ComponenteC() {
  return <ComponenteB x={4} />;
}

// risolto con render prop

function ComponenteC() {
  return (
    <ComponenteB>
      <ComponenteA x={4} />
    </ComponenteB>
  );
}

function ComponenteA({ x }) {
  return <div>{x}</div>;
}

// in questo scenario il componente B non ha bisogno di nessuna prop necessara per il componente A
function ComponenteB({ children }) {
  return <div>{children}</div>;
}
```

### HOC - Higher Order Component

Come una funzione si dice di ordine superiore se riceve e/o ritorna una funzione a sua volta,
cosi HOC è una funzione che riceve un componente e ritorna un componente.

E una tecnica desueta. Ne possiamo però trovare l'unico esempio utile sopravvissuto in `React.memo`

Effettivamente è un function decorator che si limita ai componenti react.

```tsx
function WithPropLog<Props>(
  Component: React.FunctionComponent<Props>
): React.FunctionComponent<Props> {
  return function WithPropLog(props: Props) {
    console.log(props);
    return <Component {...props} />;
  };
}
const TwiceWithLog = WithPropLog(Twice);
```

## Client only CRUD app exercise

Realizzare in react, pure client side, una app CRUD che permette di gestire una lista di persone (nome, cognome, eta).

- lista delle persone (READ tutte le entita)
- bottone elimina persona (DELETE singola entita)
- form di creazione e modifica persona (READ singola entita, CREATE singola entita, UPDATE singola entita)

## React.useRef

E una react hook per uno slot di memoria. A differenza di React.useState, la sua modifica non comporta l'aggiornamento del componente.

Questa hook si usa perlopiù quando abbiamo necessita di accedere au un elemento del dom reale (ad esmepio per gestire il focus programmaticamente), oppure memorizzare un valore che non deve fa raggiornare il componente (caso molto raro, solitamente è legato all'integrazione di librerie non react).

React.useRef torna un oggetto. Questo oggetto è sempre della stessa istanza. L'oggetto tornato contiene una sola properties chiamata current.

L'utilizzo si riduce alla lettura con la formula `ref.current` e alla scrittura con la formula `ref.current = value`.

```tsx
function RefExample() {
  const divRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={divRef}
      onClick={() => {
        console.log(divRef.current);
      }}
    >
      Ref example
    </div>
  );
}

function RefFunctionExample() {
  const divRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={(element) => {
        if (element) {
          divRef.current = element;
          // e in questo momento che il div del dom reale corrispondente
          // a questo di viene aggiunto al dom reale
        } else {
          divRef.current = null;
        }
      }}
      onClick={() => {
        console.log(divRef.current);
      }}
    >
      Ref function example
    </div>
  );
}

function RefVariableExample() {
  const simpleRef = React.useRef(0); // non fa partire rerender
  const [simpleState, setSimpleState] = React.useState(0); // fa partire rerender
  return (
    <div>
      <button
        onClick={() => {
          simpleRef.current = simpleRef.current + 1;
        }}
      >
        ref {simpleRef.current}
      </button>
      <button
        onClick={() => {
          setSimpleState(simpleState + 1);
        }}
      >
        state {simpleState}
      </button>
    </div>
  );
}

// NOTA
const jsx = <div ref={qualcosa} />;
// alla prop ref degli elementi nativi possiamo passare due tipologie di valori

// una funzione che verrà richiamata quando lelemnto del dom reale corrispondente viene creato o distrutto o cambiato
const jsx = (
  <div
    ref={(elemento) => {
      // pertanto elemento è null se l'elemento del dom reale è stato distrutto
      // elemento è un oggetto del dom reale se l'elemento del dom reale è stato creato
    }}
  />
);

// un oggetto di tipo React.RefObject creato con React.useRef
const ref = React.useRef(null);
const jsx = <div ref={ref} />;
```

## React.useLayoutEffect

E una react hook simile a React.useEffect ma viene eseguita in un momento diverso e ha uno scopo diverso. (La differenza sarà spiegata più avanti)

React.useLayoutEffect come dice il nome va utilizzato esclusivamente per effetti collaterali relativi al layout, come ad esempio misurare un componente, oppure cambiarne le dimensioni.

```tsx
function BlinkyRender() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  console.log("render", value);
  return (
    <div>
      <button onClick={() => setValue(0)}>value</button>: {value}
    </div>
  );
}

function GoodRender() {
  const [value, setValue] = React.useState(0);

  React.useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  console.log("render", value);
  return (
    <div>
      <button onClick={() => setValue(0)}>value</button>: {value}
    </div>
  );
}

function FlickerFibonacci() {
  const [targetIndex, setTargetIndex] = React.useState(0);
  const [[currentIndex, prev, current], setStep] = React.useState([0, 1, 1]);
  React.useEffect(() => {
    if (currentIndex < targetIndex) {
      setStep([currentIndex + 1, current, prev + current]);
    }
  }, [currentIndex, targetIndex, prev, current]);
  React.useEffect(() => {
    if (targetIndex < currentIndex) {
      setStep([0, 1, 1]);
    }
  }, [targetIndex, currentIndex]);
  return (
    <div>
      <input
        type="number"
        value={targetIndex}
        onChange={(event) => setTargetIndex(Number(event.target.value))}
      />
      {current}
    </div>
  );
}

function GoodFibonacci() {
  const [targetIndex, setTargetIndex] = React.useState(0);
  const [[currentIndex, prev, current], setStep] = React.useState([0, 1, 1]);
  React.useLayoutEffect(() => {
    if (currentIndex < targetIndex) {
      setStep([currentIndex + 1, current, prev + current]);
    }
  }, [currentIndex, targetIndex, prev, current]);
  React.useLayoutEffect(() => {
    if (targetIndex < currentIndex) {
      setStep([0, 1, 1]);
    }
  }, [targetIndex, currentIndex]);
  return (
    <div>
      <input
        type="number"
        value={targetIndex}
        onChange={(event) => setTargetIndex(Number(event.target.value))}
      />
      {current}
    </div>
  );
}
```

TODO fare esempio con misurazione e cambio dimensione di un div

## React Context

Recap: in react lo stato viene sotto forma di

- props : parametri di un componenete, che gli vengono passati dal chiamante chaiamante
- state : stato interno privato al componente (creato con React.useState, React.useRef, this.state sui componenti classe)
- context : è una specie di variabile globale, ma che viene valorizzato a partire dal da un certo punto per una parte di sottoalbero

```tsx
// una variabile di contesto viene creata con React.createContext
// gli va passato un valore di default
const MyContext = React.createContext(0);

function MyComponent() {
  // per leggere il valore di una variabile di contesto si usa React.useContext
  const value = React.useContext(MyContext);
  return <div>{value}</div>;
}

function App(){
  return <React.Fragment>
    <MyComponent/> {/* valore di contesto = 0 */}
    <MyContext.Provider value={42}>
      <MyComponent/> {/* valore di contesto = 42 */}
      <MyContext.Provider value={300}>
        <MyComponent/> {/* valore di contesto = 300 */}
      </MyContext.Provider>
    </MyContext.Provider>
    <MyContext.Provider value={100}>
      <MyComponent/> {/* valore di contesto = 100 */}
    </MyContext.Provider>
  <React.Fragment>
}

```

Si puo usare qualsiasi valore javascript come valore di contesto (numeri, oggetti, funzioni).
Attenzione in caso di valori dinamici evitare di creare nuove istanze quando non necessario, perchè tutti i componenti che usano il valore di contesto si aggiornano se l'istanza del valore fornita al provider cambia.
Per convenzione si metter il suffisso Context.

Quando utilizzare context?
Il context è un livello di indirezione, il su effetto è quello di far fluire l'informazione giu nell albero in maniera implicita.
Conviene tenere il numero di context basso, altrimenti si rischia di compromettere la leggibilità del codice.
E consigliabile usare il context per codificare concetti globali es: tema, lingua, autorizzazione (cosa puo fare l'utente), ecc. quindi più o meno un solo provider sulla root del componente
E consigliabile usare context per variabili globali, che però cambiano raramente e devono far rirendirizzare l'interfaccia.
Si puo usare anche per implemetare dei meccanimi particolari (es: molte librerie usano context per implementare il loro funzionamento).
A volte è consigliabile usare il context anche per creare dei contesti più piccoli, relativi a una parte dell'applicazione (casi particolari).
E sconsigliato usare context per ovviare al problema del prop drilling, usare invece render prop e/o children.
Va bene se il context è un dettaglio implementativo nascosto all'interno di componente.
In generale se l'utilizzo del context non compromette la leggibilità può essere utilizzato anche non rispettando le raccomandazioni sopra.

```tsx
// esempio di utilizzo di context per concetti globali
// creare context per il tema grafico (chiaro e scuro, solo colore del background e del testo per semplicita)
// creare un context per le label (solo due lingue it e en, solo due label per semplicita)
// creare una piccola applicazione che permette di impostare il tema e la lingua
// NOTA, questo è solo un esempio didattico, per lingua e tema utilizzare librerie apposite

type Theme = {
  backgroundColor: string;
  textColor: string;
};

const lightTheme: Theme = {
  backgroundColor: "white",
  textColor: "black",
};

const darkTheme: Theme = {
  backgroundColor: "black",
  textColor: "white",
};

const ThemeContext = React.createContext(lightTheme);
// ThemeContext = React.createContext<Theme>(null as any); è una tecnica per far andare in errore l'applicazione nel caso in cui non è possibile specificare un valore di default
// quindi l'applicazione andra in errore se ci dimentichiamo di specificare il <Contex.Provider value={}>

type Labels = {
  title: string;
  subtitle: string;
};

const italianLabels: Labels = {
  title: "Titolo",
  subtitle: "Sottotitolo",
};

const englishLabels: Labels = {
  title: "Title",
  subtitle: "Subtitle",
};

const LabelContext = React.createContext(englishLabels);

function App() {
  const [theme, setTheme] = React.useState(lightTheme);
  const [labels, setLabels] = React.useState(englishLabels);
  return (
    <ThemeContext.Provider value={theme}>
      <LabelContext.Provider value={labels}>
        <div>
          <div>
            Theme
            <button onClick={() => setTheme(lightTheme)}>Light</button>
            <button onClick={() => setTheme(darkTheme)}>Dark</button>
          </div>
          <div>
            Labels
            <button onClick={() => setLabels(italianLabels)}>Italiano</button>
            <button onClick={() => setLabels(englishLabels)}>English</button>
          </div>
        </div>
        <MainPage />
      </LabelContext.Provider>
    </ThemeContext.Provider>
  );
}

function MainPage() {
  const theme = React.useContext(ThemeContext);
  const labels = React.useContext(LabelContext);
  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <h1>{labels.title}</h1>
      <h2>{labels.subtitle}</h2>
    </div>
  );
}
```

## Error boundary

## React portal

## React.useId

# React Advanced

## Memoization workflow

implement memoization on list wiht exclusive selection, use react dev tools profiler

## React lifecylce

## Mememoization with

### React.memo

### React.useMemo

### React.useCallback

## ref imperative dom

## React.useDeferredValue

## React.useTransition

## React.useImperativeHandle

## React lazy

## React suspense

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
- `alt + freccia giu/su` sposta la linea sopara o sotto
- `ctrl + l` slelziona tutta la linea
- `ctrl + k ctrl + c` commenta le righe selezionate
- `ctrl + k ctrl + u` scommenta le righe selezionate
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

## Useful Typescript Types

- JSX.Element rappresenta un istanza di un compoennten react, ovvero qualsiasi elemento jsx valido
- React.ReactNode è come JSX.Element ma include anche i tipi primitivi come null undefined number string true false
- React.CssProperties raprresente l'oggetto che passiamo alla prop style dei componenti nativi di react
- React.ChangeEvent<HTMLInputElement> React.MouseEvent<HTMLDivElement> sono i tipi degli eventi passati agli event handler, il parametro di tipo indica che tipologia di nodo html e presente dentro evet.currentTarget

## React code writing workflow

Per gli esempi fare riferimento agli esempi precedenti (ricerca testuale "workflow" in questo file)

- scrivere il jsx statico con valori hard coded
  - se ci sono liste o tabelle scrivere il jsx statico in modo da mostrare 3 elementi (così e piu facile identificare dove avviene la ripetizione)
- aggiungere gli event handler che fanno alert() della descrizione di quello che dovrebbe accadere, oppure annotare con // TODO
- sostituire tutti i valori hard coded con delle variabili const nello scope del componente
- aggiungere rendering condizionale
- individuare quali const devono diventare props, ovvero parametri del componente, e trascrivere
- individuare le const ed implementare eventuali valori derivati
- individuare quali const che dovrebbero cambiare nel tempo ma sono privati al componente, e quindi trasformarle in React.useState
  - selezionare il valore, click destro, refactor, extract const module scope
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

## When subdividie into components, hooks and functions

Di default scriviamo tutta l'apllicazione nel componentente del file principale, con tutto il jsx inline.
Una suddivisione intuitiva in componenti in base al layout grafico nelle davole di design in spesso è molto controproducente.

- comporta difficolta di lettura perchè aggiunge molti livelli di indirezione, dobbiamo cammbiare riga nel file o addiritttura aprirne un altro
- suddividre in molti comporta un grande trischio di lasciare del codice morto
- comporta sicuramente una proliferazine di props da passare dal padre ai figli (prop drilling) (in realtà non produce bug, ma comporta grandi quantita di codice ridondante, che quasi sicuramente diventa confusionario (immagina di dover passare 15 props a 3 livelli di profondita))

Quando suddividere?:

- in componenti, hook, funzioni per riutlizzo di codice (qui applicare prima il principio WET e poi il principio DRY)
- in componenti per memoizzare elementi di liste
- oppure vedere pattern menzionati nell [best practices](#react-best-practices)
- per rappresentare pagine

## Code colocality

La best practice di React è orientata alla colocalità del codice (ovvero definizione vicino l'utilizzo).

Quindi scrivere tutto inline, nello stesso file a meno chè:

- creare funzioni/componenti/type solo in caso di riutilizzo del codice
- suddividere in file quando si superano le 2000 righe
- suddividere in file se si ha una suddivisione netta di tematiche (es: utente/amminstratore, utenti/prodotti, ecc)
- suddividere in file in base al layering dell'app (vedi sezione react app layers)

## File strucutre

Preambolo: queste raccomandazioni sono tarate in base q auesti criteri:

- indicazioni del team che ha sviluppato react
- single page pallication (quindi solitamente create-react-app, ad esempio per next.js alcune cose sono diverse)
- struttura progetti opensource in vita da almeno 2 anni e con almeno 2000 stelle su github
- Tenere il numero dei file basso (avere tanti file rende molto difficile la navigazione del codice, e quasi impossibile la sua eliminazione)
- Tenere una struttura più piatta possibile, tenere i livelli di profondita delle cartelle basso (per evitare di spendere tempo nel design di alberatura filesystem che tanto nel cosrso dello sviluppo dovra essere modificato continuamente, in più rende difficile consultare la struttura del progetto (assolutamente evitare cartelle con un solo file o cartella))
- suddividere in cartelle tematiche (es: utenti, prodotti), non in base al ruolo implementativo (non ha nessun valore organizativo avere cartelle separate per jsx, stile, logica)

Un esempio di suddivisione in cartelle

- src
  - components (cartella per componenti/hook riutilizzabili)
  - pages (cartella per componenti che rappresentano pagine)
    - suddivisione in cartelle tematiche (es: utente/prodotto/reposrtisica ecc)
    - componntes [sottolivello opzionale se necessario]

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

Lo studio delle librerie da adottare è una parte importante del lavoro dello sviluppatore front-end.
Bisogna trovare equilibrio tra innovazione, affidabilità e supporto community.
Un punto di partenza potrebbe essere questo report annuale https://stateofjs.com/en-us/2020/ per avere un'idea di quali librerie sono più utilizzate e quali sono le tendenze.

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

  - Material UI (per ispirazione su come comporre una'applicazione completa https://mui.com/material-ui/getting-started/templates/, https://github.com/mui/material-ui/tree/master/examples)
  - Bootstrap (per ispirazione su come comporre una'applicazione completa prendere ispirazione ad interfaccie realizzate con bootstrap, poichè ne è una variazione)
  - Bootstrap Italia
  - ClayUI

- Routing

  - React Router
  - @tanstack/router (routing con typescript, ancora sperimentale)

- State Management

  - DO NOT USE LIBRARIES
  - USE props passing and render props
  - react recoil (da utilizzare in casi particolari, comunque non su tutta l'applicazione, per risolvere problemi di performance e prop-passing eccessivo, usare con parsimonia)

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

- Aggiungere concurrent mode con suspanse e transition nella parte avanzata
- Creare progetto di esempio, realizzando un applicazione CRUD come descritto nella sezione "React application layers"
- Trascrivere in questo file gli snippet nella cartella TODO
