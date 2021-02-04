import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home page/Home";
import NavBar from "./components/Navbar/NavBar";
import "./styles/style.scss";
import CustomSpinner from "./components/Common/Spinner";
import { fetchAllItems__fun } from "./Redux/Actions/CartAction";

const AuthForm = lazy(() => import("./components/AuthForm"));
const SpecificItem = lazy(() =>
  import("./components/specific item/SpecificItem")
);
const RatingForm = lazy(() => import("./components/Ratings/RatingForm"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Account = lazy(() => import("./components/Account"));

const App = () => {
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);

  const CartItems = useSelector(({ CartReducer: { cart } }) => cart);

  const dispatch = useDispatch();

  const AuthRoute = ({ children, ...props }) => (
    <Route
      {...props}
      render={() =>
        isAuth.role === "admin" ? (
          children
        ) : isAuth.role === "user" ? (
          children
        ) : (
          <Redirect to="/authForm" />
        )
      }
    />
  );

  useEffect(() => {
    let localCart = localStorage.getItem("inCart");

    if (localCart) {
      dispatch(fetchAllItems__fun(JSON.parse(localCart)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inCart", JSON.stringify(CartItems));
  }, [CartItems]);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Suspense fallback={<CustomSpinner />}>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/specificItem/:id" component={SpecificItem} />

          <Route exact path="/authForm" component={AuthForm} />

          <AuthRoute path="/ratingForm/:id">
            <RatingForm />
          </AuthRoute>

          <AuthRoute path="/account">
            <Account />
          </AuthRoute>
        </Suspense>
      </Switch>
    </Router>
  );
};

export default App;
