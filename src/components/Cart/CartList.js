import React, { useState, Fragment, useContext } from "react";

import classes from "./CartList.module.scss";

import CartItem from "./CartItem";
import cartContext from "../../store/CartContext";
import SubmitForm from "../Form/SubmitForm";

const CartList = (props) => {
  const [form, setForm] = useState(false);
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

  const addForm = () => {
    setForm((prev) => {
      return !prev;
    });
  };

  const formData = (item) => {
    console.log(item);
  };

  let order = (
    <Fragment>
      <div className={classes.order}>
        <h3>Total Amount</h3>
        <h3>${cartCtx.totalAmt.toFixed()}</h3>
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
          <button onClick={addForm} className={classes.order__button__one}>
            Order
          </button>
        )}
      </div>
      {form && (
        <div className={classes.form}>
          <SubmitForm onClose={addForm} onConfirm={formData} />
        </div>
      )}
    </Fragment>
  );

  return (
    <div className={classes.cartlist}>
      {cartItems}
      {order}
    </div>
  );
};

export default CartList;
