import React from "react";

import "./MenuToggleButton.css";

const MenuToggleButton = (props) => {
  const classList = ["MenuToggleBtn"];
  if (props.menuOpen) classList.push("MenuToggleBtn--clicked");

  return (
    <button
      className={classList.join(" ")}
      onClick={() => {
        props.clicked();
      }}
    >
      <span className="MenuToggleBtn__top-bar" />
      <span className="MenuToggleBtn__bottom-bar" />
    </button>
  );
};

export default MenuToggleButton;
