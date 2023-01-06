import React from "react";
import classes from "./Banner.module.scss";
import Container from "../UI/Container";

const Banner = ({className, bgImage, imgAlt, children}) => {
    const styles = `${classes.banner} ${className}`
    return (
        <div className={styles}>
            <div className={classes.banner__background}>
                <img src={bgImage} alt={imgAlt}/>
            </div>
            <Container>
                <div className={classes.banner__content}>
                    {children}
                </div>
            </Container>
        </div>
    );
};

export default Banner;
