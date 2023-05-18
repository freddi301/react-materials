import React from "react";
import { useQuery } from "react-query";

// creare un componente che visualizza dei dati di una ricerca testuale
// da https://archive.org/services/search/v1/scrape?fields=title&q=collection%3Anasa (https://archive.readme.io/reference/getting-started)
// utlizzando solo React.useState e React.useEffect e fetch()
// nessuna gestione degli errori ne caricmaneto
// semplicmente quando arriva il dato
// mostrarlo con <pre>JSON.stringify(data, null, 2)</pre>
// aggiungere un input, che se l'utente digita qualcosa (senza premere invio, appena si digita), il dato si aggiorna

export function NaiveFetch() {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://archive.org/services/search/v1/scrape?fields=title&q=${text}`
      );
      const data = await response.json();
      setData(data);
    })();
  }, [text]);
  return (
    <div>
      <input
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// Stessa consegna di prima, ma spostare il codice che fa fetching in un metodo a parte, di mono da fare incapsulation, ovvero una funzione typescript che ha come parametro un dato typesciprt, e ritorno Promi<qui definire type del dato a mano>

export function NaiveFetchFetchingSeparated() {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState<SearchResult>();
  React.useEffect(() => {
    (async () => {
      getSearchResults(text).then(setData);
    })();
  }, [text]);
  return (
    <div>
      <input
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

type SearchResult = {items: Array<{ identifier: string; title: string }>, count: number, total: number};

// cosi eventuali adattamenti di parametri e ritorno si possono nascondere qui dentro
async function getSearchResults(
  text: string
): Promise<SearchResult> {
  const root = "https://archive.org";
  const endpoint = "/services/search/v1/scrape";
  const url = new URL(endpoint, root);
  url.searchParams.append("fields", "title")
  url.searchParams.append("fields", "description")
  url.searchParams.set("q", text)
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// stessa cosa ma con una libreria di fetching/caching/state
// con react-query

export function FetchingWithReactQuery() {
  const [text, setText] = React.useState("");
  const searchQuery = useSearchQuery(text)
  return (
    <div>
      <input
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <pre>{JSON.stringify(searchQuery.data, null, 2)}</pre>
    </div>
  );
}

export function useSearchQuery(text: string) {
  return useQuery(["search", text], async () => {
    return await getSearchResults(text);
  })
}
