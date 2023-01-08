import React from "react";
import classes from "./Product.module.scss";
import AddToCart from "../Cart/AddToCart";
import {cartActions} from "../../store/cart";
import {useDispatch} from "react-redux";

const Product = ({id, name, price, SKU, image, description}) => {
    const dispatch = useDispatch();
    const fixedPrice = `${price.toFixed(2)}PLN`;

    const onAddToCartHandler = quantity => {
        dispatch(cartActions.addItemToCart({
            id: id,
            name: name,
            quantity: quantity,
            price: price,
            SKU: SKU
        }))
    }
    const imageUrl = require(`../../assets/${image}`).default

    return (
        <div className={classes.product}>
            <div className={classes.product__image}>
                <img alt="" src={imageUrl}/>
            </div>

            <div className={classes.product__info}>
                <h1 className={classes.product__name}>{name}</h1>
                <p className={classes.product__description}>{description}</p>
                <div className={classes.actions}>
                    <div className={classes.price_container}>
                        <span className={classes.product__price}>{fixedPrice}</span>
                        <span className={classes.product__SKU}>SKU: {SKU}</span>
                    </div>
                    <AddToCart disabled={`${SKU === 0 && 'disabled'}`} customClassName={`button--secondary`}
                               max={SKU} onAddToCart={onAddToCartHandler} id={id}
                               button_text={"Dodaj do koszyka"}/>
                </div>
            </div>
        </div>
    );
}
export default Product