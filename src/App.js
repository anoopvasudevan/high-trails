import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import PageTransition from "./shared/components/PageTransition";
import ScrollToTop from "./shared/components/UIElements/ScrollToTop";
import NavBar from "./shared/components/Navigation/NavBar";
import Home from "./home/pages/Home";
// import FooterOverlay from "./shared/components/Footer/FooterOverlay";
// import Footer from "./shared/components/Footer/Footer";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner";
import ErrorBoundary from "./shared/components/ErrorHandlers/ErrorBoundary";

import "./index.css";

const Bikes = React.lazy(() => import("./bikes/pages/Bikes"));
const Accessories = React.lazy(() => import("./accessories/pages/Accessories"));
const Parts = React.lazy(() => import("./parts/pages/Parts"));
const Service = React.lazy(() => import("./service/pages/Service"));
const Events = React.lazy(() => import("./events/pages/Events"));
const About = React.lazy(() => import("./about/pages/About"));
const Contact = React.lazy(() => import("./contact/pages/Contact"));

const App = () => {
  return (
    // <Router basename="/high-trails">
    <Router basename="/">
      <NavBar />
      <ScrollToTop />
      <main>
        <ErrorBoundary>
          <Route
            render={({ location }) => (
              <PageTransition location={location}>
                <Suspense
                  fallback={
                    <div
                      className="center"
                      style={{
                        height: "100vh",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "black",
                      }}
                    >
                      <LoadingSpinner />
                    </div>
                  }
                >
                  <Switch location={location}>
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
                </Suspense>
              </PageTransition>
            )}
          />
        </ErrorBoundary>
      {/* <FooterOverlay /> */}
      </main>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
