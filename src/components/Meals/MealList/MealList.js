import React from 'react';
import classes from './MealList.module.scss';
import Meal from "../Meal/Meal";
const MealList = () => {
    return (
        <div className={classes['meal-list']}>
            <Meal/>
            <Meal/>
            <Meal/>
            <Meal/>
        </div>
    );
};

export default MealList;