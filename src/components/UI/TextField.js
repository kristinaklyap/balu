import classes from "./Textfield.module.scss";

const TextField = ({listofclasses, className, children}) => {
    const listOfClasses = listofclasses?.map(item => classes[item]);
    const customStyles = listOfClasses?.join(" ");
    return (
        <div className={`${classes.textfield} ${className} ${customStyles}`}>
            {children}
        </div>
    )
}

export default TextField