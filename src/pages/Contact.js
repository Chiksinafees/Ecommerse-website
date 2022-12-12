import { useState } from "react";
import { Container } from "react-bootstrap";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const queryhandler = (e) => {
    e.preventDefault();

    const obj = {
      name: name,
      number: number,
      email: email,
    };
    console.log(obj);
    props.queryform(obj);
    setName("");
    setNumber("");
    setEmail("");
  };

  return (
    <Container>
      <form onSubmit={queryhandler}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={name} onChange={nameHandler} />
        <label htmlFor="number">Phone No:</label>
        <input id="number" type="tel" value={number} onChange={numberHandler} />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={email} onChange={emailHandler} />
        <button type="submit">submit</button>
      </form>
    </Container>
  );
};

export default Contact;
