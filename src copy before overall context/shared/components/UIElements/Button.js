import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  const classList = ["button"];
  if (props.size) classList.push(`button--${props.size || "default"}`);
  if (props.inverse) classList.push("button--inverse");
  if (props.gray) classList.push("button--gray");
  if (props.special) classList.push("button--special");
  if (props.noborder) classList.push("button--noborder");

  if (props.href) {
    return (
      <a
        href={props.href}
        className={`${classList.join(" ")} ${props.className}`}
      >
        {props.children}
      </a>
    );
  }

  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${classList.join(" ")} ${props.className}`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={`${classList.join(" ")} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
