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
      <div tabIndex="-1">
        <span className="MenuToggleBtn__top-bar" />
        <span className="MenuToggleBtn__bottom-bar" />
      </div>
    </button>
  );
};

export default MenuToggleButton;
