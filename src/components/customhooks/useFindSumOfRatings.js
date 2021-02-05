import { useSelector } from "react-redux";

const useFindSumOfRatings = id => {
  const ratings = useSelector(({ RatingsReducer: { ratings } }) => ratings);

  const findSumOfRatings = () => {
    let result =
      ratings.length && id
        ? ratings.filter(item => item.productId == id)
        : null;

    return result
      ? result.reduce((acc, curr) => acc + Number(curr.ratings), 0) /
          result.length
      : null;
  };

  return findSumOfRatings;
};

export default useFindSumOfRatings;
