import React from "react";

import Container from "../../shared/components/Container";
// import Testimonial from "../components/Testimonial";
// import Button from "../../shared/components/UIElements/Button";
import { useStyledTestimonial } from "../../shared/hooks/useStyledTestimonial";
import Carousal from "../../shared/components/UIElements/Carousal";
import classes from "./Testimonials.module.css";

const allTests = [
  {
    author: "Afi Issac",
    comment: `Tortor at auctor urna nunc id cursus metus. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Id volutpat lacus laoreet non. Feugiat in fermentum posuere urna. Sollicitudin aliquam ultrices sagittis orci a. `,
  },
  {
    author: "Roslin",
    comment: `Eget duis at tellus at urna condimentum mattis pellentesque. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Maecenas accumsan lacus vel facilisis. Fringilla urna porttitor rhoncus dolor. Iaculis nunc sed augue lacus viverra vitae congue eu. Facilisis sed odio morbi quis commodo odio aenean sed.`,
  },
  {
    author: "Chintoo",
    comment: `Vitae tempus quam pellentesque nec nam aliquam. Vel orci porta non pulvinar neque laoreet suspendisse interdum.`,
  },
  {
    author: "Tinu",
    comment: `Tortor at auctor urna nunc id cursus metus. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Id volutpat lacus laoreet non. Feugiat in fermentum posuere urna. Sollicitudin aliquam ultrices sagittis orci a. `,
  },
  {
    author: "Nafi",
    comment: `Eget duis at tellus at urna condimentum mattis pellentesque. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Maecenas accumsan lacus vel facilisis. Fringilla urna porttitor rhoncus dolor. Iaculis nunc sed augue lacus viverra vitae congue eu. Facilisis sed odio morbi quis commodo odio aenean sed.`,
  },
  {
    author: "Bibin",
    comment: `Vitae tempus quam pellentesque nec nam aliquam. Vel orci porta non pulvinar neque laoreet suspendisse interdum.`,
  },
];

const Testimonials = () => {
  return (
    <section className={classes.Testimonials}>
      <Container>
        <h3 className={classes.Title}>Testimonials</h3>

        <Carousal
          slides={allTests}
          wrapper={useStyledTestimonial}
          btnLeft={<i className="fas fa-angle-double-left"></i>}
          btnRight={<i className="fas fa-angle-double-right"></i>}
        />
      </Container>
    </section>
  );
};

export default Testimonials;
