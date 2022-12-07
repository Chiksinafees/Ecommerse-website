import "./App.css";
import React,{useState} from "react";
import NavBar from "./component/NavBar";
import Items from "./component/Items";
import Cart from "./component/Cart/Cart";

function App() {

  const [showCart, setShowCart] = useState(false);

  const CartHandler = () => {
    setShowCart(true);
  };
  
  const cartCloseHandler= ()=>{
    setShowCart(false)
  }
  return (
    <div >
      <NavBar onshow={CartHandler} />
      <h1 className="text-center p-5  bg-secondary text-white">The Generics</h1>
      {showCart && <Cart onTap={cartCloseHandler}/>}
     <Items/>
    </div>
  );
}

export default App;
