import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
        <span className="button__content" tabIndex="-1">
          {props.children}
        </span>
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
        <span className="button__content" tabIndex="-1">
          {props.children}
        </span>
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
      <span className="button__content" tabIndex="-1">
        {props.children}
      </span>
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["large", "small", "xsmall", "default"]),
  inverse: PropTypes.bool,
  gray: PropTypes.bool,
  special: PropTypes.bool,
  noborder: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  exact: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
