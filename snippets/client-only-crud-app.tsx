import React from "react";

// le IIFE servono solo per isolare lo spazio delle variabili
// poichè andremo a realizzare un passaggio alla volta

(() => {
  function App() {
    return (
      <React.Fragment>
        <ul>
          <li>
            Mario Rossi 15/01/1980
            <button>Elimina</button>
          </li>
          <li>
            Paolo Bianchi 25/06/1975
            <button>Elimina</button>
          </li>
        </ul>
        <form>
          <div>
            <label>nome</label>
            <input type="text" />
          </div>
          <div>
            <label>cognome</label>
            <input type="text" />
          </div>
          <div>
            <label>data di nascita</label>
            <input type="date" />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
      </React.Fragment>
    );
  }
})();

(() => {
  function App() {
    const [nome, setNome] = React.useState("");
    const [cognome, setCognome] = React.useState("");
    const [eta, setEta] = React.useState(0);
    return (
      <React.Fragment>
        <ul>
          <li>
            Mario Rossi 15/01/1980
            <button>Elimina</button>
          </li>
          <li>
            Paolo Bianchi 25/06/1975
            <button>Elimina</button>
          </li>
        </ul>
        <form>
          <div>
            <label>nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => {
                setNome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>cognome</label>
            <input
              type="text"
              value={cognome}
              onChange={(event) => {
                setCognome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>eta</label>
            <input
              type="number"
              value={eta}
              onChange={(event) => {
                setEta(event.currentTarget.valueAsNumber);
              }}
            />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
      </React.Fragment>
    );
  }
})();

(() => {
  type Persona = {
    id: string;
    nome: string;
    cognome: string;
    eta: number;
  };

  function App() {
    const [nome, setNome] = React.useState("");
    const [cognome, setCognome] = React.useState("");
    const [eta, setEta] = React.useState(0);
    const [persone, setPersone] = React.useState<Array<Persona>>([]);
    return (
      <React.Fragment>
        <ul>
          {persone.map(({ nome, cognome, eta, id }) => {
            return (
              <li key={id}>
                {nome} {cognome} {eta}
                <button>Elimina</button>
              </li>
            );
          })}
        </ul>
        <form>
          <div>
            <label>nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => {
                setNome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>cognome</label>
            <input
              type="text"
              value={cognome}
              onChange={(event) => {
                setCognome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>eta</label>
            <input
              type="number"
              value={eta}
              onChange={(event) => {
                setEta(event.currentTarget.valueAsNumber);
              }}
            />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
      </React.Fragment>
    );
  }
})();

(() => {
  type Persona = {
    id: string;
    nome: string;
    cognome: string;
    eta: number;
  };

  function App() {
    const [nome, setNome] = React.useState("");
    const [cognome, setCognome] = React.useState("");
    const [eta, setEta] = React.useState(0);
    const [persone, setPersone] = React.useState<Array<Persona>>([]);
    return (
      <React.Fragment>
        <ul>
          {persone.map(({ nome, cognome, eta, id }) => {
            return (
              <li key={id}>
                {nome} {cognome} {eta}
                <button>Elimina</button>
              </li>
            );
          })}
        </ul>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (
              nome.trim().length > 0 &&
              cognome.trim().length > 0 &&
              eta >= 0
            ) {
              const id = Math.random().toString();
              setPersone([...persone, { id, nome, cognome, eta }]);
            }
          }}
        >
          <div>
            <label>nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => {
                setNome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>cognome</label>
            <input
              type="text"
              value={cognome}
              onChange={(event) => {
                setCognome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>eta</label>
            <input
              type="number"
              value={eta}
              onChange={(event) => {
                setEta(event.currentTarget.valueAsNumber);
              }}
            />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
      </React.Fragment>
    );
  }
})();

(() => {
  type Persona = {
    id: string;
    nome: string;
    cognome: string;
    eta: number;
  };

  function App() {
    const [nome, setNome] = React.useState("");
    const [cognome, setCognome] = React.useState("");
    const [eta, setEta] = React.useState(0);
    const [persone, setPersone] = React.useState<Array<Persona>>([]);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <ul>
          {persone.map(({ nome, cognome, eta, id }) => {
            return (
              <li
                key={id}
                style={{
                  paddingBlockEnd: "1.25rem",
                  borderBottom: "1px solid lightgrey",
                }}
              >
                {nome} {cognome} {eta}
                <button
                  style={{
                    marginInlineStart: "1rem",
                    backgroundColor: "transparent",
                    border: "1px solid red",
                    color: "red",
                  }}
                >
                  Elimina
                </button>
              </li>
            );
          })}
        </ul>
        <form
          style={{
            padding: "1.25rem",
            border: "1px solid lightgrey",
            borderRadius: "10px",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            if (
              nome.trim().length > 0 &&
              cognome.trim().length > 0 &&
              eta >= 0
            ) {
              const id = Math.random().toString();
              setPersone([...persone, { id, nome, cognome, eta }]);
            }
          }}
        >
          <div>
            <label>nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => {
                setNome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>cognome</label>
            <input
              type="text"
              value={cognome}
              onChange={(event) => {
                setCognome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>eta</label>
            <input
              type="number"
              value={eta}
              onChange={(event) => {
                setEta(event.currentTarget.valueAsNumber);
              }}
            />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
      </div>
    );
  }
})();

() => {
  type Persona = {
    nome: string;
    cognome: string;
    eta: number;
  };

  function App() {
    const [nome, setNome] = React.useState("");
    const [cognome, setCognome] = React.useState("");
    const [eta, setEta] = React.useState(0);
    const [persone, setPersone] = React.useState<Record<string, Persona>>({});
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <ul>
          {Object.entries(persone).map(([id, persona]) => {
            return (
              <li
                key={id}
                style={{
                  paddingBlockEnd: "1.25rem",
                  borderBottom: "1px solid lightgrey",
                }}
              >
                {persona.nome} {persona.cognome} {persona.eta}
                <button
                  style={{
                    marginInlineStart: "1rem",
                    backgroundColor: "transparent",
                    border: "1px solid red",
                    color: "red",
                  }}
                  onClick={() => {
                    const newPersone = { ...persone };
                    delete newPersone[id];
                    setPersone(newPersone);
                    /*
                      const {[id]: deletePerson, ...newPersone} = persone;
                      setPersone(newPersone)
                    */
                  }}
                >
                  Elimina
                </button>
              </li>
            );
          })}
        </ul>
        <form
          style={{
            padding: "1.25rem",
            border: "1px solid lightgrey",
            borderRadius: "10px",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            if (
              nome.trim().length > 0 &&
              cognome.trim().length > 0 &&
              eta >= 0
            ) {
              const id = Math.random().toString();
              const newPersone = {
                ...persone,
                [id]: { nome, cognome, eta },
              };
              setPersone(newPersone);
            }
          }}
        >
          <div>
            <label>nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => {
                setNome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>cognome</label>
            <input
              type="text"
              value={cognome}
              onChange={(event) => {
                setCognome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>eta</label>
            <input
              type="number"
              value={eta}
              onChange={(event) => {
                setEta(event.currentTarget.valueAsNumber);
              }}
            />
          </div>
          <button type="submit">Aggiungi</button>
        </form>
      </div>
    );
  }
};

() => {
  type Persona = {
    nome: string;
    cognome: string;
    eta: number;
  };

  function App() {
    const [nome, setNome] = React.useState("");
    const [cognome, setCognome] = React.useState("");
    const [eta, setEta] = React.useState(0);
    const [persone, setPersone] = React.useState<Record<string, Persona>>({});
    const [idPersona, setIdPersona] = React.useState("");
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <ul>
          {Object.entries(persone).map(([id, persona]) => {
            return (
              <li
                key={id}
                style={{
                  paddingBlockEnd: "1.25rem",
                  borderBottom: "1px solid lightgrey",
                  backgroundColor: idPersona === id ? "blue" : "",
                }}
              >
                {persona.nome} {persona.cognome} {persona.eta}
                <button
                  style={{
                    marginInlineStart: "1rem",
                    backgroundColor: "transparent",
                    border: "1px solid red",
                    color: "red",
                  }}
                  onClick={() => {
                    const newPersone = { ...persone };
                    delete newPersone[id];
                    setPersone(newPersone);
                  }}
                >
                  Elimina
                </button>
                <button
                  style={{
                    marginInlineStart: "1rem",
                    backgroundColor: "transparent",
                    border: "1px solid red",
                    color: "green",
                  }}
                  onClick={() => {
                    setIdPersona(id);
                    setNome(persona.nome);
                    setCognome(persona.cognome);
                    setEta(persona.eta);
                  }}
                >
                  Modifica
                </button>
              </li>
            );
          })}
        </ul>
        <form
          style={{
            padding: "1.25rem",
            border: "1px solid lightgrey",
            borderRadius: "10px",
          }}
          onSubmit={(event) => {
            event.preventDefault();
            if (
              nome.trim().length > 0 &&
              cognome.trim().length > 0 &&
              eta >= 0
            ) {
              if (idPersona === "") {
                const id = Math.random().toString();
                const newPersone = {
                  ...persone,
                  [id]: { nome, cognome, eta },
                };
                setPersone(newPersone);
                setIdPersona(id);
              } else {
                const newPersone = {
                  ...persone,
                  [idPersona]: { nome, cognome, eta },
                };
                setPersone(newPersone);
              }
            }
          }}
        >
          <div>
            <label>nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => {
                setNome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>cognome</label>
            <input
              type="text"
              value={cognome}
              onChange={(event) => {
                setCognome(event.currentTarget.value);
              }}
            />
          </div>
          <div>
            <label>eta</label>
            <input
              type="number"
              value={eta}
              onChange={(event) => {
                setEta(event.currentTarget.valueAsNumber);
              }}
            />
          </div>
          {idPersona === "" ? (
            <button type="submit">Aggiungi</button>
          ) : (
            <React.Fragment>
              <button type="submit">Conferma Modifica</button>
              <button
                type="button"
                onClick={(event) => {
                  setIdPersona("");
                  setNome("");
                  setCognome("");
                  setEta(0);
                }}
              >
                Annulla Modifica
              </button>
            </React.Fragment>
          )}
        </form>
      </div>
    );
  }
};
