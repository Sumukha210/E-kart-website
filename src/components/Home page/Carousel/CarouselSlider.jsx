import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ProductContext } from "../../../DataContext/ProductContext";

const CarouselSlider = () => {
  const [store] = useContext(ProductContext);

  return (
    <div className="carouselSlider">
      <Carousel>
        {store.slice(1, 4).map(({ id, productName, img, brand, price }) => (
          <Carousel.Item key={id}>
            <Container>
              <Row className="align-items-center justify-content-center mx-auto">
                <Col sm={12} md={6}>
                  <div className="content text-uppercase">
                    <p className="brand">{brand}</p>
                    <h4 className="name">{productName}</h4>
                    <h6 className="price">{price} Rs /only-</h6>
                    <button className="buyNow">Buy Now</button>
                  </div>
                </Col>

                <Col sm={12} md={6}>
                  <img className="d-block w-100" src={img} alt="First slide" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
