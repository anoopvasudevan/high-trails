import React from "react";

import Container from "../../shared/components/Container";
import classes from "./Activities.module.css";

const Activities = () => {
  return (
    <section className={classes.Activities}>
      <Container>
        <h3 className={classes.Title}>Activities</h3>
        <h4 className={classes.Subtitle}>Weekend Rides</h4>
        <p className={classes.Info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </Container>
    </section>
  );
};

export default Activities;
