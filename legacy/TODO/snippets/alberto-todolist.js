import React from "react";

export function AlbertoTodoList() {
  const [list, setList] = React.useState({ items: [], newItem: "" });

  const duplica = React.useCallback((item) => {
    setList((list) => ({
      items: [...list.items, item],
      newItem: list.newItem
    }));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={list.newItem}
        onChange={(e) => setList({ ...list, newItem: e.currentTarget.value })}
      />
      <button
        onClick={() => {
          setList({
            items: [...list.items.slice(0), list.newItem],
            newItem: ""
          });
        }}
      >
        Aggiungi
      </button>
      <ol>
        {list.items.map((item, idx) => (
          <ListItemMemo item={item} key={idx} onDuplica={duplica} />
        ))}
      </ol>
    </div>
  );
}

function ListItem({ item, onDuplica }) {
  return (
    <li>
      <span>{item} </span>
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => onDuplica(item)}
      >
        Duplica
      </button>
    </li>
  );
}

const ListItemMemo = React.memo(ListItem);
