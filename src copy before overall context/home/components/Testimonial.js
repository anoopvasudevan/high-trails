import React from "react";

import classes from "./Testimonial.module.css";

const Testimonial = (props) => {
  const { comment, author } = props.testimonial;
  return (
    <div className={classes.Testimonial}>
      <div className={classes.TestimonialCard}>
        <i className={`fas fa-quote-left ${classes.Quote}`}></i>
        <p className={classes.Testimonial__text}>
          <em>{comment}</em>
        </p>
        <p className={classes.Testimonial__author}>{author}</p>
      </div>
    </div>
  );
};

export default Testimonial;
