import React, { useContext } from "react";

import { ProductContext } from "../../DataContext/ProductContext";
import AllProducts from "./AllProducts";
import BrandNewProducts from "./BrandNewProducts";
import CarouselSlider from "./Carousel/CarouselSlider";
import OfferSection from "./OfferSection";

const Home = () => {
  const [state] = useContext(ProductContext);

  console.log(state);

  return (
    <div className="home">
      <CarouselSlider />
      <BrandNewProducts />
      <OfferSection />
      <AllProducts />
    </div>
  );
};

export default Home;
