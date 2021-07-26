import React from "react";

import classes from "./SocialMedia.module.css";

const SocialIcons = (props) => {
  return (
    <div style={props.style} className={classes.SocialIcons}>
      <a href="!#">
        <i className={`fab fa-facebook-square ${classes.FacebookIcon}`}></i>
      </a>
      <a href="!#">
        <i className={`fab fa-instagram ${classes.InstagramIcon}`}></i>
      </a>
      <a href="!#">
        <i className={`fab fa-twitter-square ${classes.TwitterIcon}`}></i>
      </a>
    </div>
  );
};

export default SocialIcons;
