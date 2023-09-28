import React, { useState, useContext } from "react";

import classes from "./CardForm.module.scss";

import CartContext from "../../store/CartContext";

const CardForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const addItem = () => {
    const item = { name: props.name, price: props.price, quantity: amount };
    cartCtx.addItem(item);
  };

  const changeHandler = (event) => {
    const newValue = parseInt(event.target.value, 10); // Use 10 as the base for parsing integers
    setAmount(newValue);
  };

  return (
    <div className={classes.cardform}>
      <span htmlFor="amount">Amount</span>
      <input
        onChange={changeHandler}
        id="amount"
        type="number"
        min={1}
        max={5}
        step={1}
        value={amount}
      />
      <button onClick={addItem}>+ Add</button>
    </div>
  );
};

export default CardForm;
