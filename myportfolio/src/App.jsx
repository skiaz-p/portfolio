import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Container from './components/Container/container';
import AboutMe from './components/AboutMe/aboutme';
import Author from './components/Author/Author';
import ContainerPage from './components/ContainerPagePres/ContainerPage';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/About" element={<Author />} />
          <Route path="/Page" element={<ContainerPage />}/>
      </Routes>
      <Navbar />

      
      </BrowserRouter>
    </div>
  )
}

export default App

