import React from "react";

type ThemeType = "light" | "dark" | "high-contrast";

const themes: Record<
  ThemeType,
  { text: { backgroundColor: string; textColor: string } }
> = {
  light: { text: { backgroundColor: "lightgray", textColor: "darkgray" } },
  dark: { text: { backgroundColor: "darkblue", textColor: "lightpink" } },
  "high-contrast": { text: { backgroundColor: "white", textColor: "black" } },
};

const ThemeContext = React.createContext<ThemeType>("light");

function useTheme() {
  const theme = React.useContext(ThemeContext);
  return themes[theme];
}

export default function App() {
  const [theme, setTheme] = React.useState<ThemeType>("dark");
  return (
    <>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("high-contrast")}>hight contrast</button>
      <Text>Without a context provider, it get the default value</Text>
      <ThemeContext.Provider value={theme}>
        <Text>Dinamic context value, the context provider changes value</Text>
      </ThemeContext.Provider>
      <ThemeContext.Provider value={"high-contrast"}>
        <Text>Static context value, the context provider changes value</Text>
      </ThemeContext.Provider>
      <ThemeContext.Provider value={theme}>
        <ThemeContext.Provider value="high-contrast">
          <Text>Context provider override</Text>
        </ThemeContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

function Text({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <p
      style={{
        backgroundColor: theme.text.backgroundColor,
        color: theme.text.textColor,
      }}
    >
      {children}
    </p>
  );
}
