import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeCart: (id) => {},

  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const addToCart = (item) => {
    // console.log(item);
    const itemIndex = items.findIndex((album) => album.title === item.title);
    if (itemIndex === -1) {
      setItems([...items, item]);
    } else {
      const alreadyAddedItem = items[itemIndex];
      const updateSingleItem = {
        ...alreadyAddedItem,
        quantity: alreadyAddedItem.quantity + item.quantity,
      };
      const updateItems = [...items];
      updateItems[itemIndex] = updateSingleItem;
      setItems(updateItems);
    }
  };

  const removeFromCart = (id) => {};

  const cartcontextVal = {
    items: items,
    totalAmount: 0,
    addItem: addToCart,
    removeCart: removeFromCart,

    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartcontextVal}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
