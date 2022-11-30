import ReactDOM from "react-dom";
import React from "react";

export function PortalExample() {
  const [teleportTarget, setTeleportTarget] =
    React.useState<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const teleporTarget = document.createElement("div");
    document.body.appendChild(teleporTarget);
    setTeleportTarget(teleporTarget);
    return () => {
      document.body.removeChild(teleporTarget);
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

// Exercise
// create a modal using react protal
