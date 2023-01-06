import React, {useState} from "react";
import {cartActions} from "../../store/cart";
import {useDispatch, useSelector} from "react-redux";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Divider from "../UI/Divider";
import CartItem from "../Cart/CartItem";
import Checkout from "./Checkout";

import classes from "./Cart.module.scss";

const Cart = (props) => {
        const [isCheckout, setIsCheckout] = useState(false);
        const dispatch = useDispatch();
        const cartState = useSelector(state => state.cart)

        const totalAmount = `${cartState.totalAmount.toFixed(2)} PLN`;
        const hasItems = cartState.items.length > 0;

        const cartItemRemoveHandler = (id) => {
            dispatch(cartActions.removeItemFromCart(id))
        };
        const cartItemAddHandler = (item) => {
            dispatch(cartActions.addItemToCart({
                ...item,
                quantity: item.quantity,
            }))
        }

        const clearCartHandler = () => {
            dispatch(cartActions.clearCart())
            props.onClose();
        }

        const orderHandler = () => setIsCheckout(true);

        const cartItems = cartState.items.map((item) => (
            <CartItem
                key={item.id + Math.random()}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
        ));

        const modalActions = (
            <div className={'mt2'}>
                <Button className={'mr1'} onClick={props.onClose} text={"Zamknij"}/>
                {hasItems && <Button onClick={orderHandler} text={"Zamów"}/>}
            </div>
        );

        const cartContent =
            cartState.items.length > 0 ? (
                <div className={classes['cart']}>
                    <p className={classes.cart_title}>Twój koszyk</p>
                    {cartItems}
                    <Divider/>
                    <p>Total amount: {totalAmount}</p>
                </div>
            ) : (
               <p>Brak produktów w koszyku.</p>
            );

        return (
            <Modal onClose={props.onClose}>
                {cartContent}

                {isCheckout && (
                    <Checkout
                        clearCart={clearCartHandler}
                        order={cartState.items}
                        total={totalAmount}
                        onCancel={props.onClose}
                    />
                )}
                {!isCheckout && modalActions}
            </Modal>
        );
    }
;
export default Cart;
