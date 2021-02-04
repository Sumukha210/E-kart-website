import axios from "axios";

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

// export const setSpecificRating__fun = payload => ({
//   type: SET_SPECIFIC_PRODUCT_RATINGS,
//   payload,
// });

export const createRating__fun = payload => ({ type: CREATE_RATINGS, payload });

export const getAllRatings__Api = () => async dispatch => {
  try {
    const { data } = await axios.get(`/getAllRatings`);
    dispatch(getAllRatings__fun(data));
  } catch (error) {
    "ratings error", error;
  }
};

export const createRatings__Api = ratingsData => async dispatch => {
  try {
    const { data } = await axios.post(`/ratings`, ratingsData);
    dispatch(createRating__fun(data));
    "ratings data", data;
  } catch (error) {
    error;
  }
};

export const getSpecificRatings__Api = productId => async dispatch => {
  try {
    const { data } = await axios.get(`/getSpecificRatings/${productId}`);
    dispatch(getSpecificRating__fun(data));
    "getspcificProduct", data;
  } catch (error) {
    error;
  }
};
