import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import Items from "./component/Items";
import Cart from "./component/Cart/Cart";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ItemsDetails from "./pages/ItemsDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CartContext from "./component/Store/Cart-context";
import { useContext } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);

  const appCtx = useContext(CartContext);

  const isLoggedIn = appCtx.isLoggedIn;

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
    <React.Fragment>
      <NavBar onshow={CartHandler} />
      <h1 className="text-center p-5  bg-secondary text-white">The Generics</h1>
      {showCart && <Cart onTap={cartCloseHandler} />}
      <Switch>
      {isLoggedIn &&<Route exact path="/home">
          <Home />
        </Route>}
        {isLoggedIn && (
          <Route exact path="/store">
            <Items />
          </Route>
        )}
        {isLoggedIn && (
          <Route exact path="/store/:title">
            <ItemsDetails />
          </Route>
        )}
        {isLoggedIn && (
          <Route exact path="/about">
            <About />
          </Route>
        )}
        {isLoggedIn && (
          <Route exact path="/contact">
            <Contact queryform={firebaseSubmitHandler} />
          </Route>
        )}
        <Route exact path="/Login">
          {!isLoggedIn && <Login />}
        </Route>
        {isLoggedIn && (
          <Route exact path="/profile">
            <Profile />
          </Route>
        )}
        <Route path="/Logout">
          <Login />
        </Route>
        <Route path="*">
          {" "}
          {/* ( option 2)  */}
          <Redirect to="/Login" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
