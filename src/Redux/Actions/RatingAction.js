import { API } from "../../axiosConfig";

export const GET_ALL_RATINGS = "GET_ALL_RATINGS";
export const GET_SPECIFIC_PRODUCT_RATINGS = "GET_SPECIFIC_PRODUCT_RATINGS";
export const SET_SPECIFIC_PRODUCT_RATINGS = "SET_SPECIFIC_PRODUCT_RATINGS";
export const CREATE_RATINGS = "CREATE_RATINGS";

export const getAllRatings__fun = payload => ({
  type: GET_ALL_RATINGS,
  payload,
});

export const getSpecificRating__fun = payload => ({
  type: GET_SPECIFIC_PRODUCT_RATINGS,
  payload,
});

export const createRating__fun = payload => ({ type: CREATE_RATINGS, payload });

export const getAllRatings__Api = () => async dispatch => {
  try {
    const { data } = await API.get(`/getAllRatings`);

    dispatch(getAllRatings__fun(data));
  } catch (error) {}
};

export const createRatings__Api = ratingsData => async dispatch => {
  try {
    const { data } = await API.post(`/ratings/`, ratingsData);

    dispatch(createRating__fun(data));
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificRatings__Api = productId => async dispatch => {
  try {
    const { data } = await API.get(`/getSpecificRatings/${productId}`);

    dispatch(getSpecificRating__fun(data));
  } catch (error) {
    console.log(error);
  }
};
