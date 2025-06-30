import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>CheckOut</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, price, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <h2>{quantity}</h2>
              <span onClick={() => removeItemFromCart(cartItem)}>
                decrement
              </span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
