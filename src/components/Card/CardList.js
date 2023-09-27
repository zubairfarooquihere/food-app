import React from "react";

import classes from './CardList.module.scss';

import CardItem from './CardItem'

const CardList = () => {
  return (
    <div className={classes.cardlist}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
    </div>
  );
}

export default CardList;
