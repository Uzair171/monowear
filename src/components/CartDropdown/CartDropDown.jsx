import { Link } from "react-router";
import { CartContext } from "../../context/CartContext.jsx";
import Button from "../Button/Button.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          </div>
          <Link to="/checkout">
            <Button>CheckOut</Button>
          </Link>
        </>
      ) : (
        <p className="empty-message">🛒 Cart is Empty</p>
      )}
    </div>
  );
};

export default CartDropDown;
