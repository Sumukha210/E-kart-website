export const FETCHALL = "FETCHALL";
export const ADDTOCART = "ADDTOCART";
export const REMOVEFROMCART = "REMOVEFROMCART";
export const CLEARCART = "CLEARCART";
export const INCQTY = "INCQTY";
export const DECQTY = "DECQTY";

export const addToCart__fun = payload => ({ type: ADDTOCART, payload });

export const removeFromCart__fun = payload => ({
  type: REMOVEFROMCART,
  payload,
});

export const fetchAllItems__fun = payload => ({ type: FETCHALL, payload });

export const clearCart__fun = () => ({ type: CLEARCART });

export const decQty__fun = payload => ({ type: DECQTY, payload });
export const incQty__fun = payload => ({ type: INCQTY, payload });
