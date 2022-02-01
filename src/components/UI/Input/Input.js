import React from 'react';
import classes from './Input.module.scss';
import Button from "../Button/Button";
const Input = props => {
    return (
        <div className={`${classes.control} ${classes[props.className]}`} id={classes[props.id]}>
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label} type={props.type} onChange={props.onChange} value={props.value}
            width={'100px'}/>
        </div>
    );
};

export default Input;