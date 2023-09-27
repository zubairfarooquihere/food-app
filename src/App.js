import React, { useState } from "react";

import Header from "./components/Header/Header";
import Summary from "./components/Header/Summary";
import CardList from "./components/Card/CardList";
import Cart from "./components/Cart/Cart";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const toggleCart = () => {
    setOpenCart((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      {openCart && <Cart toggleCart={toggleCart} />}
      <Header toggleCart={toggleCart} />
      <Summary />
      <CardList />
    </div>
  );
}

export default App;
