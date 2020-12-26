import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import { NavLink, useHistory } from "react-router-dom";
import { ProductContext } from "../../DataContext/ProductContext";

const NavBar = () => {
  const [store] = useContext(ProductContext);
  const inCartLength = store.filter(({ inCart }) => inCart === true).length;

  const history = useHistory();

  return (
    <div className="NavBar">
      <div className="NavBar__container">
        <div className="NavBar__logo" onClick={() => history.push("/")}>
          <span>E-cart</span>
        </div>

        <ul className="NavBar__menu">
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
          <li>
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
