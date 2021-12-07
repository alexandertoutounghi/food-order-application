import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
    return (
        <button type={props.type || 'button'}
                className={`${classes.button} ${classes[props.className]}`}
                id={classes[props.id]}
                onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;