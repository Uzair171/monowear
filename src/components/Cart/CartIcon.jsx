import "./cart-icon.styles.scss";
import shoppingIcon from "../../assets/shopping-bag.svg";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext);

  const toggleCartDropDown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartDropDown}>
      <img src={shoppingIcon} alt="Shopping Icon" className="shopping-icon" />
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
