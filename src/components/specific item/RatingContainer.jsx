import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Ratings from "../Ratings/Ratings";

const RatingContainer = ({ productId }) => {
  const history = useHistory();

  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);

  const handleRateProduct = () => {
    if (isAuth) {
      history.push(`/ratingForm/${productId}`);
    } else {
      history.push("/authForm");
    }
  };

  return (
    <div className="ratings">
      <div className="ratings__container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1 className="ratings__mainTitle">Ratings:-</h1>

          <Button
            className="rateProductBtn font-weight-bold"
            onClick={handleRateProduct}>
            Rate Product
          </Button>
        </div>

        <Ratings
          userName="sumukha"
          ratings="3.1"
          comments="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vero."
          createdAt="2021-01-14 14:32:05.714Z"
        />

        <Ratings
          userName="sumukha"
          ratings="4.5"
          comments="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, vero."
          createdAt="2021-01-14 14:32:05.714Z"
        />
        <Ratings
          userName="sumukha"
          ratings="4"
          comments="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reiciendis. Accusantium eligendi voluptatem nemo id, beatae nihil porro deleniti saepe at temporibus ut repellat, rerum laboriosam soluta velit deserunt necessitatibus. Blanditiis quaerat sapiente eligendi, maiores culpa natus enim, quae, voluptas optio tempora suscipit. Exercitationem maxime ea molestias magni hic eum."
          createdAt="2021-01-14 14:32:05.714Z"
        />
      </div>
    </div>
  );
};

export default RatingContainer;
