import React from "react";

import AllProducts from "./AllProducts";
import BrandNewProducts from "./BrandNewProducts";
import CarouselSlider from "./Carousel/CarouselSlider";
import OfferSection from "./offer section/OfferSection";

const Home = () => {
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
