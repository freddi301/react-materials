import { CSSProp } from "styled-components";

/*
  Questa definizione di tipo ci permette avere il tema tipizzato.
  Qui stiamo dicendo a typescript che stiamo aggiungendo degli attrbibuti
  all'interface DefaultTheme del modulo "styled-components"
*/
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  }
}

/*
  Questa definizione di tipo ci permette di utilizzare
  <div css={css`backgrouns-color: black;`}>
  Per il css inline (qualora fosse troppo oneroso definire componenti styled)
*/
declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}
