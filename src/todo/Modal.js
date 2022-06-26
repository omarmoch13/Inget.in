import React from "react";
import "./Modal.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="OVERLAY_STYLES">
        <div className="MODAL_STYLES">
          {children}
          <div className="button-tutup">
            <button onClick={onClose}>
              <atutup>Tutup</atutup>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
