import React, {Fragment, useState} from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from './Meal.module.scss';
import Quantity from "../Quantity/Quantity";

const Meal = () => {

    return (
        <Fragment>
            <div className={classes.meal}>
                <h3 id={classes['item-1']}>Sushi</h3>
                <p id={classes['item-2']}><em>Finest fish and veggies</em></p>
                <p id={classes['item-3']}><strong>$22.99</strong></p>
                <Quantity/>


                <Button className={'add-btn'} id={'item-5'}>+Add</Button>

            </div>
            <hr/>
        </Fragment>
    );
};

export default Meal;