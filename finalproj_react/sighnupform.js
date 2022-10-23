import { useState } from "react";
import Button from "../UI/Button/Button";
import "./SignupForm.css";

const SignupForm = (props) => {
  const [enterFirstName, setEnteredFirstName] = useState("");
  const [enterLastName, setEnteredLastName] = useState("");
  const [enterAddress, setEnteredAddress] = useState("");
  const [enterPhone, setEnteredPhone] = useState("");
  const [enterUsername, setEnteredUsername] = useState("");
  const [enterPassword, setEnteredPassword] = useState("");
  const [enterEmail, setEnteredEmail] = useState("");

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const customerData = {
      firstName: enterFirstName,
      lastName: enterLastName,
      address: enterAddress,
      phone: enterPhone,
      username: enterUsername,
      password: enterPassword,
      email: enterEmail,
    };
    props.onSaveCustomerData(customerData);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredAddress("");
    setEnteredPhone("");
    setEnteredUsername("");
    setEnteredPassword("");
    setEnteredEmail("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-customer__controls">
        <div className="new-customer__control">
          <label className="control">First Name</label>
          <input
            className="control"
            type="text"
            value={enterFirstName}
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className="new-customer__control">
          <label className="control">Last Name</label>
          <input
            className="control"
            type="text"
            value={enterLastName}
            onChange={lastNameChangeHandler}
          />
        </div>
        <div className="new-customer__control">
          <label className="control">Address</label>
          <input
            className="control"
            type="text"
            value={enterAddress}
            onChange={addressChangeHandler}
          />
        </div>
        <div className="new-customer__control">
          <label className="control">Phone Number</label>
          <input
            className="control"
            type="text"
            value={enterPhone}
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="new-customer__control">
          <label className="control">Username</label>
          <input
            className="control"
            type="text"
            value={enterUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="new-customer__control">
          <label className="control">password</label>
          <input
            className="control"
            type="password"
            value={enterPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="new-customer__control">
          <label className="control">E-mail</label>
          <input
            className="control"
            type="email"
            value={enterEmail}
            onChange={emailChangeHandler}
          />
        </div>
      </div>
      <div className="new-customer__actions">
        <Button type="submit">Sign Me Up</Button>
      </div>
    </form>
  );
};

export default SignupForm;