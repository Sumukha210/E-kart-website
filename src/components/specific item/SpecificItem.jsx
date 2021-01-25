import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  getSpecficProduct__fun,
  setSpecificProduct__fun,
} from "../../Redux/Actions/ProductActions";
import RatingDisplay from "../Common/RatingDisplay";
import PriceDisplay from "../Common/PriceDisplay";
import {
  addToCart__fun,
  removeFromCart__fun,
} from "../../Redux/Actions/CartAction";
import RatingContainer from "./RatingContainer";

const SpecificItem = () => {
  const { id } = useParams();
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const product = useSelector(({ ProductReducer: { specificProduct } }) => {
    return specificProduct;
  });
  const cartItems = useSelector(({ CartReducer: { cart } }) => cart);
  const findItemInCart = cartItems.findIndex(item => item.id == id);

  const handleAddToCartBtn = e => {
    let { title, image, price } = product;

    !isInCart
      ? dispatch(
          addToCart__fun({ title, image, price, id: product.id, qty: 1 })
        )
      : dispatch(removeFromCart__fun(e.target.dataset.id));
    setIsInCart(!isInCart);
  };

  const handleBackBtn = () => history.push("/");

  useEffect(() => {
    const getSessionData = sessionStorage.getItem("productDetail");

    if (getSessionData && JSON.parse(getSessionData).image) {
      dispatch(setSpecificProduct__fun(JSON.parse(getSessionData)));
    } else {
      dispatch(getSpecficProduct__fun(id));
    }

    return () => {
      sessionStorage.removeItem("productDetail");
      dispatch(setSpecificProduct__fun({}));
    };
  }, []);

  useEffect(() => {
    findItemInCart != -1 && setIsInCart(true);
    sessionStorage.setItem("productDetail", JSON.stringify(product));
  }, [product]);

  return (
    <div className="specificPage">
      <div className="specificPage__container">
        <Row className="align-items-center justify-content-center">
          {product && (
            <>
              <Col lg={6} md={6} sm={12}>
                <img src={product.image} alt="" />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="specificPage__content Card">
                  <h6 className="Card__title text-capitalize pt-3">
                    {product.title}
                  </h6>

                  <RatingDisplay rating={product.ratings} />

                  <PriceDisplay price={product.price} />
                  <p>{product.description}</p>

                  <div className="btn__group d-flex mb-4">
                    <button className="back mr-2" onClick={handleBackBtn}>
                      Back to home
                    </button>
                    <button
                      className={isInCart ? "remove" : "add"}
                      onClick={handleAddToCartBtn}
                      data-id={product.id}>
                      {isInCart ? "remove from cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      </div>

      <RatingContainer productId={product.id} />
    </div>
  );
};

export default SpecificItem;
