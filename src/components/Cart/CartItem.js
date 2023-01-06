import Button from "../UI/Button";
import classes from "./CartItem.module.scss";

const CartItem = ({name, price, quantity, onRemove, onAdd, totalPrice}) => {
    return (
        <div className={`${classes.cart_item}`}>
            <div><p>{name}</p></div>
            <div className={classes.cart_item__details}>
                <div><p>{price} PLN</p></div>
                <div className="quantity">
                    <div className={classes.cart_item__actions}>
                        <p>{quantity}szt</p>
                        <Button onClick={onRemove} text={"-"}/>
                        <Button onClick={onAdd} text={"+"}/>
                    </div>
                </div>
                <div className={classes.cart_item__total}>{totalPrice.toFixed(2)} PLN</div>
            </div>
        </div>
    );
};

export default CartItem;
