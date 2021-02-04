import {
  GETALLPRODUCTS,
  PRODUCT__ERROR,
  PRODUCT__LOADING,
  GETSPECIFICPRODUCT,
  SETSPECIFICPRODUCT,
} from "../Actions/ProductActions";

const initialState = {
  products: [],
  specificProduct: {},
  loading: false,
  error: {},
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETALLPRODUCTS:
      return {
        ...state,
        products: [...payload],
        loading: false,
        error: {},
      };

    case GETSPECIFICPRODUCT:
      return {
        ...state,
        specificProduct: { ...state.products.find(item => item.id == payload) },
      };

    case SETSPECIFICPRODUCT:
      return {
        ...state,
        specificProduct: { ...payload },
      };

    case PRODUCT__LOADING:
      return {
        ...state,
        loading: true,
      };

    case PRODUCT__ERROR:
      return {
        products: [],
        specificProduct: {},
        loading: false,
        error: { payload },
      };

    default:
      return state;
  }
};
