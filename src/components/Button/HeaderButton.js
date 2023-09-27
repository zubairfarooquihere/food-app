import React from "react";

import classes from './HeaderButton.module.scss';

import CartIcon from '../../assets/CartIcon'

const HeaderButton = (props) => {

  return (
    <button onClick={props.toggleCart} className={classes.HeaderButton}>
        <div className={classes.HeaderButton__icon}>
            <CartIcon />
        </div>
        <p>Your Cart</p>
        <span>0</span>
    </button>
  );
}

export default HeaderButton;
