import React from "react";

import Modal from "./Modal";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <Modal show={!!props.error} onCancel={props.onCancel}>
      <div className="ErrorModal">
        <p className="ErrorModal__text">Unable to reach the server.</p>
        <p className="ErrorModal__text">Please try again later</p>
      </div>
    </Modal>
  );
};

export default ErrorModal;
