import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, quantity, price, imageUrl } = cartItem;

  const handleRemoveClick = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const handleClearClick = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  const handleAddClick = () => {
    dispatch(addItemToCart(cartItems, cartItem));
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
