// // creare un componente
// // che ci permette di avere una todolist
// // quindi a vista, una lista di linee testuali
// // con davanti una checkbox (che indica se l'ho gia fatto)
// // e in coda un bottono "x" per eliminare la voce
// // un input dove possiamo scrivere testo
// // un bottone che aggiunge quel testo alle righe
// // e persistere in localStorage

import React from "react";

// import { useState } from "react";

// const TodoListCarmine = () => {
//   // //qui valorizzo
//   // const [todoList, setTodoList ] = useState("");

//   const todoList = [
//     { done: true, text: "partecipare corso" },
//     { done: false, text: "fare progetto" }
//   ];

//   const aggiungiTesto = () => {
//     alert("aggiungi testo");
//   };
//   const elimina = () => {
//     alert("elimina");
//   };
//   const aggiungiInlocalStorage = () => {
//     // localStorage.setItem();
//     alert("aggiungi in local storage");
//   };

//   return (
//     // costruiaimo
//     <>
//       {todoList.map((todo, index) => {})}

//       {/* <div>
//       Fatto
//       <input type="checkbox" />
//       <input type="text" name="nota" />
//       <input type="button" value="Elimina" onClick={elimina} />
//       <input type="button" value="Aggiungi testo"

//       // onClick={aggiungiTesto} />
//       //passo valore del campo nota
//       onClick={(event)=>setTodoList()}
//     </div> */}
//     </>
//   );
// };

// export function TodoListCarmine() {
//   return (
//     <div>
//       <div>
//         <input type="text" />
//         <input type="button" value="add" />
//       </div>
//       <div>
//         <input type="checkbox" />
//         <input type="button" value="elimina" />
//       </div>
//     </div>
//   );
// }

// function TodoListCarmineListener() {
//   return (
//     <div>
//       <div>
//         <input type="text"
//         onChange={(event)=>{}}
//         />
//         <input type="button" value="add"
//         onChange={(event)=>{}}
//         />
//       </div>
//       <div>
//         <input type="checkbox"
//         onChange={(event)=>{}}
//         />
//         <input type="button" value="elimina"
//         onClick={(event)=>{}}
//         />
//       </div>
//     </div>
//   );
// }
// function TodoListCarmineLast() {
// export function TodoListCarmine() {
//   const text = "qualcosa da aggiungere";
//   const done = true;
//   const testo = "partecipare al corso";

//   const [toDolist, settoDolist] = React.useState([
//     { done: true, text: "qualcosa da aaggiungere" },
//     { done: false, text: "partecipare" }
//   ]);

//   return (
//     <div>
//       <div>
//         <input type="text" value={text} onChange={(event) => {}} />
//         <input type="button" value="add" onChange={(event) => {}} />
//       </div>
//       {testo}
//       <div>
//         <input type="checkbox" checked={done} onChange={(event) => {}} />
//         <input type="button" value="elimina" onClick={(event) => {}} />
//       </div>
//     </div>
//   );
// }
export function TodoListCarmine() {
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
