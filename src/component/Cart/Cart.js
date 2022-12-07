import Modal from '../UI/Modal'; 
import classes from './Cart.module.css'

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];


const Cart = (props) => {
  //console.log(props)
 
  const cartEle = (
    <ul className={classes["cart-items"]}>
      {cartElements.map((ele) => (
        <li key={ele.title}>
          {ele.title}-
          price :{ele.price}-
          quantity :{ele.quantity}
          <div className={classes.actions}>
          <button >Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );


  return (
    <Modal onTap={props.onTap}>
      <div  className={classes.act}>
      <button onClick={props.onTap}>x</button>
      </div>
      <h1 className='text-center'>CART</h1>  
    {cartEle}
    <div className={classes.act}>Total Amount</div>
</Modal>
  )
};

export default Cart;
