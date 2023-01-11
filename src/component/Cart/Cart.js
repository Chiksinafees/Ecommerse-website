import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext, useEffect } from "react";
import CartContext from "../Store/Cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartArray = ctx.cartArray;

  const minusItem = (title) => {
    ctx.removeCart(title);
  };

  useEffect(() => {
    getData();
  }, [ctx.items]);

  async function getData() {
    try {
      const get = await fetch(
        `https://crudcrud.com/api/ca7af99770a54637b0d664dbd5f513da/cart${ctx.email}`
      );
      const data = await get.json();

      const dataArray = data.map((item) => item);
      ctx.cartArrayFunction(dataArray);

      const cartPrice = data.reduce((curNum, item) => {
        return curNum + item.quantity * item.price;
      }, 0);

      ctx.cartPrice(cartPrice);
    } catch {
      const cartPrice = ctx.items.reduce((curNum, item) => {
        return curNum + item.quantity * item.price;
      }, 0);
      ctx.cartPrice(cartPrice);
     
    }
  }
  return (
    <Modal onTap={props.onTap}>
      <div className={classes.act}>
        <button onClick={props.onTap}>x</button>
      </div>
      <h1 className="text-center">CART</h1>
      <ul>
        {cartArray.map((ele) => (
          <li key={ele.title} className={classes["cart-items"]}>
            <div className={classes.summary}>
              {ele.title}
              {console.log("cart run")}
              <span className={classes.price}>${ele.price}</span>
              <span className={classes.amount}>{ele.quantity}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={minusItem.bind(null, ele.title)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.act}>Total: ${ctx.valuePrice}</div>
    </Modal>
  );
};

export default Cart;
