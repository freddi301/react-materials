import { useState } from "react";
import { DefaultTheme } from "styled-components/macro"; // questa interface ce la siamo definiti noi

// sfruttiamo la definizione che abbiamo creato
export const light: DefaultTheme = {
  backgroundColor: "#FDF6E3",
  textColor: "#657B83",
  borderColor: "#EEE8D5"
};

// https://ethanschoonover.com/solarized/
export const dark: DefaultTheme = {
  backgroundColor: "#002B36",
  textColor: "#839496",
  borderColor: "#073642"
};

// questo ci servira come lista dei temi disponibili
export const themes = {
  light, // questa riga è equivalente a light: light,
  dark
};

/*
  con `typeof` è possibile ottenere il tipo di un valore
  con `keyof` è possibile ottenere i nomi degli attributi di un tipo di oggetto
*/
export type ThemeName = keyof typeof themes;

/*
  Questa è una custom hook,
  una custom hook non è altro che una funzione che utilizza altre hook al proprio interno
*/
/**
 * App theme hook, to be used with
 * @example
 *  function App(){
 *    const [theme] = useMyTheme()
 *    return <ThemeProvider theme={theme}>
 *      <h1>Hello</h1>
 *    </ThemeProvider>
 *  }
 */
export function useMyTheme() {
  const [themeName, setThemeName] = useState<ThemeName>("dark");
  const theme = themes[themeName];
  return [themeName, theme, setThemeName] as const; // as const è necessario per far riconoscere a typescript che si tratta di un array con una lulnghezza fissa ed elemnti di tipo diverso
}
