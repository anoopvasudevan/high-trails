import React from "react";

import Footer from "./Footer/Footer";
import FooterOverlay from "./Footer/FooterOverlay";
import Container from "./Container";
import classes from "./PageWrapper.module.css";

const PageWrapper = (props) => {
  return (
    <article className={classes.PageWrapper}>
      <section className={classes.PageWrapper__section}>
        <Container>{props.children}</Container>
      </section>
      <FooterOverlay />
      <Footer />
    </article>
  );
};

export default PageWrapper;
