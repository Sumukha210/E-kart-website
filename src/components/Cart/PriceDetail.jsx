import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOrder__Api } from "../../Redux/Actions/OrderAction";
import { clearCart__fun } from "../../Redux/Actions/CartAction";

const PriceDetail = () => {
  const cartItems = useSelector(({ CartReducer: { cart } }) => cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const orderError = useSelector(({ OrderReducer: { error } }) => error);
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);

  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [totalNumOfItems, setTotalNumOfItems] = useState(0);
  const [finalAmount, setfinalAmount] = useState(0);

  useEffect(() => {
    const {
      caltotalNumOfItems,
      caltotalPrice,
      caldiscountPrice,
      calfinalAmount,
    } = calculate(cartItems);

    setTotalNumOfItems(caltotalNumOfItems);
    setTotalPrice(caltotalPrice);
    setDiscountPrice(caldiscountPrice);
    setfinalAmount(calfinalAmount);
  }, [cartItems]);

  const handleOrderBtn = () => {
    const { calQty, calfinalAmount } = calculate(cartItems);
    dispatch(
      createOrder__Api({
        qty: calQty,
        productId: cartItems.map(item => item.id).join(","),
        totalPrice: calfinalAmount,
      })
    );

    console.log({
      qty: calQty,
      productId: cartItems.map(item => item.id).join(","),
      totalPrice: calfinalAmount,
    });

    if (!orderError.length) {
      history.push("/account");
      dispatch(clearCart__fun());
    }
  };

  return (
    <>
      <div className="priceInfo__container">
        <Row>
          <Col>
            <h6 className="left-title">Price ({totalNumOfItems})</h6>
          </Col>
          <Col>
            <h6 className="right-title">{totalPrice.toFixed(2)}</h6>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <h6 className="left-title">Discounts </h6>
          </Col>
          <Col>
            <h6 className="right-title text-success">{discountPrice}</h6>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <h6 className="left-title">Delivery charges </h6>
          </Col>
          <Col>
            <h6 className="right-title text-success">Free</h6>
          </Col>
        </Row>

        <Row className="mt-4 border-top border-info pt-3 ">
          <Col>
            <h6 className="left-title">Total amount</h6>
          </Col>
          <Col>
            <h6 className="right-title">{finalAmount.toFixed(2)} Rs/</h6>
          </Col>
        </Row>

        <Row>
          <Col>
            <h6 className="text-success mt-3">
              You will save ₹{discountPrice} on this order
            </h6>
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <button
              disabled={isAuth.isAllowed ? false : true}
              className="btn btn-primary d-block w-100"
              onClick={handleOrderBtn}>
              Place order
            </button>

            {!isAuth.isAllowed && (
              <p className="text-danger mt-2 font-weight-bold ">
                Login to place order
              </p>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PriceDetail;

//discount calculation
const calDiscount = price => {
  let discountAmount;
  if (price <= 100) {
    discountAmount = 10;
  } else if (price <= 200) {
    discountAmount = 20;
  } else if (price <= 500) {
    discountAmount = 50;
  } else if (price <= 1000) {
    discountAmount = 100;
  } else {
    discountAmount = 150;
  }

  return discountAmount;
};

//finalCalculation
const calculate = cartItems => {
  let caltotalNumOfItems = cartItems.length;
  let calQty = cartItems.reduce((acc, curr) => acc + curr.qty, 0);
  let caltotalPrice =
    cartItems.reduce((acc, curr) => acc + curr.price, 0) * calQty;
  let caldiscountPrice = calDiscount(caltotalPrice);
  let calfinalAmount = caltotalPrice - caldiscountPrice;

  return {
    caltotalNumOfItems,
    calQty,
    caltotalPrice,
    caldiscountPrice,
    calfinalAmount,
  };
};
