import React, { Fragment } from "react";

import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const name = "Sushi";
  const price = 22.99;
  const amount = 2;

  let haveItem = (
    <div className={classes.cartitem}>
      <div className={classes.cartitem__main}>
        <h3>{name}</h3>
        <div className={classes.cartitem__main__below}>
          <p>${price}</p>
          <h4>
            <span>X</span>
            {amount}
          </h4>
        </div>
      </div>
      <div className={classes.cartitem__sub}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );

  let order = (
    <Fragment>
      <div className={classes.order}>
        <h3>Total Amount</h3>
        <h3>$16.50</h3>
      </div>
      <div className={classes.order__button}>
        <button className={classes.order__button__two}>Close</button>
        <button className={classes.order__button__one}>Open</button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {haveItem}
      {order}
    </Fragment>
  );
};

export default CartItem;
