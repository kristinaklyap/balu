import React from "react";
import classes from "./Product.module.css";
import AddToCart from "../Cart/AddToCart";
import {cartActions} from "../../store/cart";
import {useDispatch} from "react-redux";

const Product = (props) => {
    const dispatch = useDispatch();
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
        <div className={classes.product}>
            <div className={classes.product__image}>
                <img alt="" src={`../img/${props.image}`}/>
            </div>

            <div className={classes.product__info}>
                <h1 className={classes.product__name}>{props.name}</h1>
                <p className={classes.product__description}>{props.description}</p>
                <div className={classes.actions}>
                    <div className={classes.price_container}>
                        <span className={classes.product__price}>{price}</span>
                        <span className={classes.product__SKU}>SKU: {props.SKU}</span>
                    </div>
                    <AddToCart disabled={`${props.SKU === 0 && 'disabled'}`} customClassName={`button--secondary`}
                               max={props.SKU} onAddToCart={onAddToCartHandler} id={props.id}
                               button_text={"Add to cart"}/>
                </div>


            </div>

        </div>
    );
}
export default Product