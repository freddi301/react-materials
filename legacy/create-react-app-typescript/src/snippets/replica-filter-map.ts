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
}

const frederik: Persona = {
  nome: 'Frederik',
  eta: 28,
  altezza: 1.85
}

// TODO: mettere più persone nell'esempio di modo da poter testare più avanti le funzionalità che implementeremo
const persone: Array<Persona> = [frederik]

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