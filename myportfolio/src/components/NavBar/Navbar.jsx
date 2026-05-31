import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import "./Navbar.css"
import logo from "../../assets/d.png"

const Navbar = () => {

  const [sitcky, setSticky]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <nav className={`container ${sitcky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo"/>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='infos' smooth={true} offset={-260} duration={500}>About me</Link></li>
        <li><Link to='examples' smooth={true} offset={-260} duration={500}>Examples</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
