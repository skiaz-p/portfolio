import React from 'react'
import './Title.css'

const title = (props) => {
  return (
    <div className='title'>
      <p>{props.p}</p>
      <h2>{props.h2}</h2>
    </div>
  )
}

export default title
