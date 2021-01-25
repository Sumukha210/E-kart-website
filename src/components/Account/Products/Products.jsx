import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SingleProduct from "./SingleProduct";
import { useHistory } from "react-router-dom";

const Products = () => {
  const history = useHistory();

  return (
    <>
      <div className="products container">
        <Row>
          <Col sm={12} md={11}>
            <div className="products__header d-flex justify-content-between">
              <div className="products__title">Products:-</div>
            </div>

            <div className="products__table my-5">
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Quantity</th>
                    <th>Customer Id</th>
                    <th>Total price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <SingleProduct />
                  <SingleProduct />
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
