import React, {useState} from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Divider from "../UI/Divider";
import CartItem from "../Cart/CartItem";
import Checkout from "./Checkout";
import {cartActions} from "../../store/cart";
import {useDispatch, useSelector} from "react-redux";

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

        const orderHandler = () => {
            setIsCheckout(true);
        };

        const cartItems = cartState.items.map((item) => (
            <CartItem
                key={item.id + Math.random()}
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
        ));

        const modalActions = (
            <div>
                <Button onClick={props.onClose} text={"Close"}/>
                {hasItems && <Button onClick={orderHandler} text={"Order"}/>}
            </div>
        );

        const cartContent =
            cartState.items.length > 0 ? (
                <>
                    <p>Twój koszyk:</p>
                    {cartItems}
                    <Divider/>
                    <p>Total amount: {totalAmount}</p>
                </>
            ) : (
                "Brak produktów w koszyku"
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
