import React, { useState } from "react";

import classes from "./CardForm.module.scss";

const CardForm = () => {
  const [amount, setAmount] = useState(1);

  const changeHandler = (event) => {
    setAmount(event.target.value);
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
      <button>+ Add</button>
    </div>
  );
};

export default CardForm;
