import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className="Backdrop"
      onClick={props.onClick}
      style={props.style}
    ></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
