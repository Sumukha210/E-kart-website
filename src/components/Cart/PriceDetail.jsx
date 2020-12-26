import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PriceDetail = () => {
  return (
    <>
      <div className="priceInfo__container">
        <Row>
          <Col>
            <h6 className="left-title">Price(2 items)</h6>
          </Col>
          <Col>
            <h6 className="right-title">20000</h6>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <h6 className="left-title">Discounts </h6>
          </Col>
          <Col>
            <h6 className="right-title text-success">20000</h6>
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
            <h6 className="right-title">12000</h6>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PriceDetail;
