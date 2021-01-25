import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const ButtonLoading = ({ text, isLoading, ...props }) => {
  return (
    <>
      <Button variant="primary" {...props}>
        {isLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="mr-3"
            style={{ padding: "0.4rem" }}
          />
        )}
        {text}
      </Button>
    </>
  );
};

export default ButtonLoading;
