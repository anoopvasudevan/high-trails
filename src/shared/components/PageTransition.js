import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./PageTransition.css";

const PageTransition = (props) => {
  return (
    <TransitionGroup>
      <CSSTransition key={props.location.key} timeout={450} classNames="page-fade">
        {props.children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
