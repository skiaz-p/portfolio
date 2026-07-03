import React from 'react'
import './Skill.css'

const Skill = (props) => {
  return (
    <div className="Skill">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      Related projects : <ul>{
        props.lstSkills.map(function(item, index){
          return <li id={index}>{item}</li>
        })
        }</ul>
    </div>
  )
}

export default Skill