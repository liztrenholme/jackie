import React, { Component } from 'react'
import './about.css'
import headshot from '../../assets/jackie.jpg'

class About extends Component {
  render() {
    return (
      <div className="about">
        <p className="blurb">
          <img className='headshot' src={headshot} alt='Jackie' />
        About me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
        about me about me about me about me about me about me 
        </p>
        <p className="blurb">
          Mission statement mission statement mission statement 
          mission statement mission statement mission statement 
          mission statement mission statement mission statement 
          mission statement 
        </p>
      </div>
    )
  }
}


export default About