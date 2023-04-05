// Write your code here.
import './index.css'

const Card = props => {
  const {eachObject} = props
  const {title, description, imageUrl, className} = eachObject
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
    </li>
  )
}

export default Card
