import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllRatings__Api,
  getAllRatings__fun,
} from "../../Redux/Actions/RatingAction";

export const useRatingsStorage = () => {
  const localName = "ratings";
  const dispatch = useDispatch();
  const ratings = useSelector(({ RatingsReducer: { ratings } }) => ratings);

  useEffect(() => {
    let localData = sessionStorage.getItem(localName);

    if (localData && JSON.parse(localData).length) {
      dispatch(getAllRatings__fun(JSON.parse(localData)));
    } else {
      dispatch(getAllRatings__Api());
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(localName, JSON.stringify(ratings));
  }, [ratings]);

  const findRatings = id =>
    ratings.length && id ? ratings.filter(item => item.productId == id) : null;

  const findSumOfRatings = id => {
    let result = findRatings(id);

    return result
      ? result.reduce((acc, curr) => acc + Number(curr.ratings), 0) /
          result.length
      : null;
  };

  return { ratings, findSumOfRatings, findRatings };
};
