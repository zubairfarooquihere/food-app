import React from "react";

import classes from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={classes.summary}>
      <h3>Delicious Food, Delivered To You</h3>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default Summary;
