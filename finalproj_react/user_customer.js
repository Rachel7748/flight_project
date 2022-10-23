import React, { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import axios from "axios";
import "./UserUpdate.css";

const UserSettings = (props) => {
  const [enterFirstName, setEnteredFirstName] = useState("");
  const [enterLastName, setEnteredLastName] = useState("");
  const [enterAddress, setEnteredAddress] = useState("");
  const [enterPhone, setEnteredPhone] = useState("");
  const [enterCreditCardNumber, setEnteredCreditCardNumber] = useState("")
  const [enterUserId, setUserId] = useState("");
  const [enterCustomerId, setCustomerId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/customers/${props.username}`)
      .then((res) => {
        setEnteredFirstName(res.data.customer.first_name);
        setEnteredLastName(res.data.customer.last_name);
        setEnteredAddress(res.data.customer.address);
        setEnteredPhone(res.data.customer.phone_number);
        setEnteredCreditCardNumber(res.data.customer.credit_card_number);
        setUserId(res.data.customer.user_id);
        setCustomerId(res.data.customer.id);
      });
  }, []);

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

  const ccnChangeHandler = (event) => {
    setEnteredCreditCardNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const updateData = {
      id: enterCustomerId,
      firstName: enterFirstName,
      lastName: enterLastName,
      address: enterAddress,
      phone: enterPhone,
      ccn: enterCreditCardNumber,
      UserId: enteredUserId,
    };

    axios
      .put(`http://localhost:8080/customers/${props.username}`, updateData)
      .then((res) => {
        console.log(res.data);
      })
  };

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8080/customers/${props.username}`, {
        data: { pwd: props.pwd },
      })
      .then((res) => {
        console.log(res.data);
      })
    return props.onLogout();
  };
  return (
    <Card className="update">
      <h4 className="">User Settings</h4>
      <form onSubmit={submitHandler}>
        <div className="new-customer__controls">
          <div className="new-customer__control">
            <label className="control">First Name</label>
            <input
              className="control"
              type="text"
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
            />
          </div>
          <div className="new-customer__control">
            <label className="control">Last Name</label>
            <input
              className="control"
              type="text"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
            />
          </div>
          <div className="new-customer__control">
            <label className="control">Address</label>
            <input
              className="control"
              type="text"
              value={enteredAddress}
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
            <label className="control">Credit Card Number</label>
            <input
              className="control"
              type="number"
              value={enteredCCN}
              onChange={creditcardnumberChangeHandler}
            />
          </div>
          <div className="new-customer__control">
            <label className="control">Delete Profile</label>
            <button
              className="btn btn-danger delete_customer"
              type="button"
              onClick={deleteHandler}
            >
              Press Here To Delete
            </button>
          </div>
        </div>
        <div className="new-customer__actions">
          <Button type="submit">Update</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserSettings;