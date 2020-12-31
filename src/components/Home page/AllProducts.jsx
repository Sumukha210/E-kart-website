import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import CustomCard from "../Common/CustomCard";
import Pagination from "../Common/Pagination";

const AllProducts = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  const TotalProducts = Products.slice(7);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const DisplayProducts = TotalProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  console.log(DisplayProducts);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="allProducts">
      <div className="allProducts__container">
        <h1 className="allProducts__title">All products:-</h1>

        <Row className="align-items-center">
          {DisplayProducts.length &&
            DisplayProducts.map(
              ({ id, img, rating, productName, brand, price }) => (
                <CustomCard
                  key={id}
                  productName={productName}
                  img={img}
                  price={price}
                  rating={rating}
                  brand={brand}
                  id={id}
                />
              )
            )}
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
