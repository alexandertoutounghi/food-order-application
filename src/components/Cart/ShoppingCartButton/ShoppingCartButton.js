import React from 'react';
import CartIcon from "../CartIcon/CartIcon";
import classes from './ShoppingCartButton.module.scss';

const ShoppingCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span className={classes.cart}>Your Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default ShoppingCartButton;