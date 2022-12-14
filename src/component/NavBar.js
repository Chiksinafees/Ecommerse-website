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
      <section>
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
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <button onClick={props.onshow} className={classes.button}>
            <span>Cart</span>
            <span className={classes.badge}>{quantity}</span>
          </button>
        </ul>
      </section>
    </header>
  );
};

export default NavBar;
