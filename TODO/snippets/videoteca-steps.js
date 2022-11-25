// creare un array di questi oggetti
// ciclarli per visuazlizarli

const film = {
  id: "123",
  title: "Titolo",
  genre: "genere",
  description: "descrizione",
  cover: "cover.png"
};

// recuperare i dati da https://api.jikan.moe/v3/top/anime/1
// e trasformarli nel formato qui sopra

// fetch api

async function getQualcosa() {
  const response = await fetch("/percorso/ecc", {
    method: "GET"
  });
  const data = await response.json();
  return data;
}

// const {data, isLoading} = useFetchFilms()

// const films = useFilms()
// films.all array di oggetti di dominio
// films.isLoading

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// <FontAwesomeIcon icon={faCoffee} />

// ESEMPIO DI MAPPE di atribbuti aggiuntivi

// films = [
//   {id: 4, name: "Halloween", auhtor: "Unknwonwn", isPreferred: true}
// ]

// filmsById = {
//   4: {id: 4, name: "Halloween" }
// }

// preferredFilmsById = {
//   4: true
// }

// filmAuthorById = {
//   4: "unknwon"
// }

// {
//   filmsById: {
//     1: {name: "Pirati"},
//     2: {name: "Natale"}
//   },
//   filmsByPreferenceById: [
//     1,2
//   ],
//   filmsByCostById: [
//     2,1
//   ]
// }

// filmsByPreferenceById.map(filmId => <div>{filmsById[filmId].name}</div>)

//
// Gestione entità

// nel mondo mutabile

const entitaMutabile = { id: 1, nome: "pippo" };
entitaMutabile.nome = "pluto";
console.log(entitaMutabile.nome);

// nel mondo immutabile
const [mappaEntita, setMappaEntita] = React.useState({
  1: { nome: "pippo" }
});
const idEntita = 1;
const entitaImmutabile = mappaEntita[idEntita];
setMappaEntita({ ...mappaEntita, [idEntita]: { nome: "pluto" } });
console.log(entitaImmutabile.nome);

// esempio di romzien di un attributo

const mappaCompleta = { 1: "a", 2: "b", 3: "c" };
const { 1: removedItem, ...mappaRidotta } = mappaCompleta;

// esemio ordinamenti
// const filmsByPopolarityDescneding = films.all;
// const filmsByPopolarityAscending = films.all.reverse();
// const filmsByAlphaAscending = films.all.sort((a, b) => a.title.localCompare(b.title));

// Optional in autonomia

// permettere all'utente di scrivere la review dei film
// aggiungere una textarea nel FilmListItem
// persistere in localStorage

// permettere all'utente di valutare i film da 1 a 5
// aggiungere 5 icone stella cliccabili nel FilmListItem
// presistere in localStorage

// premettere all'utente di filtrare per
// recensiti / non recensiti / tutti
// valutati / non valutati / tutti
// prefereiti / non preferiti / tutti

// permettere all'utente di ordinare per
// popolarità ascendeten e discendente
// ordine alfabetico ascendente e discendente
// rating ascendente e discendente

// permettere all'utente di segnare ultimo episodio visto
// visualizzare in FilmListItem il progesso della visione
// creare un nuovo filtro/ordinamento "prossimi da vedere"

// creare in locale un setup con create-react-app
// trapiantare il codice da codesandbox nel setup creato

// scrivere nel proprio curriculum: "sviluppatore react senior"

// Esempio di filtri e ordinamenti multipli
const arrayDaFilterare = [];

const always = () => true;
const arrayFiltrato = arrayDaFilterare
  .filter(primoFiltroAttivo ? primoFiltro : always)
  .filter(primoFiltroAttivo ? primoFiltro : always)
  .filter(primoFiltroAttivo ? primoFiltro : always);

const nothing = () => null;
const byNome = primoOrdinamento ? (item) => item.nome : nothing;
const byEta = primoOrdinamento ? (item) => item.eta : nothing;

const arrayORdinato = arrayFiltrato.orderBy(arrayFiltrat, [byNome, byEta]);

// Esempio struttura di una view con filtri e ordinamenti composti

function AppConfiltriEOrdinamento() {
  const filmRepository = useFilmRepository(); // si occupa solo ed esclusivamente delle operazioni crud

  const filterAndSortPreferences = useFilterAndSortPreferences(); // si occupa solo ed esclusivamente di come l'tente vuole filtrare o ordinare

  const filtereAndOrdered = filterAndOrder(
    filmRepository,
    filterAndSortPreferences
  ); // si occupa solo ed eslusivamente di filtrare e d ordinare

  return (
    <div>
      <select value={filterAndSortPreferences} />
      {filtereAndOrdered.map(() => null)}
    </div>
  );
}

function filterAndOrder(all, sortingAndFiltering) {
  return all
    .filter(criteria1)
    .filter(criteria1)
    .filter(criteria1)
    .sort(criteria1)
    .sort(criteria1)
    .sort(criteria1);
}
