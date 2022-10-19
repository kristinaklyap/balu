import React, { useContext, useState } from "react";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Divider from "../UI/Divider";
import CartItem from "../Cart/CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const context = useContext(CartContext);
  const totalAmount = `${context.totalAmount.toFixed(2)} PLN`;

  const hasItems = context.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    const cartItem = { ...item, amount: 1 };
    context.addItem(cartItem);
  };

  const clearCartHandler = () => context.clearCart();

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = context.items.map((item) => (
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
      <Button onClick={props.onClose} text={"Close"} />
      {hasItems && <Button onClick={orderHandler} text={"Order"} />}
    </div>
  );

  const cartContent =
    context.items.length > 0 ? (
      <React.Fragment>
          <p>Twój koszyk:</p>
          {cartItems}
         <Divider />
          <p>Total amount: {totalAmount}</p>
      </React.Fragment>
    ) : (
      "Brak produktów w koszyku"
    );

  return (
    <Modal onClose={props.onClose}>
      {cartContent}

      {isCheckout && (
        <Checkout
          clearCart={clearCartHandler}
          order={context.items}
          total={totalAmount}
          onCancel={props.onClose}
        />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};
export default Cart;
