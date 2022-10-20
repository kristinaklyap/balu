import classes from "./CartItem.module.css";
import Button from "../UI/Button";

const CartItem = (props) => {
  return (
    <div className={classes.cart_item}>
      <div className={classes.cart_item__details}>
        <p>{props.name}</p>
        <p>{props.price}</p>

      </div>
      <div className={classes.cart_item__actions}>
        <p className={classes.cart_item__amount}>{props.amount}</p>
        <Button onClick={props.onRemove} text={"-"}/>
        <Button onClick={props.onAdd} text={"+"}/>
      </div>
    </div>
  );
};

export default CartItem;
