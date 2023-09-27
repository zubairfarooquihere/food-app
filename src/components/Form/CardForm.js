import React from "react";

import classes from "./CardForm.module.scss";

const CardForm = () => {
  return (
    <div className={classes.cardform}>
      <span htmlFor="amount">Amount</span>
      <input id="amount" type="number"  min={1} max={5} step={1} value={1} />
      <button>+ Add</button>
    </div>
  );
};

export default CardForm;
