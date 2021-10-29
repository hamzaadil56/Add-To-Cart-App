import { ACTIONS } from "../action/action";
import items from "../../data";
import Cart from "../../Cart";
const initial_state = {
  itemsInShop: items,
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};
const counterReducer = (state = initial_state, action) => {
  if (action.type === ACTIONS.ADD_ITEM) {
    let newCart = state.cartItems.filter((item, number) => {
      if (item.id === action.payload) {
        item.piece += 1;
      }
      return item;
    });

    return {
      ...state,
      cartItems: newCart,
    };
  }
  if (action.type === ACTIONS.SUBTRACT_ITEM) {
    let newCart = state.cartItems.filter((item, number) => {
      if (item.id === action.payload) {
        item.piece -= 1;
      }
      return item;
    });

    return {
      ...state,
      cartItems: newCart,
    };
  }
  if (action.type === ACTIONS.ADD_TO_CART) {
    let insideCart = state.itemsInShop.filter((item, number) => {
      return item.id === action.payload;
    });
    let newCartItems = state.cartItems.concat(insideCart);
    console.log(newCartItems, "newCart");
    const uniqueCartItems = [
      ...newCartItems
        .reduce((map, obj) => map.set(obj.id, obj), new Map())
        .values(),
    ];
    console.log(uniqueCartItems, "uniquevalues");

    return {
      ...state,
      cartItems: uniqueCartItems,
    };
  }
  if (action.type === ACTIONS.GET_TOTAL_ITEMS) {
    let { totalItems, totalPrice } = state.cartItems.reduce(
      (totalValues, cartItem) => {
        const { price, piece } = cartItem;
        totalValues.totalItems += piece;
        let itemPrices = price * piece;
        totalValues.totalPrice += itemPrices;
        return totalValues;
      },
      {
        totalItems: 0,
        totalPrice: 0,
      }
    );
    console.log(totalItems, totalPrice);

    return { ...state, totalItems: totalItems, totalPrice: totalPrice };
  }

  if (action.type === ACTIONS.REMOVE_ITEM) {
    let newCartItems = state.cartItems.filter((item) => {
      if (item.id === action.payload) {
        item.piece = 0;
      }
      return item.id !== action.payload;
    });
    return {
      ...state,
      cartItems: newCartItems,
    };
  } else {
    return state;
  }
};
export default counterReducer;
