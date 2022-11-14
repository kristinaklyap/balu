import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
    const listOfClasses = props.listofclasses?.map(item => classes[item]);
    const customStyles = listOfClasses?.join(' ');
    return (
        <button
            {...props}
            onClick={props.onClick}
            className={`
             ${classes.button}
             ${props.className}
             ${customStyles}`}
        >
            {props.text}
        </button>
    );
};

// .memo makes 
export default React.memo(Button);
