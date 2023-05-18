// https://codesandbox.io/s/awesome-greider-erzhu

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// documentazione API https://jikan.docs.apiary.io/#reference/0/top/top-request-example+schema

function App() {
  const [data, setData] = React.useState({ top: [] });
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    fetch("https://api.jikan.moe/v3/top/anime/" + page)
      .then(response => response.json())
      .then(receivedData => {
        setData(receivedData);
      });
  }, [page]);
  return (
    <div>
      <button onClick={() => setPage(page - 1)}>indietro</button>
      <button onClick={() => setPage(page + 1)}>avanti</button>
      {data.top.map(anime => (
        <div key={anime.mal_id}>
          #{anime.rank} {anime.title}
        </div>
      ))}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
