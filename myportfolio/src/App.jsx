import React from 'react'
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/aboutme';
import Title from './components/Title/Title';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Title/>
      <div className="container">
        <AboutMe/>
      </div>
  
    </div>
  )
}

export default App

