import {
  AUTH__DATA,
  AUTH__ERROR,
  AUTH__LOADING,
  LOGOUT,
  SET_AUTH__ERROR,
} from "../Actions/AuthAction";

const initialState = {
  authData: {},
  loading: false,
  error: {},
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH__DATA:
      return {
        ...state,
        authData: { ...payload },
        loading: false,
      };

    case AUTH__LOADING:
      return {
        ...state,
        loading: true,
      };

    case AUTH__ERROR:
      return {
        ...state,
        loading: false,
        error: { ...payload },
      };

    case SET_AUTH__ERROR:
      return {
        ...state,
        error: {},
      };

    case LOGOUT:
      sessionStorage.removeItem("user");
      localStorage.removeItem("orderDetails");
      return {
        authData: {},
        loading: false,
        error: {},
      };

    default:
      return state;
  }
};
