//Creating an object called Actions
export const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ADD_ITEM: "ADD_ITEM",
  SUBTRACT_ITEM: "SUBTRACT_ITEM",
  ADD_TO_CART: "ADD_TO_CART",
  GET_TOTAL_ITEMS: "GET_TOTAL_ITEMS",
  GET_TOTAL_PRICE: "GET_TOTAL_PRICE",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export const login = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};
export const logout = () => {
  return {
    type: ACTIONS.LOGOUT,
  };
};
export const add_item = (id) => {
  return {
    type: ACTIONS.ADD_ITEM,
    payload: id,
  };
};
export const add_to_cart = (id) => {
  return {
    type: ACTIONS.ADD_TO_CART,
    payload: id,
  };
};
export const subtract_item = (id) => {
  return {
    type: ACTIONS.SUBTRACT_ITEM,
    payload: id,
  };
};
export const get_total_items = () => {
  return {
    type: ACTIONS.GET_TOTAL_ITEMS,
  };
};
export const get_total_price = (id) => {
  return {
    type: ACTIONS.GET_TOTAL_PRICE,
    payload: id,
  };
};
export const remove_item = (id) => {
  return {
    type: ACTIONS.REMOVE_ITEM,
    payload: id,
  };
};
