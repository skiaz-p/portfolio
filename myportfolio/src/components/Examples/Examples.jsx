import React, {useRef}from 'react'
import './Examples.css'
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import Uno_icon from "../../assets/uno.png"
import ISA_NET_icon from "../../assets/logoISANET.png"
import BandF_icon from "../../assets/BandF-logo.png"
import Solagis_icon from "../../assets/logo-Solagis.png"

const Examples = () => {

  const theslider = useRef(null);
  var X = 0;

  const forward = () =>{
    if(X > -50){
      X -= 25;
    }
    theslider.current.style.tranform = `translate(${X}%)`
  }

  const backward = () =>{
    if(X < 0){
      X += 25;
    }
    theslider.current.style.tranform = `translate(0px, ${X}%)`
  }

  return (
    <div className='examples'>
      <img src={next_icon} alt="" className='next-btn' onClick={forward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={backward}/>
      <div className="slider">
        <ul ref={theslider}>
          <li>
            <div className="slide">
              <div className="project-info">
                <img src={Uno_icon} alt="" />
                <div>
                  <h3>Uno recreation</h3>
                  <span>Currently under development</span>
                </div>
              </div>
              <p>A recreation of the hit game Uno with full base functionalities. More will be added as the game goes further into development</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="project-info">
                <img src={BandF_icon} alt="" />
                <div>
                  <h3>Breath and Focus</h3>
                  <span>Finished</span>
                </div>
              </div>
              <p>An application made to manage student time and stress. Provide methods descriptions and implementations with posdacst detailing stress and how to manage it</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="project-info">
                <img src={ISA_NET_icon} alt="" />
                <div>
                  <h3>ISA NET</h3>
                  <span>On hiatus</span>
                </div>
              </div>
              <p>A platoform meant to be an intranet for my school. Currently on hiatus so I can focus on other projects</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="project-info">
                <img src={Solagis_icon} alt="" />
                <div>
                  <h3>Solagis</h3>
                  <span>Deprecated (will be reworked)</span>
                </div>
              </div>
              <p>Solagis is a website mean to rank other websites based on sustainable development criterias. Currently deprecated due to an API used not working anymore</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Examples
