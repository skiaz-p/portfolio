import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from '/src/components/Hero/Hero';
import AboutMe from '/src/components/AboutMe/aboutme';
import Title from '/src/components/Title/Title';
import Contact from '/src/components/Contact/Contact';
import Footer from '/src/components/Footer/Footer';
import Examples from '/src/components/Examples/Examples'

const container = () => {
  return (
    <div className="allContainer">
        <Hero />
        <div className="container">
        <Title p='A little preview of myself' h2='About me'/>
        <AboutMe/>
        <Title p='Some of my most recents creations' h2='My projects'/>
        <Examples/>
        <Title p='Contact Me' h2='Get in Touch'/>
        <Contact/>
        <Footer/>
        </div>
    </div>)
}

export default container