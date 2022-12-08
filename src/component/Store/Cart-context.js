import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeCart: (id) => {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
console.log(item)
    const itemIndex = items.findIndex((album) => album.title === item.title);
    if (itemIndex === -1) {
      setItems([...items, item]);
    } else {
        const alreadyAddedItem =items[itemIndex]
        const updateSingleItem= {...alreadyAddedItem, quantity :(alreadyAddedItem.quantity) +(item.quantity)}
        const updateItems=[...items]
        updateItems[itemIndex]=updateSingleItem
        setItems(updateItems)
      }
  };

  const removeFromCart = (id) => {};

  const cartcontextVal = {
    items: items,
    totalAmount: 0,
    addItem: addToCart,
    removeCart: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartcontextVal}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
