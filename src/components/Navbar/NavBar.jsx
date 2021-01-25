import React from "react";
import { useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { authData__Fun, logout__Api } from "../../Redux/Actions/AuthAction";

const NavBar = () => {
  const CartItems = useSelector(({ CartReducer: { cart } }) => cart);
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);

  const inCartLength = CartItems.length;

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout__Api());
  };

  useEffect(() => {
    let user = sessionStorage.getItem("user");
    if (user) {
      dispatch(authData__Fun(JSON.parse(user)));
    }
  }, []);

  console.log("cart ", CartItems);

  const history = useHistory();

  return (
    <div className="NavBar">
      <div className="NavBar__container">
        <div className="NavBar__logo" onClick={() => history.push("/")}>
          <span>E-cart</span>
        </div>

        <ul className="NavBar__menu pt-2">
          <li>
            <NavLink exact to="/">
              <i className="fas fa-home"></i>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/cart">
              <i className="fas fa-cart-plus"></i>
              <sup>
                <Badge pill className="text-light" variant="primary">
                  {inCartLength && inCartLength}
                </Badge>
              </sup>
            </NavLink>
          </li>

          {isAuth.role === "admin" && (
            <Dropdown>
              <Dropdown.Toggle>Admin</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/account">
                  orders
                </Dropdown.Item>

                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}

          {!isAuth.isAllowed ? (
            <li>
              <NavLink to="/authForm">Login</NavLink>
            </li>
          ) : (
            <Dropdown
              style={
                isAuth.role === "admin"
                  ? { display: "none" }
                  : { display: "initial" }
              }>
              <Dropdown.Toggle className="mx-2">
                {isAuth.name && isAuth.name.slice(0, 7)}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/account">
                  Account
                </Dropdown.Item>

                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
