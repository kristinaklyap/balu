import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartState = useSelector(state => state.cart)

    const numberOfItems = cartState.totalQty

    return (
        <button
            onClick={props.onClick}
            className={`${classes[props.className]} ${classes.button} ${
                btnIsHighlighted ? classes.bump : ""
            }`}
        >
            <CartIcon/>
            <span className={classes.amount}>{numberOfItems}</span>
        </button>
    );
};
export default CartButton;
