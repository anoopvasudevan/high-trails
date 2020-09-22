import React from "react";

import Container from "../../shared/components/Container";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import classes from "./Service.module.css";

const Service = () => {
  return (
    <article className={classes.Service}>
      <section className={classes.WrapperSection}>
        <Container>
          <h1>Coming soon! Page is under construction.</h1>
        </Container>
      </section>
      <FooterOverlay />
    </article>
  );
};

export default Service;
