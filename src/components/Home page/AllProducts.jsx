import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import { ProductContext } from "../../DataContext/ProductContext";
import CustomCard from "../Common/CustomCard";

const AllProducts = () => {
  const [store] = useContext(ProductContext);

  return (
    <div className="allProducts">
      <div className="allProducts__container">
        <h1 className="allProducts__title">All products:-</h1>

        <Row className="align-items-center justify-content-center">
          {store.length &&
            store
              .slice(7)
              .map(({ id, img, rating, productName, brand, price }) => (
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
    </div>
  );
};

export default AllProducts;
