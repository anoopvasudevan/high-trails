import React from "react";

import Landing from "../components/Landing";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Activities from "../components/Activities";
import Testimonials from "../components/Testimonials";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import "./Home.css";

const Home = () => {
  return (
    <article className="Home">
      <Landing />
      <Services />
      <Brands />
      <Activities />
      <Testimonials />
      <FooterOverlay />
    </article>
  );
};

export default Home;
