import React from "react";
import classes from "./Container.module.css";
const Container = (props) => {
  const listOfClasses = props.listofclasses?.map((item) => classes[item]);
  const customStyles = listOfClasses?.toString().replaceAll(",", " ")  || '';

  return (
    <section className={`${classes.container} ${customStyles} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Container;
