import React, { Fragment } from "react";

import classes from "./Header.module.scss";
import image from '../../assets/meals.jpg';

import HeaderButton from '../Button/HeaderButton';

const Header = (props) => {
    
  return (
    <Fragment>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderButton/>
      </div>
      <div className={classes.header__image}>
        <img src={image} alt="nice" />
      </div>
    </Fragment>
  );
};

export default Header;
