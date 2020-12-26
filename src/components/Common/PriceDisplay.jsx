import React from "react";

const PriceDisplay = ({ price }) => {
  return (
    <>
      <h6 className="priceDisplay">
        <span>
          <i className="fas fa-rupee-sign"></i>
          {`${price}`}
        </span>

        <span>
          <i className="fas fa-rupee-sign"></i>
          {`${Number(price + 1000)}`}
        </span>
      </h6>
    </>
  );
};

export default PriceDisplay;
