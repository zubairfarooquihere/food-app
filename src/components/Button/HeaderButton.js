import React, { useEffect, useContext, useState } from "react";

import classes from "./HeaderButton.module.scss";

import CartIcon from "../../assets/CartIcon";
import CartContext from "../../store/CartContext";

const HeaderButton = (props) => {
  const ctx = useContext(CartContext);
  const [isButtonClicked, setIsButtonClicked] = useState(
    `${classes.HeaderButton}`
  );

  const quantity = ctx.item.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  useEffect(() => {
    if (quantity > 0) {
      // Trigger the animation when quantity is greater than 0
      setIsButtonClicked(
        `${classes.HeaderButton} ${true ? `${classes.animate}` : ""}`
      );

      // After a short delay, remove the animation class
      const timeoutId = setTimeout(() => {
        setIsButtonClicked(
          `${classes.HeaderButton} ${false ? `${classes.animate}` : ""}`
        );
      }, 300); // Adjust the delay to match the animation duration

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [quantity]);

  return (
    <button onClick={props.toggleCart} className={isButtonClicked}>
      <div className={classes.HeaderButton__icon}>
        <CartIcon />
      </div>
      <p>Your Cart</p>
      <span>{quantity}</span>
    </button>
  );
};

export default HeaderButton;
