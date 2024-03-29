import React from "react";

import Container from "../../shared/components/Container";
import Button from "../../shared/components/UIElements/Button";
import ScrollIndicator from "../../shared/components/UIElements/ScrollIndicator";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="Landing">
      <Container>
        <div className="Main">
          <div className="Hero">
            <h1 className="Hero__title">High Trails</h1>
            <h2 className="Hero__subtitle">The Cycle Shop</h2>

            <p className="Hero__motto">
              A one stop shop for all your bicycling needs
            </p>
            <p className="Hero__motto">Since 1979</p>
          </div>

          <Button to="/bikes" size="large" inverse special>
            Explore Bikes
          </Button>

          <div className="ScrollIndicatorBox">
            <ScrollIndicator />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Landing;
