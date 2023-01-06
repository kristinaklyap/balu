import classes from './Card.module.scss'

const Card = ({children}) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    )
}
export default Card