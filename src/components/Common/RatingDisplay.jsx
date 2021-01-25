import React from "react";

const RatingDisplay = ({ rating }) => {
  return (
    <>
      <h6 className="ratingDisplay bg-info">
        <span>{Math.round(rating).toString()}</span>
        <span>
          <i className="fas fa-star"></i>
        </span>
      </h6>
    </>
  );
};

export default RatingDisplay;
