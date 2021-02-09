import { API } from "../../axiosConfig";

export const GET_ORDER_DETAIL = "GET_ORDER_DETAIL";
export const CREATE_ORDERS = "CREATE_ORDERS";
export const ORDER__LOADING = "ORDER__LOADING";
export const ORDER__ERROR = "ORDER__ERROR";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";

export const getOrderDetail__fun = payload => ({
  type: GET_ORDER_DETAIL,
  payload,
});

export const createOrders__fun = payload => ({ type: CREATE_ORDERS, payload });
export const order_loading_fun = () => ({ type: ORDER__LOADING });
export const updateOrderStatus_fun = (id, data) => ({
  type: UPDATE_ORDER_STATUS,
  payload: {
    id,
    data,
  },
});
export const order_error_fun = payload => ({ type: ORDER__ERROR, payload });

//get order of specific user
export const getOrderDetail__Api = () => async dispatch => {
  try {
    const { data } = await API.get(`/orderDetails`);
    dispatch(getOrderDetail__fun(data));
  } catch (error) {
    console.log(error);
  }
};

export const createOrder__Api = orderData => async dispatch => {
  dispatch(order_loading_fun());
  try {
    const { data } = await API.post(`/createOrder`, orderData);

    dispatch(createOrders__fun(data));
  } catch (error) {
    dispatch(order_error_fun(error));
  }
};

//admin=updating order status
export const updateOrderStatus__Api = (id, status) => async dispatch => {
  dispatch(order_loading_fun());
  try {
    const { data } = await API.patch(`/updateStatus/${id}`, status);

    dispatch(updateOrderStatus_fun(id, data));
  } catch (error) {
    dispatch(order_error_fun(error));
  }
};

//admin=get all order details
export const getAllOrderDetails__Api = () => async dispatch => {
  dispatch(order_loading_fun());
  try {
    const { data } = await API.get(`/getAllOrderDetails/`);
    dispatch(getOrderDetail__fun(data));
  } catch (error) {
    dispatch(order_error_fun(error));
  }
};
