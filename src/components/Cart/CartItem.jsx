import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PriceDisplay from "../Common/PriceDisplay";
import IncBtn from "./IncBtn";
import { useDispatch } from "react-redux";
import {
  decPriceFun,
  incPriceFun,
  removeFromCartFun,
} from "../../Redux/Actions/ProductActions";
import DecBtn from "./DecBtn";

const CartItem = ({ id, img, price, productName, count, brand }) => {
  const [inputVal, setInputVal] = useState(Number(count));
  console.log(count);

  const dispatch = useDispatch();

  const handleInc = id => {
    setInputVal(inputVal + 1);
    console.log("inc id", id);
    dispatch(incPriceFun(id));
  };

  const handleDec = id => {
    if (inputVal >= 1) {
      setInputVal(inputVal - 1);
      dispatch(decPriceFun(id));
    }

    inputVal <= 1 && dispatch(removeFromCartFun(id));
  };

  const handleRemoveBtn = e => {
    dispatch(removeFromCartFun(e.target.dataset.id));
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
                <DecBtn handleClick={handleDec} id={id} />

                <input
                  min={1}
                  type="number"
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  readOnly={true}
                />

                <IncBtn handleClick={handleInc} id={id} />
              </div>
            </Col>

            <Col lg={6} className="offset-lg-2">
              <div className="cartItem__content text-uppercase">
                <h6 className="productName">{productName}</h6>
                <h6 className="brand">{brand}</h6>
                <PriceDisplay price={price} />
                <button
                  className="removeBtn"
                  data-id={id}
                  onClick={handleRemoveBtn}>
                  Remove
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default CartItem;
