import React from "react";

export function ToDoListLuca() {
  const { lista, nextTodo, setNextTodo, addItem, cloneItem } = useTodoList();

  return (
    <div>
      <h2>TODO LIST</h2>
      <input
        value={nextTodo}
        onChange={(e) => setNextTodo(e.currentTarget.value)}
      />
      <button onClick={addItem}>Add</button>
      <div>
        {lista.map((item) => (
          <ListItemMemo item={item} key={item.id} clone={cloneItem} />
        ))}
      </div>
    </div>
  );
}

const ListItem = (props) => {
  const item = props.item;
  return (
    <div key={item.id}>
      <label>
        <span>{item.title}</span>
      </label>
      <button onClick={() => props.clone(item.title)}>Clona</button>
    </div>
  );
};

const ListItemMemo = React.memo(ListItem);

function useTodoList() {
  const [lista, setList] = React.useState([
    {
      id: "1",
      title: "spesa"
    }
  ]);
  const [nextTodo, setNextTodo] = React.useState("");

  function addItem() {
    const newId = Math.random;
    const newItem = {
      id: newId,
      title: nextTodo
    };
    setList([...lista, newItem]);
    setNextTodo("");
  }

  const cloneItem = React.useCallback(
    function clone(cloneTitle) {
      const newId = Math.random;
      const newItem = {
        id: newId,
        title: cloneTitle
      };
      setList((lista) => [...lista, newItem]);
    },
    [setList]
  );

  return {
    lista,
    nextTodo,
    setNextTodo,
    addItem,
    cloneItem
  };
}
