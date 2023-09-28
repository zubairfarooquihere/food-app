import React from "react";

import classes from './CardItem.module.scss';

import Form from '../Form/CardForm';

const CardItem = (props) => {
  const name = props.name;
  const description = props.description;
  const price = props.price;  

  return (
    <div className={classes.carditemLayout}>
        <div className={classes.carditem}>
            <h3>{name}</h3>
            <p>{description}</p>
            <span>${price}</span>
        </div>
        <Form name={name} price={price} />
    </div>
  );
}

export default CardItem;
