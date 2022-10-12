import React from "react";
import classes from './Input.module.css'
/*

example of input object should be passed in props
{
  type:'text',
  id: 232
}
*/

const Input = React.forwardRef((props, ref) => {
  return <div className={classes.input}>
    <label htmlFor={props.input.id} className={props.className}>{props.label}</label>
    <input ref={ref} {...props.input}/>
  </div>
})

export default Input