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
  a: { b }
} = t;
// traduzione
const b = t.a.b;

// in cosa viene tradotto?
const {
  a: { b },
  c
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
