import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to my personnal website</h1>
        <p>This site is a repertory of all my achievements since highscool</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
