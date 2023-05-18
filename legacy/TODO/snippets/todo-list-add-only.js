// https://codesandbox.io/s/inspiring-dust-nb96i

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [todos, setTodos] = React.useState(initialTodos);
  function add() {
    const nuovoTodo = {
      id: generateUniqueId(),
      text: "cambiare lavoro",
      isDone: true
    };
    const nuovoArrayDiTodos = todos.concat([nuovoTodo]);
    setTodos(nuovoArrayDiTodos);
  }
  return (
    <div>
      <button onClick={add}>aggiungi</button>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <input type="checkbox" checked={props.todo.isDone} />
      {props.todo.text}
    </div>
  );
}

function generateUniqueId() {
  return Math.random()
    .toString()
    .slice(2);
}

const initialTodos = [
  {
    id: "dfghjkluyt",
    text: "imparare a leggere",
    isDone: true
  },
  {
    id: "oofjaogf",
    text: "imparare javascript",
    isDone: true
  },
  {
    id: "jbjihbhihbh",
    text: "imparare react",
    isDone: false
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
