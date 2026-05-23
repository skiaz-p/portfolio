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
      <Title p='A little preview of myself' h2='About me'/>
      <div className="container">
        <AboutMe/>
      </div>
  
    </div>
  )
}

export default App

