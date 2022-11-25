import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
window.React = React;

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(null);

root.render(<h1>hello</h1>);

root.render(React.createElement("button", {}, "hello"));
root.render(<button>hello</button>);
// <button>hello</button>

root.render(React.createElement("div", { style: { color: "red" } }, "hello"));
root.render(<div style={{ color: "red" }}>hello</div>);
// <div style="color: red;">hello</div>

root.render(
  React.createElement(
    "ol",
    {},
    React.createElement("li", {}, "uno"),
    React.createElement("li", {}, "due")
  )
);
root.render(
  <ol>
    <li>uno</li>
    <li>due</li>
  </ol>
);
/*
<ol>
  <li>uno</li>
  <li>due</li>
</ol>
*/

/*
<select name="test" value="2">
  <option value="1">name</option>
  <option value="2">seconda</option>
</select> 
*/
root.render(
  <select name="test" value="2">
    <option value="1">prima</option>
    <option value="2">seconda</option>
  </select>
);
const virtualDom = React.createElement(
  "select",
  { name: "test", value: "2" },
  React.createElement("option", { value: "1" }, "prima"),
  React.createElement("option", { value: "2" }, "seconda")
);
root.render(virtualDom);

/*
<form id="fm"> 
  <input type="text" id="inputa" name="inputa" value="a"> </input>
  <input type="text" id="inputb" name="inputb" value="b"> </input>
</form>
*/

root.render(
  React.createElement(
    "form",
    { id: "fm" },
    React.createElement(
      "input",
      { type: "text", id: "inputa", name: "inputa" },
      ""
    ),
    React.createElement(
      "input",
      { type: "text", id: "inputb", name: "inputb" },
      ""
    )
  )
);

root.render(
  <form id="fm">
    <input type="text" id="inputa" name="inputa" value="a" />
    <input type="text" id="inputb" name="inputb" value="b" />
  </form>
);

const virtualDomObjectA = React.createElement("div", { id: "4" }, "a", "b");
const virtualDomObjecta = {
  type: "div",
  props: { id: "4", children: ["a", "b"] }
};

const virtualDomObjectB = <input value="hello" />;
const virtualDomObjectb = { type: "input", props: { value: "hello" } };

const samples1 = [
  <input value="4" />, // { type: "input", props: { value: "4" } }
  <input value={4} />, // { type: "input", props: { value: 4 } }
  <input value={"4"} />, // { type: "input", props: { value: "4" } }
  <input value={4 + 4} /> // { type: "input", props: { value: 8 } }
];

root.render(<p style={{ color: "red" }}>lorem ipsum</p>);
// {type:"p", props:{style:{ color: "red" }}}
// <p style="color: red;"></p>

root.render(
  <button style={{ color: "green", backgroundColor: "yellow" }}>premi</button>
);

// {
//   type: "button",
//   props: { style: {color: "green", backgroundColor: "yellow"}, children: "premi" },
// };
// <button style="color:green;background-color:yellow;">premi</button>

// come react applica lo style?
// <div style={{ backgroundColor: "red", fontfamily: "monospace" }}/>
// viene trasfomrato nel seguente codice in fase di modifica del dom reale
// const element = document.createElement("div")
// eleemnt.style.backgroundColor = "red"
// element.style.fontfamily = "monospace"
// ci accorgiamo che il font family non viene applicato perchè l'oggetto style lo richiede in camel case
// react non fa ulteriori controlli su questo
// quindi se in pagina vi manca uno stile, andare a controllare il casing della prop style

// <span style="font-size:50px;">Carmine</span>
root.render(<span style={{ fontSize: "50px" }}>Carmine</span>);
// {
//   type: "span",
//   props: { style: { fontSize: "50px" }, children: "Carmine" }
// };

// esempio componente
function App() {
  return <h1>hello</h1>;
}
root.render(<App />);

function ComponenteConPropsEChildren(props: any) {
  return <pre>{JSON.stringify(props)}</pre>;
}
root.render(<ComponenteConPropsEChildren a={1} b="hello" />);
root.render(ComponenteConPropsEChildren({ a: 1, b: "hello" }));

function ComponenteConPropsEChildrenTipizzato(props: { a: number; b: string }) {
  // props.a
  return <pre>{JSON.stringify(props)}</pre>;
}
root.render(<ComponenteConPropsEChildrenTipizzato a="1" b="hello" />);

function Somma(props: { a: number; b: number }) {
  return <span>{props.a + props.b}</span>;
}

root.render(<Somma a={4} b={5} />);

function Moltiplicazione(props: { a: number; b: number; c: number }): any {
  return props.a * props.b * props.c;
}
root.render(<Moltiplicazione a={3} b={5} c={6} />);

function TabellaSomma(props: { a: number; b: number; c: number }) {
  return (
    <table className="tabellaangela">
      <thead>
        <tr>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>somma</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.a}</td>
          <td>{props.b}</td>
          <td>{props.c}</td>
          <td>{props.a + props.b + props.c}</td>
        </tr>
      </tbody>
    </table>
  );
}
root.render(<TabellaSomma a={2} b={3} c={5} />);

// in html
// <div class="exempio"/>
// in jsx
// <div className="esempio"/>

function Contenitore(props: { children: React.ReactNode }) {
  return <div style={{ border: "1px solid black" }}>{props.children}</div>;
}
root.render(<Contenitore>ciao</Contenitore>);

// const componente: React.ComponentType = Contenitore
// const nodoReact: React.ReactNode = <Contenitore/>

// cosa ci possiamo mettere dentro una variabile di tipo React.ReactNode?
// null -> non renderizza nulla
// undefined -> non renderizza nulla
// stringa -> renderizza la stringa senza virgolette
// number -> renderizza il numero
// boolean -> non renderizza nulla
// <div/> -> renderizza una div
// [<div/>, <div/>] -> renderizza gli elementi dell'array in ordine
// <MioComponente/> -> renderizza il div tornato dal componente
// OCCHIO: se passiamo cose diverse da queste, react va in errore

// corrispondenza
// <Contenitore>ciao</Contenitore>
// React.createElement(Contenitore, {}, "ciao")
// <div/>
// React.createElement("div")

function Lista(props: { lista: Array<string> }) {
  return (
    <ol>
      {props.lista.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
root.render(<Lista lista={["a", "b", "c"]} />);

function TabellaConIntestazione(props: {
  lista: Array<string>;
  intestazione: string;
}) {
  return (
    <table className="tabellaangela">
      <thead>
        <tr>
          <th>{props.intestazione}</th>
        </tr>
      </thead>
      <tbody>
        {props.lista.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
root.render(
  <TabellaConIntestazione
    lista={["aaa", "bbbb", "cccc"]}
    intestazione="tabella con intestazione"
  />
);
