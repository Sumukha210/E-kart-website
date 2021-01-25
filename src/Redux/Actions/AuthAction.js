import axios from "axios";

export const AUTH__DATA = "AUTH__DATA";
export const AUTH__LOADING = "AUTH__LOADING";
export const AUTH__ERROR = "AUTH__ERROR";
export const LOGOUT = "LOGOUT";

export const authData__Fun = payload => ({ type: AUTH__DATA, payload });
export const logout__Fun = () => ({ type: LOGOUT });

export const loading__Fun = () => ({ type: AUTH__LOADING });
export const error__Fun = payload => ({ type: AUTH__ERROR, payload });

export const login__Api = userData => async dispatch => {
  dispatch(loading__Fun());

  try {
    const { data } = await axios.post(`/login`, userData);

    dispatch(authData__Fun(data));
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(error__Fun({ message: error.response.data.errorResult.email }));
  }
};

export const signup__Api = userData => async dispatch => {
  dispatch(loading__Fun());
  try {
    const { data } = await axios.post(`/signup`, userData);

    dispatch(authData__Fun(data));
    sessionStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch(error__Fun(error.response.data.errorResult));
  }
};

export const logout__Api = () => async dispatch => {
  const data = await axios.get("/logout");
  dispatch(logout__Fun());
};
