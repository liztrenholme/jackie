import React, { Component } from 'react'
import './about.css'
import headshot from '../../assets/jackie.jpg'

class About extends Component {
  render() {
    return (
      <div className="about">
        <img className='headshot' src={headshot} alt='Jackie' />
        About me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
      </div>
    )
  }
}


export default About