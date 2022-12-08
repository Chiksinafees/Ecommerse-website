import { useContext } from "react";
import CartContext from "./Store/Cart-context";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const headCtx = useContext(CartContext);

  let quantity = 0;
  headCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <button onClick={props.onshow} className={classes.button}>
            <span>Cart</span>
            <span className={classes.badge}>{quantity}</span>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
