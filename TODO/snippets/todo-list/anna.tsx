import React, { useState } from "react";
import { useStorage } from "../useEffect";

export function TodoListAnna() {
  //  const [list, setList] = useStorage("lista", []);

  const [testo, setTesto] = useState("");

  const [list, setList] = React.useState([
    { done: true, text: "partecipare corso" },
    { done: false, text: "fare progetto" }
  ]);

  const addTodo = (testo: string) => {};

  const toggle = (index: number) => {
    //TODO.
  };

  const removeTodo = (index: number) => {
    //TODO
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={testo}
          onChange={(event) => setTesto(event.currentTarget.value)}
        />
        <input
          type="button"
          value="Aggiungi"
          onClick={(event) => {
            //setList(list.concat(testo)
            addTodo(testo);
            setTesto("");
          }}
        />
      </div>
      <div>
        <ol>
          {list.map(({ done, text }, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => {
                    toggle(index);
                  }}
                />
                {text}
                <input
                  type="button"
                  value="x"
                  onClick={() => {
                    //setList(list.splice(index, 1))
                    removeTodo(index);
                  }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
