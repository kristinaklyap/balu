import classes from "./Textfield.module.scss";

const TextField = (props) => {
  const listOfClasses = props.listofclasses?.map(item => classes[item]);
  const customStyles = listOfClasses?.join(" ");
  return (
    <div className={`${classes.textfield} ${props.className} ${customStyles}`}>
      {props.children}
    </div>
  )
}

export default TextField