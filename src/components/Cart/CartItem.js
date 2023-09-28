import React, { useContext } from "react";

import classes from "./CartItem.module.scss";

import cartContext from "../../store/CartContext";

const CartItem = (props) => {
  const cartCtx = useContext(cartContext);
  const name = props.name;
  const price = props.price;
  const amount = props.quantity;

  // let haveItem = (
  //   <div className={classes.cartitem}>
  //     <div className={classes.cartitem__main}>
  //       <h3>{name}</h3>
  //       <div className={classes.cartitem__main__below}>
  //         <p>${price}</p>
  //         <h4>
  //           <span>X</span>
  //           {amount}
  //         </h4>
  //       </div>
  //     </div>
  //     <div className={classes.cartitem__sub}>
  //       <button>-</button>
  //       <button>+</button>
  //     </div>
  //   </div>
  // );

  // let order = (
  //   <Fragment>
  //     <div className={classes.order}>
  //       <h3>Total Amount</h3>
  //       <h3>$16.50</h3>
  //     </div>
  //     <div className={classes.order__button}>
  //       <button className={classes.order__button__two}>Close</button>
  //       <button className={classes.order__button__one}>Open</button>
  //     </div>
  //   </Fragment>
  // );

  const addHandler = () => {
    const item = {name: name, price: price, quantity: 1};
    cartCtx.addItem(item)
  }

  const removeHandler = () => {
    const item = {name: name, price: price, quantity: 1};
    cartCtx.removeItem(item)
  }

  return (
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
        <button onClick={removeHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
