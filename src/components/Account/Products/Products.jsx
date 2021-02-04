import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleProduct from "./SingleProduct";
import { useSelector } from "react-redux";
import { useOrderLocalStoage } from "../../customhooks/useOrderLocalStorage";

const Products = () => {
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);

  const [OrderedProducts] = useOrderLocalStoage();

  const thStyle = {
    fontSize: "1.1rem",
  };

  return (
    <>
      <div className="products">
        <Row>
          <Col sm={12} md={11}>
            <div className="products__header d-flex justify-content-between">
              <div className="products__title mb-4">Products:-</div>
            </div>

            <div className="products__table ">
              {OrderedProducts.length ? (
                <Table
                  striped
                  bordered
                  hover
                  responsive
                  className="text-center">
                  <thead>
                    <tr>
                      <th style={thStyle}>Product Id</th>
                      <th style={thStyle}>Quantity</th>
                      <th style={thStyle}>Customer Id</th>
                      <th style={thStyle}>Total price</th>
                      <th style={thStyle}>Status</th>
                      {isAuth.role === "admin" && <th>Mark as Delivered</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {OrderedProducts.map(
                      (
                        { status, productId, totalPrice, customerId, qty, _id },
                        i
                      ) => (
                        <SingleProduct
                          status={status}
                          customerId={customerId}
                          price={totalPrice}
                          productId={productId}
                          qty={qty}
                          key={_id}
                          id={_id}
                        />
                      )
                    )}
                  </tbody>
                </Table>
              ) : (
                <h5 className="text-center text-capitalize">
                  you are not ordered any products....
                </h5>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
