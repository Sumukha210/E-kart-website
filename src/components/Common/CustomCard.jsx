import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { useRatingsStorage } from "../customhooks/useRatingsSessionStorage";
import PriceDisplay from "./PriceDisplay";
import RatingDisplay from "./RatingDisplay";

const CustomCard = ({ img, productName, price, id }) => {
  const history = useHistory();
  const { findSumOfRatings } = useRatingsStorage();

  let result = findSumOfRatings(id);

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
            {/* <RatingDisplay rating={rating} /> */}
            {result ? (
              <RatingDisplay rating={result} />
            ) : (
              <h6 className="text-secondary font-weight-bold">
                No ratings....
              </h6>
            )}
            <PriceDisplay price={price} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomCard;
