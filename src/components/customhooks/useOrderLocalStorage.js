import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllOrderDetails__Api,
  getOrderDetail__Api,
  getOrderDetail__fun,
} from "../../Redux/Actions/OrderAction";

export const useOrderLocalStoage = () => {
  const localName = "orderDetails";
  const dispatch = useDispatch();
  const OrderedProducts = useSelector(({ OrderReducer: { orders } }) => orders);
  const isAuth = useSelector(({ AuthReducer: { authData } }) => authData);

  useEffect(() => {
    let localData = localStorage.getItem(localName);

    if (localData && JSON.parse(localData).length) {
      dispatch(getOrderDetail__fun(JSON.parse(localData)));
    } else {
      if (isAuth.role === "admin") {
        dispatch(getAllOrderDetails__Api());
      } else {
        dispatch(getOrderDetail__Api());
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localName, JSON.stringify(OrderedProducts));
  }, [OrderedProducts]);

  return [OrderedProducts];
};
