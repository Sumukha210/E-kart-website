import {
  AUTH__DATA,
  AUTH__ERROR,
  AUTH__LOADING,
  LOGOUT,
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

    case LOGOUT:
      sessionStorage.removeItem("user");
      return {
        authData: {},
        loading: false,
        error: {},
      };

    default:
      return state;
  }
};
