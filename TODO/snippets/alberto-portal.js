import ReactDOM from "react-dom";
import React from "react";

function PortalExample({ showModale, closeModale }) {
  const [teleportTarget, setTeleportTarget] = React.useState(showModale);
  React.useLayoutEffect(() => {
    if (showModale) {
      const teleporTarget = document.createElement("div");
      document.body.appendChild(teleporTarget);
      setTeleportTarget(teleporTarget);
      return () => {
        document.body.removeChild(teleporTarget);
      };
    }
  }, [showModale]);
  return (
    <div>
      <h1>Teleported content follows</h1>
      {teleportTarget &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              paddingLeft: "20%",
              paddingTop: "20%",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(255,255,255,0.7)"
            }}
          >
            <h1>Sono la modale</h1>
            <button onClick={closeModale}>Chiudimi</button>
          </div>,
          teleportTarget
        )}
    </div>
  );
}

export function AlbertoPortalExample() {
  const [showModale, setShowModale] = React.useState(false);

  return (
    <div>
      <PortalExample
        showModale={showModale}
        closeModale={() => setShowModale(false)}
      />
      <button onClick={() => setShowModale(true)}>Apri Modale</button>
    </div>
  );
}
