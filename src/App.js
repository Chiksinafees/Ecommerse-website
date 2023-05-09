import "./App.css";
import React, { useState, useEffect, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CartContext from "./component/Store/Cart-context";
import { useContext } from "react";

import NavBar from "./component/NavBar";
import Items from "./component/Items";
import Cart from "./component/Cart/Cart";
import Login from "./pages/Login";
import Footer from "./pages/Footer";

const Contact = React.lazy(() => import("./pages/Contact"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const ItemsDetails = React.lazy(() => import("./pages/ItemsDetails"));

function App() {
  const [showCart, setShowCart] = useState(false);
  const appCtx = useContext(CartContext);

  const isLoggedIn = appCtx.isLoggedIn;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const get = await fetch(
        `https://crudcrud.com/api/35e71b380fdc48efa4596060ee9d0e35/${appCtx.email}`
      );

      const data = await get.json();

      const dataArray = data.map((item) => item);
      appCtx.cartArrayFunction(dataArray);

      const cartItems = data.reduce((curNum, item) => {
        return curNum + item.quantity;
      }, 0);
      appCtx.numberOfItems(cartItems);

      const cartPrice = data.reduce((curNum, item) => {
        return curNum + item.quantity * item.price;
      }, 0);
      appCtx.cartPrice(cartPrice);
    } catch {
      const cartPrice = appCtx.items.reduce((curNum, item) => {
        return curNum + item.quantity * item.price;
      }, 0);
      appCtx.cartPrice(cartPrice);
    }
  }
  const CartHandler = () => {
    setShowCart(true);
  };

  const cartCloseHandler = () => {
    setShowCart(false);
  };

  async function firebaseSubmitHandler(obj) {
    const response = await fetch(
      `https://e-commerse-8afc7-default-rtdb.firebaseio.com/${appCtx.email}.json`,
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
      <div className=" ">
        <NavBar onshow={CartHandler} />
        <h1 className="text-center p-3  bg-secondary text-white">
          The Generics
        </h1>
        {showCart && <Cart onTap={cartCloseHandler} />}
        <Suspense
          fallback={
            <div className="text-center">
              <h1>loading...</h1>
            </div>
          }
        >
          <Switch>
            {isLoggedIn && (
              <Route exact path="/home">
                <Home />
              </Route>
            )}
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
              <Redirect to="/Login" />
            </Route>
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
