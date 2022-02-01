import React, {useState} from 'react';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./Quantity.module.scss"

const Quantity = () => {
    const [qty,setQty] = useState(0);
    const increaseHandler= () => {
        setQty(parseInt(qty)+1);
    }
    const decreaseHandler= () => {
        if (qty!==0)
            setQty(parseInt(qty)-1);
    }
    const handleQtyChange = (e) => {
        e.preventDefault();
        setQty(e.target.value);
    }
    return (
        <div className={classes.quantity} id={classes['item-4']}>
            <Button className={'inc-dec'} id={'dec'} onClick={decreaseHandler}>-</Button>
            <input type="number" value={qty} onChange={handleQtyChange}/>
            {/*<Input  type={'number'} className={'meal-button'} value={qty} onChange={handleQtyChange}/>*/}
            <Button className={'inc-dec'} id={'inc'} onClick={increaseHandler}>+</Button>
        </div>
    );
};

export default Quantity;
