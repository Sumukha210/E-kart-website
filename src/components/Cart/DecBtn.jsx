import React from "react";

const DecBtn = ({ handleClick, id }) => {
  return (
    <>
      <button
        data-id={id}
        onClick={e => handleClick(e.target.parentElement.dataset.id)}>
        <i className="fas fa-minus"></i>
      </button>
    </>
  );
};

export default DecBtn;
