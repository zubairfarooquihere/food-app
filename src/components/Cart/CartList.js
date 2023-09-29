import React, { useState, Fragment, useContext } from "react";

import classes from "./CartList.module.scss";

import CartItem from "./CartItem";
import cartContext from "../../store/CartContext";
import SubmitForm from "../Form/SubmitForm";

const CartList = (props) => {
  const [form, setForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const cartCtx = useContext(cartContext);

  const cartItems = cartCtx.item.map((item) => {
    return (
      <CartItem
        key={item.name}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  const addFormInUI = () => {
    setForm((prev) => {
      return !prev;
    });
  };

  async function addOrderData(user, orderedItems) {
    const data = {
      user: user,
      orderedItems: orderedItems
    };

    await fetch('https://react-http-c6acd-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',  //Default 'GET'
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
    });
  }

  const formSubmitted = (user) => {
    setSubmitted(true);
    const orderedItems = cartCtx.item;
    addOrderData(user, orderedItems);
    cartCtx.clear();
  };

  let order = (
    <Fragment>
      <div className={classes.order}>
        <h3>Total Amount</h3>
        <h3>${cartCtx.totalAmt.toFixed(2)}</h3>
      </div>
      <div className={classes.order__button}>
        {!form && (
          <button
            onClick={props.toggleCart}
            className={classes.order__button__two}
          >
            Close
          </button>
        )}
        {!form && cartItems.length > 0 && (
          <button onClick={addFormInUI} className={classes.order__button__one}>
            Order
          </button>
        )}
      </div>
      {form && (
        <div className={classes.form}>
          <SubmitForm onClose={addFormInUI} onConfirm={formSubmitted} />
        </div>
      )}
    </Fragment>
  );

  return (
    <div className={classes.cartlist}>
      {!submitted && cartItems}
      {!submitted && order}
      {submitted && (
        <div className={classes.order}>
          <h3>Submitted Succesfully!</h3>
          <div className={classes.order__button}>
            <button
              onClick={props.toggleCart}
              className={classes.order__button__two}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
