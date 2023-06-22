import React from "react";
import "./App.css";
import { LIFERAY_PARAMS } from "./configuration";

function App() {
  return (
    <pre className="configuration-debug">
      {JSON.stringify(LIFERAY_PARAMS, null, 2)}
    </pre>
  );
}

export default App;
