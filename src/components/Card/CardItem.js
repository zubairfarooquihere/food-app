import React from "react";

import classes from './CardItem.module.scss';

import Form from '../Form/CardForm';

const CardItem = (props) => {
  const name = 'Sushi';
  const description = 'Finest Fish and Veggies';
  const price = 22.99;  

  return (
    <div className={classes.carditemLayout}>
        <div className={classes.carditem}>
            <h3>{name}</h3>
            <p>{description}</p>
            <span>${price}</span>
        </div>
        <Form />
    </div>
  );
}

export default CardItem;
