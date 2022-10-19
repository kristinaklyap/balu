import React, {useContext} from "react";
import classes from "./ProductTeaser.module.css";
import AddToCart from "../Cart/AddToCart";
import CartContext from "../../store/cart-context";
import {NavLink} from "react-router-dom";

const ProductTeaser = (props) => {
    const context = useContext(CartContext)

    const price = `${props.price.toFixed(2)}PLN`;

    const onAddToCartHandler = amount => {
        context.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            SKU:props.SKU
        })
    }

    console.log('propduct teaser', props)
    return (
            <div className={classes.product_teaser}>
                <NavLink to={`/products/${props.id}`}>

                <div className={classes.product_teaser__image} style={{backgroundImage: `url(../img/${props.image})`}}></div>
                <span className={classes.product_teaser__name}>{props.name}</span>
                {/*<span className={classes.product_teaser__description}>{props.description}</span>*/}
                <span className={classes.product_teaser__price}>{price}</span>
                </NavLink>

                <div className={classes.product_overlay}>
                    <AddToCart customClassName={'product_teaser__button'} max={props.SKU} onAddToCart={onAddToCartHandler} id={props.id} button_text={"+"}/>
                </div>
            </div>
    );
};
export default ProductTeaser;
