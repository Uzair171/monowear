import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router";
import crown from "../../assets/crown.svg";
import "./navigation.style.scss";
import { UserContext } from "../../context/userContext.jsx";
import { current } from "@reduxjs/toolkit";
import { signOutUser } from "../../utils/firebase.utils.js";

const NavigationBar = () => {
  const { user, setUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setUser(null);
  };

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
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/sign-in"}>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
