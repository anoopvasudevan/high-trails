import React from "react";

import Container from "../../shared/components/Container";
import Button from "../../shared/components/UIElements/Button";
import hero from "../../assets/images/brands/hero.png";
import electro from "../../assets/images/brands/electro.png";
import cosmic from "../../assets/images/brands/cosmic.png";
import level from "../../assets/images/brands/level.png";
import classes from "./Brands.module.css";

const Brands = () => {
  return (
    <section className={classes.Brands}>
      <Container>
        <h3 className={classes.Title}>Brands</h3>
        <div className={classes.Brands__grid}>
          <div className={classes.Brand__item}>
            <img className={classes.Brand__img} src={hero} alt="Hero Cycles" />
          </div>
          <div className={classes.Brand__item}>
            <img
              className={classes.Brand__img}
              src={cosmic}
              alt="Cosmic Cycles"
            />
          </div>
          <div className={classes.Brand__item}>
            <img
              className={classes.Brand__img}
              src={level}
              alt="Level Cycles"
            />
          </div>
          <div className={classes.Brand__item}>
            <img
              className={classes.Brand__img}
              src={electro}
              alt="Electro Cycles"
            />
          </div>
          <div className={classes.Brand__item}>
            <img
              className={classes.Brand__img}
              src={cosmic}
              alt="Cosmic Cycles"
            />
          </div>
          <div className={classes.Brand__item}>
            <img className={classes.Brand__img} src={hero} alt="Hero Cycles" />
          </div>
        </div>
        <Button size="small" path="/bikes">
          Check out our inventory
        </Button>
      </Container>
    </section>
  );
};

export default Brands;
