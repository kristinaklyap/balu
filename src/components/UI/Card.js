
import classes from './Card.module.scss'

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.children}
    </div>

  )
}
export default Card