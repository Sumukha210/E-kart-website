import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import StarRatings from "react-star-ratings";

const RatingForm = () => {
  const { id } = useParams(1);

  const [rating, setRating] = useState(0);
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);
  const [error, setError] = useState({ comment: "", rating: "" });

  const handleSubmit = e => {
    e.preventDefault();
    if (rating <= 0) {
      setError({
        comment: "",
        rating: "rating must be greater than 0",
      });
    } else if (e.target.comment.value.trim() === "") {
      setError({ rating: "", comment: "Please provide comment" });
    } else {
      console.log("success");
      setError({ rating: "", comment: "" });
    }
  };

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  return (
    <div className="ratingForm">
      {isAuth ? (
        <>
          <h3 className="text-center">Haven't purchased this product?</h3>
          <h6 className="text-center">
            Sorry! You are not allowed to review this product since you haven't
            bought it on E-kart.
          </h6>
        </>
      ) : (
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={8} sm={12} lg={6}>
              <h1 className="heading">Ratings and Reviews:-</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label className="mr-3">Ratings:-</Form.Label>
                  <StarRatings
                    rating={rating}
                    starRatedColor="#15b7b9"
                    changeRating={changeRating}
                    numberOfStars={5}
                    name="rating"
                    starHoverColor="#11d3bc"
                    starDimension="40px"
                  />
                </Form.Group>

                <Form.Group className="mt-5">
                  <Form.Label>Comment:-</Form.Label>
                  <Form.Control as="textarea" name="comment" />
                </Form.Group>
                <Form.Group>
                  <Button className="d-block w-100" type="submit">
                    submit
                  </Button>
                </Form.Group>
              </Form>

              <div className="error">
                <h6 className="text-danger font-weight-bold">
                  {error.comment && error.comment}
                  {error.rating && error.rating}
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default RatingForm;
