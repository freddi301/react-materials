import ReactDOM from "react-dom";
import React from "react";

/*
export function PortalExample() {
  const [teleportTarget, setTeleportTarget] = React.useState(null);
  React.useLayoutEffect(() => {
    const teleporTarget = document.createElement("div");
    document.body.appendChild(teleporTarget);
    setTeleportTarget(teleporTarget);
    return () => {
      document.removeChild(teleporTarget);
    };
  }, []);
  return (
    <div>
      <h1>Teleported content follows</h1>
      {teleportTarget &&
        ReactDOM.createPortal(<h1>I am teleported</h1>, teleportTarget)}
    </div>
  );
}
*/

export function CreaLucaModale() {
  const [modalElement, setModalElement] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function activateModal() {
    setIsModalOpen(true);
  }

  function deActivateModal() {
    setIsModalOpen(false);
  }

  React.useLayoutEffect(() => {
    if (isModalOpen) {
      const nuovoModale = document.createElement("div");
      document.body.appendChild(nuovoModale);
      setModalElement(nuovoModale);
      return () => {
        document.body.removeChild(nuovoModale);
      };
    }
  }, [isModalOpen]);

  return (
    <div>
      <button onClick={activateModal}>Crea Modale</button>
      {modalElement &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: "10%",
              left: "10%",
              width: "80%",
              height: "100%",
              background: "rgb(10, 55, 99, 0.8)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
            className="modale"
          >
            I am a Modal
            <button
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "15px",
                background: "green",
                color: "white",
                width: "200px",
                margin: "20px 20px 20px 20px",
                alignItems: "center"
              }}
              onClick={deActivateModal}
            >
              Chiudi Modale
            </button>
          </div>,
          modalElement
        )}
    </div>
  );
}
