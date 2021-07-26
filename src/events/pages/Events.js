import React from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import ImageGallery from "../components/ImageGallery";
import classes from "./Events.module.css";

const Events = () => {
  return (
    <PageWrapper>
      <section className={classes.RidingClub}>
        <h4 className={classes.Section__title}>Riding Club</h4>
        <div className={classes.EventsInfo}>
          <div className={classes.BulletPoints}>
            <p className={classes.Section__highlight}>Cycling Events</p>
            <p
              className={`${classes.Section__text} ${classes.Section__text_bullet}`}
            >
              We have riding groups with weekly rides organized to suit riders
              of varying experience, from starter rides to century challenges.
            </p>

            <p
              className={`${classes.Section__text} ${classes.Section__text_bullet}`}
            >
              Trails we mapped out cover all the best stretches in the area, to
              help riders to identify the best routes.
            </p>

            <p
              className={`${classes.Section__text} ${classes.Section__text_bullet}`}
            >
              Our participation in local races include providing bike setup,
              race support and practice support leading up to the race.
            </p>

            <p
              className={`${classes.Section__text} ${classes.Section__text_bullet}`}
            >
              We engage with local community groups to promote cycling and make
              the area cycling friendly.
            </p>

            <p
              className={`${classes.Section__text} ${classes.Section__text_bullet}`}
            >
              There is a steady uptick in the number of people in the area who
              have taken up cycling, confident that hassle free support will be
              available at their doorstep.
            </p>
          </div>

          <div className={classes.UpcomingEvents}>
            <p className={classes.Section__highlight}>Upcoming Events</p>
          </div>
        </div>
      </section>

      <section className={classes.Gallery}>
        <h4 className={classes.Section__title}>Gallery</h4>
        <ImageGallery />
      </section>
    </PageWrapper>
  );
};

export default Events;
