import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router-dom";
import PriceDisplay from "../../Common/PriceDisplay";

const OfferSectionCard = ({ price, title, id, image, description }) => {
  const history = useHistory();

  return (
    <>
      <Row>
        <Col sm={6} md={6}>
          <div className="offetSection__container">
            <h6 className="productName">{title && title.slice(0, 30)}......</h6>

            <PriceDisplay price={price} />

            <p>{description && description.slice(0, 200)}.......</p>

            <button
              className="buyNow"
              onClick={() => history.push(`/specificItem/${id}`)}>
              buy now
            </button>
          </div>
        </Col>

        <Col sm={6} md={6}>
          <img src={image} alt={title} />
        </Col>
      </Row>
    </>
  );
};

export default OfferSectionCard;
