import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OfferSectionCard from "./OfferSectionCard";
import { useSelector } from "react-redux";

const OfferSection = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  const products = Products.slice(6, 8);

  return (
    <>
      <div className="offerSection mt-5">
        <div className="offerSection__container">
          <h1 className="title">exclusive offer:-</h1>
          <Row className="offerSection__row justify-content-between mt-4">
            <Col sm={12} md={6} className="offerSection__Card">
              <OfferSectionCard {...products[0]} />
            </Col>

            <Col sm={12} md={5} className="offerSection__Card">
              <OfferSectionCard {...products[1]} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
