import React from "react";

type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

const todos: Array<Todo> = [
  {
    id: "1",
    isDone: true,
    text: "Learn React Basics"
  },
  {
    id: "2",
    isDone: false,
    text: "Learn React Hooks"
  }
];

/**
 * Lista di todo, per ora non interattiva
 */
export function TodoListA() {
  return (
    <div>
      {todos.map(({ id, text, isDone }) => {
        return (
          // è molto importante specificare una key univoca quando si usano liste di element
          // la key deve essere univoca per la lista
          // è necessaria sia per le performance che per per il corretto funzionamente dei collback
          // osservare la console del browser, react lancia degli avvisi a proposito in modalita sviluppo
          <div key={id}>
            <input
              type="checkbox"
              name={id}
              checked={isDone}
              onChange={() => {}}
            />
            {text}
          </div>
        );
      })}
    </div>
  );
}
