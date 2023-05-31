// function mapArray(callback: (arr: <T>[]))

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

const persone: Array<Persona> = [
  frederik,
  { nome: "Beppe", eta: 23, altezza: 1.78 },
  { nome: "Ajeje", eta: 13, altezza: 1.58 },
];

const personeConNomeCheIniziaPerA: Array<Persona> = [];
for (let i = 0; i < persone.length; i++) {
  if (persone[i].nome.at(0).toLowerCase() === "a") {
    personeConNomeCheIniziaPerA.push(persone[i]);
  }
}

const personeConPiuDi30Anni: Array<Persona> = [];
for (let i = 0; i < persone.length; i++) {
  if (persone[i].eta >= 30) {
    personeConPiuDi30Anni.push(persone[i]);
  }
}

const personeAlte: Array<Persona> = [];
for (let i = 0; i < persone.length; i++) {
  if (persone[i].altezza > 1.8) {
    personeAlte.push(persone[i]);
  }
}

function calcolaPersoneConNomeCheIniziaPerA(
  persone: Array<Persona>
): Array<Persona> {
  const personeInizialeA: Array<Persona> = [];
  for (let i = 0; i < persone.length; i++) {
    if (persone[i].nome.charAt(0) === "A") {
      personeInizialeA.push(persone[i]);
    }
  }
  return personeInizialeA;
}

function calcolaPersoneAlte(persone: Array<Persona>): Array<Persona> {
  const personeAlte: Array<Persona> = [];
  for (let i = 0; i < persone.length; i++) {
    if (persone[i].altezza >= 1.8) {
      personeAlte.push(persone[i]);
    }
  }
  return personeAlte;
}

function calcolaPersoneOltre30Anni(persone: Array<Persona>): Array<Persona> {
  const personeOltre30: Array<Persona> = [];
  for (let i = 0; i < persone.length; i++) {
    if (persone[i].eta >= 30) {
      personeOltre30.push(persone[i]);
    }
  }
  return personeOltre30;
}

function filtraPersone(
  persone: Array<Persona>,
  condizione: (persona: Persona) => boolean
): Array<Persona> {
  // crea un array vuoto
  const personeReturn: Array<Persona> = [];
  // itero l'array
  for (let i = 0; i < persone.length; i++) {
    const persona = persone[i];
    //  se la persona soddisfa la condizione
    if (condizione(persona)) {
      // aggiungo la persona all'array
      personeReturn.push(persona);
    }
  }
  // restituisco il nuovo array
  return personeReturn;
}

function filtra<Oggetto>(
  array: Array<Oggetto>,
  condizione: (elemento: Oggetto) => boolean
): Array<Oggetto> {
  // crea un array vuoto
  const oggettiReturn: Array<Oggetto> = [];
  // itero l'array
  for (let i = 0; i < array.length; i++) {
    const oggetto = array[i];
    //  se l'oggetto soddisfa la condizione
    if (condizione(oggetto)) {
      // aggiungo la persona all'array
      oggettiReturn.push(oggetto);
    }
  }
  // restituisco il nuovo array
  return oggettiReturn;
}

const personeDiOriginiSarde: Array<Persona> = [];
for (let i = 0; i < persone.length; i++) {
  // ottenere la persona
  const persona = persone[i];
  // copiare la persona
  // modificare la copia della persona
  //const personaModificata = { nome: persona.nome + "u", eta: persona.eta, altezza:  persona.altezza};
  const personaModificata = { ...persona, nome: persona.nome + "u" };
  // aggiungere la persona modificata al nuovo array
  personeDiOriginiSarde.push(personaModificata);
}

const quelliCheComincianoLeFrasiConAiMieiTempi: Array<Persona> = [];
// simile a prima
for (let i = 0; i < persone.length; i++) {
  // ottenere la persona
  const persona = persone[i];
  // copiare la persona
  const personaModificata = { ...persona, eta: persona.eta * 2 };
  // aggiungere la persona modificata al nuovo array
  quelliCheComincianoLeFrasiConAiMieiTempi.push(personaModificata);
}

const concorrentiContestTacco12: Array<Persona> = [];
// simile a prima
for (let i = 0; i < persone.length; i++) {
  // ottenere la persona
  const persona = persone[i];
  // copiare la persona
  const personaModificata = { ...persona, altezza: persona.altezza + 0.12 };
  // aggiungere la persona modificata al nuovo array
  concorrentiContestTacco12.push(personaModificata);
}

function getPersoneConUFinale(persone: Persona[]) {
  const personeConLaU: Persona[] = [];
  for (let i = 0; i < persone.length; i++) {
    personeConLaU.push({ ...persone[i], nome: persone[i].nome + "u" });
  }
  return personeConLaU;
}

function doubleAge(persone: Persona[]) {
  const personeDoubleAge: Persona[] = [];
  for (let i = 0; i < persone.length; i++) {
    personeDoubleAge.push({ ...persone[i], eta: persone[i].eta * 2 });
  }
  return personeDoubleAge;
}

function aumentaAltezza(persone: Persona[]) {
  const personeAltezzaAumentata: Persona[] = [];
  for (let i = 0; i < persone.length; i++) {
    personeAltezzaAumentata.push({
      ...persone[i],
      altezza: persone[i].altezza + 12,
    });
  }
  return personeAltezzaAumentata;
}

function trasformaPersone(
  persone: Array<Persona>,
  trasformazione: (persone: Persona) => Persona
): Array<Persona> {
  // crea un array vuoto
  const array: Array<Persona> = [];
  // itero l'array originale
  for (let i = 0; i < persone.length; i++) {
    //  trasformo la persona
    const personaTrasformata = trasformazione(persone[i]);
    //  aggiungo la persona trasformata all'array
    array.push(personaTrasformata);
    // restituisco il nuovo array
  }
  return array;
}

function trasforma<Oggetto>(
  oggetti: Array<Oggetto>,
  trasformazione: (oggetto: Oggetto) => Oggetto
): Array<Oggetto> {
  // crea un array vuoto
  const array: Array<Oggetto> = [];
  // itero l'array originale
  for (let i = 0; i < oggetti.length; i++) {
    //  trasformo la persona
    const oggettoTrasformato = trasformazione(oggetti[i]);
    //  aggiungo la persona trasformata all'array
    array.push(oggettoTrasformato);
    // restituisco il nuovo array
  }
  return array;
}