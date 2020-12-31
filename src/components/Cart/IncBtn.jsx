import React from "react";

const IncBtn = ({ handleClick, id }) => {
  return (
    <>
      <button
        data-id={id}
        onClick={e => handleClick(e.target.parentElement.dataset.id)}>
        <i className="fas fa-plus"></i>
      </button>
    </>
  );
};

export default IncBtn;
