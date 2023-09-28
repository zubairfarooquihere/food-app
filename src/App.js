import React, { useState } from "react";

import Header from "./components/Header/Header";
import Summary from "./components/Header/Summary";
import CardList from "./components/Card/CardList";
import Cart from "./components/Cart/Cart";
import Provider from "./store/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart((prevState) => {
      return !prevState;
    });
  };

  return (
    <Provider>
      {openCart && <Cart toggleCart={toggleCart} />}
      <Header toggleCart={toggleCart} />
      <Summary />
      <CardList />
    </Provider>
  );
}

export default App;
