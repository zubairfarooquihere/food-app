import React from "react";

import Header from './components/Header/Header';
import Summary from "./components/Header/Summary";
import CardList from "./components/Card/CardList";

function App() {
  return (
    <div>
      <Header />
      <Summary />
      <CardList />
    </div>
  );
}

export default App;
