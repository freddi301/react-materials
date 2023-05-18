// https://codesandbox.io/s/small-feather-4t7f9

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  React.useEffect(() => {
    console.log("effetto");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
      <button onClick={() => setCount2(count2 + 1)}>count 2 - {count2}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
