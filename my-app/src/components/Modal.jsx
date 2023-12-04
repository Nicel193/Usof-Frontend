import "./styles/Modal.scss";

import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onCancel, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modalOverlay">
          <div className="modalWindow">
            <div className="modalBody">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  isOpen: false,
  onCancel: () => {},
  children: null,
};

export default Modal;
