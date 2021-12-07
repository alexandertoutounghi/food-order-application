import React from 'react';
import classes from './Input.module.scss';
const Input = props => {
    return (
        <div className={`${classes.control} ${classes[props.className]}`} id={classes[props.id]}>
            <label htmlFor={props.label}>{props.label}</label>
            <input id={props.label} type={props.type} onChange={props.onChange}/>
        </div>

    );
};

export default Input;