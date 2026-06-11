import React from 'react'
import './aboutme.css'
import isa_logo from '../../assets/isa-logo.png'
import dev_logo from '../../assets/dev.png'
import net_logo from '../../assets/network.png'
import info_icon_1 from '../../assets/program-icon-1.png'
import info_icon_2 from '../../assets/program-icon-2.png'
import info_icon_3 from '../../assets/program-icon-3.png'

const aboutme = () => {
  return (
    <div className='infos' name='about'>
      <div className="info">
        <img src={isa_logo} alt="logo ISA NUM" />
        <div className="caption">
            <img src={info_icon_1} alt="" />
            <p>Student at ISANUM</p>
        </div>
      </div>
      <div className="info">
        <img src={dev_logo} alt="logo dev" />
        <div className="caption">
            <img src={info_icon_2} alt="" />
            <p>App Development</p>
        </div>
      </div>
      <div className="info">
        <img src={net_logo} alt="logo net" />
        <div className="caption">
            <img src={info_icon_3} alt="" />
            <p>Network configuration basics</p>
        </div>
      </div>

      <button className="btn dark-btn">Learn More</button>
    </div>
  )
}

export default aboutme
