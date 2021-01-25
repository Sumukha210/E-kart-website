import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import PriceDisplay from "./PriceDisplay";
import RatingDisplay from "./RatingDisplay";

const CustomCard = ({ img, rating, productName, price, id }) => {
  console.log(img);

  const history = useHistory();

  const handleClick = () => {
    history.push(`/specificItem/${id}`);
  };

  return (
    <>
      <Col sm={6} lg={4} onClick={handleClick}>
        <Card>
          <Card.Img src={img} />
          <Card.Body className="text-uppercase">
            <h6 className="card__name">
              {productName && productName.slice(0, 30)}....
            </h6>
            <RatingDisplay rating={rating} />
            <PriceDisplay price={price} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomCard;
