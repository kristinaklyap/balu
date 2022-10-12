import React, {useContext} from "react";
import classes from "./Product.module.css";
import AddToCart from "../Cart/AddToCart";
import CartContext from "../../store/cart-context";

const Product = (props) => {
  const context = useContext(CartContext)

  const price = `${props.price.toFixed(2)}PLN`;

  const onAddToCartHandler = amount => {
    context.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <div className={classes.product}>
      <div className={classes.product__image}></div>
      <span className={classes.product__name}>{props.name}</span>
      <span className={classes.product__description}>{props.description}</span>
      <span className={classes.product__price}>{price}</span>
      <div className={classes.product_overlay}>
        <AddToCart onAddToCart={onAddToCartHandler} id={props.id}/>
      </div>
    </div>
  );
};
export default Product;
