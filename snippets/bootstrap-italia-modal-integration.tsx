import React from "react";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import { Modal } from "bootstrap-italia";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        open
      </button>
      <MyModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}

function MyModal({ isOpen, onClose }: { isOpen: boolean; onClose(): void }) {
  const modalDomRef = React.useRef<HTMLDivElement | null>(null);
  const modalJsRef = React.useRef<Modal>();
  React.useLayoutEffect(() => {
    modalJsRef.current = new Modal(modalDomRef.current!, {});
  }, []);
  React.useLayoutEffect(() => {
    if (isOpen) modalJsRef.current!.show();
    else modalJsRef.current!.hide();
  }, [isOpen]);
  React.useLayoutEffect(() => {
    const onModalClose = () => {
      onClose();
    };
    modalDomRef.current!.addEventListener("hide.bs.modal", onModalClose);
    return () => {
      modalDomRef.current!.removeEventListener("hide.bs.modal", onModalClose);
    };
  }, [onClose]);
  return (
    <div ref={modalDomRef} className="modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
