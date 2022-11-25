import React from "react";
import { getListaFilm } from "./Showcase";

export function Alberto() {
  const [nome, setNome] = React.useState("alberto");
  const [cognome, setCognome] = React.useState("bonato");
  const [dataNascita, setDataNascita] = React.useState(2021);

  const eta = 2021 - dataNascita;
  const isDataNascitaValid = eta <= 100 && eta >= 0;
  const isNomeValid = nome.length > 0;
  const isCognomeValid = cognome.length > 0;
  const isFormValid = isDataNascitaValid && isNomeValid && isCognomeValid;

  // useConsoleLog(nome);

  return (
    <div>
      <label>Nome </label>
      <input
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.currentTarget.value)}
      />
      {!isNomeValid && <p style={errorMessageStyle}>Nome non valido</p>}
      <br />
      <label>Cognome </label>
      <input
        name="cognome"
        value={cognome}
        onChange={(event) => setCognome(event.currentTarget.value)}
      />
      {!isCognomeValid && <p style={errorMessageStyle}>Cognome non valido</p>}
      <br />
      <label>Anno di nascita </label>
      <input
        name="dataNascita"
        value={dataNascita}
        type="number"
        onChange={(event) => setDataNascita(Number(event.currentTarget.value))}
      />
      {!isDataNascitaValid && (
        <p style={errorMessageStyle}>Data di nascita non valida</p>
      )}
      <br />
      <p>{eta}</p>
      <br />
      <button disabled={!isFormValid}>Submit</button>
    </div>
  );
}

const errorMessageStyle = { color: "red" };

export function Sottrattore(props) {
  return (
    <React.Fragment>
      {props.children}
      {props.x - props.y}
    </React.Fragment>
  );
}

export function AlbertoLista({ lista }) {
  return (
    <ol>
      {lista.map((user) => (
        <li key={user.id} onClick={() => alert(user.name)}>
          {user.name}
        </li>
      ))}
    </ol>
  );
}

function useAlbertoState(statoIniziale) {
  return React.useReducer((state, action) => {
    return action;
  }, statoIniziale);
}

function useContatore(statoIniziale = 0) {
  const [state, setState] = React.useState(statoIniziale);
  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };
  return [state, increment, decrement];
}

function useContatoreReducer(statoIniziale = 0) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return state + 1;
      }
      case "decrement": {
        return state - 1;
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = React.useReducer(reducer, statoIniziale);
  return [
    state,
    () => dispatch({ type: "increment" }),
    () => dispatch({ type: "decrement" })
  ];
}

function useConsoleLog(valore) {
  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(valore);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [valore]);
}

function useLocalStorage(chiave, valoreDiDefault) {
  const [state, setState] = React.useState(() => {
    const storageValue = localStorage.getItem(chiave);
    return storageValue ?? valoreDiDefault;
  });
  React.useEffect(() => {
    localStorage.setItem(chiave, state);
  }, [chiave, state]);

  return [state, setState];
}

const raddopiatoreAsincrono = (num, callback) => {
  setTimeout(() => callback(num * 2), 1000);
};

const divisoreAsincrono = (a, b, onSuccess, onError) => {
  b === 0 ? onError("divisione per zero") : onSuccess(a / b);
};

const promised4 = () => {
  return new Promise((resolve, reject) => {
    resolve(4);
  });
};

// promessa che non verrà mai risolta
new Promise((resolve, reject) => {
  // niente
});

// promessa che fallisce dopo 5 secondi
new Promise((resolve, reject) => {
  setTimeout(reject, 5000);
});

// promessa che viene risolta dopo 70 dell'anno di nascita parametro
// della funzione
const quandoVieneLaPensione = (annoNascita) => {
  const annoCorrente = new Date().getFullYear();
  new Promise((resolve, reject) => {
    setTimeout(
      resolve,
      (annoCorrente - annoNascita + 70) * 365 * 60 * 60 * 24 * 1000
    );
  });
};

const pa = new Promise((resolve) => resolve(1));
const pb = new Promise((resolve) => resolve(2));
const pc = new Promise((resolve) => resolve(3));

const pRisultato = Promise.all([pa, pb, pc]).then(([a, b, c]) =>
  console.log(a + b + c)
);

const aspetta = (millisec) =>
  Promise((resolve) => setTimeout(resolve, millisec));

async function risalutaConEleganteRitardo(saluto) {
  await aspetta(5000);
  console.log("ri" + saluto);

  const promiseValue = await saluto;
  setTimeout(console.log("ri" + saluto), 5000);
  return promiseValue;
}

export const ListaFilmAlberto = () => {
  const state = useListaFilm();

  switch (state.statoLoading) {
    case "caricato":
      return (
        <div>
          <ol>
            {state.listaFilm.map((film) => (
              <li key={film.id}>{film.titolo}</li>
            ))}
          </ol>
        </div>
      );
    case "errore-caricamento":
      return <div>Errore caricamento</div>;
    default: {
      return <div>loading...</div>;
    }
  }
};

const useListaFilm = () => {
  const [state, setState] = React.useState({
    statoLoading: "loading",
    listaFilm: []
  });

  React.useEffect(() => {
    getListaFilm()
      .then((x) => {
        setState({
          statoLoading: "caricato",
          listaFilm: x
        });
      })
      .catch((err) => {
        console.error(err);
        setState({
          statoLoading: "errore-caricamento",
          listaFilm: []
        });
      });
  }, []);
  return state;
};
