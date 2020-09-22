import React from "react";

import classes from "./ImageColumn.module.css";

const ImageColumn = (props) => {
  return (
    <div className={classes.ImageWrapper}>
      {props.images.map((image, index) => (
        <img className={classes.Image} key={index} src={image} alt="Event Photos" />
      ))}
    </div>
  );
};

export default ImageColumn;
