import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./home/pages/Home";
import Bikes from "./bikes/pages/Bikes";
import Accessories from "./accessories/pages/Accessories";
import Parts from "./parts/pages/Parts";
import Service from "./service/pages/Service";
import Events from "./events/pages/Events";
import About from "./about/pages/About";
import Contact from "./contact/pages/Contact";
import Footer from "./shared/components/Footer/Footer";
import NavBar from "./shared/components/Navigation/NavBar";

const App = () => {
  return (
    <Router basename="/high-trails">
      <NavBar />
      <main>
        <Switch>
          <Route path="/bikes" exact>
            <Bikes />
          </Route>
          <Route path="/accessories" exact>
            <Accessories />
          </Route>
          <Route path="/parts" exact>
            <Parts />
          </Route>
          <Route path="/service" exact>
            <Service />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
