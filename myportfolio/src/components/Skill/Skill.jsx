import React from 'react'
import './Skill.css'

const Skill = (props) => {
  return (
    <div className="Skill">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Skill