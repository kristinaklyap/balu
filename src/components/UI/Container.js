import React from "react";
import classes from "./Container.module.scss";
const Container = (props) => {
  const listOfClasses = props.listofclasses?.map((item) => classes[item]);
  const customStyles = listOfClasses?.join(' ')

  return (
    <section className={`${classes.container} ${customStyles} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Container;
