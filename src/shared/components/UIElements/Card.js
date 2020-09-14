import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <figure className={`${classes.Card} ${props.customClass}`}>
      <img className={classes.Image} src={props.image} alt={props.alt} />
      <figcaption className={classes.CardTitle}>{props.title}</figcaption>
      <p className={classes.CardDesc}>{props.children}</p>
    </figure>
  );
};

export default Card;
