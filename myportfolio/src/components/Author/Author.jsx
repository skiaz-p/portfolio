import React from 'react'
import './Author.css'
import Skill from '../Skill/Skill'

const Author = () => {

  return (
    <div className="container">
    <div className="Info-container">
      <img src="/src/assets/photoCV.jpg" alt="" />
        <h2>About myself</h2>
        <p>   My name is Luc Casassus Latrille, I am a 20 year old student at ISANUM,
            a school of engineering in the south of France. 
            I am currently in the end of my second year of studies and I am passionate about app development and network configuration basics. 
            I have a strong interest in technology and I enjoy creating content related to these topics.
            I am always eager to learn new things and to share my knowledge with others.</p>
        <h3>Skills</h3>
        <ul>
            <li><Skill name="App Development" description="I have experience in app development."/></li>
            <li><Skill name="Network Configuration" description="I have a good understanding of network protocols and I am familiar with configuring and managing Cisco's network systems."/></li>
        </ul>
    </div>
    </div>
  )
}

export default Author