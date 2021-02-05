import { useSelector } from "react-redux";

const useFindRatings = id => {
  const ratings = useSelector(({ RatingsReducer: { ratings } }) => ratings);

  const findRatings = () =>
    ratings.length && id ? ratings.filter(item => item.productId == id) : null;

  return findRatings;
};

export default useFindRatings;
