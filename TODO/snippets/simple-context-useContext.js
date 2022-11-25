// https://codesandbox.io/s/withered-meadow-qoo5e

import React from "react";
import "./styles.css";

const ThemeContext = React.createContext("light");

export default function App() {
  const [theme, setTheme] = React.useState("dark");
  return (
    <>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <details>
        <summary>Themed</summary>
        <Button>hello</Button>
        <ThemeContext.Provider value={theme}>
          <Button>hello</Button>
          <ThemeContext.Provider value={"light"}>
            <Button>hello</Button>
            <ThemeContext.Provider value={theme}>
              <Button>hello</Button>
            </ThemeContext.Provider>
          </ThemeContext.Provider>
        </ThemeContext.Provider>
      </details>
    </>
  );
}

function Button({ children }) {
  const theme = React.useContext(ThemeContext);
  return (
    <button style={{ background: themes[theme].button.background }}>
      {children}
    </button>
  );
}

const themes = {
  light: { button: { background: "beige" } },
  dark: { button: { background: "darkblue" } }
};
