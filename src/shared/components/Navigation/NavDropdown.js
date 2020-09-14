import React from "react";
import { CSSTransition } from "react-transition-group";

import Container from "../Container";
import "./NavDropdown.css";

const NavDropdown = (props) => {
  return (
    <Container>
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="Dropdown"
        mountOnEnter
        unmountOnExit
      >
        <aside className="NavDropdown">{props.children}</aside>
      </CSSTransition>
    </Container>
  );
};

export default NavDropdown;
