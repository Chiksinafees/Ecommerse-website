import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (data) => {},
  removeCart: (id) => {},

  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  email:null,
  numberOfItems: (value) => {},
  value:0,
  cartPrice: (val) => {},
  valuePrice: 0,
  cartArrayFunction: (items) => {},
  cartArray: []
});

export const CartContextProvider = (props) => {
  
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(0);
  const [valuePrice, setValuePrice] = useState(null);
  const [cartArray, setCartArray] = useState([]);
  
  const userEmail= localStorage.getItem("email")
  const [email,setEmail]= useState(userEmail)

  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token,email) => {
    setToken(token)
    setEmail(email)
    localStorage.setItem("token", token)
    localStorage.setItem('email',email)
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null)
    localStorage.removeItem("token")
    localStorage.removeItem('email')
  };
 
  const addToCart = (data) => {
    console.log(data)
    setItems(data)
  }

  const numberOfItemsHandler=(num)=>{
    setValue(num)
  }

  const cartPriceHandler = (num) => {
    setValuePrice(num);
  };

  const cartArrayFunctionHandler = (items) => {
    setCartArray(items);
  };

  const removeFromCart = (id) => {};

  const cartcontextVal = {
    items: items,
    totalAmount: items.quantity,
    addItem: addToCart,
    removeCart: removeFromCart,

    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    email:email,
    numberOfItems:  numberOfItemsHandler,
    value:value,
    cartPrice: cartPriceHandler,
    valuePrice: valuePrice,
    cartArrayFunction: cartArrayFunctionHandler,
    cartArray: cartArray
  };
     
  return (
    <CartContext.Provider value={cartcontextVal}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
