import React, {  } from "react";

import classes from "./CartList.module.scss";

import CartItem from "./CartItem";

const CartList = (props) => {

  return (
    <div className={classes.cartlist}>
        <CartItem />
    </div>
  );
};

export default CartList;
