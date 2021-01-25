import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import CustomCard from "../Common/CustomCard";
import Pagination from "../Common/Pagination";

const AllProducts = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  const TotalProducts = Products.slice(8);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const DisplayProducts = TotalProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="allProducts">
      <div className="allProducts__container">
        <h1 className="allProducts__title">All products:-</h1>

        <Row className="align-items-center">
          {DisplayProducts.length &&
            DisplayProducts.map(({ id, image, ratings, title, price }) => (
              <CustomCard
                key={id}
                productName={title}
                img={image}
                price={price}
                rating={ratings}
                id={id}
              />
            ))}
        </Row>

        <div className="my-4 d-flex justify-content-center">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={TotalProducts.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
