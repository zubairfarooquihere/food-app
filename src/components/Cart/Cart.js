import React, {  } from "react";

import classes from './Cart.module.scss';

import Modal from "../Modal/Modal";
import CartList from "./CartList";

const Cart = (props) => {

  return (
    <Modal className={classes.cart} onClose={props.toggleCart} >
        <CartList toggleCart={props.toggleCart} />
    </Modal>
  );
};

export default Cart;
