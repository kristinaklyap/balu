import React from "react";
import {NavLink} from "react-router-dom"
import classes from "./Header.module.css";

//import of images supported by setup !
import logo from "../../assets/logo.png";
import CartButton from "../Cart/CartButton";
import Container from "../UI/Container";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Container>
        <ul>
          <li>
            <NavLink to={"/about-us"}>o nas</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>produkty</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <img src={logo} alt={"BALU shop logo"} />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/inspirations"}>inspiracje</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>kontakt</NavLink>
          </li>
        </ul>
      </Container>
      <CartButton onClick={props.onShowCart} className={'button__cart'} />
    </header>
  );
};

export default Header;
