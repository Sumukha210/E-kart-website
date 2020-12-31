import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

const PriceDetail = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [finalAmount, setfinalAmount] = useState(0);

  useEffect(() => {
    if (Products) {
      const filteredItems = Products.filter(item => item.inCart == true);
      console.log(filteredItems);

      const sumOfItems = filteredItems.reduce(
        (acc, val) => Number(acc) + Number(val.total),
        0
      );

      const discountAmount = sumOfItems / 10;
      console.log(discountAmount);

      const FinalAmount = sumOfItems - discountPrice;

      setTotalItems(filteredItems.length);
      setTotalPrice(sumOfItems);
      setDiscountPrice(discountAmount);

      FinalAmount > 0 ? setfinalAmount(FinalAmount) : setfinalAmount(0);
    }
  }, [Products]);

  return (
    <>
      <div className="priceInfo__container">
        <Row>
          <Col>
            <h6 className="left-title">Price({totalItems} items)</h6>
          </Col>
          <Col>
            <h6 className="right-title">{totalPrice}</h6>
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
            <h6 className="right-title">{finalAmount} Rs/-</h6>
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
            <button className="btn btn-primary d-block w-100">
              Place order
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PriceDetail;
