import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import Items from "./component/Items";
import Cart from "./component/Cart/Cart";
import { CartContextProvider } from "./component/Store/Cart-context";
import { Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  const [showCart, setShowCart] = useState(false);

  const CartHandler = () => {
    setShowCart(true);
  };

  const cartCloseHandler = () => {
    setShowCart(false);
  };
  return (
    <CartContextProvider>
      <NavBar onshow={CartHandler} />
      <h1 className="text-center p-5  bg-secondary text-white">The Generics</h1>
      {showCart && <Cart onTap={cartCloseHandler} />}
      <Route path="/home"></Route>
      <Route path="/store">
        <Items />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </CartContextProvider>
  );
}

export default App;
