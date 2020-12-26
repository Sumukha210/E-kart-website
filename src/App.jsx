import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./components/Cart/Cart";
import Home from "./components/Home page/Home";
import NavBar from "./components/Common/NavBar";
import SpecificItem from "./components/specific item/SpecificItem";

import "./styles/style.scss";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/specificItem/:id" component={SpecificItem} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
