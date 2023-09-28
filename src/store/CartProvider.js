import React, { useReducer } from "react";

import cartContext from "./CartContext";

const defaultValue = {
  item: [],
  totalAmt: 0,
  quantity: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmt + action.item.price;
    let updatedItems;
    const existingItemIndex = state.item.findIndex(
      (item) => item.name === action.item.name
    );
    if (existingItemIndex === -1) {
      updatedItems = [...state.item, action.item];
    } else {
      updatedItems = [...state.item];
      updatedItems[existingItemIndex].quantity += action.item.quantity;
    }
    return {
      item: updatedItems,
      totalAmt: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const existingItemIndex = state.item.findIndex(
      (item) => item.name === action.item.name
    );
    let updatedItems = [...state.item];
    updatedItems[existingItemIndex].quantity -= action.item.quantity;
    if(updatedItems[existingItemIndex].quantity === 0) {
      updatedItems.splice(existingItemIndex, 1);
    }
    const updatedTotalAmount = state.totalAmt - action.item.price;
    return {
      item: updatedItems,
      totalAmt: Math.max(updatedTotalAmount, 0),
    };
  }

  return defaultValue;
};

const Provider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultValue);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const clearItemToCartHandler = (item) => {
    //dispatchCartAction({type: 'ADD', item: item});
  };

  const cartValue = {
    item: cartState.item,
    totalAmt: cartState.totalAmt,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clear: clearItemToCartHandler,
  };

  return (
    <cartContext.Provider value={cartValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default Provider;
