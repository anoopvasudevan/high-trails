import React from "react";

import Container from "../../shared/components/Container";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import ImageGallery from "../components/ImageGallery";
// import event1 from "../../assets/images/events/event1.jpeg";
// import event2 from "../../assets/images/events/event2.jpeg";
// import event3 from "../../assets/images/events/event3.jpeg";
// import event4 from "../../assets/images/events/event4.jpeg";
// import event5 from "../../assets/images/events/event5.jpeg";
// import event6 from "../../assets/images/events/event6.jpeg";
// import event7 from "../../assets/images/events/event7.jpeg";
// import event8 from "../../assets/images/events/event8.jpeg";
// import event9 from "../../assets/images/events/event9.jpeg";
import classes from "./Events.module.css";

const Events = () => {
  return (
    <article className={classes.Events}>
      <section className={classes.WrapperSection}>
        <Container>
          <section className={classes.RidingClub}>
            <h4 className={classes.Section__title}>Riding Club</h4>
            <div className={classes.EventsInfo}>
              <div className={classes.BulletPoints}>
                <p className={classes.Section__highlight}>Cycling Events</p>
                <p
                  className={`${classes.Section__text} ${classes.Section__text_bullet}`}
                >
                  We have riding groups with weekly rides organized to suit
                  riders of varying experience, from starter rides to century
                  challenges.
                </p>

                <p
                  className={`${classes.Section__text} ${classes.Section__text_bullet}`}
                >
                  Trails we mapped out cover all the best stretches in the area,
                  to help riders to identify the best routes.
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
                  We engage with local community groups to promote cycling and
                  make the area cycling friendly.
                </p>

                <p
                  className={`${classes.Section__text} ${classes.Section__text_bullet}`}
                >
                  There is a steady uptick in the number of people in the area
                  who have taken up cycling, confident that hassle free support
                  will be available at their doorstep.
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
        </Container>
      </section>
      <FooterOverlay />
    </article>
  );
};

export default Events;
