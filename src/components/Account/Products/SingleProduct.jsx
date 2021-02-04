import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { updateOrderStatus__Api } from "../../../Redux/Actions/OrderAction";

const SingleProduct = ({ productId, qty, customerId, price, status, id }) => {
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);
  const checkInfo = info => info && info;
  const dispatch = useDispatch();

  const handleOrderBtn = () => {
    id;
    dispatch(updateOrderStatus__Api(id, { status: "delivered" }));
  };

  return (
    <>
      <tr>
        <td className="font-weight-bold text-secondary ">
          {checkInfo(productId)}
        </td>
        <td className="font-weight-bold text-secondary ">{checkInfo(qty)}</td>
        <td className="font-weight-bold text-secondary ">
          {checkInfo(customerId)}
        </td>
        <td className="font-weight-bold text-secondary ">{checkInfo(price)}</td>
        <td
          className={`font-weight-bold text-${
            status === "not delivered" ? "warning" : "success"
          }`}>
          {checkInfo(status)}
        </td>

        {isAuth.role === "admin" && (
          <th>
            <Button
              variant="success"
              disabled={status === "not delivered" ? false : true}
              onClick={handleOrderBtn}>
              <i
                className="fas fa-check-square"
                style={{ fontSize: "20px" }}></i>
            </Button>
          </th>
        )}
      </tr>
    </>
  );
};

export default SingleProduct;
