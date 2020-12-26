import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductContext } from "../../DataContext/ProductContext";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";
import PriceDetail from "./PriceDetail";

const Cart = () => {
  const [store] = useContext(ProductContext);

  const numOfItems = store.filter(item => item.inCart == true);

  return (
    <div className="cart">
      <div className="cart__container">
        <Row className="justify-content-around">
          <Col md={7} lg={8}>
            <div className="left">
              <h1 className="cart__title">my cart({numOfItems.length})</h1>
              {numOfItems.map(
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
              <PriceDetail />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Cart;
