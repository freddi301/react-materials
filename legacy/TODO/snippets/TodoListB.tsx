import React, { useReducer, Dispatch } from "react";

// il nostro oggetto di dominio
type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

// il tipo dello stato del nostro dominio
// il tipo Record<Key, Value> sta per un oggetto che ha come chiavi il tipo Key, e come valori il tipo Value
type TodoState = Record<string, Todo>;

// azioni possibili sul nostro dominio
// il pipe | indica che questo tipo potrebbe essere uno dei seguenti (non piu di uno)
type TodoAction =
  | { type: "add"; id: string; text: string }
  | { type: "remove"; id: string }
  | { type: "done"; id: string }
  | { type: "undone"; id: string };

/*
  per semplificare la gestione delle transizioni di stato
  la si organizza nella logica `reducer` (è una convenzione)
  un reducer non è altro che una funzione, che dato uno state ed un azione
  restituisce un nuovo stato
  type Reducer<State, Action> = (state: State, action: Action) => State
  per auitarci nella scrittura ci definiamo il tipo dello stato
  il tipo delle azioni possibili ha la particolarita di poter disambiguare il tipo dell'azione
  all'interno dello case di uno switch (prova a fare hover sulle varie action nei vari case)
*/
function todoListReducer(state: TodoState, action: TodoAction): TodoState {
  // lo switch statement è convenzione, è chiaro ed efficiente
  switch (action.type) {
    case "add": {
      // il corpo dei case è racchiuso in un blocco di codice per isolare le variabili
      const { id, text } = action;
      return { ...state, [id]: { id, isDone: false, text } }; // combinazione di destructuring, spread operator e computed property
    }
    case "remove": {
      const { id } = action;
      const { [id]: removed, ...rest } = state; // combinazione di destructuring e spread operator
      return rest;
    }
    case "done": {
      const { id } = action;
      return { ...state, [id]: { ...state[id], isDone: true } };
    }
    case "undone": {
      const { id } = action;
      return { ...state, [id]: { ...state[id], isDone: false } };
    }
    default:
      // se un azione non è gestita, è solito ritornare lo stato immutato
      return state;
  }
}

const initialTodos: TodoState = {
  "1": {
    id: "1",
    isDone: true,
    text: "Learn React Basics"
  },
  "2": {
    id: "2",
    isDone: false,
    text: "Learn React Hooks"
  },
  "3": {
    id: "3",
    isDone: false,
    text: "Learn TypeScript"
  }
};

/**
 * Lista di todo con useReducer
 */
export function TodoListB() {
  // utilizziamo il reducer con la hook useReducer
  // primo parametro: reducer
  // secondo parametro: stato iniziale
  // primo ritorno: stato attuale
  // secondo riotrno: funzione usata per fornire un'azione al reducer
  const [todos, dispatch] = useReducer(todoListReducer, initialTodos);
  return (
    <div>
      {Object.values(todos).map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

type TodoProps = {
  todo: Todo;
  dispatch: Dispatch<TodoAction>; // Dispatch è il tipo fornito da react per descrivere le funzioni dispatch ritornate da useReducer
};

function Todo({ todo: { id, isDone, text }, dispatch }: TodoProps) {
  return (
    <div>
      <input
        type="checkbox"
        name={id} // il name è necesssario per il funzionamento corretto
        checked={isDone}
        onChange={() => {
          if (isDone) {
            dispatch({ type: "undone", id });
          } else {
            dispatch({ type: "done", id });
          }
        }}
      />
      {text}
    </div>
  );
}
