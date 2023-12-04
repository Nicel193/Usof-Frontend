import React from "react";
import "./styles/Modal.scss";

const Modal = ({ isOpen, setIsOpen }) => {
  return isOpen ? (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          {/* <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button> */}
          {/* ... */}
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
