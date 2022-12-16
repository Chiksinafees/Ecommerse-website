import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import Items from "./component/Items";
import Cart from "./component/Cart/Cart";
import { CartContextProvider } from "./component/Store/Cart-context";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ItemsDetails from "./pages/ItemsDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [showCart, setShowCart] = useState(false);

  const CartHandler = () => {
    setShowCart(true);
  };

  const cartCloseHandler = () => {
    setShowCart(false);
  };

  async function firebaseSubmitHandler(obj) {
    const response = await fetch(
      "https://fetch-movie-d556e-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.JSON();
    console.log(data);
  }

  return (
    <CartContextProvider>
      <NavBar onshow={CartHandler} />
      <h1 className="text-center p-5  bg-secondary text-white">The Generics</h1>
      {showCart && <Cart onTap={cartCloseHandler} />}
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          <Items />
        </Route>
        <Route path="/store/:title">
          <ItemsDetails />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact queryform={firebaseSubmitHandler} />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/Logout">
          <Login />
        </Route>
      </Switch>
    </CartContextProvider>
  );
}

export default App;
