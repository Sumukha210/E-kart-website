import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";
import { AuthReducer } from "./AuthReducer";
import { CartReducer } from "./CartReducer";

export const RootReducer = combineReducers({
  ProductReducer,
  AuthReducer,
  CartReducer,
});
