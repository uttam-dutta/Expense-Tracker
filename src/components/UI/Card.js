import './Card.css'
const Card = (props) => {
  //props.children is a reserved props type
  //which basically allow us to use our react
  //component as a wrapper element just like html
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card
