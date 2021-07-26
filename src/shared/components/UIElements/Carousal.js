import React, { useState, useEffect, useRef } from "react";

import Button from "./Button";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import classes from "./Carousal.module.css";

const Carousal = (props) => {
  const {
    slides,
    wrapper = (comp) => comp,
    btnLeft,
    btnRight,
    slidesPerPage,
    style
  } = props;

  const [index, setIndex] = useState(0);
  const [noOfSlides, setNumberOfSlides] = useState(1);

  const totalSlides = useRef(slides.length);

  const windowSize = useBreakpoints();
  useEffect(() => {
    if (slidesPerPage) {
      setNumberOfSlides(slidesPerPage);
      return;
    }
    if (windowSize === "x-small") setNumberOfSlides(1);
    if (windowSize === "small") setNumberOfSlides(2);
    if (windowSize === "medium") setNumberOfSlides(3);
    if (windowSize === "large") setNumberOfSlides(4);
    setIndex(0);
  }, [windowSize, slidesPerPage]);

  const increaseIndex = () => {
    if (index < totalSlides.current) setIndex((index) => index + noOfSlides);
  };

  const decreaseIndex = () => {
    if (index > 0) {
      if (index - noOfSlides >= 0) setIndex((index) => index - noOfSlides);
      else setIndex(0);
    }
  };

  return (
    <>
      <div className={classes.Carousal} style={style}>
        {slides.slice(index, index + noOfSlides).map((slide, idx) => (
          <React.Fragment key={idx}>{wrapper(slide)}</React.Fragment>
        ))}
      </div>

      <div className={classes.Pagination}>
        <Button inverse noborder disabled={!index} onClick={decreaseIndex}>
          {btnLeft}
        </Button>
        <Button
          inverse
          noborder
          disabled={index + noOfSlides >= totalSlides.current}
          onClick={increaseIndex}
        >
          {btnRight}
        </Button>
      </div>
    </>
  );
};

export default Carousal;
