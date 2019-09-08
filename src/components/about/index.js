import React, { Component } from 'react'
import './about.css'
import headshot from '../../assets/jackie.jpg'

class About extends Component {
  render() {
    return (
      <div className="About">
        <img className='headshot' src={headshot} alt='Jackie' />
        this will be the About
      </div>
    )
  }
}


export default About