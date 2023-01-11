import { useContext, } from "react";
import CartContext from "./Store/Cart-context";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const headCtx = useContext(CartContext);
  const isLoggedIn = headCtx.isLoggedIn;

  const quantity=headCtx.value
  const logoutHandlerfn = () => {
    headCtx.logout();
  };

  return (
    <header className={classes.header}>
      <section>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/Login">
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/home">
                Home
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/store">
                Store
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/about">
                About
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/contact">
                Contact
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/profile">
                Profile
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                activeClassName={classes.active}
                onClick={logoutHandlerfn}
                to="/Logout"
              >
                Logout
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <button onClick={props.onshow} className={classes.button}>
              <span>Cart</span>
              <span className={classes.badge}>{quantity}</span>
            </button>
          )}
        </ul>
      </section>
    </header>
  );
};

export default NavBar;
