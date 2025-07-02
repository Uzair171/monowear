import { createAction } from "@reduxjs/toolkit";
import { CART_ACTION_TYPES } from "./cart.type";

export const setIsCartOpen = createAction(CART_ACTION_TYPES.SET_CART_OPEN);
export const setCartItems = createAction(CART_ACTION_TYPES.SET_CART_ITEMS);

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems
    .map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);
};

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
};

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const setCartItemsWithTotals = (newCartItems) => {
  const cartCount = newCartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = newCartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return setCartItems({
    cartItems: newCartItems,
    cartCount,
    cartTotal,
  });
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItemsWithTotals(newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItemsWithTotals(newCartItems);
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  const newCartItems = clearCartItem(cartItems, itemToClear);
  return setCartItemsWithTotals(newCartItems);
};
