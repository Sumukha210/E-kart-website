import React, { useContext } from "react";
import Row from "react-bootstrap/Row";

import CustomCard from "../Common/CustomCard";
import { ProductContext } from "../../DataContext/ProductContext";

const BrandNewProducts = () => {
  const [products] = useContext(ProductContext);

  return (
    <>
      {/* brand new products starts */}
      <div className="brandNewProducts">
        <h1 className="brandNewProducts__title mt-3">Brand new products:-</h1>

        <Row className="align-items-start justify-content-around">
          {products.length &&
            products
              .slice(3, 6)
              .map(({ id, productName, img, price, rating, brand }) => (
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
