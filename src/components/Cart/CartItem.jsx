import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PriceDisplay from "../Common/PriceDisplay";
import IncDecBtn from "./IncDecBtn";

const CartItem = ({ id, img, price, productName, inCart, count, brand }) => {
  const [inputVal, setInputVal] = useState(Number(count));
  console.log(count);

  const handleInc = () => {
    setInputVal(inputVal + 1);
  };

  const handleDec = () => {
    inputVal > 0 && setInputVal(inputVal - 1);
  };

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__container">
          <Row className="justify-content-around align-items-center">
            <Col lg={4}>
              <figure>
                <img src={img} alt="" />
              </figure>

              <div className="btn__group">
                <IncDecBtn handleClick={handleDec} type="minus" />

                <input
                  min={0}
                  type="number"
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                />

                <IncDecBtn handleClick={handleInc} type="plus" />
              </div>
            </Col>

            <Col lg={6} className="offset-lg-2">
              <div className="cartItem__content text-uppercase">
                <h6 className="productName">{productName}</h6>
                <h6 className="brand">{brand}</h6>
                <PriceDisplay price={price} />
                <button className="removeBtn">Remove</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CartItem;
