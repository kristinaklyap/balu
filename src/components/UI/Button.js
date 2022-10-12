import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const listOfClasses = props.listofclasses?.map(item => classes[item]);
  const customStyles = listOfClasses?.toString().replaceAll(",", " ")  || '';
  return (
    <button {...props} onClick={props.onClick}
      className={`${classes.button} ${props.className} ${customStyles}`}
    >
      {props.text}
    </button>
  );
};

// .memo makes 
export default React.memo(Button);
