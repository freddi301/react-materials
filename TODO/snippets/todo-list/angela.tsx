import React from "react";
import { useStorage } from "../useEffect";

export function TodoListAngela() {
  const [text, setText] = React.useState("qualcosa da fare");
  const list = [
    { done: true, testo: "partecipare al corso" },
    { done: false, testo: "fare progetto" }
  ];
  const add = (testo: string) => {};

  const toggle = (index: number) => {};

  const remove = (index: number) => {};

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
          onChange={(event) => {
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
              onChange={(event) => {
                remove(index);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
