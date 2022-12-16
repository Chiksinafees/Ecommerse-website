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
import CartContext from "./component/Store/Cart-context";
import { useContext } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [showCart, setShowCart] = useState(false);
  const appCtx = useContext(CartContext);

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
          <HomePage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store">
          {appCtx.isLoggedIn == true ? <Login /> : <Items />}
        </Route>
        <Route path="/store/:title" exact>
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
          {!appCtx.isLoggedIn && <Profile />}
          {appCtx.isLoggedIn && <Redirect to="/Login" exact />}
        </Route>
        <Route path="/Logout">
          <Login />
        </Route>
        <Route path="*">          {/* ( option 2)  */}
          <Redirect to="/" />
        </Route>
      </Switch>
    </CartContextProvider>
  );
}

export default App;
