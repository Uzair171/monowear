import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router";
import crown from "../../assets/crown.svg";
import "./navigation.style.scss";
import { UserContext } from "../../context/userContext.jsx";
import { signOutUser } from "../../utils/firebase.utils.js";
import CartIcon from "../Cart/CartIcon.jsx";
import CartDropDown from "../CartDropdown/CartDropDown.jsx";

const NavigationBar = () => {
  const { user } = useContext(UserContext);

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
          {user ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/sign-in"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
