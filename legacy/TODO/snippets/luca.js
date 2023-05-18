import React from "react";
import { getListaFilm } from "./Showcase";

export function Luca() {
  const {
    nome,
    cognome,
    datanascita,
    eta,
    setNome,
    setCognome,
    setDatanascita,
    formvalido,
    datavalida,
    nomevalido,
    cognomevalido
  } = useLuca();
  // useStamp(nome);
  return (
    <div>
      <form>
        <p>
          <label>Nome</label>
          <input
            name="nome"
            value={nome}
            type="text"
            onChange={(event) => setNome(event.currentTarget.value)}
            required
          ></input>
          {!nomevalido && (
            <span style={errorMessStyle}>Devi scrivere qualcosa</span>
          )}
        </p>

        <p>
          <label>Cognome</label>
          <input
            name="cognome"
            value={cognome}
            type="text"
            onChange={(event) => setCognome(event.currentTarget.value)}
            required
          ></input>
          {!cognomevalido && (
            <span style={errorMessStyle}>Devi scrivere qualcosa</span>
          )}
        </p>
        <p>
          <label>Data di nascita</label>
          <input
            name="datanascita"
            type="number"
            value={datanascita}
            onChange={(event) => setDatanascita(event.currentTarget.value)}
          ></input>
          {!datavalida && (
            <span style={errorMessStyle}>
              Inserisci una data non superiore a 100 anni a partire da oggi
            </span>
          )}
        </p>
        <p>
          <span>{eta}</span>
        </p>
        <button type="submit" disabled={!formvalido}>
          Calcola
        </button>
      </form>
    </div>
  );
}

function useLuca() {
  const [nome, setNome] = React.useState("Luca");
  const [cognome, setCognome] = React.useState("Vise");
  const [datanascita, setDatanascita] = React.useState(2021);
  const eta = 2021 - datanascita;
  const datavalida = eta <= 100;
  const nomevalido = nome.length > 0;
  const cognomevalido = cognome.length > 0;
  const formvalido = datavalida && nomevalido && cognomevalido;

  return {
    nome,
    cognome,
    datanascita,
    eta,
    formvalido,
    nomevalido,
    cognomevalido,
    datavalida,
    setNome,
    setCognome,
    setDatanascita
  };
}

const errorMessStyle = { color: "red" };

export function Addizionatore(props) {
  return (
    <React.Fragment>
      {props.children} {props.a + props.b}
    </React.Fragment>
  );
}

export function OrdinaLista({ arr }) {
  return (
    <React.Fragment>
      <ol>
        {arr.map((persona) => (
          <li onClick={() => alert(persona.name)} key={persona.id}>
            {persona.name}
          </li>
        ))}
      </ol>
    </React.Fragment>
  );
}

function useLucaState(initial) {
  const reducer = (state, action) => {
    return action;
  };
  const [state, dispatch] = React.useReducer(reducer, initial);
  const setState = (value) => {
    return dispatch(value);
  };
  return [state, setState];
}

function useContatore(valinit = 0) {
  const [conta, setConta] = React.useState(valinit);
  const addone = () => {
    setConta(conta + 1);
  };
  const removeone = () => {
    setConta(conta - 1);
  };

  return [conta, addone, removeone];
}

function useContatoreReducer(valinit = 0) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment": {
        return state + 1;
      }
      case "decrement": {
        return state - 1;
      }
      default: {
        state;
      }
    }
  };
  const [state, dispatch] = React.useReducer(reducer, valinit);
  return [
    state,
    () => dispatch({ type: "increment" }),
    () => dispatch({ type: "decrement" })
  ];
}

function useStamp(value) {
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(value);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [value]);
}

function useLocalStorage(chiave, valoreDiDefault) {
  const [val, setVal] = React.useState(() => {
    return localStorage.getItem(chiave) ?? valoreDiDefault;
  });
  React.useEffect(() => {
    localStorage.setItem(chiave, val);
  }, [val, chiave]);
  return [val, setVal];
}

function raddopiatoreAsincrono(val, callback) {
  setTimeout(() => {
    callback(val * 2);
  }, 1000);
}

function divisoreAsincrono(a, b, onCallback, onError) {
  setTimeout(() => {
    if (b === 0) {
      onError("Divisione per zero");
    } else {
      onCallback(a / b);
    }
  });
}

const promised4 = new Promise((resolve, reject) => {
  resolve(4);
});

const vita = () => {
  return new Promise((reject) => {});
};

const timeoutDiConnessione = () => {
  return new Promise((reject) => {
    setTimeout(reject, 5000);
  });
};

const mai = (anno) => {
  return new Promise((resolve) => {
    const currentDate = new Date().getFullYear;
    const pensioneTo = currentDate - anno;
    setTimeout(resolve, 1000 * 60 * 60 * 24 * 365 * (70 - pensioneTo));
  });
};

const pa = new Promise((resolve) => resolve(1));
const pb = new Promise((resolve) => resolve(2));
const pc = new Promise((resolve) => resolve(3));

const result = Promise.all([pa, pb, pc]).then(([a, b, c]) => {
  console.log(a + b + c);
});

const aspetta = (millisecondi) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondi);
  });
};

async function risalutaConEleganteRitardo(hello) {
  await aspetta(5000);
  console.log("ri" + hello);
}

export function ListaFilm() {
  const [films, loaded] = useLoadFilm();

  if (loaded) {
    return (
      <div>
        <ul>
          {films.map((elem) => (
            <li key={elem.id}>{elem.titolo}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

const useLoadFilm = () => {
  const [films, setFilms] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const listafilm = getListaFilm();
    listafilm.then((resultfilm) => {
      setFilms(resultfilm);
      setLoaded(true);
    });
  }, [loaded, films]);

  return [films, loaded];
};
