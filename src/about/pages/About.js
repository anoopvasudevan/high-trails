import React from "react";

import PageWrapper from "../../shared/components/PageWrapper";
import Card from "../../shared/components/UIElements/Card";
import logo from "../../assets/images/ht-logo.png";
import memberImage1 from "../../assets/images/team/tm1.jpg";
import memberImage2 from "../../assets/images/team/tm2.jpg";
import memberImage3 from "../../assets/images/team/tm3.jpg";
import classes from "./About.module.css";

const About = () => {
  return (
    <PageWrapper>
      <section className={classes.Section}>
        <h4 className={classes.Section__title}>Our Mission</h4>
        <p className={classes.Section__text}>
          Our mission is to spread bicycling and we believe that no cycle should
          be left idle.
        </p>
      </section>

      <section className={classes.Section}>
        <h4 className={classes.Section__title}>About</h4>
        <div className={classes.Section__about}>
          <div className={classes.Section__about_info}>
            <p className={classes.Section__highlight}>
              A one stop shop for all your bicycling needs.
            </p>
            <p className={classes.Section__text}>
              Yes, and we mean it. We retail and service all major Indian brands
              and high end international brands such as Bergamont, Cannondale,
              Giant, Scott, Specialized and Trek. High Trails focuses on
              providing the best possible service and support for riders. We are
              in the journey to upgrade our stores to re-tail Higher end brand,
              like Scott, to better enable our customers.
            </p>
          </div>
          <div className={classes.Section__logo}>
            <img className={classes.Logo} src={logo} alt="HT Logo" />
          </div>
        </div>
      </section>

      <section className={classes.Section}>
        <h4 className={classes.Section__title}>History</h4>
        <p className={classes.Section__text}>
          We have a history of 40+ years starting 1979 when Georgekutty MJ, a
          self taught enthusiast opened his first shop in Ponkunnam, Kerala. He
          grew to become the biggest dealer and a major influencer of the
          bicycle business in the region with dealerships of all Indian bicycle
          majors.
        </p>
        <p className={classes.Section__text}>
          High Trails opened its first store in Sarjapur, Bangalore in May 2019
          when Rosilin George and Afi Issac Emmanuel, originally software
          en-gineers from Bangalore, fell in love with cycling, after taking
          part in a cycling event at work.
        </p>
        <p className={classes.Section__text}>
          Rosilin quit her job and took up her passion full time, following in
          her father’s trail. Rapidly ex-panding to a second store in
          Dommasandara, Bangalore in May 2020 and an upcoming store in Kerala in
          August 2020.
        </p>
      </section>

      <section className={classes.Section}>
        <h4 className={classes.Section__title}>Why Us</h4>
        <div className={classes.Section__whyus}>
          <p
            className={`${classes.Section__text} ${classes.Section__text_bullet}`}
          >
            We invest in our customers and the riding community, provide maximum
            rider support and strive to make the area cycling friendly.
          </p>
          <p
            className={`${classes.Section__text} ${classes.Section__text_bullet}`}
          >
            We provide personalized guidance to our customers, considering their
            experience and requirements.
          </p>
          <p
            className={`${classes.Section__text} ${classes.Section__text_bullet}`}
          >
            Our engagement with our customer does not end with a sale, we ensure
            their cycle is in top riding condition.
          </p>
          <p
            className={`${classes.Section__text} ${classes.Section__text_bullet}`}
          >
            Our range of services and our rider engagement ensures that our
            customers are our best promoters.
          </p>
          <p
            className={`${classes.Section__text} ${classes.Section__text_bullet}`}
          >
            We have an established riding culture in our shop, helping us to
            better understand our fellow riders.
          </p>
          <p
            className={`${classes.Section__text} ${classes.Section__text_bullet}`}
          >
            We engage with local community groups to promote cycling and make
            the area cycling friendly. Want to know more about this?{" "}
            <a href="/events">Click here.</a>
          </p>
        </div>
      </section>

      <section className={classes.Section}>
        <h4 className={classes.Section__title}>Our team</h4>
        <div className={classes.Section__album}>
          <Card
            customClass={classes.Section__card}
            image={memberImage1}
            title="Afi Issac"
          >
            Technology geek and all around wrench monkey/cyclologist. Loves Road
            bikes, solo rides and getting dirty fixing bikes. Finding new tools
            and parts to spend money on.
          </Card>

          <Card
            customClass={classes.Section__card}
            image={memberImage2}
            title="Afi Issac"
          >
            Technology geek and all around wrench monkey/cyclologist. Loves Road
            bikes, solo rides and getting dirty fixing bikes. Finding new tools
            and parts to spend money on.
          </Card>

          <Card
            customClass={classes.Section__card}
            image={memberImage3}
            title="Afi Issac"
          >
            Technology geek and all around wrench monkey/cyclologist. Loves Road
            bikes, solo rides and getting dirty fixing bikes. Finding new tools
            and parts to spend money on.
          </Card>

          <Card
            customClass={classes.Section__card}
            image={memberImage1}
            title="Afi Issac"
          >
            Technology geek and all around wrench monkey/cyclologist. Loves Road
            bikes, solo rides and getting dirty fixing bikes. Finding new tools
            and parts to spend money on.
          </Card>

          <Card
            customClass={classes.Section__card}
            image={memberImage2}
            title="Afi Issac"
          >
            Technology geek and all around wrench monkey/cyclologist. Loves Road
            bikes, solo rides and getting dirty fixing bikes. Finding new tools
            and parts to spend money on.
          </Card>

          <Card
            customClass={classes.Section__card}
            image={memberImage3}
            title="Afi Issac"
          >
            Technology geek and all around wrench monkey/cyclologist. Loves Road
            bikes, solo rides and getting dirty fixing bikes. Finding new tools
            and parts to spend money on.
          </Card>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
