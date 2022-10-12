import React, { useContext, useEffect, useState } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const context = useContext(CartContext);
  const numberOfItems = context.items.reduce(
    (totalNumber, item) => totalNumber + item.amount,
    0
  );

  const { items: cartItems } = context;

  useEffect(() => {
    if (context.items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    //cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [cartItems , context.items.length]);

  return (
    <button
      onClick={props.onClick}
      className={`${classes[props.className]} ${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
      }`}
    >
      <CartIcon />
      <span className={classes.amount}>{numberOfItems}</span>
    </button>
  );
};
export default CartButton;
