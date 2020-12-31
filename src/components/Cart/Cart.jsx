import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import { useSelector } from "react-redux";

const Cart = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  const numOfItems =
    Products.length && Products.filter(item => item.inCart == true);

  return (
    <div className="cart">
      <div className="cart__container">
        <Row className="justify-content-around">
          <Col md={7} lg={8}>
            <div className="left">
              <h1 className="cart__title">my cart({numOfItems.length})</h1>
              {numOfItems &&
                numOfItems.map(
                  ({
                    id,
                    img,
                    price,
                    productName,
                    inCart,
                    count,
                    total,
                    brand,
                  }) => (
                    <CartItem
                      id={id}
                      price={price}
                      productName={productName}
                      inCart={inCart}
                      count={count}
                      total={total}
                      key={id}
                      brand={brand}
                      img={img}
                    />
                  )
                )}
            </div>
          </Col>

          <Col md={5} lg={4} className="right">
            <div className="priceInfo">
              <h1 className="priceInfo__title">price details</h1>

              {numOfItems.length ? <PriceDetail /> : ""}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
