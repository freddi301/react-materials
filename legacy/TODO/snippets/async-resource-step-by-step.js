// https://codesandbox.io/s/pensive-silence-b5gnj?fontsize=14&hidenavigation=1&theme=darkvv

import React from "react";
import "./styles.css";

/*
creare una custom hook

functino useAsyncResource(query, callback){

  return {
    currentQuery: ???, // valore della query attualmente richiesta (puo esseree completata, oppure in corso)
    isLoading: ???, // booleano che indica se e in corso il caricamento
    isLoaded: ???, // booleano che indica se il completedResult e disponibile (anche di una query precedente)
    completedQuery: ???, // valore della query per cui abbiamo il risultato
    completedResult: ??? // risultato abbinato a completedQuery
  }
}

esempio di uso

function Componente() {
  const [query, setQuery] = useState(0)
  const result = useAsyncResource(query, chiamataAsincrona)
  return <div>
    <button onClick={() => setQuery(query + 1)}>cambia query</button>
    {result.isLoaded && <>rislutato per la query {result.completedQuery}: result.completedResult</>}
    {resullt.isLoading && <>mentre sto caricando il risultato per la query {result.currentQuery}</>}
  </div>
}
function chiamataAsincrona(query) {
  return new Promise(resolve =>
    setTimeout(() => resolve(query), Math.random() * 5000)
  );
}

*/

export default function App() {
  return (
    <div>
      <div>
        <h1>Passaggio 1</h1>
        <Passaggio1 />
      </div>
      <div>
        <h1>Passaggio 2</h1>
        <Passaggio2 />
      </div>
      <div>
        <h1>Passaggio 3</h1>
        <Passaggio3 />
      </div>
      <div>
        <h1>Passaggio 4</h1>
        <Passaggio4 />
      </div>
      <div>
        <h1>Passaggio 5</h1>
        <Passaggio5 />
      </div>
      <div>
        <h1>Passaggio 6</h1>
        <Passaggio6 />
      </div>
      <hr />
      <hr />
    </div>
  );
}

function Passaggio1() {
  const [query, setQuery] = React.useState(0);
  return (
    <div>
      <button onClick={() => setQuery(query + 1)}>change query</button>
      query: {query}
    </div>
  );
}

function Passaggio2() {
  const [query, setQuery] = React.useState(0);
  const [result, setResult] = React.useState();
  React.useEffect(() => {
    chiamataAsincrona(query).then(data => {
      setResult(data);
    });
  }, [query]);
  return (
    <div>
      <button onClick={() => setQuery(query + 1)}>change query</button>
      query: {query}&nbsp; result: {result}
    </div>
  );
}

function Passaggio3() {
  const [query, setQuery] = React.useState(0);
  const [result, setResult] = React.useState();
  React.useEffect(() => {
    let isValid = true;
    chiamataAsincrona(query).then(data => {
      if (isValid) setResult(data);
    });
    return () => {
      isValid = false;
    };
  }, [query]);
  return (
    <div>
      <button onClick={() => setQuery(query + 1)}>change query</button>
      query: {query}&nbsp; result: {result}
    </div>
  );
}

function Passaggio4() {
  const [query, setQuery] = React.useState(0);
  const [result, setResult] = React.useState();
  const isLoaded = true; // TODO
  const isLoading = true; // TODO
  const completedQuery = query; // TODO
  const currentQuery = query;
  const completedResult = result;
  React.useEffect(() => {
    let isValid = true;
    chiamataAsincrona(query).then(data => {
      if (isValid) setResult(data);
    });
    return () => {
      isValid = false;
    };
  }, [query]);
  return (
    <div>
      <button onClick={() => setQuery(query + 1)}>cambia query</button>
      {isLoaded && (
        <>
          rislutato per la query {completedQuery}: {completedResult}
        </>
      )}
      {isLoading && (
        <>mentre sto caricando il risultato per la query {currentQuery}</>
      )}
    </div>
  );
}

function Passaggio5() {
  const [currentQuery, setQuery] = React.useState(0);
  const [
    [completedResult, completedQuery, isLoaded],
    setState
  ] = React.useState([undefined, undefined, false]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    let isValid = true;
    setIsLoading(true);
    chiamataAsincrona(currentQuery).then(data => {
      if (isValid) {
        setState([data, currentQuery, true]);
        setIsLoading(false);
      }
    });
    return () => {
      isValid = false;
    };
  }, [currentQuery]);
  return (
    <div>
      <button onClick={() => setQuery(currentQuery + 1)}>cambia query</button>
      <br />
      {isLoaded && (
        <>
          risultato per la query {completedQuery}: {completedResult}
        </>
      )}
      &nbsp;
      {isLoading && <>mentre carico {currentQuery}</>}
    </div>
  );
}

function Passaggio6() {
  const [currentQuery, setQuery] = React.useState(0);
  const {
    isLoaded,
    isLoading,
    completedQuery,
    completedResult
  } = useAsyncResource(currentQuery, chiamataAsincrona);
  return (
    <div>
      <button onClick={() => setQuery(currentQuery + 1)}>cambia query</button>
      <br />
      {isLoaded && (
        <>
          risultato per la query {completedQuery}: {completedResult}
        </>
      )}
      &nbsp;
      {isLoading && <>mentre carico {currentQuery}</>}
    </div>
  );
}

function useAsyncResource(currentQuery, asyncCallback) {
  const [
    [completedResult, completedQuery, isLoaded],
    setState
  ] = React.useState([undefined, undefined, false]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    let isValid = true;
    setIsLoading(true);
    asyncCallback(currentQuery).then(data => {
      if (isValid) {
        setState([data, currentQuery, true]);
        setIsLoading(false);
      }
    });
    return () => {
      isValid = false;
    };
  }, [currentQuery, asyncCallback]);
  return {
    currentQuery,
    isLoading,
    isLoaded,
    completedQuery,
    completedResult
  };
}

function chiamataAsincrona(query) {
  return new Promise(resolve =>
    setTimeout(() => resolve(query * 10), Math.random() * 5000)
  );
}
