import React from 'react'
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/aboutme';
import Title from './components/Title/Title';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
      <Title p='A little preview of myself' h2='About me'/>
      
        <AboutMe/>

      <Title p='Contact Me' h2='Get in Touch'/>
      <Contact/>
      </div>
    </div>
  )
}

export default App

