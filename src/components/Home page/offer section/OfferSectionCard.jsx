import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PriceDisplay from "../../Common/PriceDisplay";

const OfferSectionCard = ({ price, productName, id, img }) => {
  console.log(price, productName, id, img);

  return (
    <>
      <Row>
        <Col sm={6} md={6}>
          <div className="offetSection__container">
            <h6 className="productName">{productName}</h6>

            <PriceDisplay price={price} />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              fuga.
            </p>

            <button className="buyNow">buy now</button>
          </div>
        </Col>

        <Col sm={6} md={6}>
          <img src={img} alt={productName} />
        </Col>
      </Row>
    </>
  );
};

export default OfferSectionCard;
