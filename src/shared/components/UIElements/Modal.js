import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      {props.show && (
        <Backdrop onClick={props.onCancel} style={{ zIndex: "900" }} />
      )}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="Modal"
      >
        {props.children}
      </CSSTransition>
    </>,
    document.getElementById("modal-hook")
  );
};

export default Modal;
