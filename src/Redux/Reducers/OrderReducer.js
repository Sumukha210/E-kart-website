import {
  CREATE_ORDERS,
  GET_ORDER_DETAIL,
  ORDER__LOADING,
  ORDER__ERROR,
  UPDATE_ORDER_STATUS,
} from "../Actions/OrderAction";

const intialState = {
  orders: [],
  loading: false,
  error: [],
};

export const OrderReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CREATE_ORDERS:
      return {
        orders: [...state.orders, payload],
        loading: false,
        error: [],
      };

    case GET_ORDER_DETAIL:
      return {
        ...state,
        orders: [...payload],
      };

    case UPDATE_ORDER_STATUS:
      const oldOrders = state.orders.filter(item => item._id != payload.id);
      return {
        ...state,
        orders: [...oldOrders, payload.data],
      };

    case ORDER__LOADING:
      return {
        ...state,
        loading: true,
        error: [],
      };

    case ORDER__ERROR:
      return {
        orders: [],
        loading: false,
        error: [payload],
      };

    default:
      return state;
  }
};
