import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
import { AuthReducer } from "./AuthReducer";
import { CartReducer } from "./CartReducer";
import { RatingsReducer } from "./RatingReducer";
import { OrderReducer } from "./OrderReducer";

export const RootReducer = combineReducers({
  ProductReducer,
  AuthReducer,
  CartReducer,
  RatingsReducer,
  OrderReducer,
});
