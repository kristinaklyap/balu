import React from "react";
import {useSelector} from "react-redux";
import classes from "./CartButton.module.scss";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
    const cartState = useSelector(state => state.cart)

    const numberOfItems = cartState.totalQty
    const btnClasses = [classes[props.className], classes.button].join(" ")
    return (
        <button onClick={props.onClick} className={btnClasses}>
            <CartIcon/>
            <span className={classes.amount}>{numberOfItems}</span>
        </button>
    );
};
export default CartButton;
