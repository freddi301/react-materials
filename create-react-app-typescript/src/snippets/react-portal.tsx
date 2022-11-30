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
// create a modal using react portal

type ModalProps = {
  isOpen: boolean;
  onClose(): void;
  children: React.ReactNode;
};
function Modal({ isOpen, onClose, children }: ModalProps) {
  const [teleportTarget, setTeleportTarget] =
    React.useState<HTMLElement | null>(null);
  React.useLayoutEffect(() => {
    if (isOpen) {
      const teleporTarget = document.createElement("div");
      document.body.appendChild(teleporTarget);
      setTeleportTarget(teleporTarget);
      return () => {
        document.body.removeChild(teleporTarget);
      };
    }
  }, [isOpen]);
  if (!teleportTarget) return null;
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255,255,255,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      {children}
    </div>,
    teleportTarget
  );
}

export function Solution() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Title</h1>
        <p>Content</p>
      </Modal>
      <button onClick={() => setIsModalOpen(true)}>Open modal</button>
    </div>
  );
}
