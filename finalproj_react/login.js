import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "./Login.css";
import axios from "axios";

const Login = (props) => {
  const [enterUsername, setEnteredUsername] = useState("");
  const [ValidUsername, setUsernameIsValid] = useState();
  const [enterPassword, setEnteredPassword] = useState("");
  const [ValidPassword, setPasswordIsValid] = useState();
  const [ValidForm, setFormIsValid] = useState(false);

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    setFormIsValid(enterPassword.trim().length > 3);
  };

  const passwordChangeHandler = (event) => {
    setEnterPassword(event.target.value);
    setFormIsValid(event.target.value.trim().length > 3);
  };

  const validateUsernameHandler = () => {
    setUsernameIsValid(enterUsername.length > 3);
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enterPassword.trim().length > 3);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post(
        "http://localhost:8080/login",
        {
          username: enterUsername,
          password: enterPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        props.onLogin(res.data.username, res.data.user_role, res.data.password);
      })
  };

  return (
    <React.Fragment>
      <div className="container__img4">
        <h3 className="center__headline">Login</h3>
        <Card className="login">
          <form onSubmit={submitHandler}>
            <div
              className={`control ${
                ValidUsername === false ? "invalid" : ""
              }`}
            >
              <label className="control" htmlFor="text">
                Username
              </label>
              <input
                className="control"
                type="text"
                id="text"
                value={enterUsername}
                onChange={usernameChangeHandler}
                onBlur={validateUsernameHandler}
              />
            </div>
            <div
              className={`control ${
                ValidPassword === false ? "invalid" : ""
              }`}
            >
              <br />
              <label className="control" htmlFor="password">
                Password
              </label>
              <input
                className="control"
                type="password"
                id="password"
                value={enterPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div className="actions">
              <Button type="submit" disabled={!ValidForm}>
                Login
              </Button>
            </div>
            <p>
              Don't have an account? <br />
              <span className="line">
                <a href="/signup">Sign up</a>
              </span>
            </p>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Login;