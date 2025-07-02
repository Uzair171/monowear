import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router";
import crown from "../../assets/crown.svg";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase.utils.js";
import CartIcon from "../Cart/CartIcon.jsx";
import CartDropDown from "../CartDropdown/CartDropDown.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <div>
            <img src={crown} alt="monowear" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span
              className="nav-link"
              onClick={async () => {
                await signOutUser();
                console.log("👋 User signed out successfully");
              }}
            >
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/sign-in"}>
              SIGN IN
            </Link>
          )}

          <CartIcon></CartIcon>
        </div>

        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
