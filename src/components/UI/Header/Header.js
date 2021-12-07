import React, {Fragment} from 'react';
import classes from './Header.module.scss';
import Button from "../Button/Button";
import meals from '../../../assets/meals.jpg';
import ShoppingCartButton from "../../Cart/ShoppingCartButton/ShoppingCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order Application</h1>
                <ShoppingCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="table full of food"/>
            </div>
        </Fragment>
    );
};

export default Header;