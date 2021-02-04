import {
  GET_ALL_RATINGS,
  GET_SPECIFIC_PRODUCT_RATINGS,
  CREATE_RATINGS,
  // SET_SPECIFIC_PRODUCT_RATINGS,
} from "../Actions/RatingAction";

const initialState = {
  ratings: [],
  specificRating: [],
};

export const RatingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RATINGS:
      return {
        ...state,
        ratings: [...payload],
      };

    case GET_SPECIFIC_PRODUCT_RATINGS:
      return {
        ...state,
        specificRating: [...payload],
      };

    // case SET_SPECIFIC_PRODUCT_RATINGS:
    //   return {
    //     ...state,
    //     specificRating: [
    //       ...state.ratings.filter(item => item.productId == payload),
    //     ],
    //   };

    case CREATE_RATINGS:
      return {
        ...state,
        ratings: [...state.ratings, payload],
      };

    default:
      return state;
  }
};
