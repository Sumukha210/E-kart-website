import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { ADDITEMS } from "../../DataContext/DataReducer";
import { ProductContext } from "../../DataContext/ProductContext";
import PriceDisplay from "./PriceDisplay";
import RatingDisplay from "./RatingDisplay";

const CustomCard = ({ img, rating, productName, brand, price, path, id }) => {
  const [store, dispatch] = useContext(ProductContext);
  const [isAddToCart, setAddToCart] = useState(false);

  const handleAddToCartBtn = e => {
    const productId = e.target.dataset.id;
    setAddToCart(!isAddToCart);
    dispatch({ type: ADDITEMS, payload: productId });
    console.log(store);
  };

  return (
    <>
      <Col sm={6} md={4} lg={4}>
        <Card>
          <Card.Img src={img} variant="top" />

          <button
            className="card__btn"
            onClick={handleAddToCartBtn}
            data-id={id}
            style={{ backgroundColor: isAddToCart ? "#f02282" : "#15b7b9" }}>
            {isAddToCart ? "remove from cart" : "  add to cart"}
          </button>

          <Card.Body className="text-uppercase">
            <h6 className="text-secondary card__brand">{brand}</h6>
            <h6 className="card__name">{productName}</h6>

            <RatingDisplay rating={rating} />

            <PriceDisplay price={price} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CustomCard;
