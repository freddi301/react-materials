// https://codesandbox.io/s/bold-wind-2y3qp

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState("");
  const isValidText = text !== "";
  function add() {
    if (!isValidText) {
      return;
    }
    const nuovoTodo = {
      id: generateUniqueId(),
      text: text,
      isDone: false
    };
    const nuovoArrayDiTodos = todos.concat([nuovoTodo]);
    setTodos(nuovoArrayDiTodos);
    setText("");
  }
  return (
    <div>
      <input
        value={text}
        onChange={event => {
          const text = event.target.value;
          setText(text);
        }}
      />
      <button onClick={add} disabled={!isValidText}>
        aggiungi
      </button>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
