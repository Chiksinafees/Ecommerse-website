import { Navbar, Container } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "./Store/Cart-context";
import classes from './NavBar.module.css'

const NavBar = (props) => {

  const headCtx= useContext(CartContext)

  let quantity=0
  headCtx.items.forEach((item) => {
   quantity = quantity +(item.quantity)
  });
  return (
    
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="mb-1">
        <Navbar.Brand href="#HOME">HOME</Navbar.Brand>
        <Navbar.Brand href="#STORE">STORE</Navbar.Brand>
        <Navbar.Brand href="#ABOUT">ABOUT</Navbar.Brand>
        <button onClick={props.onshow} className={classes.button}>
          <span>Cart</span>
          <span className={classes.badge}>{quantity}</span>
          </button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
