import React, { lazy, useEffect } from "react";
import Spinner from "../Common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts__Api,
  getAllProducts__fun,
} from "../../Redux/Actions/ProductActions";

import BrandNewProducts from "./BrandNewProducts";
import CarouselSlider from "./Carousel/CarouselSlider";

const AllProducts = lazy(() => import("./AllProducts"));
const OfferSection = lazy(() => import("./offer section/OfferSection"));

const Home = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector(
    ({ ProductReducer: { products } }) => products
  );

  const loading = useSelector(({ ProductReducer: { loading } }) => loading);

  const error = useSelector(({ ProductReducer: { error } }) => error);

  useEffect(() => {
    const getLocalStoragee = localStorage.getItem("allProducts");

    if (getLocalStoragee && JSON.parse(getLocalStoragee).length) {
      dispatch(getAllProducts__fun(JSON.parse(getLocalStoragee)));
    } else {
      dispatch(getAllProducts__Api());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
  }, [allProducts.length]);

  return (
    <>
      <div className="home">
        {allProducts.length && (
          <>
            <CarouselSlider />
            <BrandNewProducts />
            <OfferSection />
            <AllProducts />
          </>
        )}
        {loading && <Spinner />}

        {error.payload && (
          <h6 className="text-danger text-center font-weight-bold product-error">
            {JSON.stringify(error)}
          </h6>
        )}
      </div>
    </>
  );
};

export default Home;
