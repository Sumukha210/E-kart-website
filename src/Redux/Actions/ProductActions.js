import { API } from "../../axiosConfig";

export const GETALLPRODUCTS = "GETALLPRODUCTS";
export const GETSPECIFICPRODUCT = "GETSPECIFICPRODUCT";
export const SETSPECIFICPRODUCT = "SETSPECIFICPRODUCT";
export const PRODUCT__LOADING = "PRODUCT__LOADING";
export const PRODUCT__ERROR = "PRODUCT__ERROR";

export const getAllProducts__fun = payload => ({
  type: GETALLPRODUCTS,
  payload,
});

export const getSpecficProduct__fun = payload => ({
  type: GETSPECIFICPRODUCT,
  payload,
});

export const setSpecificProduct__fun = payload => ({
  type: SETSPECIFICPRODUCT,
  payload,
});

export const prodLoading__fun = () => ({
  type: PRODUCT__LOADING,
});

export const prodError__fun = payload => ({
  type: PRODUCT__ERROR,
  payload,
});

export const getAllProducts__Api = () => async dispatch => {
  dispatch(prodLoading__fun());
  try {
    const { data } = await API.get(`/getProducts`);
    debugger;
    data && dispatch(getAllProducts__fun(data));
  } catch (error) {
    error.response.data && dispatch(prodError__fun(error.response.data));
  }
};
