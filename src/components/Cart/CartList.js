import React, { Fragment, useContext } from "react";

import classes from "./CartList.module.scss";

import CartItem from "./CartItem";
import cartContext from "../../store/CartContext";

const CartList = (props) => {
  const cartCtx = useContext(cartContext);

  const cartItems = cartCtx.item.map((item) => {
    return <CartItem key={item.name} name={item.name} price={item.price} quantity={item.quantity} />;
  });

  let order = (
    <Fragment>
      <div className={classes.order}>
        <h3>Total Amount</h3>
        <h3>${cartCtx.totalAmt.toFixed()}</h3>
      </div>
      <div className={classes.order__button}>
        <button
          onClick={props.toggleCart}
          className={classes.order__button__two}
        >
          Close
        </button>
        {cartItems.length > 0 && <button className={classes.order__button__one}>Order</button>}
      </div>
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
