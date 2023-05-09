import { useState, useContext } from "react";
import classes from "./Login.module.css";
import CartContext from "../component/Store/Cart-context";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const profCtx = useContext(CartContext);
  const history = useHistory();

  const [newpassword, setNewPassword] = useState("");

  const newPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    e.preventDefault();
    console.log(newpassword);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAuiw3yRkuYdQtaOoLPXuPQUXKLE3QEe5k",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: profCtx.token,
          password: newpassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/Login");
    });
    profCtx.logout();
    setNewPassword("");
  };

  return (
    <section className={classes.auth}>
      <h1 className="text-center">Your User Profile </h1>
      <form onSubmit={passwordChangeHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input
            id="new-password"
            type="password"
            value={newpassword}
            onChange={newPassword}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Change Password</button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
