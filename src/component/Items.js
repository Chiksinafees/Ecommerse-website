import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./Store/Cart-context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 250,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Items = () => {
  const cartctx = useContext(CartContext);
  const emailOfUser = cartctx.email;

  const emailLink = `https://crudcrud.com/api/35e71b380fdc48efa4596060ee9d0e35/${emailOfUser}`;

  const addToCart = async (item) => {
    try {
      const get = await fetch(emailLink);
      const data = await get.json();
      //console.log(data)
      const itemIndex = data.findIndex((data) => data.id === item.id);
      const alreadyAddedItem = data[itemIndex];
      if (get.ok) {
        if (alreadyAddedItem) {
          const obj = { ...item, quantity: data[itemIndex].quantity + 1 };

          const post = await fetch(`${emailLink}/${data[itemIndex]._id}`, {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else {
          const post = await fetch(`${emailLink}`, {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      }

      const numberofCartItems = data.reduce((curNum, item) => {
        return curNum + item.quantity;
      }, 1);
      cartctx.numberOfItems(numberofCartItems);
    } catch (err) {
      console.log(err);
      cartctx.addItem(item);

      const numberofCartItems = cartctx.items.reduce((curNum, item) => {
        return curNum + item.quantity;
      }, 1);
      cartctx.numberOfItems(numberofCartItems);
    }
  };

  return (
    <div>
      <h1 className="text-center p-4 bg-warning text-white">Music</h1>

      <div className="row">
        {productsArr.map((item) => (
          <div key={item.id} className="col-md-6 text-center" id={item.title}>
            <h2>{item.title}</h2>
            <Link to={`/store/${item.title}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded"
              ></img>
            </Link>
            <h3>${item.price}</h3>
            <button
              type="button"
              className="btn btn-info"
              onClick={addToCart.bind(null, item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
