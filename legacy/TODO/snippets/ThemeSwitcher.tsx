import React from "react";
import { ThemeName, themes } from "src/theme/mytheme";

type ThemeSwitcherProps = {
  current: ThemeName;
  onChange(themeName: ThemeName): void;
};

/**
 * Un componente che ci fa selezionare il nome del tema
 */
export function ThemeSwitcher({ current, onChange }: ThemeSwitcherProps) {
  return (
    <>
      {/*
        Questa è un syntax sugar per utilizzare <React.Fragment>
        React.Fragment è come un div, solo che al suo posto non viene renderizzato nulla,
        è utile quando si ha bisogno di ragruppare un insieme di elementi jsx senza aggiungere qualcosa al dom.
        Nel caso in cui venga utilizzato con una lista, bisogna utilizzare la notazione per intero
        <React.Fragment key={key}>...</React.Fragment>
        poichè è necessario specificare la key per gli elementi di un array
      */}
      theme:&nbsp;
      <select
        value={current}
        onChange={event => onChange(event.target.value as ThemeName)}
      >
        {Object.keys(themes).map(themeName => (
          <option key={themeName} value={themeName}>
            {themeName}
          </option>
        ))}
      </select>
    </>
  );
}
