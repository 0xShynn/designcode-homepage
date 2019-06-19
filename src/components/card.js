import React from "react"
import "../styles/card.scss"

const Card = ({ title, text, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Card
