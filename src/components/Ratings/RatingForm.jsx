import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import StarRatings from "react-star-ratings";
import { useOrderLocalStoage } from "../customhooks/useOrderLocalStorage";
import { createRatings__Api } from "../../Redux/Actions/RatingAction";
import { useRatingsStorage } from "../customhooks/useRatingsSessionStorage";

const RatingForm = () => {
  const { id } = useParams();
  const [OP] = useOrderLocalStoage();
  //here OP=ordered product
  const dispatch = useDispatch();
  const history = useHistory();
  let list = [];
  const { ratings } = useRatingsStorage();

  OP.length && OP.forEach(item => list.push(...item.productId.split(",")));

  //find the product id in productId's array
  // let findId = productIds.find(item => item === id);

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
      setError({ rating: "", comment: "" });

      dispatch(
        createRatings__Api({
          productId: id,
          description: e.target.comment.value,
          ratings: rating,
        })
      );
      history.push("/");
    }
  };

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  return (
    <div className="ratingForm">
      {isAuth ? (
        !list.includes(id) ? (
          <div className="text-center">
            <h3>Haven't purchased this product?</h3>
            <h5 className="my-3">
              Sorry! You are not allowed to review this product since you
              haven't bought it on E-kart.
            </h5>
            <Button onClick={() => history.push(`/specificItem/${id}`)}>
              Buy now
            </Button>
          </div>
        ) : ratings
            .filter(item => item.userId == isAuth.id)
            .find(item => item.productId == id) ? (
          <h3 className="text-center ">You already rated this product....</h3>
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
        )
      ) : (
        <h3 className="text-center">Please Login to rate this product</h3>
      )}
    </div>
  );
};

export default RatingForm;
