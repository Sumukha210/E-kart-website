import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CarouselSlider = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  const history = useHistory();

  return (
    <div className="carouselSlider">
      <Carousel>
        {Products.length &&
          Products.slice(0, 3).map(
            ({ id, title, image, price, description }) => (
              <Carousel.Item key={id}>
                <Container>
                  <Row className="align-items-center justify-content-center mx-auto">
                    <Col sm={12} md={6}>
                      <div className="content text-uppercase">
                        <h4 className="name text-capitalize">{title}</h4>
                        <p className="desc text-capitalize d-none d-sm-block ">
                          {description && description.slice(0, 200)}....
                        </p>
                        <h6 className="price">{price} Rs /only-</h6>
                        <button
                          className="buyNow"
                          onClick={() => history.push(`/specificItem/${id}`)}>
                          Buy Now
                        </button>
                      </div>
                    </Col>

                    <Col sm={12} md={6}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                      />
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            )
          )}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
