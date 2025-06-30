import { createContext, useState, useEffect } from "react";

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

const removeItemFromCart = (cartItems, productToRemove) => {
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : 1,
        }
      : item
  );
};

const cartTotalQuantity = (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(cartTotalQuantity(cartItems));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    const updatedCart = addCartItem(cartItems, productToAdd);
    setCartItems(updatedCart);
  };

  const removeItemFromCartHandler = (productToRemove) => {
    const updatedCart = removeItemFromCart(cartItems, productToRemove);
    setCartItems(updatedCart);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart: removeItemFromCartHandler,
    cartQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
