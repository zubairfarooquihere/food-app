import  { createContext } from "react";

const cartContext = createContext({
  item: [],
  totalAmt: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clear: () => {},
});

export default cartContext;
