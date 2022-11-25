import React, { useState, useEffect } from "react";

/**
 * Componente che permette di cambiare il titolo della tab
 */
export function TitleChanger() {
  const [title, setTitle] = useState("React Workshop");
  // useEffect è una hook che ci permette di eseguire un comando imperativo al cambiamento di alcuni valori
  // primo parametro: funzione eseguita ogni volta che i valori cambiano
  // secondo parametro: lista dei valori usati all'interno dell'effect
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      page title:{" "}
      <input
        value={title} // bisogna specificare quale sia il valore contenuto nell'input
        onChange={event => {
          // aggiorniamo lo stato prendendo il valore del campo di input dall'evento
          setTitle(event.target.value);
        }}
      />
    </div>
  );
}

// ESERCITAZIONE

export function EasterCatLoris() {
  const [word, setWord] = useState("");
  useEffect(() => {
    if (word.toLowerCase().indexOf("cat") !== -1) {
      window.open("https://cataas.com/cat/gif");
    }
  }, [word]);
  return <input onChange={e => setWord(e.currentTarget.value)} value={word} />;
}

export function EasterCatLuca() {
  const [parola, setParola] = useState("");
  useEffect(() => {
    if (parola.includes("cat")) {
      window.open("https://cataas.com/cat/gif");
    }
  }, [parola]);
  return <input onChange={event => setParola(event.target.value)}></input>;
}

export function EasterCatVlad() {
  const [word, setWord] = useState();
  useEffect(() => {
    if (word === "cat") {
      window.open("https://cataas.com/cat/gif");
    }
  }, [word]);
  return <input value={word} onChange={event => setWord(event.target.value)} />;
}

export function AltF4Prank() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");

  useEffect(() => {
    const result = word1 + word2;
    if (result === "altf4") {
      document.write("");
      // window.close();
    }
  }, [word1, word2]);
  return (
    <div>
      <input value={word1} onChange={event => setWord1(event.target.value)} />
      <input value={word2} onChange={event => setWord2(event.target.value)} />
    </div>
  );
}
