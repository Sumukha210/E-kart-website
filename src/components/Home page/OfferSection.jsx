import React, { useContext } from "react";
import { ProductContext } from "../../DataContext/ProductContext";

const OfferSection = () => {
  const [store] = useContext(ProductContext);

  const { img, productName, price, id } = store.length && store[6];

  return (
    <>
      <div
        className="offerSection my-3"
        style={{
          background: `linear-gradient(rgba(3, 91, 121, 0.9), rgb(7 56 72 / 80%)),url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        <div className="offetSection__container text-uppercase text-light">
          <h1 className="title">exclusive offer:-</h1>
          <h6 className="productName">{productName}</h6>
          <h6 className="price">
            {price} <span>Rs only /-</span>
          </h6>
          <button className="buyNow">buy now</button>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
