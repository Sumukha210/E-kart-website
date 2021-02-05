import { API } from "../../axiosConfig";

export const AUTH__DATA = "AUTH__DATA";
export const AUTH__LOADING = "AUTH__LOADING";
export const AUTH__ERROR = "AUTH__ERROR";
export const SET_AUTH__ERROR = "SET_AUTH__ERROR";
export const LOGOUT = "LOGOUT";

export const authData__Fun = payload => ({ type: AUTH__DATA, payload });
export const logout__Fun = () => ({ type: LOGOUT });

export const loading__Fun = () => ({ type: AUTH__LOADING });
export const error__Fun = payload => ({ type: AUTH__ERROR, payload });
export const setAuthError__Fun = () => ({ type: SET_AUTH__ERROR });

export const login__Api = userData => async dispatch => {
  dispatch(loading__Fun());

  try {
    const { data } = await API.post(`/login`, userData);

    dispatch(authData__Fun(data));
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(error__Fun({ message: error.response.data.errorResult.email }));
  }
};

export const signup__Api = userData => async dispatch => {
  dispatch(loading__Fun());
  try {
    const { data } = await API.post(`/signup`, userData);

    dispatch(authData__Fun(data));
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(error__Fun(error.response.data.errorResult));
  }
};

export const updateAccount__Api = userData => async dispatch => {
  dispatch(loading__Fun());

  try {
    const { data } = await API.patch(`/updateAccount`, userData);

    dispatch(authData__Fun(data));
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(error__Fun(error.response.data.errorResult));
  }
};

export const logout__Api = () => async dispatch => {
  await API.get(`/logout`);
  dispatch(logout__Fun());
  localStorage.removeItem("orderDetails");
  sessionStorage.removeItem("ratings");
  localStorage.removeItem("profile");
};
