import {
  ADDTOCART,
  REMOVEFROMCART,
  INCQTY,
  DECQTY,
  FETCHALL,
  CLEARCART,
} from "../Actions/CartAction";

const initialState = {
  cart: [],
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHALL:
      return {
        cart: [...payload],
      };

    case ADDTOCART:
      console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case REMOVEFROMCART:
      return {
        cart: [...state.cart.filter(item => item.id != payload)],
      };

    case CLEARCART:
      return {
        cart: [],
      };

    case INCQTY:
      const copyCart1 = [...state.cart];

      copyCart1.forEach(item => {
        if (item.id == payload) {
          item.qty = Number(item.qty) + 1;
        }
      });

      return {
        cart: [...copyCart1],
      };

    case DECQTY:
      const copyCart2 = [...state.cart];

      copyCart2.forEach(item => {
        if (item.id == payload) {
          item.qty = Number(item.qty) - 1;
        }
      });

      return {
        cart: [...copyCart2],
      };

    default:
      return state;
  }
};
