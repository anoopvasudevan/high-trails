import React from "react";

import Landing from "../components/Landing";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Activities from "../components/Activities";
import Testimonials from "../components/Testimonials";
import FooterOverlay from "../../shared/components/Footer/FooterOverlay";
import Footer from "../../shared/components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <article className="Home">
      <div style={{ position: "relative", zIndex: "10" }}>
        <Landing />
        <Services />
        <Brands />
        <Activities />
        <Testimonials />
      </div>
      <FooterOverlay />
      <Footer />
    </article>
  );
};

export default Home;
