import { CartContext } from "../../context/CartContext";
import "./checkout-item.styles.scss";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { removeItemFromCart, clearItemFromCart, addItemToCart } =
    useContext(CartContext);

  const handleRemoveClick = () => {
    removeItemFromCart(cartItem);
  };

  const handleClearClick = () => {
    clearItemFromCart(cartItem);
  };

  const handleAddClick = () => {
    addItemToCart(cartItem);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="description">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveClick}>
          ‹
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={handleAddClick}>
          ›
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearClick}>
        ×
      </div>
    </div>
  );
};

export default CheckoutItem;
