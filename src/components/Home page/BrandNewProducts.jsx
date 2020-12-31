import React from "react";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";

import CustomCard from "../Common/CustomCard";

const BrandNewProducts = () => {
  const Products = useSelector(({ ProductReducer: { products } }) => products);

  return (
    <>
      {/* brand new products starts */}
      <div className="brandNewProducts">
        <h1 className="brandNewProducts__title mt-3">Brand new products:-</h1>

        <Row className="align-items-start justify-content-around">
          {Products &&
            Products.slice(
              3,
              6
            ).map(({ id, productName, img, price, rating, brand }) => (
              <CustomCard
                key={id}
                productName={productName}
                img={img}
                price={price}
                rating={rating}
                brand={brand}
                id={id}
              />
            ))}
        </Row>
      </div>
      {/* buy now products ends */}
    </>
  );
};

export default BrandNewProducts;
