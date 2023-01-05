import {NavLink} from "react-router-dom"
import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";
import Container from "../UI/Container";
import {useSelector} from "react-redux";
import {useWindowSize} from "../../hooks/use-windows-size";
import {useState} from "react";

const Header = (props) => {
    const cartState = useSelector(state => state.cart)
    const [isNavActive, setIsNavActive] = useState(false)
    const [width] = useWindowSize()
    const numberOfItems = cartState.totalQty

    const handleBtnClick = (e) => setIsNavActive(!isNavActive)

    const cl = isNavActive ? classes['active'] : ''
    return (<header className={classes.header}>
        <Container className={'df'}>
            {width > 1024 && <div className={classes['nav-desktop']}>
                <NavLink to={"/about-us"}>o nas</NavLink>
                <NavLink to={"/products"}>produkty</NavLink>
                <NavLink className={classes['nav-logo-item']} to={"/"}>
                    <img src={logo} alt={"BALU shop logo"}/>
                </NavLink>
                <NavLink to={"/inspirations"}>inspiracje</NavLink>
                <a href={'#'} onClick={props.onShowCart}>
                    Koszyk {numberOfItems > 0 && <span>{numberOfItems}</span>}
                </a>
            </div>}

            {width <= 1024 && <div className={classes['nav-mobile']}>
                <NavLink className={classes['nav-logo-item']} to={"/"}>
                    <img src={logo} alt={"BALU shop logo"}/>
                </NavLink>

                <span className={`${classes['nav-btn']} ${cl}`} onClick={handleBtnClick}>
                    <div className={classes['bar1']}></div>
                    <div className={classes['bar2']}></div>
                    <div className={classes['bar3']}></div>
                </span>
                <div className={`${classes['hidden-items']}  ${cl}` }>
                    <NavLink to={"/about-us"} onClick={handleBtnClick}>o nas</NavLink>
                    <NavLink to={"/products"} onClick={handleBtnClick}>produkty</NavLink>
                    <NavLink to={"/inspirations"} onClick={handleBtnClick}>inspiracje</NavLink>
                </div>
                <a href={'#'} onClick={props.onShowCart}>
                    Koszyk {numberOfItems > 0 && <span>{numberOfItems}</span>}
                </a>
            </div>}
        </Container>
    </header>);
};

export default Header;
