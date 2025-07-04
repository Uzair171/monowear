import { CART_ACTION_TYPES } from "./cart.type";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload.cartItems,
        cartCount: payload.cartCount,
        cartTotal: payload.cartTotal,
      };

    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      return state;
  }
};
