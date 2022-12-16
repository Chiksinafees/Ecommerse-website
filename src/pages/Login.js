import { useState } from "react";
import classes from "./Login.module.css";
import CartContext from "../component/Store/Cart-context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const logCtx = useContext(CartContext);
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setIsLoading] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCENs_kbPG5MUBwwErYSVMnS9ZTwdVtRHs";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCENs_kbPG5MUBwwErYSVMnS9ZTwdVtRHs";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      Headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        logCtx.login(data.idToken);
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
    setEmail("");
    setPassword("");
  };

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={loginHandler}>
        <h1>{isLogin ? "login" : "sign up"}</h1>
        <div className={classes.control}>
          <label htmlFor="email">Your Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={emailHandler}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password: </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={passwordHandler}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isloading && (
            <button type="submit">{isLogin ? "login" : "Sign up"}</button>
          )}
          {isloading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
