import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  let active = 1;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        onClick={() => paginate(i)}
        key={i}
        active={i === active}>
        {i}
      </Pagination.Item>
    );
  }

  const handleClick = (e, number) => {
    e.preventDefault();
    paginate(number);
  };

  return (
    <>
      <Pagination>{pageNumbers}</Pagination>
    </>
  );
};

export default Paginate;
