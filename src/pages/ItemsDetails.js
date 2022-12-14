import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 250,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const ItemsDetails = () => {
  
  const { title } = useParams();

  const items = productsArr.find((item) => {
    return item.title === title;
  });
  //console.log(items.title);

  return (
    <section>
      <Container>
        <h1 className="text-center"> Products Details </h1>
        <h3>{items.title}</h3>
        <img src={items.imageUrl} alt={items.price}></img>
        <h3>Price: {items.price}</h3>
        <h1>Reviews</h1>
        <p> this is a {items.title} review </p>
      </Container>
    </section>
  );
};
export default ItemsDetails;
