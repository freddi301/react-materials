import React, {
  useReducer,
  Dispatch,
  memo,
  useCallback,
  useState,
  useMemo
} from "react";

type Todo = {
  id: string;
  text: string;
  isDone: boolean;
};

type TodoState = Record<string, Todo>;

type TodoAction =
  | { type: "add"; id: string; text: string }
  | { type: "remove"; id: string }
  | { type: "done"; id: string }
  | { type: "undone"; id: string };

function todoListReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "add": {
      const { id, text } = action;
      return { ...state, [id]: { id, isDone: false, text } };
    }
    case "remove": {
      const { id } = action;
      const { [id]: removed, ...rest } = state;
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
      return state;
  }
}

const initialTodos: Record<string, Todo> = {
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
 * Lista di todo con useReducer, e memoizzazione
 */
export function TodoListC() {
  const [todos, dispatch] = useReducer(todoListReducer, initialTodos);
  const addTodo = useCallback(
    (text: string) => {
      const id = Math.random()
        .toString(16)
        .slice(2)
        .toUpperCase(); // il .toString(16) ci da la rappresentazione esadecimale
      dispatch({ type: "add", id, text });
    },
    [dispatch]
  );
  // useMemo è una hook di memizzazione
  // a livello logico si può immaginare che non abbia nessun effetto
  // praticamente ci permette di evitare il ricalcolo non necessario
  // primo parametro: una lambda che torna un valore
  // secondo parametro: lista delle dipendenze del valore calcolato
  // ritorno: il valore calcolato
  // https://it.reactjs.org/docs/hooks-reference.html#usememo
  // esempio logicamente equivalente
  // const csv = todosToCSV(todos)
  // const csv = useMemo(() => todosToCSV(todos), [todos]);
  const csv = useMemo(() => todosToCSV(todos), [todos]);
  return (
    <div>
      <AddTodoMemo onAdd={addTodo} />
      {Object.values(todos).map(todo => (
        <TodoMemo key={todo.id} todo={todo} dispatch={dispatch} /> // richiamo della versione memoizzata
      ))}
      <details>
        <summary>csv export</summary>
        <pre>{csv}</pre>
      </details>
    </div>
  );
}

type TodoProps = {
  todo: Todo;
  dispatch: Dispatch<TodoAction>;
};

function Todo({ todo: { id, isDone, text }, dispatch }: TodoProps) {
  // a livello logico si puo immaginare che useCallback non abbia nessun effetto
  // in pratica, il suo effetto è quello di non creare una nuova istanza della funzione
  // ad ogni rerender, a meno che i valori da cui dipende non cambino
  // useCallback è una hook di memoizzazione per le callback
  // primo parametro: una funzione che si vuole memoizzare
  // secondo parametro: array dei valori utilizzati dalla funzione (chiamate anche dipendenze)
  // ritorno: la funzione del primo parametro
  // https://it.reactjs.org/docs/hooks-reference.html#usecallback
  // esempio logicamente equivalente
  // const remove = () => dispatch({ type: "remove", id })
  // const remove = useCallback(() => dispatch({ type: "remove", id }), [dispatch]);
  const toggle = useCallback(() => {
    if (isDone) {
      dispatch({ type: "undone", id });
    } else {
      dispatch({ type: "done", id });
    }
  }, [dispatch, isDone, id]);
  const remove = useCallback(() => {
    dispatch({ type: "remove", id });
  }, [dispatch, id]);
  return (
    <div key={id}>
      <input type="checkbox" name={id} checked={isDone} onChange={toggle} />
      {text}
      <button onClick={remove}>🗑</button>
    </div>
  );
}

// componente memoizzato, si aggiorna solo se le props cambiano
// https://it.reactjs.org/docs/react-api.html#reactmemo
const TodoMemo = memo(Todo);

type AddTodoProps = {
  onAdd(text: string): void;
};

function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={event => setText(event.target.value)} />
      <button
        // questa callback non la memoizziamo poiche cambierà molto spesso
        // visto che dipende dalla variabile text che cambia ad ogni pressione del tasto,
        // il costo della memoizzazione supererebbe i benefici
        onClick={() => onAdd(text)}
      >
        add
      </button>
    </div>
  );
}

const AddTodoMemo = memo(AddTodo);

// https://it.wikipedia.org/wiki/Comma-separated_values
function todosToCSV(todos: TodoState, delimiter: string = ";"): string {
  const columns = ["id", "isDone", "text"] as const; // senza `as const` il tipo sarebbe meno preciso
  const columnsRow = columns.join(delimiter);
  const rows = Object.values(todos)
    .map(todo => columns.map(column => String(todo[column])).join(delimiter))
    .join("\n");
  return `${columnsRow}\n${rows}`;
}
