// https://codesandbox.io/s/unruffled-feistel-50l0i

import React from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = React.useState(0);
  // eseguito al cambio delle dipendenze (ccount)
  React.useEffect(() => {
    // check-in
    console.log("effect", count);

    // check-out
    return () => {
      console.log("cleanup", count);
    };
  }, [count]);
  const [query, setQuery] = React.useState(0);
  const result = useAsyncResource(() => chiamataAsincrona(query));
  const result2 = useAsyncResource(() => chiamataAsincrona2(query));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCount(count + 1)}>bump</button>
      <hr />
      <button onClick={() => setQuery(query + 1)}>
        change query
      </button> query: {query}; result: {result}
      <hr />
      <button onClick={() => setQuery(query + 1)}>
        change query
      </button> query: {query}; result2: {result2}
    </div>
  );
}

function useAsyncResource(callback) {
  const [result, setResult] = React.useState(undefined);
  React.useEffect(() => {
    let isValid = true;
    callback().then(data => {
      if (isValid) {
        setResult(data);
      }
    });
    return () => {
      isValid = false;
    };
  }, [callback]);
  return result;
}

function chiamataAsincrona(query) {
  return new Promise(resolve =>
    setTimeout(() => resolve(query), Math.random() * 5000)
  );
}

function chiamataAsincrona2(query) {
  return new Promise(resolve =>
    setTimeout(() => resolve(query * 1000), Math.random() * 5000)
  );
}
