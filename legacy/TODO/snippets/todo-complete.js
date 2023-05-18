// https://codesandbox.io/s/musing-shamir-uxlhn

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  console.log("App");
  const [todos, setTodos] = React.useState(initialTodos);
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
  const onTextChange = event => {
    const text = event.target.value;
    setText(text);
  };
  const toggle = todoId => {
    const newState = todos.map(todo => {
      if (todo.id === todoId) {
        const isDoneModificato = !todo.isDone;
        return {
          id: todo.id,
          text: todo.text,
          isDone: isDoneModificato
        };
        // return {...todo, isDone: true} // object spread
      }
      return todo;
    });
    setTodos(newState);
  };
  return (
    <div>
      <input value={text} onChange={onTextChange} />
      <button onClick={add} disabled={!isValidText}>
        aggiungi
      </button>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggle={toggle} />
      ))}
    </div>
  );
}

function Todo(props) {
  const toggle = () => {
    props.toggle(props.todo.id);
  };
  return (
    <div>
      <input type="checkbox" checked={props.todo.isDone} onChange={toggle} />
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
  { id: "0", text: "prova", isDone: false },
  { id: "1", text: "provola", isDone: true },
  { id: "2", text: "provolone", isDone: false }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
