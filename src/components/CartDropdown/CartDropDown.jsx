import Button from "../Button/Button.jsx";
import "./cart-dropdown.styles.scss";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>CheckOut</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
