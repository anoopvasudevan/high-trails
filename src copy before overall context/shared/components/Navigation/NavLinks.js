import React from "react";
import {NavLink} from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="NavLinks">
      <li className="NavLink">
        <NavLink to="/bikes" onClick={props.onClick}>
          Bikes
        </NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/accessories">Accessories</NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/parts">Parts</NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/service">Service</NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="NavLink" onClick={props.onClick}>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
