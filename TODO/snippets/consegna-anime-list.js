// https://codesandbox.io/s/suspicious-fast-6yy6x

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*

CONSEGNA

Ricreare un'applicazione con le medesime funzionalità, con aggiunte di:

- implementare i filtri e ordinamento nella sezione "my"
- rendere l'applicazione più usabile
  - migliorare responsivita (deve essere comodo da usare mobile)
  - mmigliorare aspetto estetico
  - aggiungere label dove serve (ad esempio nell sezione "search" non si vede nulla finchè non scrivete, questo può confondere l'utente)
- aggiungere la possibilità di aggiungere delle note ad ogni anime (una textarea)
- le modifiche devono essere persistite al ricarsi della pagina (usare localStorage)
- implementare almeno un filtro, e un ordinamento in più nella sezione "my" (verrà valutato l'utilità del filtro e ordinamento che scegliete)

CRITERI

- presenza di tutte le features
- corretta suddivisione in funzioni e componenti e custom hook
- assenza di bug
- look and feel dell'applicazione

ACCORGIMENTI

- verificare tutte le funzionlità dda implementare nella preview
- in nessun caso copia incollare il codice qui sotto 

*/

function App() {
  const [screen, setScreen] = useState("my");
  const { byId, list, add, remove, update } = useMyAnimes();
  return (
    <div>
      <div>
        <button
          onClick={() => setScreen("top")}
          style={{ background: screen === "top" ? "blue" : "" }}
        >
          top
        </button>
        <button
          onClick={() => setScreen("search")}
          style={{ background: screen === "search" ? "blue" : "" }}
        >
          search
        </button>
        <button
          onClick={() => setScreen("my")}
          style={{ background: screen === "my" ? "blue" : "" }}
        >
          my
        </button>
      </div>
      <div style={{ flexGrow: 1 }}>
        {(() => {
          switch (screen) {
            case "search":
              return (
                <SearchPage
                  byId={byId}
                  add={add}
                  remove={remove}
                  update={update}
                />
              );
            case "top":
              return (
                <TopPage
                  byId={byId}
                  add={add}
                  remove={remove}
                  update={update}
                />
              );
            case "my":
              return <My list={list} remove={remove} update={update} />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

function My({ list, remove, update }) {
  return (
    <div>
      <div>
        TODO: implementa filtri
        <input type="radio" name="filtra" />
        tutti
        <input type="radio" name="filtra" />
        completati
        <input type="radio" name="filtra" />
        da vedere
      </div>
      <div>
        TODO: implementa ordinamento
        <input type="radio" name="ordina" />
        migliori
        <input type="radio" name="ordina" />
        peggiori
      </div>
      <AnimeGrid>
        {list.map(anime => (
          <Anime
            key={anime.id}
            anime={anime}
            remove={remove}
            isAdded={true}
            update={update}
          />
        ))}
      </AnimeGrid>
    </div>
  );
}

function TopPage({ byId, add, remove, update }) {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);
  useEffect(() => {
    getTopAnime(page).then(setResult);
  }, [page]);
  return (
    <AnimeGrid>
      {page > 1 && (
        <button onClick={() => setPage(page - 1)} style={{ width: "100%" }}>
          precedenti
        </button>
      )}
      {result.map(anime => (
        <Anime
          key={anime.id}
          anime={anime}
          add={add}
          remove={remove}
          isAdded={Boolean(byId[anime.id])}
          update={update}
        />
      ))}
      <button onClick={() => setPage(page + 1)} style={{ width: "100%" }}>
        successivi
      </button>
    </AnimeGrid>
  );
}

function SearchPage({ byId, add, remove, update }) {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    if (searchText.length >= 3) {
      getSearchAnime(searchText).then(setResult);
    }
  }, [searchText]);
  return (
    <div>
      <input
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
      />
      <AnimeGrid>
        {result.map(anime => (
          <Anime
            key={anime.id}
            anime={anime}
            add={add}
            remove={remove}
            isAdded={Boolean(byId[anime.id])}
            update={update}
          />
        ))}
      </AnimeGrid>
    </div>
  );
}

function getTopAnime(page) {
  return fetch(`https://api.jikan.moe/v3/top/anime/${page}`)
    .then(response => response.json())
    .then(data => data.top.map(dtoToAnime));
}

function getSearchAnime(text) {
  return fetch(`https://api.jikan.moe/v3/search/anime?q=${text}`)
    .then(response => response.json())
    .then(data => data.results.map(dtoToAnime));
}

function Anime({ anime, add, remove, isAdded, update }) {
  const { id, title, image, score, episodes, watchedEpisodes, myScore } = anime;
  return (
    <div
      style={{
        display: "flex",
        width: 400,
        height: 150,
        overflow: "hidden",
        borderRadius: "4px",
        border: "1px solid lightgray",
        margin: "4px",
        position: "relative"
      }}
    >
      <img
        src={image}
        style={{ width: 100, height: 150, objectFit: "cover" }}
      />
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        {isAdded ? (
          <button onClick={() => remove(anime)} style={{ background: "green" }}>
            ✓
          </button>
        ) : (
          <button onClick={() => add(anime)}>✓</button>
        )}
      </div>
      <div style={{ padding: "4px" }}>
        <h3>{title}</h3>
        <div>
          valutazione
          {isAdded ? (
            <>
              <input
                type="range"
                min={0}
                max={10}
                value={myScore}
                onChange={event =>
                  update({ ...anime, myScore: Number(event.target.value) })
                }
              />
              {myScore}/{10}
            </>
          ) : (
            <> {score}</>
          )}
        </div>
        <div>
          episodi
          {isAdded ? (
            <>
              <input
                type="range"
                min={0}
                max={episodes}
                value={watchedEpisodes}
                onChange={event =>
                  update({
                    ...anime,
                    watchedEpisodes: Number(event.target.value)
                  })
                }
              />
              {watchedEpisodes}/{episodes}
            </>
          ) : (
            <> {episodes}</>
          )}
        </div>
      </div>
    </div>
  );
}

function AnimeGrid({ children }) {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {children}
    </div>
  );
}

function dtoToAnime(dto) {
  return {
    id: dto.mal_id,
    title: dto.title,
    image: dto.image_url,
    score: dto.score,
    episodes: dto.episodes,
    watchedEpisodes: 0,
    myScore: 0
  };
}

function useMyAnimes() {
  const [animes, setAnimes] = useState(loadMyAnimes);
  useEffect(() => {
    saveMyAnimes(animes);
  }, [animes]);
  const add = anime => setAnimes({ ...animes, [anime.id]: anime });
  const remove = anime => {
    const { [anime.id]: deleted, ...rest } = animes;
    setAnimes(rest);
  };
  const update = anime =>
    setAnimes({
      ...animes,
      [anime.id]: anime
    });
  return { byId: animes, list: Object.values(animes), add, remove, update };
}

const localStorageKey = "my_anime_list";

function loadMyAnimes() {
  try {
    const serialized = localStorage.getItem(localStorageKey);
    const deserialized = JSON.parse(serialized) || {};
    return deserialized;
  } catch (error) {
    console.error(error);
    return {};
  }
}

function saveMyAnimes(animes) {
  localStorage.setItem(localStorageKey, JSON.stringify(animes));
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
