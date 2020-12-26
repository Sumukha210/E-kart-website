import React, { createContext, useEffect, useReducer } from "react";
import { storeProducts } from "../data";
import { DataReducer, FETCHITEMS } from "./DataReducer";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(DataReducer, [], () => {
    const localData = localStorage.getItem("storeProducts");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("storeProducts", JSON.stringify(store));
  }, [store]);

  useEffect(() => {
    !store.length &&
      dispatch({ type: FETCHITEMS, payload: [...storeProducts] });
  }, []);

  return (
    <ProductContext.Provider value={[store, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
};
