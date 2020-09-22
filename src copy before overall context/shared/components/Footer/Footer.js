import React from "react";

import Container from "../Container";
import classes from "./Footer.module.css";
import Logo from "../../../assets/images/ht-logo.png";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Container>
        <div className={classes.FooterInfo}>
          <div className={classes.Contact}>
            <h5 className={classes.Title}>Contact us</h5>
            <p className={classes.Item}>
              <i className="fas fa-phone-alt"></i>
              <span>+91 - 9999 555 333</span>
            </p>
            <p className={classes.Item}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Address 1, Bangalore</span>
            </p>
            <p className={classes.Item}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Address 2, Bangalore</span>
            </p>
          </div>

          <div className={classes.Follow}>
            <h5 className={classes.Title}>Follow us</h5>
            <p className={classes.Item}>SOCIAL MEDIA ICONS</p>
          </div>

          <img className={classes.Logo} src={Logo} alt="HT Logo" />
        </div>
      </Container>
      <div className={classes.Copyright}>
        <p className={classes.Item}>© 2020 High Trails. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
