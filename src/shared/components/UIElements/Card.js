import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <figure
      className={`${classes.Card} ${props.customClass}`}
      onClick={props.onClick}
    >
      <img className={classes.Image} src={props.image} alt={props.alt} />
      <figcaption className={classes.CardTitle}>{props.title}</figcaption>
      <p className={classes.CardSubTitle}>{props.subTitle}</p>
      <div className={classes.CardDesc}>{props.children}</div>
    </figure>
  );
};

export default Card;
