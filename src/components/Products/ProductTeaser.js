import classes from "./ProductTeaser.module.scss";
import AddToCart from "../Cart/AddToCart";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart";

const ProductTeaser = ({id, name, price, SKU, image}) => {
    const dispatch = useDispatch()

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

    return (
        <div className={classes.product_teaser}>
            <NavLink to={`/products/${id}`}>
                <div className={classes.product_teaser__image}
                     style={{backgroundImage: `url(../img/${image})`}}></div>
                <span className={classes.product_teaser__name}>{name}</span>
                <span className={classes.product_teaser__price}>{fixedPrice}</span>
            </NavLink>

            <div className={classes.product_overlay}>
                <AddToCart disabled={`${SKU === 0 && 'disabled'}`} customClassName={'product_teaser__button'}
                           max={SKU} onAddToCart={onAddToCartHandler}
                           id={id} button_text={"+"}/>
            </div>
        </div>
    );
};
export default ProductTeaser;
