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

  return { ratings };
};
