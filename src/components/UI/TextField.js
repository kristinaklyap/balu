import classes from "./Textfield.module.css";

const TextField = (props) => {
  const listOfClasses = props.listofclasses?.map(item => classes[item]);
  const customStyles = listOfClasses?.toString().replaceAll(",", " ")  || '';
  return (
    <div className={`${classes.textfield} ${props.className} ${customStyles}`}>
      {props.children}
    </div>
  )
}

export default TextField