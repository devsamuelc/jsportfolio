import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";
import HeroPage from "./pages/HeroPage";


function Routes() {
  return (
    <BrowserRouter >
      <Navbar />
          <Switch>
            <Route exact path="/" component={HeroPage} />
            <Route exact path="/main" component={Landing} />
            <Route exact path="/projects" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
    </BrowserRouter>
  );
}

export default Routes;
