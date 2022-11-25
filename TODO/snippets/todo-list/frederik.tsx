/* eslint @typescript-eslint/no-use-before-define: 0 */

import React from "react";
import { useStorage } from "../useEffect";

export function TodoListFrederik() {
  const [text, setText] = React.useState("qualcosa da fare");
  const { list, add, remove, toggle } = useTodoList();
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.currentTarget.value);
          }}
        />
        <input
          type="button"
          value="add"
          onClick={(event) => {
            add(text);
            setText("");
          }}
        />
      </div>
      {list.map((todo, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(event) => {
                toggle(index);
              }}
            />
            {todo.testo}
            <input
              type="button"
              value="x"
              onClick={(event) => {
                remove(index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function useTodoList() {
  const [list, setList] = useStorage("todoList", [
    { done: true, testo: "partecipare al corso" },
    { done: false, testo: "fare progetto" }
  ]);
  const add = (testo: string) => {
    const newTodo = { done: false, testo };
    const newList = [...list, newTodo];
    // equivlente a
    // const newList = list.concat([newTodo])
    setList(newList);
  };
  const toggle = (index: number) => {
    const todo = list[index];
    // significa: crea un nuovo oggetto,
    // spalma gli attributi dell'originale
    // modifica un attributo nella nuova copia
    const modifiedTodo = { ...todo, done: !todo.done };
    const newList = list
      .slice(0, index)
      .concat([modifiedTodo])
      .concat(list.slice(index + 1));
    setList(newList);
  };
  const remove = (index: number) => {
    const newList = list.slice(0, index).concat(list.slice(index + 1));
    setList(newList);
  };
  return { list, add, toggle, remove };
}

function TodoListFrederikJSXStatico() {
  return (
    <div>
      <div>
        <input type="text" />
        <input type="button" value="add" />
      </div>
      <div>
        <input type="checkbox" />
        partecipare al corso
        <input type="button" value="x" />
      </div>
    </div>
  );
}

function TodoListFrederikEventListener() {
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            // TODO impostare testo
          }}
        />
        <input
          type="button"
          value="add"
          onClick={(event) => {
            // TODO aggiungere il todo
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(event) => {
            // TODO fare toggle del done
          }}
        />
        partecipare al corso
        <input
          type="button"
          value="x"
          onClick={(event) => {
            // TODO eliminare il todo
          }}
        />
      </div>
    </div>
  );
}

function TodoListFrederikSenzaValoriHardCoded() {
  const text = "qualcosa da fare";
  const done = true;
  const testo = "partecipare al corso";
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            // TODO impostare testo
          }}
        />
        <input
          type="button"
          value="add"
          onClick={(event) => {
            // TODO aggiungere il todo
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={done}
          onChange={(event) => {
            // TODO fare toggle del done
          }}
        />
        {testo}
        <input
          type="button"
          value="x"
          onClick={(event) => {
            // TODO eliminare il todo
          }}
        />
      </div>
    </div>
  );
}

function TodoListFrederikConIterazioni() {
  const text = "qualcosa da fare";
  const list = [
    { done: true, testo: "partecipare al corso" },
    { done: false, testo: "fare progetto" }
  ];
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            // TODO impostare testo
          }}
        />
        <input
          type="button"
          value="add"
          onClick={(event) => {
            // TODO aggiungere il todo
          }}
        />
      </div>
      {list.map((todo, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(event) => {
                // TODO fare toggle del done
              }}
            />
            {todo.testo}
            <input
              type="button"
              value="x"
              onClick={(event) => {
                // TODO eliminare il todo
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function TodoListFrederikConHookDiStato() {
  const [text, setText] = React.useState("qualcosa da fare");
  const [list, setList] = React.useState([
    { done: true, testo: "partecipare al corso" },
    { done: false, testo: "fare progetto" }
  ]);
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            // TODO impostare testo
          }}
        />
        <input
          type="button"
          value="add"
          onClick={(event) => {
            // TODO aggiungere il todo
          }}
        />
      </div>
      {list.map((todo, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(event) => {
                // TODO fare toggle del done
              }}
            />
            {todo.testo}
            <input
              type="button"
              value="x"
              onClick={(event) => {
                // TODO eliminare il todo
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function TodoListFrederikImplementazioneEventListener() {
  const [text, setText] = React.useState("qualcosa da fare");
  const [list, setList] = React.useState([
    { done: true, testo: "partecipare al corso" },
    { done: false, testo: "fare progetto" }
  ]);
  const add = (testo: string) => {
    // TODO implementare
  };
  const toggle = (index: number) => {
    // TODO implementare
  };
  const remove = (index: number) => {
    // TODO implementare
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.currentTarget.value);
          }}
        />
        <input
          type="button"
          value="add"
          onClick={(event) => {
            add(text);
            setText("");
          }}
        />
      </div>
      {list.map((todo, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(event) => {
                toggle(index);
              }}
            />
            {todo.testo}
            <input
              type="button"
              value="x"
              onClick={(event) => {
                remove(index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

function TodoListFrederikOperazioniArray() {
  const [text, setText] = React.useState("qualcosa da fare");
  const [list, setList] = React.useState([
    { done: true, testo: "partecipare al corso" },
    { done: false, testo: "fare progetto" }
  ]);
  const add = (testo: string) => {
    const newTodo = { done: false, testo };
    const newList = [...list, newTodo];
    // equivlente a
    // const newList = list.concat([newTodo])
    setList(newList);
  };
  const toggle = (index: number) => {
    const todo = list[index];
    // significa: crea un nuovo oggetto,
    // spalma gli attributi dell'originale
    // modifica un attributo nella nuova copia
    const modifiedTodo = { ...todo, done: !todo.done };
    const newList = list
      .slice(0, index)
      .concat([modifiedTodo])
      .concat(list.slice(index + 1));
    setList(newList);
  };
  const remove = (index: number) => {
    const newList = list.slice(0, index).concat(list.slice(index + 1));
    setList(newList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            setText(event.currentTarget.value);
          }}
        />
        <input
          type="button"
          value="add"
          onClick={(event) => {
            add(text);
            setText("");
          }}
        />
      </div>
      {list.map((todo, index) => {
        return (
          <div key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={(event) => {
                toggle(index);
              }}
            />
            {todo.testo}
            <input
              type="button"
              value="x"
              onClick={(event) => {
                remove(index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
