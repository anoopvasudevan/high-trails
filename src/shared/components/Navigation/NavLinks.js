import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="NavLinks">
      <li className="NavLink">
        <NavLink to="/bikes" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            Bikes
          </span>
        </NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/accessories">
          <span className="NavLink__content" tabIndex="-1">
            Accessories
          </span>
        </NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/parts">
          <span className="NavLink__content" tabIndex="-1">
            Parts
          </span>
        </NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/service">
          <span className="NavLink__content" tabIndex="-1">
            Service
          </span>
        </NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/events">
          <span className="NavLink__content" tabIndex="-1">
            Events
          </span>
        </NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/about">
          <span className="NavLink__content" tabIndex="-1">
            About
          </span>
        </NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/contact">
          <span className="NavLink__content" tabIndex="-1">
            Contact
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
