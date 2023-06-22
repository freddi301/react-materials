import React from "react";
import "./App.css";
import { LIFERAY_PARAMS } from "./configuration";
import { Liferay, themeDisplay } from "./liferay";

function App() {
  return (
    <div>
      <div>user id: {themeDisplay.getUserId()}</div>
      <div>authToken: {Liferay.authToken}</div>
      <pre className="configuration-debug">
      {JSON.stringify(LIFERAY_PARAMS, null, 2)}
    </pre>
    </div>
  );
}

export default App;
