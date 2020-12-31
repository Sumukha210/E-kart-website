export const FETCHITEMS = "FETCHITEMS";
export const REMOVEFROMCART = "REMOVEFROMCART";
export const ADDTOCART = "ADDTOCART";
export const INCPRICE = "INCPRICE";
export const DECPRICE = "DECPRICE";

export const fetchItemsFun = payload => ({ type: FETCHITEMS, payload });

export const removeFromCartFun = payload => ({ type: REMOVEFROMCART, payload });

export const addToCartFun = payload => ({ type: ADDTOCART, payload });

export const incPriceFun = payload => ({ type: INCPRICE, payload });

export const decPriceFun = payload => ({ type: DECPRICE, payload });
