import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(({ CartReducer: { cart } }) => cart);

  return (
    <div className="cart">
      <div className="cart__container">
        <Row className="justify-content-around">
          <Col md={7} lg={8}>
            <div className="left">
              <h1 className="cart__title">my cart</h1>

              {CartItem.length &&
                cartItems.map(({ id, image, price, title }) => (
                  <CartItem
                    id={id}
                    key={id}
                    title={title}
                    image={image}
                    price={price}
                  />
                ))}
            </div>
          </Col>

          <Col md={5} lg={4} className="right">
            <div className="priceInfo">
              <h1 className="priceInfo__title">price details</h1>
              {cartItems.length ? <PriceDetail /> : ""}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
