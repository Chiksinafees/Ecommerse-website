import { Navbar, Container } from "react-bootstrap";

const NavBar = (props) => {

  return (
    
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="mb-1">
        <Navbar.Brand href="#HOME">HOME</Navbar.Brand>
        <Navbar.Brand href="#STORE">STORE</Navbar.Brand>
        <Navbar.Brand href="#ABOUT">ABOUT</Navbar.Brand>
        <button onClick={props.onshow}>Cart</button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
