import React from "react";
import { useSelector } from "react-redux";
import AccountForm from "./AccountForm";
import Products from "./Products/Products";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdminPage = () => {
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);

  return (
    <div className="account">
      <Row className="justify-content-between mx-auto">
        {isAuth.role === "admin" ? (
          <Col lg={12}>
            <Products />
          </Col>
        ) : (
          <>
            <Col lg={3} sm={12}>
              <AccountForm />
            </Col>
            <Col lg={9} sm={12}>
              <Products />
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default AdminPage;
