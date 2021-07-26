import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className={`NavLinks ${props.footer && "FooterNavLinks"}`}>
      <li className={`NavLink ${props.footer && "FooterNavLink"}`}>
        <NavLink to="/bikes" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            Bikes
          </span>
        </NavLink>
      </li>
      <li className={`NavLink ${props.footer && "FooterNavLink"}`}>
        <NavLink to="/accessories" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            Accessories
          </span>
        </NavLink>
      </li>
      <li className={`NavLink ${props.footer && "FooterNavLink"}`}>
        <NavLink to="/parts" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            Parts
          </span>
        </NavLink>
      </li>
      <li className={`NavLink ${props.footer && "FooterNavLink"}`}>
        <NavLink to="/service" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            Service
          </span>
        </NavLink>
      </li>
      <li className={`NavLink ${props.footer && "FooterNavLink"}`}>
        <NavLink to="/events" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            Events
          </span>
        </NavLink>
      </li>
      <li className={`NavLink ${props.footer && "FooterNavLink"}`}>
        <NavLink to="/about" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            About
          </span>
        </NavLink>
      </li>
      <li className={`NavLink ${props.footer && "FooterNavLink"}`}>
        <NavLink to="/contact" onClick={props.onClick}>
          <span className="NavLink__content" tabIndex="-1">
            Contact
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
