import React from "react";
import classes from "./Banner.module.scss";
import Container from "../UI/Container";

const Banner = (props) => {
  const styles = `${classes.banner} ${props.className}`
  return (
    <div className={styles}>
      <div className={classes.banner__background}>
        <img src={props.bgImage} alt={props.imgAlt} />
      </div>
      <Container>
        <div className={classes.banner__content}>
          {props.children}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
