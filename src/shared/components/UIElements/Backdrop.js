import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

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

Backdrop.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Backdrop;
