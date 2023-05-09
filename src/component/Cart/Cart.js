import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext, useEffect } from "react";
import CartContext from "../Store/Cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartArray = ctx.cartArray;

  const emailLink = `https://crudcrud.com/api/35e71b380fdc48efa4596060ee9d0e35/${ctx.email}`;

  const minusItem = async (ele) => {
    const del = await fetch(`${emailLink}/${ele._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getData();
  };

  useEffect(() => {
    getData();
  }, [ctx.items]);

  const getData = async () => {
    try {
      const get = await fetch(
        `https://crudcrud.com/api/35e71b380fdc48efa4596060ee9d0e35/${ctx.email}`
      );

      const data = await get.json();
      const dataArray = data.map((item) => item);
      ctx.cartArrayFunction(dataArray);

      const cartPrice = data.reduce((curNum, item) => {
        return curNum + item.quantity * item.price;
      }, 0);

      ctx.cartPrice(cartPrice);

      const numberofCartItems = data.reduce((curNum, item) => {
        return curNum + item.quantity;
      }, 0);
      ctx.numberOfItems(numberofCartItems);
    } catch {
      const cartPrice = ctx.items.reduce((curNum, item) => {
        return curNum + item.quantity * item.price;
      }, 0);
      ctx.cartPrice(cartPrice);
    }
  };

  return (
    <Modal onTap={props.onTap}>
      <div className={classes.cartContainer}>
        <div className={classes.header}>
          <span>
            <h1>CART</h1>
          </span>
          <span>
            <button onClick={props.onTap}>x</button>
          </span>
        </div>
        <ul className={classes.cartList}>
          {cartArray.map((ele) => (
            <li key={ele.title} className={classes.cartItem}>
              <div className={classes.summary}>
                <span className={classes.title}>{ele.title}</span>
                <span className={classes.price}>
                  ${ele.price} x {ele.quantity}
                </span>
              </div>
              <div className={classes.actions}>
                <button onClick={minusItem.bind(null, ele)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div className={classes.total}>
          <span>Total:</span>
          <span className={classes.price}>${ctx.valuePrice}</span>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
