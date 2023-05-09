import { Container, Row, Col } from "react-bootstrap";
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

  return (
    <section>
      <Container className="py-5">
        <h1 className="text-center"> Products Details </h1>
        <Row className="justify-content-center">
          <Col md={6}>
            <h3>{items.title}</h3>
            <img
              src={items.imageUrl}
              alt={items.price}
              className="img-fluid my-3 rounded"
            ></img>
            <h3>Price: {items.price}</h3>
          </Col>
          <Col md={6}>
            <h2>Reviews</h2>
            <p>
              <b>this is a {items.title} review</b>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ItemsDetails;
