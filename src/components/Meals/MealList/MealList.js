import React from 'react';
import classes from './MealList.module.scss';
import DUMMY_MEALS from "../../../assets/DummyData/DummyMeals";
import Meal from "../Meal/Meal";
const MealList = () => {

    const dummyMeals =DUMMY_MEALS.map((meal,id) => {
        return <Meal key={id} {...meal}/>
    })
    return (
        <div className={classes['meal-list']}>
            {/*<Meal/>*/}
            {/*<Meal/>*/}
            {/*<Meal/>*/}
            {/*<Meal/>*/}
            {dummyMeals}
        </div>
    );
};

export default MealList;