import React from "react";

const IncDecBtn = ({ handleClick, type }) => {
  return (
    <>
      <button onClick={() => handleClick()}>
        <i className={`fas fa-${type}-circle`}></i>
      </button>
    </>
  );
};

export default IncDecBtn;
