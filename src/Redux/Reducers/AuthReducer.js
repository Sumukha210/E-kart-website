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
      payload &&
        localStorage.setItem("profile", JSON.stringify({ ...payload }));

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
      localStorage.removeItem("orderDetails");
      localStorage.removeItem("profile");
      return {
        authData: {},
        loading: false,
        error: {},
      };

    default:
      return state;
  }
};
