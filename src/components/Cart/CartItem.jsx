import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PriceDisplay from "../Common/PriceDisplay";
import IncBtn from "./IncBtn";
import { useDispatch, useSelector } from "react-redux";
import DecBtn from "./DecBtn";
import {
  decQty__fun,
  incQty__fun,
  removeFromCart__fun,
} from "../../Redux/Actions/CartAction";
import { useHistory } from "react-router-dom";

const CartItem = ({ id, image, price, title }) => {
  const cartItem = useSelector(({ CartReducer: { cart } }) =>
    cart.find(item => item.id == id)
  );

  const [inputVal, setInputVal] = useState(cartItem.qty);
  const dispatch = useDispatch();

  const history = useHistory();

  const handleBack = () => history.push(`/specificItem/${id}`);

  const handleInc = id => {
    setInputVal(prev => prev + 1);
    dispatch(incQty__fun(id));
  };

  const handleDec = id => {
    if (inputVal >= 1) {
      setInputVal(prev => prev - 1);
      dispatch(decQty__fun(id));
    }

    inputVal <= 1 && dispatch(removeFromCart__fun(id));
  };

  const handleRemoveBtn = e => {
    dispatch(removeFromCart__fun(e.target.dataset.id));
  };

  return (
    <>
      <div className="cartItem">
        <div className="cartItem__container">
          <Row className="justify-content-around align-items-center">
            <Col lg={4}>
              <figure onClick={handleBack}>
                <img src={image} alt="" />
              </figure>

              <div className="btn__group d-flex align-items-center justify-content-start">
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
                <h6 className="text-capitalize font-weight-bold productName">
                  {title && title.slice(0, 150)}....
                </h6>
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
