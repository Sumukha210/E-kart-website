import React from "react";

const RatingDisplay = ({ rating }) => {
  return (
    <>
      <h6 className="ratingDisplay">
        <span>{rating}</span>
        <span>
          <i className="fas fa-star"></i>
        </span>
      </h6>
    </>
  );
};

export default RatingDisplay;
