import React from "react";
import Card from "react-bootstrap/Card";
import RatingDisplay from "../Common/RatingDisplay";

const Ratings = ({ userName, ratings, comments, createdAt }) => {
  return (
    <>
      <Card className="my-3">
        <Card.Header className="py-3">
          <div className="left d-flex align-items-center">
            <div className="rounded-circle mr-2 ">{userName[0]}</div>
            <div className="userName">
              {userName.length < 20 ? userName : `${userName.slice(0, 20)}....`}
            </div>
          </div>

          <div className="right">
            <h6 className="text-secondary">
              {new Date(createdAt).toDateString()}
            </h6>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>
            <div className="rating__display d-flex align-items-center">
              <RatingDisplay rating={ratings} />
              <span className="ml-2">
                ({ratingOptions(Math.round(ratings))})
              </span>
            </div>
          </Card.Title>
          <Card.Text className="pb-2">{comments}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Ratings;

const ratingOptions = (val = 0) => {
  let rate;
  if (val <= 0 || !val) {
    return "no ratings...";
  }

  if (val <= 1) {
    rate = "very bad";
  } else if (val <= 2) {
    rate = "bad";
  } else if (val <= 3) {
    rate = "good";
  } else if (val <= 4) {
    rate = "very good";
  } else {
    rate = "excellent";
  }

  return rate;
};
