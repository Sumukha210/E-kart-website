import React from "react";
import Spinner from "react-bootstrap/Spinner";

const CustomSpinner = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}>
      <Spinner
        animation="border"
        variant="info"
        style={{ height: "4rem", width: "4rem" }}
      />
    </div>
  );
};

export default CustomSpinner;
