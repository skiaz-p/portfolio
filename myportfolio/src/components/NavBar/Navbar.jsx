import React from 'react'
import "./Navbar.css"
import logo from "../../assets/d.png"

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="logo" className="logo"/>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li><button className='btn'>Contact me</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
