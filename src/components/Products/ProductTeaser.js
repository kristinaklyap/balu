import React, {useContext} from "react";
import classes from "./ProductTeaser.module.css";
import AddToCart from "../Cart/AddToCart";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart";

const ProductTeaser = (props) => {
    const dispatch = useDispatch()

    const price = `${props.price.toFixed(2)}PLN`;

    const onAddToCartHandler = quantity => {
        dispatch(cartActions.addItemToCart({
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price,
            SKU: props.SKU
        }))
    }

    return (
        <div className={classes.product_teaser}>
            <NavLink to={`/products/${props.id}`}>
                <div className={classes.product_teaser__image}
                     style={{backgroundImage: `url(../img/${props.image})`}}></div>
                <span className={classes.product_teaser__name}>{props.name}</span>
                <span className={classes.product_teaser__price}>{price}</span>
            </NavLink>

            <div className={classes.product_overlay}>
                <AddToCart customClassName={'product_teaser__button'} max={props.SKU} onAddToCart={onAddToCartHandler}
                           id={props.id} button_text={"+"}/>
            </div>
        </div>
    );
};
export default ProductTeaser;
