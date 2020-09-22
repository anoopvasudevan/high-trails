import React from "react";

import Container from "../../shared/components/Container";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import classes from "./Accessories.module.css"

const Accessories = () => {
 return (
    <article className={classes.Accessories}>
      <section className={classes.WrapperSection}>
        <Container>
          <h1>Coming soon! Page is under construction.</h1>
        </Container>
      </section>
      <FooterOverlay />
    </article>
  );
};

export default Accessories;
