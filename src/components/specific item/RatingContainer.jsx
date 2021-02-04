import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Ratings from "../Ratings/Ratings";
import { getSpecificRatings__Api } from "../../Redux/Actions/RatingAction";
import { useRatingsStorage } from "../customhooks/useRatingsSessionStorage";

const RatingContainer = ({ productId }) => {
  const history = useHistory();
  const { findRatings } = useRatingsStorage();
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);
  const ratings__info = useSelector(
    ({ RatingsReducer: { specificRating } }) => specificRating
  );
  let dispatch = useDispatch();
  let result = findRatings(productId);

  const handleRateProduct = () => {
    if (isAuth) {
      history.push(`/ratingForm/${productId}`);
    } else {
      history.push("/authForm");
    }
  };

  useEffect(() => {
    "result", result;
    if (result && result.length) {
      dispatch(getSpecificRatings__Api(productId));
    }
  }, [productId]);

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

        {ratings__info.length ? (
          ratings__info.map(
            ({ name, createdAt, description, ratings, _id }) => (
              <Ratings
                key={_id}
                userName={name}
                ratings={ratings}
                comments={description}
                createdAt={createdAt}
              />
            )
          )
        ) : (
          <h5 className="font-weight-bold text-secondary">No ratings...</h5>
        )}
      </div>
    </div>
  );
};

export default RatingContainer;
