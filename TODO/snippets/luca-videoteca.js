import React, { useState } from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToDoListLuca } from "./luca-todolist";
import { LucaComponentContext } from "./luca-context";
import { LucaErrorExample } from "./luca-error-boundary";
import { CreaLucaModale } from "./luca-portal-example";

// Smart Component
export function VideotecaLuca() {
  // Mocked domain = oggetto di dominio
  const films = useFilms();
  const [preferredId, togglePrefer] = usePreferredFilms();

  const filmsByPopolarityDescending = films.all;
  const filmsByPopolarityAscending = films.all.slice(0).reverse();
  const filmsByAlphaAscending = films.all
    .slice(0)
    .sort((a, b) => a.title.localeCompare(b.title));
  const filmsByAlphaDescending = filmsByAlphaAscending.slice(0).reverse();
  const [sortType, setSortType] = useState("popolarityDesc");

  const filmsOrdered = (() => {
    switch (sortType) {
      case "popolarityDesc": {
        return filmsByPopolarityDescending;
      }
      case "popolarityAsc": {
        return filmsByPopolarityAscending;
      }
      case "alphaDesc": {
        return filmsByAlphaDescending;
      }
      case "alphaAsc": {
        return filmsByAlphaAscending;
      }
      default: {
        return filmsByPopolarityDescending;
      }
    }
  })();

  // console.log(sortType);

  return (
    <div>
      <LucaJquery />
      <CreaLucaModale />
      <LucaErrorExample />
      <LucaComponentContext />
      <ToDoListLuca />
      <h1>Videoteca Luca</h1>
      <div>
        <span>
          <h2>Lista film</h2>
          <select
            value={sortType}
            onChange={(event) => setSortType(event.currentTarget.value)}
          >
            <option value="alphaDesc">Ordine alfabetico Discendente</option>
            <option value="alphaAsc">Ordine alfabetico Ascendente</option>
            <option value="popolarityDesc">
              Ordine per popolarità Discendente
            </option>
            <option value="popolarityAsc">
              Ordine per popolarità Ascendente
            </option>
          </select>
        </span>
        <StyledContainerListFilm className="container-lista-film">
          {filmsOrdered.map((film) => (
            <FilmListItemMemo
              key={film.id}
              film={film}
              isPreferred={preferredId[film.id] === true}
              onTogglePrefer={togglePrefer}
            />
          ))}
        </StyledContainerListFilm>
      </div>
    </div>
  );
}

function usePreferredFilms() {
  const [preferredId, setPreferredId] = useLocalStorage("preferredIdList", {});

  const togglePrefer = React.useCallback(
    (filmId) => {
      setPreferredId({
        ...preferredId,
        [filmId]: !preferredId[filmId]
      });
    },
    [preferredId, setPreferredId]
  );

  /*
  function removePrefer(filmId) {
    const { [filmId]: _, ...copia } = preferredId;
    setPreferredId(copia);
  }
  */

  return [preferredId, togglePrefer];
}

function useLocalStorage(chiave, valoreDiDefault) {
  const [val, setVal] = React.useState(() => {
    const valStorage = localStorage.getItem(chiave);
    return valStorage ? JSON.parse(valStorage) : valoreDiDefault;
  });
  React.useEffect(() => {
    localStorage.setItem(chiave, JSON.stringify(val));
  }, [val, chiave]);
  return [val, setVal];
}

// Dumb component
function FilmListItem({ film, isPreferred, onTogglePrefer }) {
  return (
    <StyledCardFilm className="card-film">
      <StyledImgFilm className="img-film" src={film.cover}></StyledImgFilm>
      <StyledDescFilm className="desc-film">
        <h4>{film.title}</h4>
        <div>{film.genre}</div>
        <div>{film.description}</div>
      </StyledDescFilm>
      <FontAwesomeIcon
        icon={isPreferred ? faHeart : faPlus}
        onClick={(e) => onTogglePrefer(film.id)}
      />
    </StyledCardFilm>
  );
}

const FilmListItemMemo = React.memo(FilmListItem);

// Data mapper, DTO --> Domain
function filmDTOtoFilm(dtoFilm) {
  return {
    id: dtoFilm.mal_id,
    title: dtoFilm.title,
    genre: "anime",
    description: "Gran film",
    cover: dtoFilm.image_url
  };
}

// fetch function
async function getFilms() {
  const response = await fetch("https://api.jikan.moe/v3/top/anime/1", {
    method: "GET"
  });
  const data = await response.json();
  return data;
}

// fetch hook
function useFetchFilms() {
  const [filmFetch, setFilmFetch] = React.useState({
    data: [],
    isLoading: true
  });

  React.useEffect(() => {
    const listafilmDTO = getFilms();
    listafilmDTO.then((resultfilm) => {
      setFilmFetch({
        data: resultfilm.top,
        isLoading: false
      });
    });
  }, []);

  return filmFetch;
}

// remote state hook
function useFilms() {
  const filmFetch = useFetchFilms();

  /*
  const reducer = (state, action) => {
    return action;
  };
  const [state, dispatch] = React.useReducer(reducer, initial);
  const setState = (value) => {
    return dispatch(value);
  };
  return [state, setState];
  */
  const all = React.useMemo(() => filmFetch.data.map(filmDTOtoFilm), [
    filmFetch.data
  ]);
  return {
    all,
    isLoading: filmFetch.isLoading
  };
}

// Styled components
const StyledContainerListFilm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const StyledCardFilm = styled.div`
  width: calc(100% - 10px);
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  padding: 5px;
  margin-top: 5px;
`;

const StyledImgFilm = styled.img`
  width: 200px;
  height: 200px;
  background: blueviolet;
`;

const StyledDescFilm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`;
