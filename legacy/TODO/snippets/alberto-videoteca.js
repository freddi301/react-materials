import styled from "styled-components/macro";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { AlbertoTodoList } from "./alberto-todolist";
import { AlbertoContext } from "./alberto-context";
import { AlbertoErrorBoundaryExample } from "./alberto-error-boundary";
import { AlbertoPortalExample } from "./alberto-portal";
import { AlbertoRef } from "./alberto-ref";

// Smart component
export function VideotecaAlberto() {
  // Mocked domain
  // const films = [
  //   {
  //     id: "1",
  //     title: "Parasite",
  //     genre: "drammatico",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse",
  //     cover: "cover.png"
  //   },
  //   {
  //     id: "2",
  //     title: "Fantozzi",
  //     genre: "commedia",
  //     description:
  //       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  //     cover: "cover.png"
  //   }
  // ];

  const films = useFilms();
  const [preferredFilmsById, togglePreferred] = usePreferredFilms();

  const filmsByPopolarityDesc = films.all;
  const filmsByPopolarityAsc = films.all.slice(0).reverse();
  const filmsByAlphaDesc = films.all
    .slice(0)
    .sort((a, b) => a.title.localeCompare(b.title));
  const filmsByAlphaAsc = filmsByAlphaDesc.slice(0).reverse();

  const [orderCriteria, setOrderCriteria] = React.useState("popolarityDesc");

  const filmsToShow = (() => {
    switch (orderCriteria) {
      case "popolarityDesc":
        return filmsByPopolarityDesc;
      case "popolarityAsc":
        return filmsByPopolarityAsc;
      case "alphaDesc":
        return filmsByAlphaDesc;
      case "alphaAsc":
        return filmsByAlphaAsc;
      default:
        return filmsByPopolarityDesc;
    }
  })();

  return (
    <div>
      <AlbertoRef />
      <AlbertoPortalExample />
      <AlbertoErrorBoundaryExample />
      <AlbertoContext />
      <AlbertoTodoList />
      <h1>Videoteca</h1>
      {films.isLoading ? (
        <div>Loading..</div>
      ) : (
        <div>
          <button onClick={() => setOrderCriteria("popolarityDesc")}>
            Ordina per popolarità (decrescente)
          </button>
          <button onClick={() => setOrderCriteria("popolarityAsc")}>
            Ordina per popolarità (crescente)
          </button>
          <button onClick={() => setOrderCriteria("alphaDesc")}>
            Ordina alfabeticamente (decrescente)
          </button>
          <button onClick={() => setOrderCriteria("alphaAsc")}>
            Ordina alfabeticamente (crescente)
          </button>
          <StyledListaFilmDiv>
            {filmsToShow.map((film) => (
              <FilmListItemMemo
                key={film.id}
                film={film}
                isPreferred={preferredFilmsById[film.id]}
                // onTogglePreferred={() => togglePreferred(film.id)}
                onTogglePreferred={togglePreferred}
              />
            ))}
          </StyledListaFilmDiv>
        </div>
      )}
    </div>
  );
}

// Dumb component
function FilmListItem({ film, isPreferred, onTogglePreferred }) {
  return (
    <StyledFilmDiv>
      <StyledFilmIconImg src={film.cover} />
      <StyledDatiFilmDiv>
        <StyledDatoFilmDiv>{film.title}</StyledDatoFilmDiv>
        <StyledDatoFilmDiv>{film.genre}</StyledDatoFilmDiv>
        <StyledDatoFilmDiv>{film.description}</StyledDatoFilmDiv>
        <FontAwesomeIcon
          icon={isPreferred ? faHeart : faPlus}
          onClick={() => onTogglePreferred(film.id)}
        />
      </StyledDatiFilmDiv>
    </StyledFilmDiv>
  );
}
const FilmListItemMemo = React.memo(FilmListItem);

function useFilms() {
  const [filmsDTO, isLoading] = useFetchFilms();
  const all = React.useMemo(() => filmsDTO.map(filmDtoToFilm), [filmsDTO]);
  return {
    all,
    isLoading
  };
}

// Fetch hooks
function useFetchFilms() {
  const [filmsObj, setFilmsObj] = React.useState({
    isLoading: true,
    data: []
  });

  React.useEffect(() => {
    getFilms().then((films) =>
      setFilmsObj({
        isLoading: false,
        data: films.top
      })
    );
  }, []);

  return [filmsObj.data, filmsObj.isLoading];
}

// Fetch function
async function getFilms() {
  const response = await fetch("https://api.jikan.moe/v3/top/anime/1", {
    method: "GET"
  });
  const data = await response.json();
  return data;
}

// Data mapper (dto => domain)
function filmDtoToFilm(filmDto) {
  return {
    id: filmDto.mal_id,
    title: filmDto.title,
    genre: "Anime",
    description: "Descrizione",
    cover: filmDto.image_url,
    score: filmDto.score
  };
}

function usePreferredFilms() {
  const [preferredFilmsById, setPreferredFilms] = useLocalStorage(
    "preferredFilmsById",
    {}
  );
  const togglePreferred = React.useCallback(
    (filmId) => {
      setPreferredFilms({
        ...preferredFilmsById,
        [filmId]: !preferredFilmsById[filmId]
      });
    },
    [setPreferredFilms, preferredFilmsById]
  );
  return [preferredFilmsById, togglePreferred];
}

function useLocalStorage(chiave, valoreDiDefault) {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(chiave);
    return storageValue ? JSON.parse(storageValue) : valoreDiDefault;
  });
  React.useEffect(() => {
    localStorage.setItem(chiave, JSON.stringify(state));
  }, [chiave, state]);

  return [state, setState];
}

// Dumb components
const StyledListaFilmDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledFilmDiv = styled.div`
  display: flex;
  border-color: black;
  border-style: solid;
  border-width: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;
const StyledFilmIconImg = styled.img`
  width: 120px;
  margin-right: 20px;
`;
const StyledDatiFilmDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDatoFilmDiv = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
