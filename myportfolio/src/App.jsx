import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/aboutme';
import Title from './components/Title/Title';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Examples from './components/Examples/Examples'
import Page from './pages/about_me';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title p='A little preview of myself' h2='About me'/>
        <AboutMe/>
        <Routes>
          <Route path="/about-me" element={<Page />} />
        </Routes>
        
        <Title p='Some of my most recents creations' h2='My projects'/>
        <Examples/>
        <Title p='Contact Me' h2='Get in Touch'/>
        <Contact/>
        <Footer/>
        
      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App

