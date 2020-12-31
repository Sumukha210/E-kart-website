import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemsFun } from "./Redux/Actions/ProductActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { storeProducts } from "./data";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home page/Home";
import NavBar from "./components/Common/NavBar";
import SpecificItem from "./components/specific item/SpecificItem";

import "./styles/style.scss";

const App = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);
  const dispatch = useDispatch();

  console.log(Products);

  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("Products")) {
      dispatch(fetchItemsFun(JSON.parse(localStorage.getItem("Products"))));
    } else {
      dispatch(fetchItemsFun(storeProducts));
    }
  }, []);

  // run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(Products));
  }, [Products]);

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
