import React, {Fragment, useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from './Meal.module.scss';
import Quantity from "../Quantity/Quantity";

const Meal = (props) => {
    const {name,description,price} = props;

    return (
        <Fragment>
            <div className={classes.meal}>
                <h3 id={classes['item-1']}>{name}</h3>
                <p id={classes['item-2']}><em>{description}</em></p>
                <p id={classes['item-3']}><strong>${price}</strong></p>
                <Quantity/>


                <Button className={'add-btn'} id={'item-5'}>+Add</Button>

            </div>
            <hr/>
        </Fragment>
    );
};

export default Meal;