import React from "react";
import { CSSTransition } from "react-transition-group";

import Container from "../Container";
import SocialIcons from "../SocialIcons";
import "./NavDropdown.css";

const NavDropdown = (props) => {
  const dropDownHeight = window.innerHeight - 32;

  return (
    <Container>
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="Dropdown"
        mountOnEnter
        unmountOnExit
      >
        <aside className="NavDropdown" style={{ height: `${dropDownHeight}` }}>
          {props.children}
          <div className="SocialMediaIcons">
            <SocialIcons
              style={{ fontSize: "24px", padding: "0", color: "gray" }}
            />
          </div>
        </aside>
      </CSSTransition>
    </Container>
  );
};

export default NavDropdown;
