import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";

const CarouselSlider = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  return (
    <div className="carouselSlider">
      <Carousel>
        <Carousel.Item>
          <img src="/img/carousel-img-4.jpg" className="w-100 d-block" alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img src="/img/carousel-img-2.jpg" className="w-100 d-block" alt="" />
        </Carousel.Item>

        <Carousel.Item>
          <img src="/img/carousel-img-3.jpg" className="w-100 d-block" alt="" />
        </Carousel.Item>
        {/* {Products.length &&
          Products.slice(1, 4).map(({ id, productName, img, brand, price }) => (
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
                    <img
                      className="d-block w-100"
                      src={img}
                      alt="First slide"
                    />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          ))} */}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
