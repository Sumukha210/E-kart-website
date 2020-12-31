import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import PriceDisplay from "./PriceDisplay";
import RatingDisplay from "./RatingDisplay";

const CustomCard = ({ img, rating, productName, brand, price, id }) => {
  const history = useHistory();

  return (
    <>
      <Col sm={6} lg={4}>
        <Card onClick={() => history.push(`/specificItem/${id}`)}>
          <Card.Img src={img} variant="top" />

          <Card.Body className="text-uppercase">
            <h6 className="text-secondary card__brand">{brand}</h6>
            <h6 className="card__name">{productName}</h6>

            <RatingDisplay rating={rating} />

            <PriceDisplay price={price} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomCard;
