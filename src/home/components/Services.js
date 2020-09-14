import React from "react";

import Container from "../../shared/components/Container";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section className={classes.Services} id="Services">
      <Container>
        <h3 className={classes.Title}>Our Services</h3>
        <div className={classes.Items}>
          <div className={classes.Service}>
            <h4 className={classes.Service__title}>Sales</h4>
            <h4 className={classes.Service__desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,.
            </h4>
          </div>

          <div className={classes.Service}>
            <h4 className={classes.Service__title}>Service</h4>
            <h4 className={classes.Service__desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,.
            </h4>
          </div>

          <div className={classes.Service}>
            <h4 className={classes.Service__title}>Doorstep Delivery</h4>
            <h4 className={classes.Service__desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit,.
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
